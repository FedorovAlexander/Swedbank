import { html, LitElement } from 'lit-element';

import { FooterStyles } from './footer.styles';

class Footer extends LitElement {
	static get styles() {
		return [FooterStyles];
	}
	static get properties() {
		return {
			footerLinks: { type: Array },
			contacts: { type: Object },
			socialMedia: { type: Array },
			isMobile: { type: Boolean },
		};
	}
	constructor() {
		super();
		this.isMobile = window.innerWidth > 767 ? false : true;

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

		this.contacts = {
			phoneNumber: "6 310 310",
			email: "info@swedbank.ee",
			title: "SWEDBANK AS",
			address: "Liivalaia 8, 15040 Tallinn",
			swift: "HABAEE2X",
			regNumber: 10060701,
		};

		this.socialMedia = [
			{ media: "facebook", link: "https://www.facebook.com/SwedbankEestis/" },
			{
				media: "instagram",
				link: "https://www.instagram.com/swedbankeestis/?hl=en",
			},
			{
				media: "youtube",
				link: "https://www.youtube.com/channel/UCtkFPufr4LOHpSmy399zQIw",
			},
			{ media: "twitter", link: "https://twitter.com/Swedbank" },
			{ media: "skype", link: "skype:swedbank.eestis?call" },
		];
	}
	render() {
		return html`
			<footer class="footer">
				<div class="footer__wrapper">
					<div class="footer__contacts">
						<h3 class="footer__title footer__title--contact">Contact</h3>
						<ul class="footer__list footer__list--contacts">
							<li class="footer__contacts-item">
								<a
									href="tel:+372${this.contacts.phoneNumber}"
									class="footer__phone-link"
								>
									${this.contacts.phoneNumber}
								</a>
							</li>
							<li class="footer__contacts-item">
								<a
									href="mailto:${this.contacts.email}"
									class="footer__email-link"
								>
									${this.contacts.email}
								</a>
							</li>
							<li class="footer__contacts-item">${this.contacts.title}</li>
							<li class="footer__contacts-item">${this.contacts.address}</li>
							<li class="footer__contacts-item">
								SWIFT kood/BIC: ${this.contacts.swift}
							</li>
							<li class="footer__contacts-item">
								Reg. number: ${this.contacts.regNumber}
							</li>
						</ul>
						<div class="footer__socials-links">
							<ul class="footer__socials-list">
								${this.socialMedia.map(
									(item) => html`
										<li class="footer__socials-item">
											<a
												href="${item.link}"
												class="footer__socials-link"
												target="_blank"
												rel="noopener noreferrer"
												title="${item.media}"
												style="background-image: url(/assets/img/social-media/${item.media}.svg)"
											></a>
										</li>
									`
								)}
							</ul>
						</div>
					</div>
					<div class="footer__links-block">
						${this.footerLinks.map(
							(item) => html`
								<div
									class="footer__links-section"
									@click=${this._toggleLinksList}
								>
									<h3 class="footer__title footer__title--list">
										${item.title}
									</h3>
									<ul class="footer__list footer__list--links">
										${item.linksList.map(
											(item) => html`<li class="footer__link">
												<nav-link href="${item.href}">
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
				<div class="footer__disclaimer">
					<p class="footer__disclaimer-text">
						This is a website of companies offering financial services –
						Swedbank AS, Swedbank Liising AS, Swedbank P&amp;C Insurance AS,
						Swedbank Life Insurance SE, and Swedbank Investeerimisfondid AS.
						Before entering into any agreement read the terms and conditions of
						the respective service. Consult a specialist, where necessary.
						Swedbank AS does not provide a credit advisory service for the
						purposes of the Creditors and Credit Intermediaries Act. The
						borrower makes the decision of taking out a loan, who assesses the
						suitability of the loan product and contractual terms to his/her
						personal loan interest, need and financial situation on the basis of
						the information and warnings presented by the bank and is
						responsible for the consequences related to concluding the
						agreement.
					</p>
				</div>
			</footer>
		`;
	}

	_toggleLinksList(e) {
		if (this.isMobile) {
			let target = e.target;
			let openList = e.target.parentNode.querySelector(".js-show");
			if (openList && e.target !== openList) {
				openList.classList.remove("js-show");
			}
			target.classList.toggle("js-show");
		}
	}
}

customElements.define("app-footer", Footer);
