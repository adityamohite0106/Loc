import React, { useState } from 'react';
import '../styles/GuarantorDetails.css';

const GuarantorDetails = ({ data, onUpdate, onNext, onPrevious }) => {
  const [guarantors, setGuarantors] = useState(data.guarantors || [{ branch: '', whom: '', amount: '', institute: '' }]);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedGuarantors = [...guarantors];
    updatedGuarantors[index] = { ...updatedGuarantors[index], [name]: value };
    setGuarantors(updatedGuarantors);
    onUpdate({ guarantors: updatedGuarantors });
  };

  const addGuarantor = () => {
    setGuarantors([...guarantors, { branch: '', whom: '', amount: '', institute: '' }]);
  };

  const validateForm = () => {
    return guarantors.some(g => g.branch && g.whom && g.amount && g.institute);
  };

  const handleNextClick = () => {
    if (validateForm()) {
      onNext();
    } else {
      alert('Please fill at least one guarantor with all required fields.');
    }
  };

  const handlePreviousClick = () => {
    onPrevious();
  };

  return (
    <div className="guarantor-details">
      <div className="form-header">Guarantor Details</div>
      <div className="form-section">
        {guarantors.map((guarantor, index) => (
          <div key={index} className="form-grid">
            <div className="form-group">
              <label>Branch *</label>
              <input
                type="text"
                name="branch"
                value={guarantor.branch}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Whom *</label>
              <input
                type="text"
                name="whom"
                value={guarantor.whom}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Amount *</label>
              <input
                type="number"
                name="amount"
                value={guarantor.amount}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Institute *</label>
              <input
                type="text"
                name="institute"
                value={guarantor.institute}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-secondary" onClick={addGuarantor}>
          Add Guarantor
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

export default GuarantorDetails;