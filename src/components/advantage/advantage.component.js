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
					<span
						class="advantage__header-decorator"
						style="border-top: 16px solid ${this.headerBackgroundColor};"
					></span>
					${this.headerTitle}
				</header>
				<div class="advantage__content">
					<slot></slot>
				</div>
			</article>
		`;
	}
}

customElements.define("app-advantage", Advantage);
