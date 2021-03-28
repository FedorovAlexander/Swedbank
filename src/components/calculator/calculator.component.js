import { html, LitElement } from "lit-element";

import { CalculatorStyles } from "./calculator.styles";

const Period = [5, 10, 15, 20, 25, 30];
const Interest = [3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0];

class Calculator extends LitElement {
	static get styles() {
		return [CalculatorStyles];
	}
	static get properties() {
		return {
			isMobile: { type: Boolean },
			period: { type: Array },
			interest: { type: Array },
			loanValue: { type: Number },
			rangeMin: { type: Number },
			rangeMax: { type: Number },
			monthlyPayment: { type: Number },
		};
	}
	constructor() {
		super();
		this.isMobile = window.innerWidth > 767 ? false : true;
		this.period = [...Period];
		this.interest = [...Interest];
		this.loanValue = 32000;
		this.rangeMin = 32000;
		this.rangeMax = 320000;
		this.monthlyPayment = 0;
	}
	render() {
		return html`
			<section class="calculator">
				<div class="calculator__wrapper">
					<form
						class="calculator__form"
						@submit=${this.submitForm}
						method="POST"
						id="payment-form"
					>
						<div class="calculator__inputs">
							<div class="calculator__inputs-wrapper">
								<div class="calculator__loan-size">
									<span class="calculator__loan-value">${this.loanValue}€</span>
									<label class="calculator__label calculator__label--loan-size">
										Loan size
										<input
											type="range"
											class="calculator__range"
											id="loan-size"
											name="loan-size"
											min="${this.rangeMin}"
											max="${this.rangeMax}"
											step="1000"
											value="${this.loanValue}"
											@input="${this._rangeChange}"
										/>
										<div class="calculator__range-values">
											<span class="calculator__range-min"
												>${this.rangeMin} €</span
											>
											<span class="calculator__range-max"
												>${this.rangeMax} €</span
											>
										</div>
									</label>
								</div>
								<div class="calculator__period">
									<label class="calculator__label">
										Period
										<app-select
											.options=${this.period}
											name="Period"
											?firstOptionSelected=${true}
											?inlineWidth="${true}"
											units=" years"
										></app-select>
									</label>
								</div>
								<div class="calculator__interest">
									<label class="calculator__label">
										Interest
										<app-select
											.options=${this.interest}
											name="Interest"
											?firstOptionSelected=${true}
											?inlineWidth="${true}"
											units="%"
										></app-select>
									</label>
								</div>
							</div>
						</div>
						<div class="calculator__result">
							<div class="calculator__monthly">
								<div class="calculator__monthly-label">Monthly payment</div>
								<div class="calculator__monthly-result">
									${this.monthlyPayment}
									<span class="calculator__payment-units">EUR</span>
								</div>
							</div>
							<div class="calculator__button-wrapper">
								<app-button
									buttonText="Apply"
									backgroundColor="#EE7023"
									@click=${this._runCalculator}
								></app-button>
							</div>
						</div>
					</form>
				</div>
			</section>
		`;
	}

	_runCalculator(e) {
		console.log("calculate");
	}

	_rangeChange(e) {
		this.loanValue = e.target.value;
	}
}

customElements.define("app-calculator", Calculator);
