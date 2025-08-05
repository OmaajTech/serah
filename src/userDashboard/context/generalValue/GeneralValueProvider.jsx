import { GeneralContext } from "./GeneralValueContext";

const GeneralValueProvider = ({ children }) => {
  const phoneNumber = "*** *** 2803";
  const checkingNav = "6799";
  const savingNav = "4771";
  const checkingRouNum = "021000089";
  const countrtState = "New York";
  const accountMoney = "TD Bank Checking:2071";
  const tyoeOfPhone = "iPhone (iPhone 16 pro)";

  return (
    <GeneralContext.Provider
      value={{
        phoneNumber,
        checkingNav,
        savingNav,
        checkingRouNum,
        countrtState,
        accountMoney,
        tyoeOfPhone,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralValueProvider;
