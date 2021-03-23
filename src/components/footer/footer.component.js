import { html, LitElement } from 'lit-element';

import { FooterStyles } from './footer.styles';

class Footer extends LitElement {
	static get styles() {
		return [FooterStyles];
	}
	static get properties() {
		return {
			footerLinks: { type: Array },
		};
	}
	constructor() {
		super();
		this.footerLinks = [
			{
				title: "Quicklinks",
				linksList: [
					{ linkTitle: "Calculators", href: "#" },
					{ linkTitle: "Prices", href: "#" },
					{ linkTitle: "Terms of service", href: "#" },
					{ linkTitle: "Privacy and security", href: "#" },
				],
			},
			{
				title: "Join Swedbank",
				linksList: [
					{ linkTitle: "Client programs", href: "#" },
					{ linkTitle: "Business customers", href: "#" },
					{ linkTitle: "Jobs", href: "#" },
					{ linkTitle: "Internships", href: "#" },
				],
			},
			{
				title: "Tooted",
				linksList: [
					{ linkTitle: "Everyday banking", href: "/banking" },
					{ linkTitle: "Loans", href: "#" },
					{ linkTitle: "Insurance", href: "#" },
					{ linkTitle: "Cards", href: "#" },
					{ linkTitle: "Stocks", href: "#" },
				],
			},
		];
	}
	render() {
		return html`
			<footer class="footer">
				<div class="footer__wrapper">
					<div class="footer__contacts"></div>
					<div class="footer__links-block">
						${this.footerLinks.map(
							(item) => html`
								<div class="footer__links-section">
									<h3 class="footer__links-title">${item.title}</h3>
									<ul class="footer__links-list">
										${item.linksList.map(
											(item) => html`<li class="footer__link">
												<nav-link href="${item.href}" textAlign="left">
													${item.linkTitle}
												</nav-link>
											</li>`
										)}
									</ul>
								</div>
							`
						)}
					</div>
				</div>
			</footer>
		`;
	}
}

customElements.define("app-footer", Footer);
