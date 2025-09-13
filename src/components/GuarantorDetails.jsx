import React, { useState } from "react";
import "../styles/GuarantorDetails.css";

const emptyGuarantor = { branch: "", whom: "", amount: "", institute: "" };
const emptyOtherGuarantor = { whom: "", amount: "", institute: "" };

const GuarantorDetails = ({ data = {}, onUpdate = () => {} }) => {
  const [guarantors, setGuarantors] = useState(
    data.guarantors && data.guarantors.length > 0
      ? [...data.guarantors]
      : [emptyGuarantor, emptyGuarantor, emptyGuarantor]
  );
  const [otherGuarantors, setOtherGuarantors] = useState(
    data.otherGuarantors && data.otherGuarantors.length > 0
      ? [...data.otherGuarantors]
      : [emptyOtherGuarantor, emptyOtherGuarantor, emptyOtherGuarantor]
  );

  const handleGuarantorChange = (idx, e) => {
    const updated = [...guarantors];
    updated[idx] = { ...updated[idx], [e.target.name]: e.target.value };
    setGuarantors(updated);
    onUpdate({ guarantors: updated, otherGuarantors });
  };

  const handleOtherGuarantorChange = (idx, e) => {
    const updated = [...otherGuarantors];
    updated[idx] = { ...updated[idx], [e.target.name]: e.target.value };
    setOtherGuarantors(updated);
    onUpdate({ guarantors, otherGuarantors: updated });
  };

  return (
    <div className="guarantor-details-container">
      <div className="form-header">Guarantor Details</div>
      <div className="accounts-table">
        <div className="accounts-row header">
          <div>Branch</div>
          <div>Guarantor Whom</div>
          <div>Loan Amount</div>
          <div>Name of institute & Branch</div>
        </div>
        {guarantors.map((g, i) => (
          <div className="accounts-row" key={i}>
            <input
              name="branch"
              value={g.branch}
              onChange={e => handleGuarantorChange(i, e)}
              autoComplete="off"
            />
            <input
              name="whom"
              value={g.whom}
              onChange={e => handleGuarantorChange(i, e)}
              autoComplete="off"
            />
            <input
              name="amount"
              value={g.amount}
              onChange={e => handleGuarantorChange(i, e)}
              autoComplete="off"
            />
            <input
              name="institute"
              value={g.institute}
              onChange={e => handleGuarantorChange(i, e)}
              autoComplete="off"
            />
          </div>
        ))}
      </div>

      <div className="section-subheader blue-link">
        Guarantor to anyone in other Fin. Institution
      </div>
      <div className="accounts-table">
        <div className="accounts-row header">
          <div>Guarantor Whom</div>
          <div>Loan Amount</div>
          <div>Name of Institute & Branch</div>
        </div>
        {otherGuarantors.map((g, i) => (
          <div className="accounts-row" key={i}>
            <input
              name="whom"
              value={g.whom}
              onChange={e => handleOtherGuarantorChange(i, e)}
              autoComplete="off"
            />
            <input
              name="amount"
              value={g.amount}
              onChange={e => handleOtherGuarantorChange(i, e)}
              autoComplete="off"
            />
            <input
              name="institute"
              value={g.institute}
              onChange={e => handleOtherGuarantorChange(i, e)}
              autoComplete="off"
            />
          </div>
        ))}
      </div>
      <div className="guarantor-actions">
        <button className="btn-primary" type="button">Next</button>
      </div>
    </div>
  );
};

export default GuarantorDetails;
