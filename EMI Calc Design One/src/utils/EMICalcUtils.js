export const calculateEMI = function (data) {
  let interest = parseFloat(data.loanInterest) / 12 / 100;
  let loanAmount = parseFloat(data.loanAmount) - parseFloat(data.downPayment);
  let emi =
    loanAmount *
    interest *
    (Math.pow(1 + interest, parseFloat(data.loanTenure)) /
      (Math.pow(1 + interest, parseFloat(data.loanTenure)) - 1));
  return emi;
};
