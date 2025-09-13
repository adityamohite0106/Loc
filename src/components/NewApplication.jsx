import React, { useState } from 'react';
import '../styles/NewApplication.css';

const NewApplication = ({ data, onUpdate }) => {
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

  const branches = ['2-Mandai', 'Head Office', 'Branch-A', 'Branch-B', 'Branch-C'];
  const loanTypes = ['Term Loan', 'Personal Loan', 'Business Loan', 'Home Loan', 'Vehicle Loan'];

  return (
    <div className="new-application">
      <div className="form-header">
        Loan Application
      </div>
      
      <div className="form-section">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="branch">Branch</label>
            <select
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleInputChange}
            >
              <option value="">Select Branch</option>
              {branches.map((branch, index) => (
                <option key={index} value={branch}>{branch}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="appNo">App No.</label>
            <input
              type="text"
              id="appNo"
              name="appNo"
              value={formData.appNo}
              onChange={handleInputChange}
              placeholder="Application Number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="custNo">Customer No./Name</label>
            <input
              type="text"
              id="custNo"
              name="custNo"
              value={formData.custNo}
              onChange={handleInputChange}
              placeholder="Customer Number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="custName">Customer Name</label>
            <input
              type="text"
              id="custName"
              name="custName"
              value={formData.custName}
              onChange={handleInputChange}
              placeholder="Customer Full Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="applicationSaleDate">Application Sale Date</label>
            <input
              type="date"
              id="applicationSaleDate"
              name="applicationSaleDate"
              value={formData.applicationSaleDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="branchInwardNo">Branch Inward No</label>
            <input
              type="text"
              id="branchInwardNo"
              name="branchInwardNo"
              value={formData.branchInwardNo}
              onChange={handleInputChange}
              placeholder="Branch Inward Number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="branchInwardDate">Branch Inward Date</label>
            <input
              type="date"
              id="branchInwardDate"
              name="branchInwardDate"
              value={formData.branchInwardDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="typeOfLoan">Type of Loan</label>
            <select
              id="typeOfLoan"
              name="typeOfLoan"
              value={formData.typeOfLoan}
              onChange={handleInputChange}
            >
              <option value="">Select Loan Type</option>
              {loanTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="amountOfLoan">Amount of Loan</label>
            <input
              type="number"
              id="amountOfLoan"
              name="amountOfLoan"
              value={formData.amountOfLoan}
              onChange={handleInputChange}
              placeholder="Loan Amount"
            />
          </div>

          <div className="form-group">
            <label htmlFor="periodOfRepayment">Period Of Repayment</label>
            <input
              type="number"
              id="periodOfRepayment"
              name="periodOfRepayment"
              value={formData.periodOfRepayment}
              onChange={handleInputChange}
              placeholder="Repayment Period (months)"
            />
          </div>

          <div className="form-group">
            <label htmlFor="security">Security</label>
            <input
              type="text"
              id="security"
              name="security"
              value={formData.security}
              onChange={handleInputChange}
              placeholder="Security Details"
            />
          </div>

          <div className="form-group wide">
            <label htmlFor="collateralSecurity">Collateral Security</label>
            <input
              type="text"
              id="collateralSecurity"
              name="collateralSecurity"
              value={formData.collateralSecurity}
              onChange={handleInputChange}
              placeholder="Collateral Security Details"
            />
          </div>

          <div className="form-group wide">
            <label htmlFor="purposeOfLoan">Purpose Of Loan</label>
            <textarea
              id="purposeOfLoan"
              name="purposeOfLoan"
              value={formData.purposeOfLoan}
              onChange={handleInputChange}
              placeholder="Purpose of the loan"
              rows="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="loanBoardResolutionNo">Loan Board Resolution No.</label>
            <input
              type="text"
              id="loanBoardResolutionNo"
              name="loanBoardResolutionNo"
              value={formData.loanBoardResolutionNo}
              onChange={handleInputChange}
              placeholder="Resolution Number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="loanBoardDate">Date</label>
            <input
              type="date"
              id="loanBoardDate"
              name="loanBoardDate"
              value={formData.loanBoardDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="directorBoardResolutionNo">Director Board Resolution No.</label>
            <input
              type="text"
              id="directorBoardResolutionNo"
              name="directorBoardResolutionNo"
              value={formData.directorBoardResolutionNo}
              onChange={handleInputChange}
              placeholder="Director Resolution Number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="directorBoardDate">Date</label>
            <input
              type="date"
              id="directorBoardDate"
              name="directorBoardDate"
              value={formData.directorBoardDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="loanFormSubmittedDateBranch">Loan Form Submitted Date In Branch</label>
            <input
              type="date"
              id="loanFormSubmittedDateBranch"
              name="loanFormSubmittedDateBranch"
              value={formData.loanFormSubmittedDateBranch}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="loanFormSubmittedDateHead">Loan Form Submitted Date In HeadOffice</label>
            <input
              type="date"
              id="loanFormSubmittedDateHead"
              name="loanFormSubmittedDateHead"
              value={formData.loanFormSubmittedDateHead}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group wide">
            <label htmlFor="officerBoardResolutionNo">Officer Board Resolution No.</label>
            <input
              type="text"
              id="officerBoardResolutionNo"
              name="officerBoardResolutionNo"
              value={formData.officerBoardResolutionNo}
              onChange={handleInputChange}
              placeholder="Officer Board Resolution Number"
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

export default NewApplication;