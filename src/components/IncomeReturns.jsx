import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import '../styles/IncomeReturns.css';

const IncomeReturns = ({ data, onUpdate, onNext, onPrevious }) => {
  const [formData, setFormData] = useState({
    itReturns: data.itReturns?.length > 0 ? data.itReturns : [{ accountingYear: '', ayYear: '', taxableIncome: '' }],
    purchaseSale3Years:
      data.purchaseSale3Years?.length >= 3
        ? data.purchaseSale3Years
        : [
            { financialYear: '', purchaseRs: '', salesRs: '' },
            { financialYear: '', purchaseRs: '', salesRs: '' },
            { financialYear: '', purchaseRs: '', salesRs: '' }
          ].slice(0, 3 - (data.purchaseSale3Years?.length || 0)).concat(data.purchaseSale3Years || [])
  });

  // Sync formData with parent data when it changes
  useEffect(() => {
    setFormData({
      itReturns: data.itReturns?.length > 0 ? data.itReturns : [{ accountingYear: '', ayYear: '', taxableIncome: '' }],
      purchaseSale3Years:
        data.purchaseSale3Years?.length >= 3
          ? data.purchaseSale3Years
          : [
              { financialYear: '', purchaseRs: '', salesRs: '' },
              { financialYear: '', purchaseRs: '', salesRs: '' },
              { financialYear: '', purchaseRs: '', salesRs: '' }
            ].slice(0, 3 - (data.purchaseSale3Years?.length || 0)).concat(data.purchaseSale3Years || [])
    });
  }, [data]);

  const handleITReturnChange = (index, e) => {
    const { name, value } = e.target;
    const updatedITReturns = [...formData.itReturns];
    updatedITReturns[index] = { ...updatedITReturns[index], [name]: value };
    setFormData({ ...formData, itReturns: updatedITReturns });
    onUpdate({ itReturns: updatedITReturns });
  };

  const handlePurchaseSaleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPurchaseSales = [...formData.purchaseSale3Years];
    updatedPurchaseSales[index] = { ...updatedPurchaseSales[index], [name]: value };
    setFormData({ ...formData, purchaseSale3Years: updatedPurchaseSales });
    onUpdate({ purchaseSale3Years: updatedPurchaseSales });
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
      formData.itReturns.length >= 1 &&
      formData.itReturns.some(
        item =>
          item.accountingYear &&
          item.ayYear &&
          !isNaN(parseFloat(item.taxableIncome)) &&
          parseFloat(item.taxableIncome) >= 0
      ) &&
      formData.purchaseSale3Years.length >= 3 &&
      formData.purchaseSale3Years.slice(0, 3).every(
        item =>
          item.financialYear &&
          !isNaN(parseFloat(item.purchaseRs)) &&
          parseFloat(item.purchaseRs) >= 0 &&
          !isNaN(parseFloat(item.salesRs)) &&
          parseFloat(item.salesRs) >= 0
      )
    );
  };

  const handleNextClick = () => {
    if (validateForm()) {
      onNext();
    } else {
      toast.error('Please fill all required fields for at least one IT Return and the first three Purchase/Sale entries.', {
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
                onChange={e => handleITReturnChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>AY Year *</label>
              <input
                type="text"
                name="ayYear"
                value={item.ayYear}
                onChange={e => handleITReturnChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Taxable Income *</label>
              <input
                type="number"
                name="taxableIncome"
                value={item.taxableIncome}
                onChange={e => handleITReturnChange(index, e)}
                required
              />
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-secondary" onClick={addITReturn}>
          Add IT Return
        </button>
        <h3 style={{ marginTop: '30px' }}>Purchase/Sale (3 Years)</h3>
        {formData.purchaseSale3Years.map((item, index) => (
          <div key={index} className="form-grid">
            <div className="form-group">
              <label>Financial Year {index < 3 ? '*' : ''}</label>
              <input
                type="text"
                name="financialYear"
                value={item.financialYear}
                onChange={e => handlePurchaseSaleChange(index, e)}
                required={index < 3}
              />
            </div>
            <div className="form-group">
              <label>Purchase (Rs) {index < 3 ? '*' : ''}</label>
              <input
                type="number"
                name="purchaseRs"
                value={item.purchaseRs}
                onChange={e => handlePurchaseSaleChange(index, e)}
                required={index < 3}
              />
            </div>
            <div className="form-group">
              <label>Sales (Rs) {index < 3 ? '*' : ''}</label>
              <input
                type="number"
                name="salesRs"
                value={item.salesRs}
                onChange={e => handlePurchaseSaleChange(index, e)}
                required={index < 3}
              />
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-secondary" onClick={addPurchaseSale}>
          Add Purchase/Sale
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

export default IncomeReturns;