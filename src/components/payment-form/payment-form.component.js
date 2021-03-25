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
				<div class="payment-form__wrapper">payment</div>
			</section>
		`;
	}

	_toggleTabs(e) {}
}

customElements.define("app-payment-form", PaymentForm);
