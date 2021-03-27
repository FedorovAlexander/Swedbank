import { html, LitElement } from "lit-element";

import { ReadMoreLinkStyles } from "./read-more-link.styles";

class ReadMoreLink extends LitElement {
	static get styles() {
		return [ReadMoreLinkStyles];
	}
	static get properties() {
		return {
			href: { type: String },
		};
	}
	constructor() {
		super();
		this.href = "";
	}
	render() {
		return html` <a href=${this.href} class="read-more-link">Read More</a> `;
	}
}

customElements.define("app-read-more-link", ReadMoreLink);
