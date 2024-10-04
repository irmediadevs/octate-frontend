import React, { useState } from "react";
import styled from "styled-components";
import SideNav from "../components/mainNav/SideNav";
import Dashboard from "../pages/dashboard/Dashboard";
// import ChartOfAccountsList from "../pages/Finance/ChartOfAccountsList";
// import CustomerList from "../pages/OrderToCash/CustomerList";
// import PriceList from "../pages/OrderToCash/PriceList";
// import SalesAgents from "../pages/OrderToCash/SalesAgents";
// import SalesQoutation from "../pages/OrderToCash/Transactions/SalesQoutation";
// import CurrencyList from "../pages/Finance/CurrencyList";
// import SalesOrder from "../pages/OrderToCash/Transactions/SalesOrder";
// import DeliveryNote from "../pages/OrderToCash/Transactions/DeliveryNote";
// import CustomerReturn from "../pages/OrderToCash/Transactions/CustomerReturn";
// import SalesInvoice from "../pages/OrderToCash/Transactions/SalesInvoice";
// import CreditNote from "../pages/OrderToCash/Transactions/CreditNote";
// import BudgetList from "../pages/Finance/BudgetList";
// import CashFlow from "../pages/Finance/CashFlow";
// import TaxSetup from "../pages/Finance/TaxSetup";
// import O2Cadjustment from "../pages/OrderToCash/Transactions/O2Cadjustment";
// import RecurringInvoice from "../pages/OrderToCash/Transactions/RecurringInvoice";
// import JournalEntryList from "../pages/Finance/Transactions/JournalEntryList";
// import RecurringTransactions from "../pages/Finance/Transactions/RecurringTransactions";
// import ForexRevaluation from "../pages/Finance/Transactions/ForexRevaluation";
// import GeneralJournalEntryList from "../pages/Finance/Transactions/GeneralJournalEntries";
// import SupplierList from "../pages/ProcureToPay/SupplierList";
// import GoodsReceiptNote from "../pages/ProcureToPay/Transactions/GoodsReceiptNote";
// import ReturnToSupplier from "../pages/ProcureToPay/Transactions/ReturnToSupplier";
// import PurchaseOrder from "../pages/ProcureToPay/Transactions/PurchaseOrder";
// import PurchaseInvoice from "../pages/ProcureToPay/Transactions/PurchaseInvoice";
// import DebitNote from "../pages/ProcureToPay/Transactions/DebitNote";
// import LandedCost from "../pages/ProcureToPay/LandedCost";
// import BlanketOrder from "../pages/ProcureToPay/BlanketOrder";
// import JournalEntryReversal from "../pages/Finance/Transactions/JournalEntryReversal";
// import ProductsList from "../pages/Products&Services/ProductsList";
// import Location from "../pages/Products&Services/Location";
// import PurchaseReq from "../pages/ProcureToPay/Transactions/PurchaseReq";
// import SupplierPayment from "../pages/ProcureToPay/Transactions/SupplierPayment";
// import CustomerPayment from "../pages/OrderToCash/Transactions/CustomerPayment";
// import Unit from "../pages/Products&Services/Unit";
// import BillMaterials from "../pages/Products&Services/BillMaterials";
// import PriceListProducts from "../pages/Products&Services/PriceListProducts";
// import Discount from "../pages/Products&Services/Discount";
// import BankingAccounts from "../pages/Banking/BankingAccounts";
// import BankReclonisation from "../pages/Banking/Transactions/BankReclonisation";
// import SupplierPayment2 from "../pages/Banking/Transactions/SupplierPayment";
// import CustomerPay from "../pages/Banking/Transactions/CustomerPay";
// import Main from "../pages/OrderToCash/Layout&Template/Main";
// import Main4 from "../pages/Banking/Layout&Template/Main";
// import Main3 from "../pages/Products&Services/Layout&Template/Main";
// import Main2 from "../pages/ProcureToPay/Layout&Template/Main";
// import BankDeposit from "../pages/Banking/Transactions/BankDeposit";
// import ChartOfAccountNew from "../New-Screens/ChartOfAccountNew";
// import JornalEntrynew from "../New-Screens/JornalEntrynew";
// import P2PAdjustment from "../pages/ProcureToPay/Transactions/P2PAdustment";
// import StockAdjustment from "../pages/Products&Services/Transactions/StockAdjustment";
// import PickListPackaging from "../pages/Products&Services/Transactions/PickListPackaging";
// import InspectionList from "../pages/Products&Services/Transactions/InspectionList";
// import StockTransfers from "../pages/Products&Services/Transactions/StockTransfers";
// import Production from "../pages/Products&Services/Transactions/Production";
// import Disassembly from "../pages/Products&Services/Transactions/Disassembly";
// import StockRevaluation from "../pages/Products&Services/Transactions/StockRevaluation";
// import FinanceSetting from "../pages/Finance/FinanceSettings/FinanceSetting";
// import CompanySettings from "../pages/Configuration/CompanySettings";
// import CustomFields from "../pages/Configuration/CustomFields";

const Container = styled.div`
  display: flex;
`;

const Navigator = () => {
  const [selectedOption, setSelectedOption] = useState("Dashboard");
  const [toggle, setToggle] = useState(false);

  const handleOptionClick = (option) => {
    if (selectedOption === option) {
      setToggle((prev) => !prev);
    } else {
      setSelectedOption(option);
      setToggle(false);
    }
  };

  const handleBreadcrumbClick = (option) => {
    setSelectedOption(option);
  };

  const renderSelectedOption = () => {
    if (selectedOption === "Dashboard") {
      return <Dashboard />;
    } 
  //   else if (selectedOption === "KEY10010") {
  //     return (
  //       <ChartOfAccountsList
  //         key={toggle}
  //         onBreadcrumbClick={handleBreadcrumbClick}
  //       />
  //     );
  //   } 
  //   else if (selectedOption === "KEY10013") {
  //     return <CurrencyList onBreadcrumbClick={handleBreadcrumbClick} key={toggle} />;
  //   } 
  //   else if (selectedOption === "KEY10014") {
  //     return <BudgetList />;
  //   } 
  //   else if (selectedOption === "KEY10015") {
  //     return <CashFlow />;
  //   } 
  //   else if (selectedOption === "KEY10017") {
  //     return <TaxSetup />;
  //   } 
  //   else if (selectedOption === "KEY10024") {
  //     return <CustomerList />;
  //   } 
  //   else if (selectedOption === "KEY10025") {
  //     return <PriceList />;
  //   } 
  //   else if (selectedOption === "KEY10026") {
  //     return <SalesAgents />;
  //   } 
  //   else if (selectedOption === "Sales Quotation") {
  //     return <SalesQoutation />;
  //   } 
  //   else if (selectedOption === "Sales Order") {
  //     return <SalesOrder />;
  //   } 
  //   else if (selectedOption === "Stock Adjustment") {
  //     return <StockAdjustment />;
  //   } 
  //   else if (selectedOption === "Pick List & Packaging") {
  //     return <PickListPackaging />;
  //   } 
  //   else if (selectedOption === "Inspection List") {
  //     return <InspectionList />;
  //   } 
  //   else if (selectedOption === "Stock Transfer") {
  //     return <StockTransfers />;
  //   } 
  //   else if (selectedOption === "Production") {
  //     return <Production />;
  //   } 
  //   else if (selectedOption === "Disassembly") {
  //     return <Disassembly />;
  //   } 
  //   else if (selectedOption === "Stock Revaluation") {
  //     return <StockRevaluation />;
  //   } 
  //   else if (selectedOption === "Delivery Note") {
  //     return <DeliveryNote />;
  //   } 
  //   else if (selectedOption === "Customer Return") {
  //     return <CustomerReturn />;
  //   } 
  //   else if (selectedOption === "Sales Invoice") {
  //     return <SalesInvoice />;
  //   } 
  //   else if (selectedOption === "Credit Note") {
  //     return <CreditNote />;
  //   } 
  //   else if (selectedOption === "O2C Adjustment Entry") {
  //     return <O2Cadjustment />;
  //   } 
  //   else if (selectedOption === "P2P Adjustment Entry") {
  //     return <P2PAdjustment />;
  //   } 
  //   else if (selectedOption === "Recurring Invoice") {
  //     return <RecurringInvoice />;
  //   } 
  //   else if (selectedOption === "Journal Entry List") {
  //     return <JournalEntryList key={toggle} />;
  //   } 
  //   else if (selectedOption === "Recurring Transaction") {
  //     return <RecurringTransactions />;
  //   } 
  //   else if (selectedOption === "Forex Revaluation") {
  //     return <ForexRevaluation />;
  //   } 
  //   else if (selectedOption === "General Journal Entries") {
  //     return <GeneralJournalEntryList />;
  //   } 
  //   else if (selectedOption === "KEY10036") {
  //     return <SupplierList />;
  //   } 
  //   else if (selectedOption === "Purchase Order") {
  //     return <PurchaseOrder />;
  //   } 
  //   else if (selectedOption === "Goods Receipt Note") {
  //     return <GoodsReceiptNote />;
  //   } 
  //   else if (selectedOption === "Return to Supplier") {
  //     return <ReturnToSupplier />;
  //   } 
  //   else if (selectedOption === "Purchase Invoice") {
  //     return <PurchaseInvoice />;
  //   } 
  //   else if (selectedOption === "Debit Note") {
  //     return <DebitNote />;
  //   } 
  //   else if (selectedOption === "KEY10037") {
  //     return <BlanketOrder />;
  //   } 
  //   else if (selectedOption === "KEY10038") {
  //     return <LandedCost />;
  //   } 
  //   else if (selectedOption === "Journal Entry Reversal") {
  //     return <JournalEntryReversal />;
  //   } 
  //   else if (selectedOption === "KEY10051") {
  //     return <ProductsList />;
  //   } 
  //   else if (selectedOption === "KEY10052") {
  //     return <Location />;
  //   } 
  //   else if (selectedOption === "Purchase Request") {
  //     return <PurchaseReq />;
  //   } 
  //   else if (selectedOption === "Supplier Payment") {
  //     return <SupplierPayment />;
  //   } 
  //   else if (selectedOption === "Customer Payment") {
  //     return <CustomerPayment />;
  //   } 
  //   else if (selectedOption === "KEY10053") {
  //     return <Unit />;
  //   } 
  //   else if (selectedOption === "KEY10054") {
  //     return <BillMaterials />;
  //   } 
  //   else if (selectedOption === "Price List Products") {
  //     return <PriceListProducts />;
  //   } 
  //   else if (selectedOption === "Discount") {
  //     return <Discount />;
  //   } 
  //   else if (selectedOption === "Bank Accounts") {
  //     return <BankingAccounts />;
  //   } 
  //   else if (selectedOption === "Bank Reclonisation") {
  //     return <BankReclonisation />;
  //   } 
  //   else if (selectedOption === "Supplier Payment") {
  //     return <SupplierPayment2 />;
  //   } 
  //   else if (selectedOption === "Customer Payment") {
  //     return <CustomerPay />;
  //   } 
  //   else if (selectedOption === "O2C Layout & Template") {
  //     return <Main />;
  //   } 
  //   else if (selectedOption === "Products Layout & Template") {
  //     return <Main3 />;
  //   } 
  //   else if (selectedOption === "P2P Layout & Template") {
  //     return <Main2 />;
  //   } 
  //   else if (selectedOption === "Bank Layout & Template") {
  //     return <Main4 />;
  //   } 
  //   else if (selectedOption === "Bank Deposit") {
  //     return <BankDeposit />;
  //   } 
  //   else if (selectedOption === "Finance Setting") {
  //     return <FinanceSetting />;
  //   } 
  //   else if (selectedOption === "Company Settings") {
  //     return <CompanySettings />;
  //   } 
  //   else if (selectedOption === "Custom Fields") {
  //     return <CustomFields />;
  //   }
  //   return null;
  };

  return (
    <Container>
      <SideNav onOptionClick={handleOptionClick} />
      {renderSelectedOption()}
    </Container>
  );
};

export default Navigator;
