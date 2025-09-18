import React, { useState } from 'react';
import '../styles/BankDetails.css';

const BankDetails = ({ data, onUpdate, onNext, onPrevious }) => {
  const [accounts, setAccounts] = useState(data.accounts || [{ type: '', branch: '', accountNo: '', balance: '' }]);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAccounts = [...accounts];
    updatedAccounts[index] = { ...updatedAccounts[index], [name]: value };
    setAccounts(updatedAccounts);
    onUpdate({ accounts: updatedAccounts });
  };

  const addAccount = () => {
    setAccounts([...accounts, { type: '', branch: '', accountNo: '', balance: '' }]);
  };

  const validateForm = () => {
    return accounts.some(acc => acc.type && acc.branch && acc.accountNo && acc.balance);
  };

  const handleNextClick = () => {
    if (validateForm()) {
      onNext();
    } else {
      alert('Please fill at least one account with all required fields.');
    }
  };

  const handlePreviousClick = () => {
    onPrevious();
  };

  return (
    <div className="bank-details">
      <div className="form-header">Bank Details</div>
      <div className="form-section">
        {accounts.map((account, index) => (
          <div key={index} className="form-grid">
            <div className="form-group">
              <label>Account Type *</label>
              <input
                type="text"
                name="type"
                value={account.type}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Branch *</label>
              <input
                type="text"
                name="branch"
                value={account.branch}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Account No *</label>
              <input
                type="text"
                name="accountNo"
                value={account.accountNo}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Balance *</label>
              <input
                type="number"
                name="balance"
                value={account.balance}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-secondary" onClick={addAccount}>
          Add Account
        </button>
        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={handlePreviousClick}>
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

export default BankDetails;