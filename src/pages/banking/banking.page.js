import '../../components/tabs/tabs.component';

import { html, LitElement } from 'lit-element';

import { BankingPageStyles } from './banking.styles';

class Banking extends LitElement {
	static get styles() {
		return [BankingPageStyles];
	}

	render() {
		return html`
			<div class="banking-page">
				<div class="banking-page__wrapper">
					<app-tabs></app-tabs>
				</div>
			</div>
		`;
	}

	static get properties() {
		return {
			eg: {
				type: String,
			},
		};
	}
	constructor() {
		super();
	}
}

customElements.define("banking-page", Banking);
