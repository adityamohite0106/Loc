import React, { useState } from 'react';
import '../styles/IncomeReturns.css';

const IncomeReturns = ({ data, onUpdate }) => {
  const [formData, setFormData] = useState({
    itReturns: data.itReturns || [
      { accountingYear: '', ayYear: '', taxableIncome: '', taxPaid: '', taxArrears: '' },
      { accountingYear: '', ayYear: '', taxableIncome: '', taxPaid: '', taxArrears: '' },
      { accountingYear: '', ayYear: '', taxableIncome: '', taxPaid: '', taxArrears: '' },
      { accountingYear: '', ayYear: '', taxableIncome: '', taxPaid: '', taxArrears: '' }
    ],
    purchaseSale3Years: data.purchaseSale3Years || [
      { financialYear: '', purchaseRs: '', salesRs: '', grossProfit: '', netProfit: '' },
      { financialYear: '', purchaseRs: '', salesRs: '', grossProfit: '', netProfit: '' },
      { financialYear: '', purchaseRs: '', salesRs: '', grossProfit: '', netProfit: '' },
      { financialYear: '', purchaseRs: '', salesRs: '', grossProfit: '', netProfit: '' }
    ],
    purchaseSaleCurrentYear: data.purchaseSaleCurrentYear || [
      { month: '', purchase: '', sales: '' },
      { month: '', purchase: '', sales: '' },
      { month: '', purchase: '', sales: '' },
      { month: '', purchase: '', sales: '' }
    ]
  });

  const handleITReturnChange = (index, field, value) => {
    const updatedReturns = [...formData.itReturns];
    updatedReturns[index][field] = value;
    const updatedData = { ...formData, itReturns: updatedReturns };
    setFormData(updatedData);
    onUpdate(updatedData);
  };

  const handlePurchaseSale3YearsChange = (index, field, value) => {
    const updatedData = [...formData.purchaseSale3Years];
    updatedData[index][field] = value;
    const updatedFormData = { ...formData, purchaseSale3Years: updatedData };
    setFormData(updatedFormData);
    onUpdate(updatedFormData);
  };

  const handleCurrentYearChange = (index, field, value) => {
    const updatedData = [...formData.purchaseSaleCurrentYear];
    updatedData[index][field] = value;
    const updatedFormData = { ...formData, purchaseSaleCurrentYear: updatedData };
    setFormData(updatedFormData);
    onUpdate(updatedFormData);
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i);
  const financialYears = Array.from({ length: 10 }, (_, i) => `${currentYear - i - 1}-${currentYear - i}`);

  return (
    <div className="income-returns">
      <div className="form-header">
        Income / IT Returns
      </div>
      
      <div className="form-section">
        
        <div className="table-section">
          <table className="it-return-table">
            <thead>
              <tr>
                <th>Accounting Year</th>
                <th>A.Y Year</th>
                <th>Taxable Income</th>
                <th>Tax Paid</th>
                <th>Tax in arrears if any</th>
              </tr>
            </thead>
            <tbody>
              {formData.itReturns.map((item, index) => (
                <tr key={index}>
                  <td>
                    <select
                      value={item.accountingYear}
                      onChange={(e) => handleITReturnChange(index, 'accountingYear', e.target.value)}
                    >
                      <option value="">-- Select --</option>
                      {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <select
                      value={item.ayYear}
                      onChange={(e) => handleITReturnChange(index, 'ayYear', e.target.value)}
                    >
                      <option value="">-- Select --</option>
                      {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.taxableIncome}
                      onChange={(e) => handleITReturnChange(index, 'taxableIncome', e.target.value)}
                      placeholder="Taxable Income"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.taxPaid}
                      onChange={(e) => handleITReturnChange(index, 'taxPaid', e.target.value)}
                      placeholder="Tax Paid"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.taxArrears}
                      onChange={(e) => handleITReturnChange(index, 'taxArrears', e.target.value)}
                      placeholder="Tax Arrears"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Purchase Sale 3 Years Section */}
        <div className="section-header">
          <h3>Purchase Sale (Position at Least for last 3 Years & Current Year)</h3>
        </div>

        <div className="table-section">
          <table className="purchase-sale-table">
            <thead>
              <tr>
                <th>Financial Year</th>
                <th>Purchase Rs.</th>
                <th>Sales Rs.</th>
                <th>Gross Profit</th>
                <th>Net Profit</th>
              </tr>
            </thead>
            <tbody>
              {formData.purchaseSale3Years.map((item, index) => (
                <tr key={index}>
                  <td>
                    <select
                      value={item.financialYear}
                      onChange={(e) => handlePurchaseSale3YearsChange(index, 'financialYear', e.target.value)}
                    >
                      <option value="">-- Select --</option>
                      {financialYears.map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.purchaseRs}
                      onChange={(e) => handlePurchaseSale3YearsChange(index, 'purchaseRs', e.target.value)}
                      placeholder="Purchase Amount"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.salesRs}
                      onChange={(e) => handlePurchaseSale3YearsChange(index, 'salesRs', e.target.value)}
                      placeholder="Sales Amount"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.grossProfit}
                      onChange={(e) => handlePurchaseSale3YearsChange(index, 'grossProfit', e.target.value)}
                      placeholder="Gross Profit"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.netProfit}
                      onChange={(e) => handlePurchaseSale3YearsChange(index, 'netProfit', e.target.value)}
                      placeholder="Net Profit"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Current Financial Year Section */}
        <div className="section-header">
          <h3>Purchase Sale (Sales Purchase up to last month in current financial Year)</h3>
        </div>

        <div className="table-section">
          <table className="current-year-table">
            <thead>
              <tr>
                <th>Month</th>
                <th>Purchase (Rs.)</th>
                <th>Sales (Rs.)</th>
              </tr>
            </thead>
            <tbody>
              {formData.purchaseSaleCurrentYear.map((item, index) => (
                <tr key={index}>
                  <td>
                    <select
                      value={item.month}
                      onChange={(e) => handleCurrentYearChange(index, 'month', e.target.value)}
                    >
                      <option value="">-- Select --</option>
                      {months.map((month) => (
                        <option key={month} value={month}>{month}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.purchase}
                      onChange={(e) => handleCurrentYearChange(index, 'purchase', e.target.value)}
                      placeholder="Purchase Amount"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.sales}
                      onChange={(e) => handleCurrentYearChange(index, 'sales', e.target.value)}
                      placeholder="Sales Amount"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

export default IncomeReturns;