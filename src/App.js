import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    bankDetails: { accounts: [] },
    propertyFirm: { firmDetails: [] },
    policyDetails: { policies: [] },
    guarantorDetails: { guarantors: [] },
    directorPartner: { rows: [], type: '' },
    incomeReturns: { itReturns: [], purchaseSale3Years: [] },
    sharesAdd: {}
  });
  const [validatedTabs, setValidatedTabs] = useState(new Array(9).fill(false)); // Track validated tabs

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
        return Array.isArray(sectionData.accounts) && sectionData.accounts.length > 0 && sectionData.accounts.every(
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
          Array.isArray(sectionData.firmDetails) && sectionData.firmDetails.length > 0 && sectionData.firmDetails.every(
            firm => firm.name && firm.business && firm.relation && firm.bankName
          )
        );
      case 4: // PolicyDetails
        return Array.isArray(sectionData.policies) && sectionData.policies.length > 0 && sectionData.policies.every(
          policy =>
            policy.companyName &&
            policy.policyNo &&
            policy.period &&
            !isNaN(parseFloat(policy.totalPaid))
        );
      case 5: // GuarantorDetails
        return Array.isArray(sectionData.guarantors) && sectionData.guarantors.length > 0 && sectionData.guarantors.every(
          g =>
            g.branch &&
            (g.name || g.whom) &&
            !isNaN(parseFloat(g.amount)) &&
            g.institute
        );
      case 6: // DirectorsPartner
        return (
          sectionData.type &&
          Array.isArray(sectionData.rows) && sectionData.rows.length > 0 && sectionData.rows.every(
            row =>
              row.name &&
              row.dob &&
              !isNaN(parseFloat(row.share)) &&
              row.qualification
          )
        );
      case 7: // IncomeReturns
        return (
          Array.isArray(sectionData.itReturns) && sectionData.itReturns.length > 0 && sectionData.itReturns.every(
            item =>
              item.accountingYear &&
              item.ayYear &&
              !isNaN(parseFloat(item.taxableIncome))
          ) &&
          Array.isArray(sectionData.purchaseSale3Years) && sectionData.purchaseSale3Years.length > 0 && sectionData.purchaseSale3Years.every(
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
    setActiveTab(tabId);
  };

  const handleNext = () => {
    // Validate the current tab
    if (validateSection(activeTab)) {
      // Mark current tab as validated
      setValidatedTabs(prev => {
        const newValidatedTabs = [...prev];
        newValidatedTabs[activeTab] = true;
        return newValidatedTabs;
      });
      if (activeTab < tabs.length - 1) {
        setActiveTab(activeTab + 1);
      }
    } else {
      toast.error(`Please complete all required fields in "${tabs[activeTab].label}" to proceed.`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored"
      });
    }
  };

  const handlePrevious = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  const handleSubmit = () => {
    // Validate all sections before submission
    for (let i = 0; i < tabs.length; i++) {
      if (!validateSection(i)) {
        toast.error(`Please complete all required fields in "${tabs[i].label}" before submitting.`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored"
        });
        setActiveTab(i); // Switch to the first invalid tab
        return;
      }
    }

    // If all validations pass, proceed with submission
    console.log('FormData being sent:', JSON.stringify(formData, null, 2));
    fetch('https://loc-backend-v9xf.onrender.com/api/submit-loan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => {
        console.log('Response status:', res.status, res.statusText);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then(data => {
        console.log('Response data:', data);
        toast.success(data.message || 'Loan application submitted successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored"
        });
      })
      .catch(err => {
        console.error('Fetch error:', err);
        toast.error(`Error submitting: ${err.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored"
        });
      });
  };

  const CurrentComponent = components[activeTab];
  const section = sections[activeTab];

  return (
    <div className="app">
      <div className="app-header">
        <h1>Loan Application Details</h1>
      </div>
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} validatedTabs={validatedTabs} />
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
      <ToastContainer />
    </div>
  );
};

export default App;