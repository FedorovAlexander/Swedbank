import { css } from "lit-element";

export const FooterStyles = css`
	:host {
		margin-top: auto;
	}

	.footer {
		position: relative;
		padding: 0 0.5em;
		background-color: #ebe7e2;
	}

	.footer:before {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		height: 0.3125rem;
		content: "";
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
		flex: 3;
		flex-direction: row;
		justify-content: space-between;
	}

	.footer__links-section {
		flex: 1;
	}

	.footer__title {
		margin-top: 0;
		margin-bottom: 0.75rem;
		font-weight: 500;
		font-size: 1.125rem;
		font-family: var(--font-titles);
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
		position: absolute;
		top: calc(50% - 7px);
		left: 0;
		width: 0;
		height: 0;
		border-top: 6px solid transparent;
		border-bottom: 6px solid transparent;
		border-left: 6px solid #512b2b;
		content: "";
	}

	.footer__link > nav-link {
		width: fit-content;
		padding: 0.375rem 0;
	}

	.footer__link nav-link:hover {
		text-decoration: underline;
	}

	.footer__phone-link {
		color: var(--brand-orange);
		font-size: 2rem;
		font-family: var(--font-headline);
		text-decoration: none;
	}

	.footer__email-link {
		display: block;
		margin-top: 0.75rem;
		margin-bottom: 1.25rem;
		color: var(--link-color);
		font-family: var(--font-main);
	}

	.footer__contacts-item {
		margin-bottom: 0.125rem;
		font-family: var(--font-main);
	}

	.footer__socials-list {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		padding-left: 0;
		list-style: none;
	}

	.footer__socials-item {
		margin-right: 0.5rem;
	}

	.footer__socials-link {
		display: block;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		background-repeat: no-repeat;
		background-position: center;
	}

	.footer-disclaimer {
		padding: 1.5rem 0;
		background-color: #ffffff;
	}

	.footer-disclaimer-text {
		max-width: 60.625rem;
		margin: 0 auto;
		color: gray;
		font-size: 0.8125rem;
		line-height: 1.3;
		font-family: "Arial";
		text-align: center;
	}

	@media screen and (max-width: 767px) {
		.footer {
			padding: 0;
		}

		.footer__wrapper {
			flex-direction: column;
			padding-right: 0;
			padding-left: 0;
		}

		.footer__title,
		.footer__list,
		.footer__socials-links {
			padding-right: 1.5rem;
			padding-left: 1.5rem;
		}

		.footer__title {
			pointer-events: none;
		}

		.footer__socials-list {
			margin-bottom: 0.5rem;
		}

		.footer__contacts {
			padding: 0;
			border-bottom: 2px solid #ddcdc4;
		}

		.footer__links-block {
			flex-direction: column;
			padding: 0;
		}

		.footer__links-section {
			position: relative;
			padding: 1rem 0;
			border-bottom: 2px solid #ddcdc4;
			cursor: pointer;
		}

		.footer__links-section:after {
			display: block;
			position: absolute;
			top: 1.125rem;
			right: 1.5rem;
			width: 8px;
			height: 8px;
			border-width: 3px 3px 0 0;
			border-style: solid;
			border-color: var(--brand-orange);
			content: "";
			transform: rotate(135deg);
		}

		.footer__links-section.js-show:after {
			top: 1.5rem;
			border-color: inherit;
			transform: rotate(-45deg);
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
