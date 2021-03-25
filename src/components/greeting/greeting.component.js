import { html, LitElement } from 'lit-element';

import { GreetingStyles } from './greeting.styles';

class Greeting extends LitElement {
	static get styles() {
		return [GreetingStyles];
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
			<section class="greeting">
				<div class="greeting__wrapper">greeting</div>
			</section>
		`;
	}

	_toggleTabs(e) {}
}

customElements.define("app-greeting", Greeting);
