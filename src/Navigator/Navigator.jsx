import React, { useState } from "react";
import styled from "styled-components";
import SideNav from "../components/mainNav/SideNav";
import Dashboard from "../pages/dashboard/Dashboard";
const ChartOfAccountsList = React.lazy(() =>
  import("../pages/Finance/ChartOfAccountsList").then((module) => module.default)
);
const CustomerList = React.lazy(() =>
  import("../pages/OrderToCash/CustomerList")
);
const PriceList = React.lazy(() => import("../pages/OrderToCash/PriceList"));
const SalesAgents = React.lazy(() =>
  import("../pages/OrderToCash/SalesAgents")
);
const SalesQuotation = React.lazy(() =>
  import("../pages/OrderToCash/Transactions/SalesQoutation")
);
const CurrencyList = React.lazy(() => import("../pages/Finance/CurrencyList"));
const SalesOrder = React.lazy(() =>
  import("../pages/OrderToCash/Transactions/SalesOrder")
);
const DeliveryNote = React.lazy(() =>
  import("../pages/OrderToCash/Transactions/DeliveryNote")
);
const CustomerReturn = React.lazy(() =>
  import("../pages/OrderToCash/Transactions/CustomerReturn")
);
const SalesInvoice = React.lazy(() =>
  import("../pages/OrderToCash/Transactions/SalesInvoice")
);
const CreditNote = React.lazy(() =>
  import("../pages/OrderToCash/Transactions/CreditNote")
);
const BudgetList = React.lazy(() => import("../pages/Finance/BudgetList"));
const CashFlow = React.lazy(() => import("../pages/Finance/CashFlow"));
const TaxSetup = React.lazy(() => import("../pages/Finance/TaxSetup"));
const O2Cadjustment = React.lazy(() =>
  import("../pages/OrderToCash/Transactions/O2Cadjustment")
);
const RecurringInvoice = React.lazy(() =>
  import("../pages/OrderToCash/Transactions/RecurringInvoice")
);
const JournalEntryList = React.lazy(() =>
  import("../pages/Finance/Transactions/JournalEntryList")
);
const RecurringTransactions = React.lazy(() =>
  import("../pages/Finance/Transactions/RecurringTransactions")
);
const ForexRevaluation = React.lazy(() =>
  import("../pages/Finance/Transactions/ForexRevaluation")
);
const GeneralJournalEntryList = React.lazy(() =>
  import("../pages/Finance/Transactions/GeneralJournalEntries")
);
const SupplierList = React.lazy(() =>
  import("../pages/ProcureToPay/SupplierList")
);
const GoodsReceiptNote = React.lazy(() =>
  import("../pages/ProcureToPay/Transactions/GoodsReceiptNote")
);
const ReturnToSupplier = React.lazy(() =>
  import("../pages/ProcureToPay/Transactions/ReturnToSupplier")
);
const PurchaseOrder = React.lazy(() =>
  import("../pages/ProcureToPay/Transactions/PurchaseOrder")
);
const PurchaseInvoice = React.lazy(() =>
  import("../pages/ProcureToPay/Transactions/PurchaseInvoice")
);
const DebitNote = React.lazy(() =>
  import("../pages/ProcureToPay/Transactions/DebitNote")
);
const LandedCost = React.lazy(() => import("../pages/ProcureToPay/LandedCost"));
const BlanketOrder = React.lazy(() =>
  import("../pages/ProcureToPay/BlanketOrder")
);
const JournalEntryReversal = React.lazy(() =>
  import("../pages/Finance/Transactions/JournalEntryReversal")
);
const ProductsList = React.lazy(() =>
  import("../pages/Products&Services/ProductsList")
);
const Location = React.lazy(() =>
  import("../pages/Products&Services/Location")
);
const PurchaseReq = React.lazy(() =>
  import("../pages/ProcureToPay/Transactions/PurchaseReq")
);
const SupplierPayment = React.lazy(() =>
  import("../pages/ProcureToPay/Transactions/SupplierPayment")
);
const CustomerPayment = React.lazy(() =>
  import("../pages/OrderToCash/Transactions/CustomerPayment")
);
const Unit = React.lazy(() => import("../pages/Products&Services/Unit"));
const BillMaterials = React.lazy(() =>
  import("../pages/Products&Services/BillMaterials")
);
const PriceListProducts = React.lazy(() =>
  import("../pages/Products&Services/PriceListProducts")
);
const Discount = React.lazy(() =>
  import("../pages/Products&Services/Discount")
);
const BankingAccounts = React.lazy(() =>
  import("../pages/Banking/BankingAccounts")
);
const BankReclonisation = React.lazy(() =>
  import("../pages/Banking/Transactions/BankReclonisation")
);
const SupplierPayment2 = React.lazy(() =>
  import("../pages/Banking/Transactions/SupplierPayment")
);
const CustomerPay = React.lazy(() =>
  import("../pages/Banking/Transactions/CustomerPay")
);
const Main = React.lazy(() =>
  import("../pages/OrderToCash/Layout&Template/Main")
);
const Main4 = React.lazy(() => import("../pages/Banking/Layout&Template/Main"));
const Main3 = React.lazy(() =>
  import("../pages/Products&Services/Layout&Template/Main")
);
const Main2 = React.lazy(() =>
  import("../pages/ProcureToPay/Layout&Template/Main")
);
const BankDeposit = React.lazy(() =>
  import("../pages/Banking/Transactions/BankDeposit")
);
const ChartOfAccountNew = React.lazy(() =>
  import("../New-Screens/ChartOfAccountNew")
);
const JornalEntrynew = React.lazy(() =>
  import("../New-Screens/JornalEntrynew")
);
const P2PAdjustment = React.lazy(() =>
  import("../pages/ProcureToPay/Transactions/P2PAdustment")
);
const StockAdjustment = React.lazy(() =>
  import("../pages/Products&Services/Transactions/StockAdjustment")
);
const PickListPackaging = React.lazy(() =>
  import("../pages/Products&Services/Transactions/PickListPackaging")
);
const InspectionList = React.lazy(() =>
  import("../pages/Products&Services/Transactions/InspectionList")
);
const StockTransfers = React.lazy(() =>
  import("../pages/Products&Services/Transactions/StockTransfers")
);
const Production = React.lazy(() =>
  import("../pages/Products&Services/Transactions/Production")
);
const Disassembly = React.lazy(() =>
  import("../pages/Products&Services/Transactions/Disassembly")
);
const StockRevaluation = React.lazy(() =>
  import("../pages/Products&Services/Transactions/StockRevaluation")
);
const FinanceSetting = React.lazy(() =>
  import("../pages/Finance/FinanceSettings/FinanceSetting")
);
const CompanySettings = React.lazy(() =>
  import("../pages/Configuration/CompanySettings")
);
const CustomFields = React.lazy(() =>
  import("../pages/Configuration/CustomFields")
);

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
    } else if (selectedOption === "KEY10010") {
      return (
        <ChartOfAccountsList
          key={toggle}
          onBreadcrumbClick={handleBreadcrumbClick}
        />
      );
    } else if (selectedOption === "KEY10013") {
      return (
        <CurrencyList onBreadcrumbClick={handleBreadcrumbClick} key={toggle} />
      );
    } else if (selectedOption === "KEY10014") {
      return <BudgetList />;
    } else if (selectedOption === "KEY10015") {
      return <CashFlow />;
    } else if (selectedOption === "KEY10017") {
      return <TaxSetup />;
    } else if (selectedOption === "KEY10024") {
      return <CustomerList />;
    } else if (selectedOption === "KEY10025") {
      return <PriceList />;
    } else if (selectedOption === "KEY10026") {
      return <SalesAgents />;
    } else if (selectedOption === "Sales Quotation") {
      return <SalesQoutation />;
    } else if (selectedOption === "Sales Order") {
      return <SalesOrder />;
    } else if (selectedOption === "Stock Adjustment") {
      return <StockAdjustment />;
    } else if (selectedOption === "Pick List & Packaging") {
      return <PickListPackaging />;
    } else if (selectedOption === "Inspection List") {
      return <InspectionList />;
    } else if (selectedOption === "Stock Transfer") {
      return <StockTransfers />;
    } else if (selectedOption === "Production") {
      return <Production />;
    } else if (selectedOption === "Disassembly") {
      return <Disassembly />;
    } else if (selectedOption === "Stock Revaluation") {
      return <StockRevaluation />;
    } else if (selectedOption === "Delivery Note") {
      return <DeliveryNote />;
    } else if (selectedOption === "Customer Return") {
      return <CustomerReturn />;
    } else if (selectedOption === "Sales Invoice") {
      return <SalesInvoice />;
    } else if (selectedOption === "Credit Note") {
      return <CreditNote />;
    } else if (selectedOption === "O2C Adjustment Entry") {
      return <O2Cadjustment />;
    } else if (selectedOption === "P2P Adjustment Entry") {
      return <P2PAdjustment />;
    } else if (selectedOption === "Recurring Invoice") {
      return <RecurringInvoice />;
    } else if (selectedOption === "Journal Entry List") {
      return <JournalEntryList key={toggle} />;
    } else if (selectedOption === "Recurring Transaction") {
      return <RecurringTransactions />;
    } else if (selectedOption === "Forex Revaluation") {
      return <ForexRevaluation />;
    } else if (selectedOption === "General Journal Entries") {
      return <GeneralJournalEntryList />;
    } else if (selectedOption === "KEY10036") {
      return <SupplierList />;
    } else if (selectedOption === "Purchase Order") {
      return <PurchaseOrder />;
    } else if (selectedOption === "Goods Receipt Note") {
      return <GoodsReceiptNote />;
    } else if (selectedOption === "Return to Supplier") {
      return <ReturnToSupplier />;
    } else if (selectedOption === "Purchase Invoice") {
      return <PurchaseInvoice />;
    } else if (selectedOption === "Debit Note") {
      return <DebitNote />;
    } else if (selectedOption === "KEY10037") {
      return <BlanketOrder />;
    } else if (selectedOption === "KEY10038") {
      return <LandedCost />;
    } else if (selectedOption === "Journal Entry Reversal") {
      return <JournalEntryReversal />;
    } else if (selectedOption === "KEY10051") {
      return <ProductsList />;
    } else if (selectedOption === "KEY10052") {
      return <Location />;
    } else if (selectedOption === "Purchase Request") {
      return <PurchaseReq />;
    } else if (selectedOption === "Supplier Payment") {
      return <SupplierPayment />;
    } else if (selectedOption === "Customer Payment") {
      return <CustomerPayment />;
    } else if (selectedOption === "KEY10053") {
      return <Unit />;
    } else if (selectedOption === "KEY10054") {
      return <BillMaterials />;
    } else if (selectedOption === "Price List Products") {
      return <PriceListProducts />;
    } else if (selectedOption === "Discount") {
      return <Discount />;
    } else if (selectedOption === "Bank Accounts") {
      return <BankingAccounts />;
    } else if (selectedOption === "Bank Reclonisation") {
      return <BankReclonisation />;
    } else if (selectedOption === "Supplier Payment") {
      return <SupplierPayment2 />;
    } else if (selectedOption === "Customer Payment") {
      return <CustomerPay />;
    } else if (selectedOption === "O2C Layout & Template") {
      return <Main />;
    } else if (selectedOption === "Products Layout & Template") {
      return <Main3 />;
    } else if (selectedOption === "P2P Layout & Template") {
      return <Main2 />;
    } else if (selectedOption === "Bank Layout & Template") {
      return <Main4 />;
    } else if (selectedOption === "Bank Deposit") {
      return <BankDeposit />;
    } else if (selectedOption === "Finance Setting") {
      return <FinanceSetting />;
    } else if (selectedOption === "Company Settings") {
      return <CompanySettings />;
    } else if (selectedOption === "Custom Fields") {
      return <CustomFields />;
    }
    return null;
  };

  return (
    <Container>
      <SideNav onOptionClick={handleOptionClick} />
      {renderSelectedOption()}
    </Container>
  );
};

export default Navigator;
