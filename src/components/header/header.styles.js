import { css } from 'lit-element';

export const HeaderStyles = css`
	:host {
		display: block;
		width: 100%;
	}

	.header {
		display: flex;
		flex-direction: column;
		position: relative;
		margin: 0 auto;
		background-color: #fff;
		font-family: var(--font-titles);
		font-weight: 400;
		z-index: 200;
	}

	.header:after {
		content: "";
		position: absolute;
		height: 0.625rem;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: linear-gradient(to right, var(--brand-orange), #f4ba44);
	}

	.header__logo-block-wrapper {
		display: flex;
		justify-content: space-between;
		padding: 1.25rem 1.25rem 0.625rem 1.25rem;
	}

	.header__menu-block {
		display: flex;
		width: 100%;
		margin: 0 auto;
	}

	.header__menu-block.hidden {
		display: none;
	}

	.header__menu-list {
		display: flex;
		justify-content: space-between;
		width: 100%;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.header__menu-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		text-align: center;
		color: #000000;
		font-weight: 500;
		border-top: 2px solid #f1eeeb;
		transition: color 0.1s linear, border-top 0.1s linear;
	}

	.header__menu-item:not(:first-child) {
		border-left: 2px solid #f1eeeb;
	}

	.header__menu-item:hover {
		color: var(--brand-orange);
		border-top: 2px solid var(--brand-orange);
	}

	.header__menu-item.active {
		color: var(--brand-orange);
		border-top: 2px solid var(--brand-orange);
	}

	.header__menu-item #home-icon,
	.header__menu-item #banking-icon {
		fill: #512b2b;
		transition: fill 0.1s linear;
	}

	.header__menu-item:hover #home-icon,
	.header__menu-item:hover #banking-icon {
		fill: var(--brand-orange);
	}

	.header__menu-item.active #home-icon,
	.header__menu-item.active #banking-icon {
		fill: var(--brand-orange);
	}

	.header__menu-icon {
		pointer-events: none;
	}

	.header__burger-icon {
		display: flex;
		align-items: center;
	}

	.header__burger-icon.hidden {
		display: none;
	}

	#overlay {
		display: block;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 100;
		background-color: #a08f8f;
		opacity: 0.5;
		transition: opacity 0.1s linear;
	}

	#overlay.hidden {
		display: none;
		opacity: 0;
	}

	#nav-icon {
		width: 1.25rem;
		height: 0.9375rem;
		position: relative;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: 0.5s ease-in-out;
		-moz-transition: 0.5s ease-in-out;
		-o-transition: 0.5s ease-in-out;
		transition: 0.5s ease-in-out;
		cursor: pointer;
	}

	#nav-icon span {
		display: block;
		position: absolute;
		height: 0.1875rem;
		width: 100%;
		background: #512b2b;
		border-radius: 3px;
		opacity: 1;
		left: 0;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: 0.25s ease-in-out;
		-moz-transition: 0.25s ease-in-out;
		-o-transition: 0.25s ease-in-out;
		transition: 0.25s ease-in-out;
	}

	#nav-icon span:nth-child(1) {
		top: 0;
	}

	#nav-icon span:nth-child(2),
	#nav-icon span:nth-child(3) {
		top: 0.375rem;
	}

	#nav-icon span:nth-child(4) {
		top: 0.75rem;
	}

	#nav-icon.open span:nth-child(1) {
		top: 0.375rem;
		width: 0%;
		left: 50%;
	}

	#nav-icon.open span:nth-child(2) {
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
	}

	#nav-icon.open span:nth-child(3) {
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-o-transform: rotate(-45deg);
		transform: rotate(-45deg);
	}

	#nav-icon.open span:nth-child(4) {
		top: 0.375rem;
		width: 0%;
		left: 50%;
	}

	@media screen and (max-width: 47.9375rem) {
		.header__menu-block {
			position: absolute;
			top: 4.0625rem;
			left: 0px;
			background-color: #fff;
		}

		.header__menu-list {
			flex-direction: column;
		}

		.header__menu-item {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			padding: 1.25rem;
		}

		.header__menu-icon {
			display: none;
		}
	}

	@media (hover: none) and (pointer: coarse) and (min-width: 768px) {
		#overlay {
			display: none !important;
		}
	}
`;
