import { html, LitElement } from 'lit-element';

import { PaymentFormStyles } from './payment-form.styles';

class PaymentForm extends LitElement {
	static get styles() {
		return [PaymentFormStyles];
	}
	static get properties() {
		return {
			isMobile: { type: Boolean },
		};
	}
	constructor() {
		super();
		this.isMobile = window.innerWidth > 767 ? false : true;
	}
	render() {
		return html`
			<section class="payment-form">
				<div class="payment-form__wrapper">
					<form class="payment-form__form">
						<label class="payment-form__label">
							Account
							<select name="Account" class="payment-form__select">
								<option value="" selected>Account Name 1</option>
								<option value="volvo">Volvo</option>
							</select>
						</label>
						<label class="payment-form__label">
							Saved Payment
							<select name="SavedPayment" class="payment-form__select">
								<option value="" selected>Select a saved payment</option>
								<option value="volvo">Volvo</option>
							</select>
						</label>
						<fieldset class="payment-form__fieldset">
							<label class="payment-form__label payment-form__label--amount">
								Amount
								<input
									type="number"
									class="payment-form__input payment-form__input--amount"
								/>
							</label>
							<select
								name="Currency"
								class="payment-form__select payment-form__select--currency"
							>
								<option value="volvo" selected>EUR</option>
							</select>
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
						<button class="payment-form__button">Save</button>
						<button class="payment-form__button">Pay</button>
					</div>
				</div>
			</section>
		`;
	}

	_toggleTabs(e) {}
}

customElements.define("app-payment-form", PaymentForm);
