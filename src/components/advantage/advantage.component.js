import { html, LitElement } from 'lit-element';

import { AdvantageStyles } from './advantage.styles';

class Advantage extends LitElement {
	static get styles() {
		return [AdvantageStyles];
	}

	static get properties() {
		return {
			headerBackgroundColor: { type: String },
			headerTitle: { type: String },
		};
	}
	constructor() {
		super();
		this.headerBackgroundColor = "";
		this.headerTitle = "";
	}
	render() {
		return html`
			<article class="advantage">
				<header
					class="advantage__header"
					style="background-color: ${this.headerBackgroundColor}"
				>
					${this.headerTitle}
				</header>
				<slot></slot>
			</article>
		`;
	}
}

customElements.define("app-advantage", Advantage);
