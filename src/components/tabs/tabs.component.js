import { html, LitElement } from 'lit-element';

import { TabsStyles } from './tabs.styles';

class Tabs extends LitElement {
	static get styles() {
		return [TabsStyles];
	}
	static get properties() {
		return {
			isMobile: { type: Boolean },
			tabsList: { type: Array },
		};
	}
	constructor() {
		super();
		this.isMobile = window.innerWidth > 767 ? false : true;
		this.tabsList = ["Payment", "Calculator"];
	}
	render() {
		return html`
			<section class="tabs">
				<div class="tabs__wrapper">
					<ul class="tabs__items-list">
						${this.tabsList.map(
							(item) => html` <li class="tabs__item">${item}</li> `
						)}
					</ul>
					<div class="tabs__content">
						<div class="tabs__payment-wrapper">payment</div>
						<div class="tabs__calculator-wrapper">calculator</div>
					</div>
				</div>
			</section>
		`;
	}

	_toggleTabs(e) {
		console.log(e);
	}
}

customElements.define("app-tabs", Tabs);
