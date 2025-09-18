import React, { useState } from 'react';
import '../styles/IncomeReturns.css';

const IncomeReturns = ({ data, onUpdate, onNext, onPrevious }) => {
  const [formData, setFormData] = useState({
    itReturns: data.itReturns || [{ accountingYear: '', ayYear: '', taxableIncome: '' }],
    purchaseSale3Years: data.purchaseSale3Years || [{ financialYear: '', purchaseRs: '', salesRs: '' }]
  });

  const handleITReturnChange = (index, e) => {
    const { name, value } = e.target;
    const updatedITReturns = [...formData.itReturns];
    updatedITReturns[index] = { ...updatedITReturns[index], [name]: value };
    setFormData({ ...formData, itReturns: updatedITReturns });
    onUpdate({ ...formData, itReturns: updatedITReturns });
  };

  const handlePurchaseSaleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPurchaseSales = [...formData.purchaseSale3Years];
    updatedPurchaseSales[index] = { ...updatedPurchaseSales[index], [name]: value };
    setFormData({ ...formData, purchaseSale3Years: updatedPurchaseSales });
    onUpdate({ ...formData, purchaseSale3Years: updatedPurchaseSales });
  };

  const addITReturn = () => {
    setFormData({
      ...formData,
      itReturns: [...formData.itReturns, { accountingYear: '', ayYear: '', taxableIncome: '' }]
    });
  };

  const addPurchaseSale = () => {
    setFormData({
      ...formData,
      purchaseSale3Years: [...formData.purchaseSale3Years, { financialYear: '', purchaseRs: '', salesRs: '' }]
    });
  };

  const validateForm = () => {
    return (
      formData.itReturns.some(item => item.accountingYear && item.ayYear && item.taxableIncome) &&
      formData.purchaseSale3Years.some(item => item.financialYear && item.purchaseRs && item.salesRs)
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
    <div className="income-returns">
      <div className="form-header">Income Returns</div>
      <div className="form-section">
        <h3>IT Returns</h3>
        {formData.itReturns.map((item, index) => (
          <div key={index} className="form-grid">
            <div className="form-group">
              <label>Accounting Year *</label>
              <input
                type="text"
                name="accountingYear"
                value={item.accountingYear}
                onChange={(e) => handleITReturnChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>AY Year *</label>
              <input
                type="text"
                name="ayYear"
                value={item.ayYear}
                onChange={(e) => handleITReturnChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Taxable Income *</label>
              <input
                type="number"
                name="taxableIncome"
                value={item.taxableIncome}
                onChange={(e) => handleITReturnChange(index, e)}
                required
              />
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-secondary" onClick={addITReturn}>
          Add IT Return
        </button>
        <h3>Purchase/Sale (3 Years)</h3>
        {formData.purchaseSale3Years.map((item, index) => (
          <div key={index} className="form-grid">
            <div className="form-group">
              <label>Financial Year *</label>
              <input
                type="text"
                name="financialYear"
                value={item.financialYear}
                onChange={(e) => handlePurchaseSaleChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Purchase (Rs) *</label>
              <input
                type="number"
                name="purchaseRs"
                value={item.purchaseRs}
                onChange={(e) => handlePurchaseSaleChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Sales (Rs) *</label>
              <input
                type="number"
                name="salesRs"
                value={item.salesRs}
                onChange={(e) => handlePurchaseSaleChange(index, e)}
                required
              />
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-secondary" onClick={addPurchaseSale}>
          Add Purchase/Sale
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

export default IncomeReturns;