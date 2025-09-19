import React, { useState } from 'react';
import '../styles/CustomerDetails.css';

const CustomerDetails = ({ data, onUpdate, onNext, onPrevious }) => {
  const [formData, setFormData] = useState({
    appNo: data.appNo || '',
    brcd: data.brcd || '',
    customerNo: data.customerNo || '',
    customerName: data.customerName || '',
    mobile: data.mobile || '',
    memberNo: data.memberNo || '',
    dob: data.dob || '',
    address: data.address || '',
    roadStreet: data.roadStreet || '',
    pin: data.pin || '',
    city: data.city || '',
    taluka: data.taluka || '',
    district: data.district || '',
    state: data.state || '',
    occupation: data.occupation || '',
    monthlySalary: data.monthlySalary || '',
    netSalary: data.netSalary || '',
    firmName: data.firmName || '',
    annualIncome: data.annualIncome || '',
    officeAddr: data.officeAddr || ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    onUpdate(updatedData);
  };

  const validateForm = () => {
    return (
      formData.appNo &&
      formData.brcd &&
      formData.customerNo &&
      formData.customerName &&
      formData.mobile &&
      formData.memberNo &&
      formData.dob &&
      formData.address &&
      formData.roadStreet &&
      formData.pin &&
      formData.city &&
      formData.taluka &&
      formData.district &&
      formData.state &&
      formData.occupation &&
      formData.monthlySalary &&
      formData.netSalary &&
      formData.firmName &&
      formData.annualIncome &&
      formData.officeAddr
    );
  };

  const handleNextClick = () => {
    if (validateForm()) {
      onNext();
    } else {
      alert('Please fill all required fields.');
    }
  };

  const handlePreviousClick = () => {
    onPrevious();
  };

  return (
    <div className="customer-details">
      <div className="form-header">Customer Details</div>
      <div className="form-section">
        <div className="form-grid">
          <div className="form-group">
            <label>Application No *</label>
            <input
              type="text"
              name="appNo"
              value={formData.appNo}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>BRCD *</label>
            <input
              type="text"
              name="brcd"
              value={formData.brcd}
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
            <label>Customer Name *</label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Mobile *</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Member No *</label>
            <input
              type="text"
              name="memberNo"
              value={formData.memberNo}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Date of Birth *</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Address *</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Road/Street *</label>
            <input
              type="text"
              name="roadStreet"
              value={formData.roadStreet}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>PIN *</label>
            <input
              type="text"
              name="pin"
              value={formData.pin}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>City *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Taluka *</label>
            <input
              type="text"
              name="taluka"
              value={formData.taluka}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>District *</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>State *</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Occupation *</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Monthly Salary *</label>
            <input
              type="number"
              name="monthlySalary"
              value={formData.monthlySalary}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Net Salary *</label>
            <input
              type="number"
              name="netSalary"
              value={formData.netSalary}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Firm Name *</label>
            <input
              type="text"
              name="firmName"
              value={formData.firmName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Annual Income *</label>
            <input
              type="number"
              name="annualIncome"
              value={formData.annualIncome}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Office Address *</label>
            <textarea
              name="officeAddr"
              value={formData.officeAddr}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
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

export default CustomerDetails;