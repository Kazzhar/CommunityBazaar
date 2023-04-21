import { createContext, useContext, useState } from "react";

const PhoneNumberContext = createContext();
const countryCode = "+91";
export const usePhoneNumber = () => {
  return useContext(PhoneNumberContext);
};

export const PhoneNumberProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState(countryCode);

  return (
    <PhoneNumberContext.Provider value={{ phoneNumber, setPhoneNumber }}>
      {children}
    </PhoneNumberContext.Provider>
  );
};
