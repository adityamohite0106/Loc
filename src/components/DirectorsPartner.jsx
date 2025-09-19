import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import '../styles/DirectorsPartner.css';

const DirectorsPartner = ({ data, onUpdate, onNext, onPrevious }) => {
  const [formData, setFormData] = useState({
    type: data.type || '',
    rows:
      data.rows?.length > 0
        ? data.rows
        : [{ name: '', dob: '', share: '', qualification: '' }]
  });

  // Sync formData with parent data when it changes
  useEffect(() => {
    setFormData({
      type: data.type || '',
      rows:
        data.rows?.length > 0
          ? data.rows
          : [{ name: '', dob: '', share: '', qualification: '' }]
    });
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    onUpdate(updatedData);
  };

  const handleRowChange = (index, e) => {
    const { name, value } = e.target;
    const updatedRows = [...formData.rows];
    updatedRows[index] = { ...updatedRows[index], [name]: value };
    setFormData({ ...formData, rows: updatedRows });
    onUpdate({ rows: updatedRows });
  };

  const addRow = () => {
    setFormData({
      ...formData,
      rows: [...formData.rows, { name: '', dob: '', share: '', qualification: '' }]
    });
  };

  const validateForm = () => {
    return (
      formData.type &&
      formData.rows.length >= 1 &&
      formData.rows.some(
        row =>
          row.name &&
          row.dob &&
          !isNaN(parseFloat(row.share)) &&
          parseFloat(row.share) >= 0 &&
          row.qualification
      )
    );
  };

  const handleNextClick = () => {
    if (validateForm()) {
      onNext();
    } else {
      toast.error('Please fill all required fields for Type and at least one Director/Partner entry.', {
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
    <div className="directors-partner">
      <div className="form-header">Director/Partner</div>
      <div className="form-section">
        <div className="form-group">
          <label>Type *</label>
          <select name="type" value={formData.type} onChange={handleInputChange} required>
            <option value="">Select Type</option>
            <option value="Director">Director</option>
            <option value="Partner">Partner</option>
          </select>
        </div>
        {formData.rows.map((row, index) => (
          <div key={index} className="form-grid">
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                value={row.name}
                onChange={e => handleRowChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Date of Birth *</label>
              <input
                type="date"
                name="dob"
                value={row.dob}
                onChange={e => handleRowChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Share *</label>
              <input
                type="number"
                name="share"
                value={row.share}
                onChange={e => handleRowChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Qualification *</label>
              <input
                type="text"
                name="qualification"
                value={row.qualification}
                onChange={e => handleRowChange(index, e)}
                required
              />
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-secondary" onClick={addRow}>
          Add Row
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

export default DirectorsPartner;