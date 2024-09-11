export let state = {};

export const reset = function () {
  state = {
    mortgageAmount: 0,
    mortgageTerm: 0,
    interestRate: 0,
    mortgageType: "repayment",
    monthlyPayment: 0,
    totalRepayment: 0,
    totalInterest: 0,
  };
};

export const updateState = function (data) {
  state = {
    mortgageAmount: +data.mortgageAmount,
    mortgageTerm: +data.mortgageTerm,
    interestRate: +data.interestRate,
    mortgageType: data.radio,
  };
};

export const calculateRepayment = function () {
  const P = state.mortgageAmount;
  const annual_rate = state.interestRate / 100;
  const n_years = state.mortgageTerm;

  const r = annual_rate / 12;

  const n = n_years * 12;

  const M = (P * r * (1 + r) ** n) / ((1 + r) ** n - 1);
  const formatted_M = M.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  state.monthlyPayment = formatted_M;
  const totalRepayment = M * n;
  const totalInterest = totalRepayment - state.mortgageAmount;
  state.totalRepayment = totalRepayment.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  state.totalInterest = totalInterest.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  console.log(state);
};

const init = function () {
  reset();
};
init();
