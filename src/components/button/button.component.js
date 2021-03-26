import { html, LitElement } from "lit-element";

import { ButtonStyles } from "./button.styles";

class Button extends LitElement {
	static get styles() {
		return [ButtonStyles];
	}
	static get properties() {
		return {
			isMobile: { type: Boolean },
			backgroundColor: { type: String },
			buttonText: { type: String },
		};
	}

	constructor() {
		super();
		this.isMobile = window.innerWidth > 560 ? false : true;
		this.backgroundColor = "";
		this.buttonText = "";
	}

	render() {
		return html`
			<button
				class="${this.isMobile ? "button button--mobile" : "button"}"
				style="background-color: ${this.backgroundColor}; border-color: ${this
					.backgroundColor}"
			>
				${this.buttonText}
			</button>
		`;
	}
}

customElements.define("app-button", Button);
