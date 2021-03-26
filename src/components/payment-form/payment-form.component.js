import "../../components/select/select.component";

import { html, LitElement } from "lit-element";

import { PaymentFormStyles } from "./payment-form.styles";

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
		};
	}
	constructor() {
		super();
		this.isMobile = window.innerWidth > 767 ? false : true;
		this.accounts = [...Accounts];
		this.savedPayments = [...SavedPayments];
		this.currency = [...Currency];
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
							<app-select .options=${this.accounts} name="Account"></app-select>
						</label>
						<label class="payment-form__label">
							Saved Payment
							<app-select
								.options=${this.savedPayments}
								name="Saved Payments"
							></app-select>
						</label>
						<fieldset class="payment-form__fieldset">
							<label class="payment-form__label payment-form__label--amount">
								Amount
								<input
									type="text"
									class="payment-form__input payment-form__input--amount"
								/>
							</label>
							<app-select
								.options=${this.currency}
								name="Currency"
							></app-select>
						</fieldset>
						<label class="payment-form__label">
							Description
							<input
								type="text"
								class="payment-form__input payment-form__input--description"
							/>
						</label>
					</form>
					<div class="payment-form__buttons">
						<button @click=${this.savePayment} class="payment-form__button">
							Save
						</button>
						<button @click=${this.submitForm} class="payment-form__button">
							Pay
						</button>
					</div>
				</div>
			</section>
		`;
	}

	submitForm(e) {
		e.preventDefault();
		// const form = this.shadowRoot.querySelector("#payment-form");
		// form.submit();
		console.log("submit");
	}

	savePayment(e) {
		e.preventDefault();
		console.log("save");
	}
}

customElements.define("app-payment-form", PaymentForm);
