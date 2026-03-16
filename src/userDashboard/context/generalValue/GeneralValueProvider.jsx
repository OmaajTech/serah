import { GeneralContext } from "./GeneralValueContext";

const GeneralValueProvider = ({ children }) => {
  const phoneNumber = "*** *** 1746";
  const checkingNav = "1627";
  const savingNav = "9237";
  const checkingRouNum = "021000089";
  const countrtState = "Kansas";
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
