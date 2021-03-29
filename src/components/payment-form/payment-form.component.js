import '../../components/button/button.component';
import '../../components/select/select.component';

import { html, LitElement } from 'lit-element';

import { PaymentFormStyles } from './payment-form.styles';

const Accounts = ["Siim Tamm", "Marju Lepik", "Lina Roosipõld"];
const SavedPayments = ["Saved payment 1", "Saved payment 2", "Saved payment 3"];
const Currency = ["EUR", "USD", "RUB"];

class PaymentForm extends LitElement {
	static get styles() {
		return [PaymentFormStyles];
	}
	static get properties() {
		return {
			isMobile: { type: Boolean },
			account: { type: Array },
			currency: { type: Array },
			amountError: { type: Boolean },
		};
	}
	constructor() {
		super();
		this.isMobile = window.innerWidth > 767 ? false : true;
		this.accounts = [...Accounts];
		this.savedPayments = [...SavedPayments];
		this.currency = [...Currency];
		this.amountError = false;
	}
	render() {
		return html`
			<section class="payment-form">
				<div class="payment-form__wrapper">
					<form
						class="payment-form__form"
						@submit=${this.submitForm}
						method="POST"
						id="payment-form"
					>
						<label class="payment-form__label">
							Account
							<app-select
								.options=${this.accounts}
								name="Account"
								placeholder="Choose Account"
								?error=${false}
							></app-select>
						</label>
						<span id="error-account" class="payment-form__error-message" hidden
							>required field</span
						>
						<label class="payment-form__label">
							Saved Payment
							<app-select
								.options=${this.savedPayments}
								name="Saved Payments"
								placeholder="Choose Payment"
								?error=${false}
							></app-select>
						</label>
						<span id="error-payment" class="payment-form__error-message" hidden
							>required field</span
						>
						<fieldset class="payment-form__fieldset">
							<label class="payment-form__label payment-form__label--amount">
								Amount
								<input
									type="text"
									class="payment-form__input payment-form__input--amount"
									id="amount"
									style=${this.amountError
										? "border-color: #d1434a"
										: "border-color:#bcd8db"}
								/>
							</label>
							<app-select
								.options=${this.currency}
								name="Currency"
								?firstOptionSelected=${true}
								defaultValue="EUR"
							></app-select>
						</fieldset>
						<span id="error-amount" class="payment-form__error-message" hidden
							>Amount accepts only numbers</span
						>
						<label class="payment-form__label payment-form__label--description">
							Description
							<input
								type="text"
								class="payment-form__input payment-form__input--description"
							/>
						</label>
					</form>
					<div class="payment-form__buttons">
						<app-button
							buttonText="Save"
							backgroundColor="#EE7023"
							@click=${this.savePayment}
						></app-button>
						<app-button
							buttonText="Pay"
							backgroundColor="#31A3AE"
							@click=${this.submitForm}
						></app-button>
					</div>
				</div>
			</section>
		`;
	}

	submitForm(e) {
		e.preventDefault();

		const form = this.shadowRoot.querySelector("form");
		const accountSelect = form.querySelector("app-select[name = 'Account']");
		const paymentSelect = form.querySelector(
			"app-select[name = 'Saved Payments']"
		);
		const amount = form.querySelector("#amount");
		const errorAccount = form.querySelector("#error-account");
		const errorPayment = form.querySelector("#error-payment");
		const errorAmount = form.querySelector("#error-amount");

		if (!accountSelect.value) {
			errorAccount.hidden = false;
			accountSelect.error = true;
		} else {
			errorAccount.hidden = true;
			accountSelect.error = false;
			console.log(accountSelect.error, "error");
		}

		if (!paymentSelect.value) {
			errorPayment.hidden = false;
			paymentSelect.error = true;
		} else {
			errorPayment.hidden = true;
			paymentSelect.error = false;
		}

		if (amount.value.match(/^[0-9]+$/)) {
			errorAmount.hidden = true;
			this.amountError = false;
		} else {
			errorAmount.hidden = false;
			this.amountError = true;
		}

		if (
			!accountSelect.value &&
			!paymentSelect.value &&
			amount.value.match(/^[0-9]+$/)
		) {
			const form = this.shadowRoot.querySelector("#payment-form");
			form.submit();
			console.log("submit");
		}
	}

	savePayment(e) {
		e.preventDefault();
		console.log("save");
	}
}

customElements.define("app-payment-form", PaymentForm);
