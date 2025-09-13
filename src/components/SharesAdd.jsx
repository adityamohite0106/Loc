import React, { useState } from 'react';
import '../styles/SharesAdd.css';

const SharesAdd = ({ data, onUpdate }) => {
  const [formData, setFormData] = useState({
    applicationType: data.applicationType || '',
    membershipNo: data.membershipNo || '',
    memberRefNo: data.memberRefNo || '',
    customerNo: data.customerNo || '',
    customerName: data.customerName || '',
    applicationNo: data.applicationNo || '',
    noOfShares: data.noOfShares || '',
    shareValue: data.shareValue || '',
    totalShares: data.totalShares || '',
    savingAccNo: data.savingAccNo || '',
    accountName: data.accountName || '',
    savingFee: data.savingFee || '',
    entryFee: data.entryFee || '',
    memberWelfareFee: data.memberWelfareFee || '',
    totalAmount: data.totalAmount || '',
    remark: data.remark || '',
    nominee1: {
      fullName: data.nominee1?.fullName || '',
      dateOfBirth: data.nominee1?.dateOfBirth || '',
      age: data.nominee1?.age || '',
      relation: data.nominee1?.relation || ''
    },
    nominee2: {
      fullName: data.nominee2?.fullName || '',
      dateOfBirth: data.nominee2?.dateOfBirth || '',
      age: data.nominee2?.age || '',
      relation: data.nominee2?.relation || ''
    },
    paymentMode: data.paymentMode || ''
  });

  const handleInputChange = (field, value) => {
    let updatedData = { ...formData };
    
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      updatedData[parent] = { ...updatedData[parent], [child]: value };
    } else {
      updatedData[field] = value;
    }
    
    // Auto-calculate total shares
    if (field === 'noOfShares' || field === 'shareValue') {
      const shares = parseFloat(updatedData.noOfShares) || 0;
      const value = parseFloat(updatedData.shareValue) || 0;
      updatedData.totalShares = (shares * value).toString();
    }
    
    // Auto-calculate total amount
    if (['totalShares', 'entryFee', 'memberWelfareFee'].includes(field)) {
      const totalShares = parseFloat(updatedData.totalShares) || 0;
      const entryFee = parseFloat(updatedData.entryFee) || 0;
      const welfareFee = parseFloat(updatedData.memberWelfareFee) || 0;
      updatedData.totalAmount = (totalShares + entryFee + welfareFee).toString();
    }
    
    // Auto-calculate age from date of birth
    if (field.includes('dateOfBirth')) {
      const birthDate = new Date(value);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const [parent] = field.split('.');
      updatedData[parent].age = age.toString();
    }
    
    setFormData(updatedData);
    onUpdate(updatedData);
  };

  const applicationTypes = ['New Share', 'Additional Share', 'Transfer Share'];
  const relations = ['Father', 'Mother', 'Spouse', 'Son', 'Daughter', 'Brother', 'Sister', 'Other'];
  const paymentModes = ['Cash', 'Cheque', 'Bank Transfer', 'UPI', 'Card'];

  return (
    <div className="shares-add">
      <div className="form-header">
        Shares Add
      </div>
      
      <div className="form-section">
        {/* Application Details */}
        <div className="section-card">
          <div className="section-header">
            <h3>Application Details:</h3>
          </div>
          
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="applicationType">Application Type *</label>
              <select
                id="applicationType"
                value={formData.applicationType}
                onChange={(e) => handleInputChange('applicationType', e.target.value)}
              >
                <option value="">Select Type</option>
                {applicationTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="membershipNo">Membership No</label>
              <input
                type="text"
                id="membershipNo"
                value={formData.membershipNo}
                onChange={(e) => handleInputChange('membershipNo', e.target.value)}
                placeholder="Membership Number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="memberRefNo">Member Ref No *</label>
              <input
                type="text"
                id="memberRefNo"
                value={formData.memberRefNo}
                onChange={(e) => handleInputChange('memberRefNo', e.target.value)}
                placeholder="Member Reference Number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="customerNo">Customer No *</label>
              <input
                type="text"
                id="customerNo"
                value={formData.customerNo}
                onChange={(e) => handleInputChange('customerNo', e.target.value)}
                placeholder="Customer Number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="customerName">Customer Name</label>
              <input
                type="text"
                id="customerName"
                value={formData.customerName}
                onChange={(e) => handleInputChange('customerName', e.target.value)}
                placeholder="Customer Full Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="applicationNo">Application No *</label>
              <input
                type="text"
                id="applicationNo"
                value={formData.applicationNo}
                onChange={(e) => handleInputChange('applicationNo', e.target.value)}
                placeholder="Application Number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="noOfShares">No Of Shares *</label>
              <input
                type="number"
                id="noOfShares"
                value={formData.noOfShares}
                onChange={(e) => handleInputChange('noOfShares', e.target.value)}
                placeholder="Number of Shares"
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="shareValue">Share Value *</label>
              <input
                type="number"
                id="shareValue"
                value={formData.shareValue}
                onChange={(e) => handleInputChange('shareValue', e.target.value)}
                placeholder="Share Value"
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="totalShares">Total Shares *</label>
              <input
                type="number"
                id="totalShares"
                value={formData.totalShares}
                readOnly
                className="readonly"
                placeholder="Auto-calculated"
              />
            </div>

            <div className="form-group">
              <label htmlFor="savingAccNo">Saving Acc No *</label>
              <input
                type="text"
                id="savingAccNo"
                value={formData.savingAccNo}
                onChange={(e) => handleInputChange('savingAccNo', e.target.value)}
                placeholder="Saving Account Number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="accountName">Account Name</label>
              <input
                type="text"
                id="accountName"
                value={formData.accountName}
                onChange={(e) => handleInputChange('accountName', e.target.value)}
                placeholder="Account Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="savingFee">Saving Fee</label>
              <input
                type="number"
                id="savingFee"
                value={formData.savingFee}
                onChange={(e) => handleInputChange('savingFee', e.target.value)}
                placeholder="Saving Fee"
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="entryFee">ENTRY FEE</label>
              <input
                type="number"
                id="entryFee"
                value={formData.entryFee}
                onChange={(e) => handleInputChange('entryFee', e.target.value)}
                placeholder="Entry Fee"
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="memberWelfareFee">Member Welfare(Loan) Fee</label>
              <input
                type="number"
                id="memberWelfareFee"
                value={formData.memberWelfareFee}
                onChange={(e) => handleInputChange('memberWelfareFee', e.target.value)}
                placeholder="Welfare Fee"
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="totalAmount">Total Amount *</label>
              <input
                type="number"
                id="totalAmount"
                value={formData.totalAmount}
                readOnly
                className="readonly total-amount"
                placeholder="Auto-calculated"
              />
            </div>
          </div>

          <div className="form-group wide">
            <label htmlFor="remark">Remark *</label>
            <textarea
              id="remark"
              value={formData.remark}
              onChange={(e) => handleInputChange('remark', e.target.value)}
              placeholder="Enter Remark"
              rows="3"
            />
          </div>
        </div>

        {/* Nominee Details */}
        <div className="section-card">
          <div className="section-header">
            <h3>Nominee 1 Details:</h3>
          </div>
          
          <div className="nominee-grid">
            <div className="form-group">
              <label htmlFor="nominee1FullName">Full Name</label>
              <input
                type="text"
                id="nominee1FullName"
                value={formData.nominee1.fullName}
                onChange={(e) => handleInputChange('nominee1.fullName', e.target.value)}
                placeholder="Full Name Of Nominee 1"
              />
            </div>

            <div className="form-group">
              <label htmlFor="nominee1DateOfBirth">Date of Birth</label>
              <input
                type="date"
                id="nominee1DateOfBirth"
                value={formData.nominee1.dateOfBirth}
                onChange={(e) => handleInputChange('nominee1.dateOfBirth', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="nominee1Age">Age</label>
              <input
                type="number"
                id="nominee1Age"
                value={formData.nominee1.age}
                readOnly
                className="readonly"
                placeholder="Auto-calculated"
              />
            </div>

            <div className="form-group">
              <label htmlFor="nominee1Relation">Relation</label>
              <select
                id="nominee1Relation"
                value={formData.nominee1.relation}
                onChange={(e) => handleInputChange('nominee1.relation', e.target.value)}
              >
                <option value="">--Select--</option>
                {relations.map((relation) => (
                  <option key={relation} value={relation}>{relation}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="section-card">
          <div className="section-header">
            <h3>Nominee 2 Details:</h3>
          </div>
          
          <div className="nominee-grid">
            <div className="form-group">
              <label htmlFor="nominee2FullName">Full Name</label>
              <input
                type="text"
                id="nominee2FullName"
                value={formData.nominee2.fullName}
                onChange={(e) => handleInputChange('nominee2.fullName', e.target.value)}
                placeholder="Full Name Of Nominee 2"
              />
            </div>

            <div className="form-group">
              <label htmlFor="nominee2DateOfBirth">Date of Birth</label>
              <input
                type="date"
                id="nominee2DateOfBirth"
                value={formData.nominee2.dateOfBirth}
                onChange={(e) => handleInputChange('nominee2.dateOfBirth', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="nominee2Age">Age</label>
              <input
                type="number"
                id="nominee2Age"
                value={formData.nominee2.age}
                readOnly
                className="readonly"
                placeholder="Auto-calculated"
              />
            </div>

            <div className="form-group">
              <label htmlFor="nominee2Relation">Relation</label>
              <select
                id="nominee2Relation"
                value={formData.nominee2.relation}
                onChange={(e) => handleInputChange('nominee2.relation', e.target.value)}
              >
                <option value="">--Select--</option>
                {relations.map((relation) => (
                  <option key={relation} value={relation}>{relation}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className="section-card">
          <div className="section-header">
            <h3>Payment Details:</h3>
          </div>
          
          <div className="form-group">
            <label htmlFor="paymentMode">Payment Mode *</label>
            <select
              id="paymentMode"
              value={formData.paymentMode}
              onChange={(e) => handleInputChange('paymentMode', e.target.value)}
            >
              <option value="">--Select--</option>
              {paymentModes.map((mode) => (
                <option key={mode} value={mode}>{mode}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharesAdd;