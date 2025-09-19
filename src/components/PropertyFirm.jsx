import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import '../styles/PropertyFirm.css';

const PropertyFirm = ({ data, onUpdate, onNext, onPrevious }) => {
  const [formData, setFormData] = useState({
    personalAssetsOwned: data.personalAssetsOwned || '',
    personalAssetsMortgaged: data.personalAssetsMortgaged || '',
    otherAssetsShares: data.otherAssetsShares || '',
    firmDetails:
      data.firmDetails?.length > 0
        ? data.firmDetails
        : [{ name: '', business: '', relation: '', bankName: '' }]
  });

  // Sync formData with parent data when it changes
  useEffect(() => {
    setFormData({
      personalAssetsOwned: data.personalAssetsOwned || '',
      personalAssetsMortgaged: data.personalAssetsMortgaged || '',
      otherAssetsShares: data.otherAssetsShares || '',
      firmDetails:
        data.firmDetails?.length > 0
          ? data.firmDetails
          : [{ name: '', business: '', relation: '', bankName: '' }]
    });
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    onUpdate(updatedData);
  };

  const handleFirmChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFirms = [...formData.firmDetails];
    updatedFirms[index] = { ...updatedFirms[index], [name]: value };
    setFormData({ ...formData, firmDetails: updatedFirms });
    onUpdate({ firmDetails: updatedFirms });
  };

  const addFirm = () => {
    setFormData({
      ...formData,
      firmDetails: [...formData.firmDetails, { name: '', business: '', relation: '', bankName: '' }]
    });
  };

  const validateForm = () => {
    return (
      formData.personalAssetsOwned &&
      formData.personalAssetsMortgaged &&
      formData.otherAssetsShares &&
      formData.firmDetails.length >= 1 &&
      formData.firmDetails.some(firm => firm.name && firm.business && firm.relation && firm.bankName)
    );
  };

  const handleNextClick = () => {
    if (validateForm()) {
      onNext();
    } else {
      toast.error('Please fill all required fields for Personal Assets and at least one Firm Details entry.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored'
      });
    }
  };

  const handlePreviousClick = () => {
    onPrevious();
  };

  return (
    <div className="property-firm">
      <div className="form-header">Property/Firm</div>
      <div className="form-section">
        <div className="form-grid">
          <div className="form-group">
            <label>Personal Assets Owned *</label>
            <textarea
              name="personalAssetsOwned"
              value={formData.personalAssetsOwned}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Personal Assets Mortgaged *</label>
            <textarea
              name="personalAssetsMortgaged"
              value={formData.personalAssetsMortgaged}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Other Assets/Shares *</label>
            <textarea
              name="otherAssetsShares"
              value={formData.otherAssetsShares}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        {formData.firmDetails.map((firm, index) => (
          <div key={index} className="form-grid">
            <div className="form-group">
              <label>Firm Name *</label>
              <input
                type="text"
                name="name"
                value={firm.name}
                onChange={e => handleFirmChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Business *</label>
              <input
                type="text"
                name="business"
                value={firm.business}
                onChange={e => handleFirmChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Relation *</label>
              <input
                type="text"
                name="relation"
                value={firm.relation}
                onChange={e => handleFirmChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Bank Name *</label>
              <input
                type="text"
                name="bankName"
                value={firm.bankName}
                onChange={e => handleFirmChange(index, e)}
                required
              />
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-secondary" onClick={addFirm}>
          Add Firm
        </button>
        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={handlePreviousClick} style={{ marginTop: '0px' }}>
            Previous
          </button>
          <button type="button" className="btn btn-primary" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyFirm;