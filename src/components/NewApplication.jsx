import React, { useState } from 'react';
import '../styles/NewApplication.css';

const NewApplication = ({ data, onUpdate, onNext, onPrevious }) => {
  const [formData, setFormData] = useState({
    branch: data.branch || '',
    custNo: data.custNo || '',
    custName: data.custName || '',
    applicationSaleDate: data.applicationSaleDate || '',
    appNo: data.appNo || '',
    branchInwardNo: data.branchInwardNo || '',
    branchInwardDate: data.branchInwardDate || '',
    typeOfLoan: data.typeOfLoan || '',
    amountOfLoan: data.amountOfLoan || '',
    periodOfRepayment: data.periodOfRepayment || '',
    security: data.security || '',
    collateralSecurity: data.collateralSecurity || '',
    purposeOfLoan: data.purposeOfLoan || '',
    loanBoardResolutionNo: data.loanBoardResolutionNo || '',
    loanBoardDate: data.loanBoardDate || '',
    directorBoardResolutionNo: data.directorBoardResolutionNo || '',
    directorBoardDate: data.directorBoardDate || '',
    loanFormSubmittedDateBranch: data.loanFormSubmittedDateBranch || '',
    loanFormSubmittedDateHead: data.loanFormSubmittedDateHead || '',
    officerBoardResolutionNo: data.officerBoardResolutionNo || ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    onUpdate(updatedData);
  };

  const validateForm = () => {
    return (
      formData.branch &&
      formData.appNo &&
      formData.custNo &&
      formData.custName &&
      formData.typeOfLoan &&
      formData.amountOfLoan
    );
  };

  const handleNextClick = () => {
    if (validateForm()) {
      onNext(); // Navigate to next tab (CustomerDetails)
    } else {
      alert('Please fill all required fields.');
    }
  };

  const branches = ['2-Mandai', 'Head Office', 'Branch-A', 'Branch-B', 'Branch-C'];
  const loanTypes = ['Term Loan', 'Personal Loan', 'Business Loan', 'Home Loan', 'Vehicle Loan'];

  return (
    <div className="new-application">
      <div className="form-header">Loan Application</div>
      <div className="form-section">
        <div className="form-grid">
          <div className="form-group">
            <label>Branch *</label>
            <select name="branch" value={formData.branch} onChange={handleInputChange} required>
              <option value="">Select Branch</option>
              {branches.map((branch, index) => (
                <option key={index} value={branch}>{branch}</option>
              ))}
            </select>
          </div>
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
            <label>Customer No *</label>
            <input
              type="text"
              name="custNo"
              value={formData.custNo}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Customer Name *</label>
            <input
              type="text"
              name="custName"
              value={formData.custName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Application Sale Date</label>
            <input
              type="date"
              name="applicationSaleDate"
              value={formData.applicationSaleDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Branch Inward No</label>
            <input
              type="text"
              name="branchInwardNo"
              value={formData.branchInwardNo}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Branch Inward Date</label>
            <input
              type="date"
              name="branchInwardDate"
              value={formData.branchInwardDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Type of Loan *</label>
            <select name="typeOfLoan" value={formData.typeOfLoan} onChange={handleInputChange} required>
              <option value="">Select Loan Type</option>
              {loanTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Amount of Loan *</label>
            <input
              type="number"
              name="amountOfLoan"
              value={formData.amountOfLoan}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Period of Repayment (Months)</label>
            <input
              type="number"
              name="periodOfRepayment"
              value={formData.periodOfRepayment}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Security</label>
            <textarea
              name="security"
              value={formData.security}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Collateral Security</label>
            <textarea
              name="collateralSecurity"
              value={formData.collateralSecurity}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Purpose of Loan</label>
            <textarea
              name="purposeOfLoan"
              value={formData.purposeOfLoan}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Loan Board Resolution No</label>
            <input
              type="text"
              name="loanBoardResolutionNo"
              value={formData.loanBoardResolutionNo}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Loan Board Date</label>
            <input
              type="date"
              name="loanBoardDate"
              value={formData.loanBoardDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Director Board Resolution No</label>
            <input
              type="text"
              name="directorBoardResolutionNo"
              value={formData.directorBoardResolutionNo}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Director Board Date</label>
            <input
              type="date"
              name="directorBoardDate"
              value={formData.directorBoardDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Loan Form Submitted Date (Branch)</label>
            <input
              type="date"
              name="loanFormSubmittedDateBranch"
              value={formData.loanFormSubmittedDateBranch}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Loan Form Submitted Date (Head)</label>
            <input
              type="date"
              name="loanFormSubmittedDateHead"
              value={formData.loanFormSubmittedDateHead}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Officer Board Resolution No</label>
            <input
              type="text"
              name="officerBoardResolutionNo"
              value={formData.officerBoardResolutionNo}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={onPrevious} disabled={true}>
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

export default NewApplication;