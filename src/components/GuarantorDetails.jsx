import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import '../styles/GuarantorDetails.css';

const GuarantorDetails = ({ data, onUpdate, onNext, onPrevious }) => {
  const [guarantors, setGuarantors] = useState(
    data.guarantors?.length > 0
      ? data.guarantors
      : [{ branch: '', whom: '', amount: '', institute: '' }]
  );

  // Sync guarantors with parent data when it changes
  useEffect(() => {
    setGuarantors(
      data.guarantors?.length > 0
        ? data.guarantors
        : [{ branch: '', whom: '', amount: '', institute: '' }]
    );
  }, [data]);

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
    return (
      guarantors.length >= 1 &&
      guarantors.some(
        g =>
          g.branch &&
          g.whom &&
          !isNaN(parseFloat(g.amount)) &&
          parseFloat(g.amount) >= 0 &&
          g.institute
      )
    );
  };

  const handleNextClick = () => {
    if (validateForm()) {
      onNext();
    } else {
      toast.error('Please fill all required fields for at least one guarantor.', {
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
                onChange={e => handleInputChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Whom *</label>
              <input
                type="text"
                name="whom"
                value={guarantor.whom}
                onChange={e => handleInputChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Amount *</label>
              <input
                type="number"
                name="amount"
                value={guarantor.amount}
                onChange={e => handleInputChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Institute *</label>
              <input
                type="text"
                name="institute"
                value={guarantor.institute}
                onChange={e => handleInputChange(index, e)}
                required
              />
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-secondary" onClick={addGuarantor}>
          Add Guarantor
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

export default GuarantorDetails;