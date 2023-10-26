import React, { useContext, useEffect } from "react";
import PieChart from "./PieChart";
import { AppContext } from "../context/CalculatorContext";
import { calculateEMI } from "../utils/EMICalcUtils";

const LoanCalculator = () => {
  function calculateEMIButton() {
    let emi = calculateEMI(data);
    let loanAmount = parseFloat(data.loanAmount) - parseFloat(data.downPayment);
    let processingFees = Math.ceil(
      loanAmount * (parseFloat(data.processingFees) / 100)
    );
    setOutput({
      loanEMI: Math.ceil(emi),
      totalDownPayment: Math.ceil(
        parseFloat(data.downPayment) + parseFloat(processingFees)
      ),
      totalInterest: Math.ceil(
        Math.ceil(parseFloat(data.loanTenure) * emi) - loanAmount
      ),
      totalAmount: Math.ceil(parseFloat(data.loanTenure) * emi)
    });
  }
  const { data, setData, output, setOutput } = useContext(AppContext);
  useEffect(() => {
    calculateEMIButton();
  }, []);
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 mt-20 gap-4">
        <div className="lg:col-span-2 bg-[#618264] p-[30px] rounded-[24px] shadow-md space-y-5 self-center">
          <div className="mt-5">
            <label htmlFor="loan_amount" className="text-white font-medium">
              Loan Amount (in ₹)
            </label>
            <input
              type="text"
              value={data?.loanAmount}
              name="loan_amount"
              className="p-3 w-full outline-none border rounded-md mt-2"
              onChange={(e) =>
                setData({
                  ...data,
                  loanAmount: isNaN(e.target.value) ? 0.0 : e.target.value
                })
              }
            />
          </div>
          <div>
            <label htmlFor="loan_interest" className="text-white font-medium">
              Loan Interest (in %)
            </label>
            <input
              type="text"
              value={data?.loanInterest}
              className="p-3 w-full outline-none border rounded-md mt-2"
              name="loan_interest"
              onChange={(e) =>
                setData({
                  ...data,
                  loanInterest: isNaN(e.target.value) ? 0.0 : e.target.value
                })
              }
            />
          </div>
          <div>
            <label htmlFor="loan_tenure" className="text-white font-medium">
              Loan Tenure (in Months)
            </label>
            <input
              type="text"
              name="loan_tenure"
              value={data?.loanTenure}
              className="p-3 w-full outline-none border rounded-md mt-2"
              onChange={(e) =>
                setData({
                  ...data,
                  loanTenure: isNaN(e.target.value) ? 0.0 : e.target.value
                })
              }
            />
          </div>
          <div>
            <label htmlFor="down_payment" className="text-white font-medium">
              Down Payment (in ₹)
            </label>
            <input
              type="text"
              value={data?.downPayment}
              name="down_payment"
              className="p-3 w-full outline-none border rounded-md mt-2"
              onChange={(e) =>
                setData({
                  ...data,
                  downPayment: isNaN(e.target.value) ? 0.0 : e.target.value
                })
              }
            />
          </div>
          <div>
            <label htmlFor="loan_processing" className="text-white font-medium">
              Processing Fees (in %)
            </label>
            <input
              type="text"
              value={data?.processingFees}
              name="loan_processing"
              className="p-3 w-full outline-none border rounded-md mt-2"
              onChange={(e) =>
                setData({
                  ...data,
                  processingFees: isNaN(e.target.value) ? 0.0 : e.target.value
                })
              }
            />
          </div>
          <div
            onClick={calculateEMIButton}
            className="bg-[#79AC78] text-white text-center py-4 px-5 rounded-md transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer font-medium"
          >
            Calculate EMI
          </div>
        </div>
        <div className="lg:col-span-3 bg-white p-[20px] rounded-[24px] shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col">
              <div className="text-xl text-[#333]">Total Down Payment</div>
              <div className="text-4xl font-bold text-[#333] flex space-x-3 mt-3">
                <div className="text-gray-300">₹</div>
                <div>{output?.totalDownPayment}</div>
              </div>
              <hr className="mt-8 w-full lg:w-1/2" />
            </div>
            <div className="flex flex-col">
              <div className="text-xl text-[#333]">Loan EMI</div>
              <div className="text-4xl font-bold text-[#333] flex space-x-3 mt-3">
                <div className="text-gray-300">₹</div>
                <div>{output?.loanEMI}</div>
              </div>
              <hr className="mt-8 w-full lg:w-1/2" />
            </div>
            <div className="flex flex-col mt-10">
              <div className="text-xl text-[#333]">Total Interest</div>
              <div className="text-4xl font-bold text-[#333] flex space-x-3 mt-3">
                <div className="text-gray-300">₹</div>
                <div>{output?.totalInterest}</div>
              </div>
              <hr className="mt-8 w-full lg:w-1/2" />
            </div>
            <div className="flex flex-col mt-8">
              <div className="text-xl text-[#333]">Total Payment</div>
              <div className="text-4xl font-bold text-[#333] flex space-x-3 mt-3">
                <div className="text-gray-300">₹</div>
                <div id="downPayment">{output?.totalAmount}</div>
              </div>
              <hr className="mt-8 w-full lg:w-1/2" />
            </div>
          </div>
          <div className="m-3 w-1/2 mx-auto">
            <PieChart data={{ ...data, ...output }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
