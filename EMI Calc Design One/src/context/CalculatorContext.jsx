import React, { createContext, useState } from "react";

export const AppContext = createContext(null);

const CalculatorContext = ({ children }) => {
  const [data, setData] = useState({
    loanAmount: 1000000,
    loanInterest: 10,
    loanTenure: 250,
    downPayment: 10000,
    processingFees: 3.4
  });
  const [output, setOutput] = useState({
    totalAmount: 0,
    totalDownPayment: 0,
    totalInterest: 0,
    loanEMI: 0
  });
  return (
    <AppContext.Provider value={{ data, setData, output, setOutput }}>
      {children}
    </AppContext.Provider>
  );
};

export default CalculatorContext;
