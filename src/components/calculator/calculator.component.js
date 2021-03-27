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
		};
	}
	constructor() {
		super();
		this.isMobile = window.innerWidth > 767 ? false : true;
		this.period = [...Period];
		this.interest = [...Interest];
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
							<div class="calculator__loan-size">
								<span class="calculator__loan-value"></span>
								<label class="calculator__label">
									Loan size
									<input
										type="range"
										id="loan-size"
										name="loan-size"
										min="32000"
										max="320000"
									/>
								</label>
							</div>
							<div class="calculator__period">
								<label class="calculator__label">
									Period
									<app-select
										.options=${this.period}
										name="Period"
										?firstOptionSelected=${true}
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
									></app-select>
								</label>
							</div>
						</div>
						<div class="calculator__result">
							<div class="calculator__monthly">
								<div class="calculator__monthly-label">Monthly payment</div>
								<div class="calculator__monthly-result"></div>
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
}

customElements.define("app-calculator", Calculator);
