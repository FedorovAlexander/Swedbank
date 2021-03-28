import { css } from "lit-element";

export const FooterStyles = css`
	:host {
		margin-top: auto;
	}

	.footer {
		position: relative;
		background-color: #ebe7e2;
		padding: 0 0.5em;
	}

	.footer:before {
		content: "";
		position: absolute;
		height: 0.3125rem;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: linear-gradient(to right, var(--brand-orange), #f4ba44);
	}

	.footer__links-block {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.footer__wrapper {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		box-sizing: border-box;
		max-width: 1556px;
		margin: 0 auto;
		padding: 1.25rem 1rem 2rem;
	}

	.footer__contacts {
		flex: 1;
	}

	.footer__links-block {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex: 3;
	}

	.footer__links-section {
		flex: 1;
	}

	.footer__title {
		font-family: var(--font-titles);
		font-weight: 500;
		font-size: 1.125rem;
		margin-top: 0;
		margin-bottom: 0.75rem;
	}

	.footer__title--contact {
		margin-bottom: 0.475rem;
	}

	.footer__list {
		margin: 0;
		padding-left: 0;
		list-style: none;
	}

	.footer__link {
		position: relative;
		padding-left: 0.75rem;
		font-size: 1rem;
		font-family: var(--font-main);
		text-decoration: none;
	}

	.footer__link:before {
		content: "";
		position: absolute;
		top: calc(50% - 7px);
		left: 0;
		width: 0;
		height: 0;
		border-top: 6px solid transparent;
		border-bottom: 6px solid transparent;
		border-left: 6px solid #512b2b;
	}

	.footer__link > nav-link {
		padding: 0.375rem 0;
		width: fit-content;
	}

	.footer__link nav-link:hover {
		text-decoration: underline;
	}

	.footer__phone-link {
		font-family: var(--font-headline);
		font-size: 2rem;
		color: var(--brand-orange);
		text-decoration: none;
	}

	.footer__email-link {
		display: block;
		font-family: var(--font-main);
		color: var(--link-color);
		margin-top: 0.75rem;
		margin-bottom: 1.25rem;
	}

	.footer__contacts-item {
		font-family: var(--font-main);
		margin-bottom: 0.125rem;
	}

	.footer__socials-list {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		list-style: none;
		padding-left: 0;
	}

	.footer__socials-item {
		margin-right: 0.5rem;
	}

	.footer__socials-link {
		display: block;
		height: 1.5rem;
		width: 1.5rem;
		border-radius: 50%;
		background-position: center;
		background-repeat: no-repeat;
	}

	.footer-disclaimer {
		background-color: #ffffff;
		padding: 1.5rem 0;
	}

	.footer-disclaimer-text {
		font-family: "Arial";
		font-size: 0.8125rem;
		color: gray;
		text-align: center;
		line-height: 1.3;
		max-width: 60.625rem;
		margin: 0 auto;
	}

	@media screen and (max-width: 767px) {
		.footer {
			padding: 0;
		}

		.footer__wrapper {
			flex-direction: column;
			padding-left: 0;
			padding-right: 0;
		}

		.footer__title,
		.footer__list,
		.footer__socials-links {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}

		.footer__title {
			pointer-events: none;
		}

		.footer__socials-list {
			margin-bottom: 0.5rem;
		}

		.footer__contacts {
			border-bottom: 2px solid #ddcdc4;
			padding: 0;
		}

		.footer__links-block {
			flex-direction: column;
			padding: 0;
		}

		.footer__links-section {
			position: relative;
			border-bottom: 2px solid #ddcdc4;
			padding: 1rem 0;
			cursor: pointer;
		}

		.footer__links-section:after {
			content: "";
			display: block;
			position: absolute;
			border-style: solid;
			border-width: 3px 3px 0 0;
			border-color: var(--brand-orange);
			height: 8px;
			width: 8px;
			right: 1.5rem;
			top: 1.125rem;
			transform: rotate(135deg);
		}

		.footer__links-section.js-show:after {
			top: 1.5rem;
			transform: rotate(-45deg);
			border-color: inherit;
		}

		.footer__title--list {
			margin-bottom: 0;
		}

		.footer__list--links {
			display: none;
			padding-top: 1rem;
		}

		.footer__links-section.js-show .footer__list {
			display: block;
		}
	}
`;
