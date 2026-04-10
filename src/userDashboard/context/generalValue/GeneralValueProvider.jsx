import { GeneralContext } from "./GeneralValueContext";

const GeneralValueProvider = ({ children }) => {
  const phoneNumber = "*** *** 6167";
  const checkingNav = "7932";
  const savingNav = "4226";
  const checkingRouNum = "021000089";
  const countrtState = "Indiana";
  const accountMoney = "Capital One Checking:2071";
  const tyoeOfPhone = "IPhone (IPhone 13 Pro Max)";

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
