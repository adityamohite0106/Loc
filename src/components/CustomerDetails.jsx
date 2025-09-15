import React, { useState } from "react";
import "../styles/CustomerDetails.css"; // Reuse the blue border/table style

const initialForm = {
  appNo: "",
  brcd: "",
  appDate: "",
  type: "Applicant Details",
  customerNo: "",
  customerName: "",
  mobile: "",
  memberNo: "",
  dob: "",
  dependants: "",
  maritalStatus: "",
  address: "",
  roadStreet: "",
  nearOpp: "",
  city: "",
  pin: "",
  taluka: "",
  district: "",
  state: "",
  occupation: "",
  officeContact: "",
  officeLandline: "",
  designation: "",
  completedYear: "",
  monthlySalary: "",
  netSalary: "",
  firmName: "",
  proprietor: "",
  shares: "",
  annualIncome: "",
  orgType: "",
  businessType: "",
  goods: "",
  estDate: "",
  area: "",
  shopAct: "",
  salesTax: "",
  pan: "",
  investment: "",
  market: "",
  competition: "",
  officeAddr: "",
  officeRoad: "",
  officeNearOpp: "",
};

const maritalOptions = ["Married", "UnMarried"];
const stateOptions = ["MAHARASHTRA", "GUJARAT", "MADHYA PRADESH"];
const orgTypes = ["Proprietorship", "Partnership", "LLP", "Pvt Ltd", "Other"];
const businessTypes = ["Wholesale", "Semi Wholesale", "Retail", "Other"];

const CustomerDetails = ({ data = {} }) => {
  const [form, setForm] = useState({ ...initialForm, ...data });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="bank-details-plain">
      <div className="form-header">
        Customer Account Detail's
        </div>
      {/* Application Info */}
      <div className="accounts-table">
        <div className="accounts-row">
          <div>
            <label>AppNo *</label>
            <input name="appNo" value={form.appNo} onChange={handleChange} placeholder="Enter Application No" />
          </div>
          <div>
            <label>BRCD *</label>
            <input name="brcd" value={form.brcd} onChange={handleChange} placeholder="Enter BRCD" />
          </div>
          <div>
            <label>Application Sale Date</label>
            <input name="appDate" value={form.appDate} onChange={handleChange} placeholder="DD/MM/YYYY" />
          </div>
        </div>
        <div className="accounts-row">
          <div>
            <label>Type *</label>
            <select name="type" value={form.type} onChange={handleChange}>
              <option>Applicant Details</option>
              <option>Co-Applicant Details</option>
              <option>Surity Details</option>
            </select>
          </div>
          <div  style={{ gridColumn: "span 2", display: "flex", flexDirection: "row",  }}>
           <div style={{ display: "flex", flexDirection: "column", }}>
            <label>Customer No*</label>
            <input name="customerNo" value={form.customerNo} onChange={handleChange} style={{ width: "56%" }} placeholder="Customer No" />
           </div>
            <div style={{ display: "flex", flexDirection: "column", }}>
            <label style={{ marginLeft: "4%" }}>Customer Name *</label>
            <input name="customerName" value={form.customerName} onChange={handleChange} style={{ width: "100%", marginLeft: "4%" }} placeholder="Customer Name" />
            </div>

          </div>
          <div>
            <label>Mobile No *</label>
            <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile No" />
          </div>
          <div>
            <label>Member No *</label>
            <input name="memberNo" value={form.memberNo} onChange={handleChange} placeholder="Member No" />
          </div>
        </div>
        <div className="accounts-row">
          <div>
            <label>Date of Birth *</label>
            <input type="date" name="dob" value={form.dob} onChange={handleChange} placeholder="Date of Birth" />
          </div>
          <div>
            <label>No of Dependence</label>
            <input name="dependants" value={form.dependants} onChange={handleChange} placeholder="No of Dependants" />
          </div>
          <div>
            <label>Marital Status</label>
            <select name="maritalStatus" value={form.maritalStatus} onChange={handleChange}>
              <option value="">Select</option>
              {maritalOptions.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="section-subheader">Current Address Detail's :</div>
      <div className="accounts-table">
        <div className="accounts-row">
          <div>
            <label>Addr Line 1 *</label>
            <input name="address" value={form.address} onChange={handleChange} placeholder="Address Line 1" />
          </div>
          <div>
            <label>Road/Street *</label>
            <input name="roadStreet" value={form.roadStreet} onChange={handleChange} placeholder="Road/Street" />
          </div>
          <div>
            <label>Near/Opp</label>
            <input name="nearOpp" value={form.nearOpp} onChange={handleChange} placeholder="Near/Opp" />
          </div>
        </div>
        <div className="accounts-row">
          <div>
            <label>PIN Code *</label>
            <input name="pin" value={form.pin} onChange={handleChange} placeholder="PIN Code" />
          </div>
          <div>
            <label>City *</label>
            <input name="city" value={form.city} onChange={handleChange} placeholder="City" />
          </div>
          <div>
            <label>Taluka *</label>
            <input name="taluka" value={form.taluka} onChange={handleChange} placeholder="Taluka" />
          </div>
          <div>
            <label>District *</label>
            <input name="district" value={form.district} onChange={handleChange} placeholder="District" />
          </div>
          <div>
            <label>State *</label>
            <select name="state" value={form.state} onChange={handleChange}>
              <option value="">Select</option>
              {stateOptions.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Income Section */}
      <div className="section-subheader">Income Detail's :</div>
      <div className="accounts-table">
        <div className="accounts-row">
          <div>
            <label>Occupation *</label>
            <select name="occupation" value={form.occupation} onChange={handleChange}>
              <option value="">Select</option>
              <option>SERVICE</option>
              <option>BUSINESS</option>
              <option>OTHER</option>
            </select>
          </div>
          <div>
            <label>Office Contact no</label>
            <input name="officeContact" value={form.officeContact} onChange={handleChange} placeholder="Office Contact No" />
          </div>
          <div>
            <label>Office Landline no</label>
            <input name="officeLandline" value={form.officeLandline} onChange={handleChange} placeholder="Office Landline No" />
          </div>
        </div>
        <div className="accounts-row">
          <div>
            <label>Designation</label>
            <input name="designation" value={form.designation} onChange={handleChange} placeholder="Designation" />
          </div>
          <div>
            <label>Completed Year</label>
            <input name="completedYear" value={form.completedYear} onChange={handleChange} placeholder="Completed Year" />
          </div>
          <div>
            <label>Monthly Salary *</label>
            <input name="monthlySalary" value={form.monthlySalary} onChange={handleChange} placeholder="Monthly Salary" />
          </div>
          <div>
            <label>Net Salary in Hand *</label>
            <input name="netSalary" value={form.netSalary} onChange={handleChange} placeholder="Net Salary in Hand" />
          </div>
        </div>
      </div>

      {/* Business Section */}
      <div className="section-subheader">Business / Firm / Office Information :</div>
      <div className="accounts-table">
        <div className="accounts-row">
          <div>
            <label>Name of Firm *</label>
            <input name="firmName" value={form.firmName} onChange={handleChange} placeholder="Firm Name" />
          </div>
          <div>
            <label>Proprietor/Partner</label>
            <input name="proprietor" value={form.proprietor} onChange={handleChange} placeholder="Proprietor/Partner" />
          </div>
          <div>
            <label>Shares in Business</label>
            <input name="shares" value={form.shares} onChange={handleChange} placeholder="Shares in Business" />
          </div>
          <div>
            <label>Annual Income *</label>
            <input name="annualIncome" value={form.annualIncome} onChange={handleChange} placeholder="Annual Income" />
          </div>
        </div>
        <div className="accounts-row">
          <div>
            <label>Type of Organisation</label>
            <select name="orgType" value={form.orgType} onChange={handleChange}>
              <option value="">Select</option>
              {orgTypes.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label>Type of business</label>
            <select name="businessType" value={form.businessType} onChange={handleChange}>
              <option value="">Select</option>
              {businessTypes.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label>Description Of Goods</label>
            <input name="goods" value={form.goods} onChange={handleChange} placeholder="Description Of Goods" />
          </div>
          <div>
            <label>Date Of Establishment</label>
            <input name="estDate" value={form.estDate} onChange={handleChange} placeholder="Date Of Establishment" />
          </div>
        </div>
        <div className="accounts-row">
          <div>
            <label>Area of Operation</label>
            <input name="area" value={form.area} onChange={handleChange} placeholder="Area of Operation" />
          </div>
          <div>
            <label>Shop Act Licence No</label>
            <input name="shopAct" value={form.shopAct} onChange={handleChange} placeholder="Shop Act Licence No" />
          </div>
          <div>
            <label>Sales Tax No</label>
            <input name="salesTax" value={form.salesTax} onChange={handleChange} placeholder="Sales Tax No" />
          </div>
          <div>
            <label>PAN</label>
            <input name="pan" value={form.pan} onChange={handleChange} placeholder="PAN" />
          </div>
        </div>
        <div className="accounts-row">
          <div>
            <label>Investment In Business</label>
            <input name="investment" value={form.investment} onChange={handleChange} placeholder="Investment In Business" />
          </div>
          <div>
            <label>Market For Business</label>
            <input name="market" value={form.market} onChange={handleChange} placeholder="Market For Business" />
          </div>
          <div>
            <label>Competition in Business</label>
            <input name="competition" value={form.competition} onChange={handleChange} placeholder="Competition in Business" />
          </div>
        </div>
      </div>

      {/* Company Address Section */}
      <div className="section-subheader">Company Address Details :</div>
      <div className="accounts-table">
        <div className="accounts-row">
          <div>
            <label>Addr Line 1 *</label>
            <input name="officeAddr" value={form.officeAddr} onChange={handleChange} placeholder="Company Address Line 1" />
          </div>
          <div>
            <label>Road/Street</label>
            <input name="officeRoad" value={form.officeRoad} onChange={handleChange} placeholder="Road/Street" />
          </div>
          <div>
            <label>Near/Opp</label>
            <input name="officeNearOpp" value={form.officeNearOpp} onChange={handleChange} placeholder="Near/Opp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
