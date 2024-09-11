import illustration from "../../assets/images/illustration-empty.svg";
class CalculatorView {
  _parentElement = document.querySelector(".mortgage-form");
  _clearForm = document.querySelector(".clear");
  _mortgageAmount = document.querySelector("#mortgage-amount");
  _mortgageTerm = document.querySelector("#mortgage-term");
  _interestRate = document.querySelector("#interest-rate");
  _getFormData() {
    const dataArray = [...new FormData(this._parentElement)];
    const data = Object.fromEntries(dataArray);
    return data;
  }
  addHandlerSubmit(handler) {
    this._parentElement.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = this._getFormData();
      handler(data);
    });
  }
  addHandlerClear(handler) {
    this._clearForm.addEventListener("click", (e) => {
      e.preventDefault();
      this._mortgageAmount.value = "";
      this._mortgageTerm.value = "";
      this._interestRate.value = "";
      document.querySelectorAll('input[name="radio"]').forEach((radio) => {
        radio.checked = false;
      });
      const markup = this._generateMarkup();
      handler(markup);
    });
  }
  _generateMarkup() {
    return ` <img src="${illustration}illustration-empty.svg" alt="calculator illustration">
        <h2 class="title results-title">Results shown here</h2>
        <p class="body-text results-description">Complete the form and click “calculate repayments” to see
          what your monthly repayments would be.</p>
    `;
  }
}

export default new CalculatorView();
