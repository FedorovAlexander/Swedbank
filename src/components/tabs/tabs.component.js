import { html, LitElement } from 'lit-element';

import { TabsStyles } from './tabs.styles';

class Tabs extends LitElement {
	static get styles() {
		return [TabsStyles];
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
		return html``;
	}

	_toggleTabs(e) {
		console.log(e);
	}
}

customElements.define("app-tabs", Tabs);
