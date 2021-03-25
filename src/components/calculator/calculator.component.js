import { html, LitElement } from 'lit-element';

import { CalculatorStyles } from './calculator.styles';

class Calculator extends LitElement {
	static get styles() {
		return [CalculatorStyles];
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
			<section class="calculator">
				<div class="calculator__wrapper">calculator</div>
			</section>
		`;
	}

	_toggleTabs(e) {}
}

customElements.define("app-calculator", Calculator);
