import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import '../styles/PolicyDetails.css';

const PolicyDetails = ({ data, onUpdate, onNext, onPrevious }) => {
  const [policies, setPolicies] = useState(
    data.policies?.length > 0
      ? data.policies
      : [{ companyName: '', policyNo: '', period: '', totalPaid: '' }]
  );

  // Sync policies with parent data when it changes
  useEffect(() => {
    setPolicies(
      data.policies?.length > 0
        ? data.policies
        : [{ companyName: '', policyNo: '', period: '', totalPaid: '' }]
    );
  }, [data]);

  const handleAddPolicy = () => {
    setPolicies([...policies, { companyName: '', policyNo: '', period: '', totalPaid: '' }]);
  };

  const handlePolicyChange = (index, field, value) => {
    const updatedPolicies = [...policies];
    updatedPolicies[index] = { ...updatedPolicies[index], [field]: value };
    setPolicies(updatedPolicies);
    onUpdate({ policies: updatedPolicies });
  };

  const handleRemovePolicy = (index) => {
    if (policies.length > 1) {
      const updatedPolicies = policies.filter((_, i) => i !== index);
      setPolicies(updatedPolicies);
      onUpdate({ policies: updatedPolicies });
    }
  };

  const validateForm = () => {
    return (
      policies.length >= 1 &&
      policies.some(
        policy =>
          policy.companyName &&
          policy.policyNo &&
          policy.period &&
          !isNaN(parseFloat(policy.totalPaid)) &&
          parseFloat(policy.totalPaid) >= 0
      )
    );
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onUpdate({ policies });
      onNext();
    } else {
      toast.error('Please fill all required fields for at least one policy with a valid non-negative Total Paid amount.', {
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

  return (
    <div className="policy-details">
      <h2 className="form-header">Policy Details</h2>
      <div className="form-section">
        <div className="table-section">
          <table className="policy-table">
            <thead>
              <tr>
                <th>Company Name *</th>
                <th>Policy Number *</th>
                <th>Period *</th>
                <th>Total Paid *</th>
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
                      onChange={e => handlePolicyChange(index, 'companyName', e.target.value)}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Policy Number"
                      value={policy.policyNo || ''}
                      onChange={e => handlePolicyChange(index, 'policyNo', e.target.value)}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Period"
                      value={policy.period || ''}
                      onChange={e => handlePolicyChange(index, 'period', e.target.value)}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      placeholder="Total Paid"
                      value={policy.totalPaid || ''}
                      onChange={e => handlePolicyChange(index, 'totalPaid', e.target.value)}
                      required
                    />
                  </td>
                  <td>
                    <button
                      className="btn-remove"
                      onClick={() => handleRemovePolicy(index)}
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
          <button className="btn btn-secondary" onClick={handleAddPolicy}>
            Add Policy
          </button>
        </div>

        <div className="form-actions">
          <button className="btn btn-primary" onClick={onPrevious} style={{ marginTop: '0px' }}>
            Previous
          </button>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicyDetails;