import React, { useState } from "react";
import "../styles/CustomerDetails.css"; // Reuse the blue/white style

const emptyRow = { name: "", dob: "", share: "", qualification: "" };

const DirectorPartner = ({ data = {}, onUpdate = () => {} }) => {
  const [type, setType] = useState(data.type || "Partner");
  const [rows, setRows] = useState(
    data.rows && data.rows.length > 0
      ? [...data.rows]
      : [emptyRow, emptyRow, emptyRow, emptyRow, emptyRow]
  );

  const handleTypeChange = (e) => {
    setType(e.target.value);
    onUpdate({ ...data, type: e.target.value, rows });
  };

  const handleRowChange = (idx, e) => {
    const updated = [...rows];
    updated[idx] = { ...updated[idx], [e.target.name]: e.target.value };
    setRows(updated);
    onUpdate({ ...data, type, rows: updated });
  };

  return (
    <div className="customer-details-container">
      <div className="form-header">Directors Partner</div>
      <div className="accounts-table" style={{ paddingBottom: 0 }}>
        <div style={{ padding: "18px 0 10px 0" }}>
          <label style={{ marginRight: 24 }}>
            <input
              type="radio"
              name="type"
              value="Director"
              checked={type === "Director"}
              onChange={handleTypeChange}
              style={{ marginRight: 6 }}
            />
            Director
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="Partner"
              checked={type === "Partner"}
              onChange={handleTypeChange}
              style={{ marginRight: 6 }}
            />
            Partner
          </label>
        </div>
        <div className="accounts-row header">
          <div>Sr.No.</div>
          <div>Name</div>
          <div>DOB</div>
          <div>Share in Business</div>
          <div>Education / Qualification</div>
        </div>
        {rows.map((row, i) => (
          <div className="accounts-row" key={i}>
            <input value={i + 1} readOnly style={{ background: "#f5faff" }} />
            <input
              name="name"
              value={row.name}
              onChange={e => handleRowChange(i, e)}
              autoComplete="off"
            />
            <input
              name="dob"
              type="date"
              value={row.dob}
              onChange={e => handleRowChange(i, e)}
              autoComplete="off"
            />
            <input
              name="share"
              value={row.share}
              onChange={e => handleRowChange(i, e)}
              autoComplete="off"
            />
            <input
              name="qualification"
              value={row.qualification}
              onChange={e => handleRowChange(i, e)}
              autoComplete="off"
            />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", padding: "20px 0" }}>
        <button className="btn-primary" type="button">Next</button>
      </div>
    </div>
  );
};

export default DirectorPartner;