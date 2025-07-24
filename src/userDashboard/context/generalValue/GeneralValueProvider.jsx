import { GeneralContext } from "./GeneralValueContext";

const GeneralValueProvider = ({ children }) => {
  const phoneNumber = "*** *** 8190";
  const checkingNav = "6194";
  const savingNav = "7948";
  const checkingRouNum = "322271724";
  const countrtState = "California";
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
