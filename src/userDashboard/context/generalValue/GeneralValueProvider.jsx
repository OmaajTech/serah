import { GeneralContext } from "./GeneralValueContext";

const GeneralValueProvider = ({ children }) => {
  const phoneNumber = "*** *** 7341";
  const checkingNav = "6741";
  const savingNav = "3238";
  const checkingRouNum = "026000082";
  const countrtState = "Toronto";
  const accountMoney = "Capital One Checking:2071";
  const tyoeOfPhone = "iPhone (iPhone 15 pro max)";

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
