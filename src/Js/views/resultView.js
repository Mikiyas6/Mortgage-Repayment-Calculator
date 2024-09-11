class ResultView {
  _parentElement = document.querySelector(".results-container");
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return;
    }
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.classList.add("results-container--1");
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  reset(markup) {
    this._clear();
    this._parentElement.classList.remove("results-container--1");
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _generateMarkup() {
    return `<h2 class="title results-title">Your results</h2>
      <p class="body-text body-text--2"> Your results Your results are shown below based on the information you
        provided. To adjust the results, edit the form and click “calculate
        repayments” again.</p>
      <div class="card">
        <p class="monthly-repayment body-text--2">Your monthly repayments</p>
        <p class="repayment-result">&#163;${this._data.monthlyPayment}</p>
        <p class="term-repayment body-text--2">Total ${
          this._data.mortgageType === "repayment" ? "" : "Interest"
        }  you'll repay over the term
        </p>
        <p class="total-result">&#163;${
          this._data.mortgageType === "repayment"
            ? this._data.totalRepayment
            : this._data.totalInterest
        }</p>
      </div>`;
  }
}
export default new ResultView();
