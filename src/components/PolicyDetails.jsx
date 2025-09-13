import React, { useState } from 'react';
import '../styles/PolicyDetails.css';

const PolicyDetails = ({ data, onUpdate }) => {
  const [formData, setFormData] = useState({
    policies: data.policies || [
      { companyName: '', policyNo: '', period: '', totalPaid: '' },
      { companyName: '', policyNo: '', period: '', totalPaid: '' },
      { companyName: '', policyNo: '', period: '', totalPaid: '' },
      { companyName: '', policyNo: '', period: '', totalPaid: '' }
    ]
  });

  const handlePolicyChange = (index, field, value) => {
    const updatedPolicies = [...formData.policies];
    updatedPolicies[index][field] = value;
    const updatedData = { ...formData, policies: updatedPolicies };
    setFormData(updatedData);
    onUpdate(updatedData);
  };

  const addPolicyRow = () => {
    const newPolicy = { companyName: '', policyNo: '', period: '', totalPaid: '' };
    const updatedData = {
      ...formData,
      policies: [...formData.policies, newPolicy]
    };
    setFormData(updatedData);
    onUpdate(updatedData);
  };

  const removePolicyRow = (index) => {
    if (formData.policies.length > 1) {
      const updatedPolicies = formData.policies.filter((_, i) => i !== index);
      const updatedData = { ...formData, policies: updatedPolicies };
      setFormData(updatedData);
      onUpdate(updatedData);
    }
  };

  const insuranceCompanies = [
    'LIFE INSURANCE',
    'LIC of India',
    'HDFC Life',
    'ICICI Prudential',
    'SBI Life',
    'Max Life',
    'Bajaj Allianz',
    'Tata AIA',
    'Other'
  ];

  return (
    <div className="policy-details">
      <div className="form-header">
        Policy Details
      </div>
      
      <div className="form-section">
        <div className="table-section">
          <div className="table-controls">
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={addPolicyRow}
            >
              + Add Policy
            </button>
          </div>

          <table className="policy-table">
            <thead>
              <tr>
                <th>Name of Insurance Company</th>
                <th>Policy No.</th>
                <th>Period</th>
                <th>Total Paid</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {formData.policies.map((policy, index) => (
                <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                  <td>
                    <select
                      value={policy.companyName}
                      onChange={(e) => handlePolicyChange(index, 'companyName', e.target.value)}
                    >
                      <option value="">Select Company</option>
                      {insuranceCompanies.map((company, idx) => (
                        <option key={idx} value={company}>{company}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={policy.policyNo}
                      onChange={(e) => handlePolicyChange(index, 'policyNo', e.target.value)}
                      placeholder="Policy Number"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={policy.period}
                      onChange={(e) => handlePolicyChange(index, 'period', e.target.value)}
                      placeholder="Years"
                      min="0"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={policy.totalPaid}
                      onChange={(e) => handlePolicyChange(index, 'totalPaid', e.target.value)}
                      placeholder="Amount"
                      min="0"
                    />
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn-remove"
                      onClick={() => removePolicyRow(index)}
                      disabled={formData.policies.length === 1}
                      title="Remove Policy"
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="policy-summary">
          <div className="summary-card">
            <h3>Policy Summary</h3>
            <div className="summary-stats">
              <div className="stat">
                <span className="stat-label">Total Policies:</span>
                <span className="stat-value">{formData.policies.length}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Total Amount Paid:</span>
                <span className="stat-value">
                  ₹{formData.policies.reduce((sum, policy) => sum + (parseFloat(policy.totalPaid) || 0), 0).toLocaleString('en-IN')}
                </span>
              </div>
            </div>
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

export default PolicyDetails;