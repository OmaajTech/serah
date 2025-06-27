import { GeneralContext } from "./GeneralValueContext";

const GeneralValueProvider = ({ children }) => {
  const phoneNumber = "*** *** 3732";
  const checkingNav = "5562";
  const savingNav = "9902";
  const checkingRouNum = "026000082";
  const countrtState = "Toronto";
  const accountMoney = "TD Bank Checking:2071";
  const tyoeOfPhone = "iPhone (iPhone 14 pro max)";

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
