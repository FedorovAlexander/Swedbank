import '../../components/calculator/calculator.component';
import '../../components/greeting/greeting.component';
import '../../components/payment-form/payment-form.component';
import '../../components/tabs/tabs.component';

import { html, LitElement } from 'lit-element';

import { BankingPageStyles } from './banking.styles';

class Banking extends LitElement {
	static get styles() {
		return [BankingPageStyles];
	}

	static get properties() {
		return {
			tabsList: { type: Array },
			activeTab: { type: String },
		};
	}
	constructor() {
		super();
		this.tabsList = ["Payment", "Calculator"];
		this.activeTab = "Payment";
	}

	render() {
		return html`
			<div class="banking-page">
				<div class="banking-page__wrapper">
					<app-tabs .tabsList=${this.tabsList} activeTab="${this.activeTab}">
						<!-- For new tab add a new value to the array and create an html-element 
						with a corresponding slot name (magic!). -->
						<div slot="Payment">
							<app-payment-form></app-payment-form>
						</div>
						<div slot="Calculator">
							<app-calculator></app-calculator>
						</div>
					</app-tabs>
					<app-greeting></app-greeting>
				</div>
			</div>
		`;
	}
}

customElements.define("banking-page", Banking);
