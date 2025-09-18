import React, { useState } from 'react';
import Tabs from './components/Tabs';
import NewApplication from './components/NewApplication';
import CustomerDetails from './components/CustomerDetails';
import BankDetails from './components/BankDetails';
import PropertyFirm from './components/PropertyFirm';
import PolicyDetails from './components/PolicyDetails';
import GuarantorDetails from './components/GuarantorDetails';
import DirectorsPartner from './components/DirectorsPartner';
import IncomeReturns from './components/IncomeReturns';
import SharesAdd from './components/SharesAdd';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    newApplication: {},
    customerDetails: {},
    bankDetails: {},
    propertyFirm: {},
    policyDetails: {},
    guarantorDetails: {},
    directorPartner: {},
    incomeReturns: {},
    sharesAdd: {}
  });

  const tabs = [
    { id: 0, label: 'Loan Application' },
    { id: 1, label: 'Customer Details' },
    { id: 2, label: 'Bank Details' },
    { id: 3, label: 'Property/Firm' },
    { id: 4, label: 'Policy Details' },
    { id: 5, label: 'Guarantor Details' },
    { id: 6, label: 'Director/Partner' },
    { id: 7, label: 'Income Returns' },
    { id: 8, label: 'Shares Add' }
  ];

  const sections = [
    'newApplication', 'customerDetails', 'bankDetails', 'propertyFirm',
    'policyDetails', 'guarantorDetails', 'directorPartner', 'incomeReturns', 'sharesAdd'
  ];

  const components = [
    NewApplication, CustomerDetails, BankDetails, PropertyFirm,
    PolicyDetails, GuarantorDetails, DirectorsPartner, IncomeReturns, SharesAdd
  ];

  const updateFormData = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

const validateSection = (sectionId) => {
  const sectionData = formData[sections[sectionId]];
  switch (sectionId) {
    case 0: // NewApplication
      return (
        sectionData.branch &&
        sectionData.appNo &&
        sectionData.custNo &&
        sectionData.custName &&
        sectionData.typeOfLoan &&
        !isNaN(parseFloat(sectionData.amountOfLoan))
      );
    case 1: // CustomerDetails
      return (
        sectionData.appNo &&
        sectionData.brcd &&
        sectionData.customerNo &&
        sectionData.customerName &&
        sectionData.mobile &&
        sectionData.memberNo &&
        sectionData.dob &&
        sectionData.address &&
        sectionData.roadStreet &&
        sectionData.pin &&
        sectionData.city &&
        sectionData.taluka &&
        sectionData.district &&
        sectionData.state &&
        sectionData.occupation &&
        !isNaN(parseFloat(sectionData.monthlySalary)) &&
        !isNaN(parseFloat(sectionData.netSalary)) &&
        sectionData.firmName &&
        !isNaN(parseFloat(sectionData.annualIncome)) &&
        sectionData.officeAddr
      );
    case 2: // BankDetails
      return sectionData.accounts?.some(
        acc =>
          acc.type &&
          acc.branch &&
          acc.accountNo &&
          !isNaN(parseFloat(acc.balance))
      );
    case 3: // PropertyFirm
      return (
        sectionData.personalAssetsOwned &&
        sectionData.personalAssetsMortgaged &&
        sectionData.otherAssetsShares &&
        sectionData.firmDetails?.some(
          firm => firm.name && firm.business && firm.relation && firm.bankName
        )
      );
    case 4: // PolicyDetails
      return sectionData.policies?.some(
        policy =>
          policy.companyName &&
          policy.policyNo &&
          policy.period &&
          !isNaN(parseFloat(policy.totalPaid))
      );
    case 5: // GuarantorDetails
      return sectionData.guarantors?.some(
        g =>
          g.branch &&
          g.whom &&
          !isNaN(parseFloat(g.amount)) &&
          g.institute
      );
    case 6: // DirectorsPartner
      return (
        sectionData.type &&
        sectionData.rows?.some(
          row =>
            row.name &&
            row.dob &&
            !isNaN(parseFloat(row.share)) &&
            row.qualification
        )
      );
    case 7: // IncomeReturns
      return (
        sectionData.itReturns?.some(
          item =>
            item.accountingYear &&
            item.ayYear &&
            !isNaN(parseFloat(item.taxableIncome))
        ) &&
        sectionData.purchaseSale3Years?.some(
          item =>
            item.financialYear &&
            !isNaN(parseFloat(item.purchaseRs)) &&
            !isNaN(parseFloat(item.salesRs))
        )
      );
    case 8: // SharesAdd
      return (
        sectionData.applicationType &&
        sectionData.memberRefNo &&
        sectionData.customerNo &&
        sectionData.applicationNo &&
        !isNaN(parseInt(sectionData.noOfShares)) &&
        !isNaN(parseFloat(sectionData.shareValue)) &&
        sectionData.savingAccNo &&
        !isNaN(parseFloat(sectionData.totalAmount)) &&
        sectionData.remark &&
        sectionData.paymentMode
      );
    default:
      return true;
  }
};

  const handleTabChange = (tabId) => {
    if (tabId > activeTab) {
      for (let i = activeTab; i < tabId; i++) {
        if (!validateSection(i)) {
          alert(`Please complete all required fields in ${tabs[i].label} before proceeding.`);
          return;
        }
      }
    }
    setActiveTab(tabId);
  };

  const handleNext = () => {
    if (validateSection(activeTab)) {
      if (activeTab < tabs.length - 1) {
        setActiveTab(activeTab + 1);
      }
    } else {
      alert(`Please complete all required fields in ${tabs[activeTab].label} before proceeding.`);
    }
  };

  const handlePrevious = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  const handleSubmit = () => {
    if (!validateSection(activeTab)) {
      alert('Please complete all required fields in Shares Add before submitting.');
      return;
    }
    fetch('https://loc-backend-v9xf.onrender.com/api/submit-loan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.text())
      .then(text => alert(text))
      .catch(err => alert('Error submitting: ' + err));
  };

  const CurrentComponent = components[activeTab];
  const section = sections[activeTab];

  return (
    <div className="app">
      <div className="app-header">
        <h1>Loan Application Details</h1>
      </div>
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
      <div className="app-container">
        <div className="tab-content">
          <CurrentComponent
            data={formData[section]}
            onUpdate={(data) => updateFormData(section, data)}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onSubmit={activeTab === tabs.length - 1 ? handleSubmit : null}
          />
        </div>
      </div>
    </div>
  );
};

export default App;