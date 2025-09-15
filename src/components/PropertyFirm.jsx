import React, { useState } from 'react';
import '../styles/PropertyFirm.css';

const PropertyFirm = ({ data, onUpdate }) => {
  const [formData, setFormData] = useState({
    firmDetails: data.firmDetails || [
      { name: '', business: '', relation: '', bankName: '' },
      { name: '', business: '', relation: '', bankName: '' },
      { name: '', business: '', relation: '', bankName: '' },
      { name: '', business: '', relation: '', bankName: '' }
    ],
    personalAssetsOwned: data.personalAssetsOwned || '',
    personalAssetsMortgaged: data.personalAssetsMortgaged || '',
    otherAssetsShares: data.otherAssetsShares || ''
  });

  const handleFirmDetailChange = (index, field, value) => {
    const updatedFirmDetails = [...formData.firmDetails];
    updatedFirmDetails[index][field] = value;
    const updatedData = { ...formData, firmDetails: updatedFirmDetails };
    setFormData(updatedData);
    onUpdate(updatedData);
  };

  const handleInputChange = (field, value) => {
    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);
    onUpdate(updatedData);
  };

  const relationOptions = ['FRIEND', 'RELATIVE', 'BUSINESS PARTNER', 'COLLEAGUE', 'OTHER'];

  return (
    <div className="property-firm">
      <div className="form-header">
        Property/Other Firm
      </div>
      
      <div className="form-section">
        <div className="table-section">
          <table className="firm-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Business</th>
                <th>Relation With Applicant</th>
                <th>Name of Banks where firm has Accounts</th>
              </tr>
            </thead>
            <tbody>
              {formData.firmDetails.map((firm, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      value={firm.name}
                      onChange={(e) => handleFirmDetailChange(index, 'name', e.target.value)}
                      placeholder="Enter name"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={firm.business}
                      onChange={(e) => handleFirmDetailChange(index, 'business', e.target.value)}
                      placeholder="Business type"
                    />
                  </td>
                  <td>
                    <select
                      value={firm.relation}
                      onChange={(e) => handleFirmDetailChange(index, 'relation', e.target.value)}
                    >
                      <option value="">Select Relation</option>
                      {relationOptions.map((relation, idx) => (
                        <option key={idx} value={relation}>{relation}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={firm.bankName}
                      onChange={(e) => handleFirmDetailChange(index, 'bankName', e.target.value)}
                      placeholder="Bank name"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="assets-section">
          <div className="form-group">
            <label htmlFor="personalAssetsOwned">
              Personal Assets / Properties fully owned by you: *
            </label>
            <textarea
              id="personalAssetsOwned"
              value={formData.personalAssetsOwned}
              onChange={(e) => handleInputChange('personalAssetsOwned', e.target.value)}
              placeholder="List your fully owned assets and properties"
              rows="4"
            />
          </div>

          <div className="form-group">
            <label htmlFor="personalAssetsMortgaged">
              Personal Assets / Properties which is mortgaged where & what sum? : *
            </label>
            <textarea
              id="personalAssetsMortgaged"
              value={formData.personalAssetsMortgaged}
              onChange={(e) => handleInputChange('personalAssetsMortgaged', e.target.value)}
              placeholder="List mortgaged assets, where and for what amount"
              rows="4"
            />
          </div>

          <div className="form-group">
            <label htmlFor="otherAssetsShares">
              Other Assets / Properties with Shares: *
            </label>
            <textarea
              id="otherAssetsShares"
              value={formData.otherAssetsShares}
              onChange={(e) => handleInputChange('otherAssetsShares', e.target.value)}
              placeholder="List other assets and properties with shares"
              rows="4"
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-primary">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyFirm;