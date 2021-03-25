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
			activeTab: { type: String },
		};
	}
	constructor() {
		super();
		this.isMobile = window.innerWidth > 767 ? false : true;
		this.tabsList = [];
		this.activeTab = "";
	}
	render() {
		return html`
			<section class="tabs">
				<div class="tabs__wrapper">
					<ul class="tabs__items-list">
						${this.tabsList.map(
							(item) =>
								html`
									<li
										class="${item === this.activeTab
											? "tabs__item active"
											: "tabs__item"}"
										@click="${this._toggleTabs}"
										data-title="${item}"
									>
										${item}
									</li>
								`
						)}
					</ul>
					<div class="tabs__content">
						<div class="tabs__content-wrapper">
							<slot name="${this.activeTab}"></slot>
						</div>
					</div>
				</div>
			</section>
		`;
	}

	_toggleTabs(e) {
		let target = e.target;
		this.activeTab = target.dataset.title;
	}
}

customElements.define("app-tabs", Tabs);
