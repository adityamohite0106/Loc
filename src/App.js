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
    directorsPartner: {},
    incomeReturns: {},
    sharesAdd: {}
  });

  const tabs = [
    { id: 0, label: 'New Application', icon: '★' },
    { id: 1, label: 'Customer Details', icon: '👤' },
    { id: 2, label: 'Bank A/c Details', icon: '🏦' },
    { id: 3, label: 'Property/ Other Firm', icon: '🏢' },
    { id: 4, label: 'Policy Details', icon: '📋' },
    { id: 5, label: 'Guarantor Details', icon: '🤝' },
    { id: 6, label: 'Directors Partner', icon: '👔' },
    { id: 7, label: 'Income / IT Returns', icon: '💰' },
    { id: 8, label: 'Shares Add', icon: '📈' }
  ];

  const updateFormData = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <NewApplication data={formData.newApplication} onUpdate={(data) => updateFormData('newApplication', data)} />;
      case 1:
        return <CustomerDetails data={formData.customerDetails} onUpdate={(data) => updateFormData('customerDetails', data)} />;
      case 2:
        return <BankDetails data={formData.bankDetails} onUpdate={(data) => updateFormData('bankDetails', data)} />;
      case 3:
        return <PropertyFirm data={formData.propertyFirm} onUpdate={(data) => updateFormData('propertyFirm', data)} />;
      case 4:
        return <PolicyDetails data={formData.policyDetails} onUpdate={(data) => updateFormData('policyDetails', data)} />;
      case 5:
        return <GuarantorDetails data={formData.guarantorDetails} onUpdate={(data) => updateFormData('guarantorDetails', data)} />;
      case 6:
        return <DirectorsPartner data={formData.directorsPartner} onUpdate={(data) => updateFormData('directorsPartner', data)} />;
      case 7:
        return <IncomeReturns data={formData.incomeReturns} onUpdate={(data) => updateFormData('incomeReturns', data)} />;
      case 8:
        return <SharesAdd data={formData.sharesAdd} onUpdate={(data) => updateFormData('sharesAdd', data)} />;
      default:
        return <NewApplication data={formData.newApplication} onUpdate={(data) => updateFormData('newApplication', data)} />;
    }
  };

  return (
    <div className="app">
      <div className="app-header">
        <h1>Loan Application Details</h1>
      </div>
      <div className="app-container">
        <Tabs 
          tabs={tabs} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
        <div className="tab-content">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default App;