import { html, LitElement } from 'lit-element';

import { HeaderStyles } from './header.styles';

const MenuItems = {
	HOME: "Home",
	EVERYDAY_BANKING: "Everyday banking",
};

const LOGO_SRC = "../../assets/img/swedbank_logo.png";

export class Header extends LitElement {
	static get properties() {
		return {
			menuItems: { type: Array },
			showOverlay: false,
			showMenu: false,
			isMobile: { type: Boolean },
			activeRoute: { type: String },
		};
	}

	static get styles() {
		return [HeaderStyles];
	}

	constructor() {
		super();
		this.menuItems = [MenuItems.HOME, MenuItems.EVERYDAY_BANKING];
		this.showOverlay = false;
		this.isMobile = window.innerWidth > 767 ? false : true;
		this.activeRoute = "";
	}

	render() {
		return html`
			<header class="header">
				<div class="header__logo-block">
					<div class="header__logo-block-wrapper">
						<img src="${LOGO_SRC}" />
						<div
							class="header__burger-icon"
							class=${this.isMobile
								? "header__burger-icon"
								: "header__burger-icon hidden"}
						>
							<div id="nav-icon" @click=${this._toggleMenu}>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
					</div>
				</div>
				<nav
					class="${this.isMobile && !this.showMenu
						? "header__menu-block hidden"
						: "header__menu-block"}"
				>
					<ul class="header__menu-list">
						<li
							class="${this.activeRoute === "home"
								? "header__menu-item active"
								: "header__menu-item"}"
							@mouseenter=${this._toggleOverlayOnHover}
							@mouseleave=${this._toggleOverlayOnHover}
							@click=${this._clickMenuItem}
						>
							<nav-link href="/">
								<span class="header__menu-icon">
									<svg
										width="20px"
										height="18px"
										viewBox="0 0 20 18"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
									>
										<title>home</title>
										<desc>Created with Sketch.</desc>
										<defs></defs>
										<g
											id="Sprite"
											stroke="none"
											stroke-width="1"
											fill="none"
											fill-rule="evenodd"
										>
											<g
												id="home-icon"
												transform="translate(-340.000000, -191.000000)"
												fill="#512B2B"
											>
												<g
													id="Menu-items"
													transform="translate(340.000000, 189.000000)"
												>
													<g
														id="home"
														transform="translate(0.000000, 2.000000)"
													>
														<path
															d="M10,4.737 L17.368,12.106 L17.368,17.895 L12.105,17.895 L12.105,11.58 L7.895,11.58 L7.895,17.895 L2.632,17.895 L2.632,12.106 L10,4.737 L10,4.737 Z M16.315,6.316 L16.315,2.106 L14.211,2.106 L14.211,4.21 L10,0 L0,10.001 L1.579,11.58 L10,3.159 L18.421,11.58 L20,10.001 L16.315,6.316 L16.315,6.316 Z"
														></path>
													</g>
												</g>
											</g>
										</g>
									</svg>
								</span>
								${MenuItems.HOME}
							</nav-link>
						</li>
						<li
							class="${this.activeRoute === "banking"
								? "header__menu-item active"
								: "header__menu-item"}"
							@mouseenter=${this._toggleOverlayOnHover}
							@mouseleave=${this._toggleOverlayOnHover}
							@click=${this._clickMenuItem}
						>
							<nav-link href="/banking">
								<span class="header__menu-icon">
									<svg
										width="20px"
										height="19px"
										viewBox="0 0 20 19"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
									>
										<title>everyday_banking</title>
										<desc>Created with Sketch.</desc>
										<defs></defs>
										<g
											id="Sprite"
											stroke="none"
											stroke-width="1"
											fill="none"
											fill-rule="evenodd"
										>
											<g
												id="banking-icon"
												transform="translate(-370.000000, -190.000000)"
												fill="#512B2B"
											>
												<g
													id="Menu-items"
													transform="translate(340.000000, 189.000000)"
												>
													<g
														id="everyday_banking"
														transform="translate(30.000000, 1.000000)"
													>
														<path
															d="M15,16 L20,16 C20,17.654 18.655,19 17,19 L7.5,19 C6.672,19 6,18.328 6,17.5 L6,8.5 C6,7.672 6.672,7 7.5,7 L17,7 C18.655,7 20,8.346 20,10 L15,10 C13.346,10 12,11.346 12,13 C12,14.654 13.346,16 15,16 L15,16 Z M15,11 L20,11 L20,15 L15,15 C13.896,15 13,14.104 13,13 C13,11.895 13.896,11 15,11 L15,11 Z M15,13 C15,13.553 15.448,14 16,14 C16.552,14 17,13.553 17,13 C17,12.447 16.552,12 16,12 C15.448,12 15,12.447 15,13 L15,13 Z M2,10 L5,10 L5,12 L2,12 C0.896,12 0,11.104 0,10 L0,2 C0,0.896 0.896,0 2,0 L14,0 C15.105,0 16,0.896 16,2 L16,6 L2,6 L2,10 L2,10 Z M2,3 L14,3 L14,2 L2,2 L2,3 Z"
														></path>
													</g>
												</g>
											</g>
										</g>
									</svg>
								</span>
								${MenuItems.EVERYDAY_BANKING}
							</nav-link>
						</li>
					</ul>
				</nav>
			</header>
			<div id="overlay" class=${this.showOverlay ? "" : "hidden"}></div>
		`;
	}

	connectedCallback() {
		super.connectedCallback();
		this.addEventListener("mouseover", this._menuItemHover);
	}

	_toggleOverlayOnHover() {
		if (!this.isMobile) {
			this.showOverlay = !this.showOverlay;
		}
	}

	_toggleOverlayOnClick() {
		if (this.isMobile) {
			this.showOverlay = !this.showOverlay;
		}
	}

	_toggleMenu() {
		let menuIcon = this.shadowRoot.querySelector("#nav-icon");
		menuIcon.classList.toggle("open");
		this.showOverlay = !this.showOverlay;
		this.showMenu = !this.showMenu;
	}

	_clickMenuItem(e) {
		if (this.isMobile) {
			this._toggleMenu();
		}
	}
}

window.customElements.define("app-header", Header);
