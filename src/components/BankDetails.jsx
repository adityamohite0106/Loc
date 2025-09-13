import React from "react";
import "../styles/BankDetails.css";

const BankDetails = ({ data = {}, onUpdate = () => {} }) => {
  // Prepare at least 3 empty rows for each section
  const mainAccounts =
    (data.accounts && data.accounts.length > 0
      ? [...data.accounts]
      : [{}, {}, {}]);

  const otherBankAccounts = [{}, {}, {}];
  const otherLoans = [{}, {}, {}];

  const handleMainChange = (index, e) => {
    const newAccounts = [...mainAccounts];
    newAccounts[index] = { ...newAccounts[index], [e.target.name]: e.target.value };
    onUpdate({ accounts: newAccounts });
  };

  return (
    <div className="bank-details-plain">
      <div className="form-header">Particulars of A/c with Bank</div>
      <div className="accounts-table">
        <div className="accounts-row header">
          <div>Type of A/c</div>
          <div>Branch</div>
          <div>A/c No.</div>
          <div>Debit/Credit Bal.</div>
        </div>
        {mainAccounts.map((acc, i) => (
          <div className="accounts-row" key={i}>
            <input
              name="type"
              value={acc.type || ""}
              onChange={e => handleMainChange(i, e)}
              autoComplete="off"
            />
            <input
              name="branch"
              value={acc.branch || ""}
              onChange={e => handleMainChange(i, e)}
              autoComplete="off"
            />
            <input
              name="accountNo"
              value={acc.accountNo || ""}
              onChange={e => handleMainChange(i, e)}
              autoComplete="off"
            />
            <input
              name="balance"
              value={acc.balance || ""}
              onChange={e => handleMainChange(i, e)}
              autoComplete="off"
            />
          </div>
        ))}
      </div>

      <div className="section-subheader">CC/SB/DEPOSIT A/cs with other Bank</div>
      <div className="accounts-table">
        <div className="accounts-row header">
          <div>Type of A/c</div>
          <div>A/c No.</div>
          <div>Bank</div>
          <div>Branch</div>
        </div>
        {otherBankAccounts.map((acc, i) => (
          <div className="accounts-row" key={i}>
            <input name="type" autoComplete="off" />
            <input name="accountNo" autoComplete="off" />
            <input name="bank" autoComplete="off" />
            <input name="branch" autoComplete="off" />
          </div>
        ))}
      </div>

      <div className="section-subheader blue-link">
        If you have taken Loan from any other Bank / Financial Institution give details
      </div>
      <div className="accounts-table">
        <div className="accounts-row header">
          <div>Name of firm Institution & Branch</div>
          <div>Loan Amt.</div>
          <div>Amt. Outstanding</div>
          <div>Security</div>
        </div>
        {otherLoans.map((acc, i) => (
          <div className="accounts-row" key={i}>
            <input name="firm" autoComplete="off" />
            <input name="loanAmt" autoComplete="off" />
            <input name="outstanding" autoComplete="off" />
            <input name="security" autoComplete="off" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankDetails;