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
						<!-- For new tab add new value to the array and create an html-element 
						with a corresponding slot name (magic!). -->
						<div slot="Payment">pay</div>
						<div slot="Calculator">calc</div>
					</app-tabs>
				</div>
			</div>
		`;
	}
}

customElements.define("banking-page", Banking);
