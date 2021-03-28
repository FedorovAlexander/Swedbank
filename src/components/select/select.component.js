import { html, LitElement } from "lit-element";

import { SelectStyles } from "./select.styles";

class Select extends LitElement {
	static get styles() {
		return [SelectStyles];
	}
	static get properties() {
		return {
			isMobile: { type: Boolean },
			options: { type: Array },
			name: { type: String },
			value: { type: String },
			placeholder: { type: String },
			defaultValue: { type: String },
			error: { type: Boolean },
			firstOptionSelected: { type: Boolean },
			units: { type: String },
			inlineWidth: { type: Boolean },
		};
	}
	constructor() {
		super();
		this.isMobile = window.innerWidth > 767 ? false : true;
		this.name = "";
		this.options = [];
		this.placeholder = "";
		this.error = false;
		this.firstOptionSelected = false;
		this.units = "";
		this.inlineWidth = false;
		this.defaultValue = " ";
		this.value = this.defaultValue;
	}
	render() {
		return html`
			<div
				class="${this.inlineWidth
					? "select-wrapper select-wrapper--inline-width"
					: "select-wrapper"}"
			>
				<select
					name="${this.name}"
					class="${this.inlineWidth ? "select select--inline-width" : "select"}"
					value="${this.value ? this.defaultValue : this.value}"
					@change=${this._selectChange}
					style=${this.error ? "border-color: #d1434a" : ""}
				>
					<script>
						function defaultValue() {
							this.value = options[0];
						}
						defaultValue();
					</script>
					<option selected disabled ?hidden=${this.firstOptionSelected}>
						${this.placeholder}${this.units}
					</option>
					${this.options.map(
						(item, index) =>
							html`
								<option
									class="payment-form__option"
									value="${item}"
									?default="${this.firstOptionSelected}"
									?selected=${this.firstOptionSelected && index === 0}
								>
									<span class="payment-form__option-content"
										>${item}${this.units}</span
									>
								</option>
							`
					)}
				</select>
			</div>
		`;
	}

	_selectChange() {
		let select = this.shadowRoot.querySelector("select");
		this.value = select.value;
		this.defaultValue = select.value;
	}
}

customElements.define("app-select", Select);
