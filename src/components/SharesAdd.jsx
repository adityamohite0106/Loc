import React, { useState } from 'react';
import '../styles/SharesAdd.css';

const SharesAdd = ({ data, onUpdate, onPrevious, onSubmit }) => {
  const [formData, setFormData] = useState({
    applicationType: data.applicationType || '',
    memberRefNo: data.memberRefNo || '',
    customerNo: data.customerNo || '',
    applicationNo: data.applicationNo || '',
    noOfShares: data.noOfShares || '',
    shareValue: data.shareValue || '',
    savingAccNo: data.savingAccNo || '',
    totalAmount: data.totalAmount || '',
    remark: data.remark || '',
    paymentMode: data.paymentMode || ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    onUpdate(updatedData);
  };

  const validateForm = () => {
    return (
      formData.applicationType &&
      formData.memberRefNo &&
      formData.customerNo &&
      formData.applicationNo &&
      formData.noOfShares &&
      formData.shareValue &&
      formData.savingAccNo &&
      formData.totalAmount &&
      formData.remark &&
      formData.paymentMode
    );
  };

  const handleSubmitClick = () => {
    if (validateForm()) {
      onSubmit();
    } else {
      alert('Please fill all required fields.');
    }
  };

  const handlePreviousClick = () => {
    onPrevious();
  };

  return (
    <div className="shares-add">
      <div className="form-header">Shares Add</div>
      <div className="form-section">
        <div className="form-grid">
          <div className="form-group">
            <label>Application Type *</label>
            <input
              type="text"
              name="applicationType"
              value={formData.applicationType}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Member Reference No *</label>
            <input
              type="text"
              name="memberRefNo"
              value={formData.memberRefNo}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Customer No *</label>
            <input
              type="text"
              name="customerNo"
              value={formData.customerNo}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Application No *</label>
            <input
              type="text"
              name="applicationNo"
              value={formData.applicationNo}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>No of Shares *</label>
            <input
              type="number"
              name="noOfShares"
              value={formData.noOfShares}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Share Value *</label>
            <input
              type="number"
              name="shareValue"
              value={formData.shareValue}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Saving Account No *</label>
            <input
              type="text"
              name="savingAccNo"
              value={formData.savingAccNo}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Total Amount *</label>
            <input
              type="number"
              name="totalAmount"
              value={formData.totalAmount}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Remark *</label>
            <textarea
              name="remark"
              value={formData.remark}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Payment Mode *</label>
            <select name="paymentMode" value={formData.paymentMode} onChange={handleInputChange} required>
              <option value="">Select Payment Mode</option>
              <option value="Cash">Cash</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Cheque">Cheque</option>
            </select>
          </div>
        </div>
        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={handlePreviousClick}>
            Previous
          </button>
          <button type="button" className="btn btn-primary" onClick={handleSubmitClick}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharesAdd;