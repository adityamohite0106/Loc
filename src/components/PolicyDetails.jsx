import React, { useState } from 'react';
import '../styles/PolicyDetails.css';

const PolicyDetails = ({ data, onUpdate, onNext, onPrevious }) => {
  const [policies, setPolicies] = useState(data.policies || []);

  const handleAddPolicy = () => {
    setPolicies([...policies, { companyName: '', policyNo: '', period: '', totalPaid: '' }]);
  };

  const handlePolicyChange = (index, field, value) => {
    const updatedPolicies = [...policies];
    updatedPolicies[index][field] = value;
    setPolicies(updatedPolicies);
    onUpdate({ policies: updatedPolicies });
  };

  const handleSubmit = () => {
    if (policies.every(policy => policy.companyName && policy.policyNo && policy.period && !isNaN(parseFloat(policy.totalPaid)))) {
      onUpdate({ policies });
      onNext();
    } else {
      alert('Please fill all policy fields correctly. Total Paid must be a number.');
    }
  };

  return (
    <div className="policy-details">
      <h2 className="form-header">Policy Details</h2>
      <div className="form-section">
        <div className="table-section">
          <table className="policy-table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Policy Number</th>
                <th>Period</th>
                <th>Total Paid</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {policies.map((policy, index) => (
                <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                  <td>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={policy.companyName || ''}
                      onChange={(e) => handlePolicyChange(index, 'companyName', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Policy Number"
                      value={policy.policyNo || ''}
                      onChange={(e) => handlePolicyChange(index, 'policyNo', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Period"
                      value={policy.period || ''}
                      onChange={(e) => handlePolicyChange(index, 'period', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      placeholder="Total Paid"
                      value={policy.totalPaid || ''}
                      onChange={(e) => handlePolicyChange(index, 'totalPaid', e.target.value)}
                    />
                  </td>
                  <td>
                    <button
                      className="btn-remove"
                      onClick={() => {
                        const updatedPolicies = policies.filter((_, i) => i !== index);
                        setPolicies(updatedPolicies);
                        onUpdate({ policies: updatedPolicies });
                      }}
                      disabled={policies.length === 1}
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-controls">
          <button className="btn-secondary" onClick={handleAddPolicy}>Add Policy</button>
        </div>

        <div className="form-actions">
          <button className="btn btn-primary" onClick={onPrevious}>Previous</button>
          <button className="btn btn-primary" onClick={handleSubmit}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default PolicyDetails;
