import "core-js/stable";
import calculatorView from "./views/calculatorView.js";
import resultView from "./views/resultView.js";
import * as model from "./model.js";

if (module.hot) {
  module.hot.accept();
}

const controlCalculateRepayment = function (data) {
  model.updateState(data);
  model.calculateRepayment();
  resultView.render(model.state);
};
const clearForm = function (markup) {
  model.reset();
  console.log(model.state);
  resultView.reset(markup);
};
const init = function () {
  calculatorView.addHandlerSubmit(controlCalculateRepayment);
  calculatorView.addHandlerClear(clearForm);
};
init();
