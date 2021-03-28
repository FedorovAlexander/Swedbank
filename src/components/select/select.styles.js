import { css } from "lit-element";

export const SelectStyles = css`
	:host {
		flex: 1;
		width: 100%;
		max-width: 18.75rem;
	}

	.select-wrapper {
		position: relative;
	}

	.select-wrapper:after {
		display: block;
		position: absolute;
		top: 0.625rem;
		right: 0.3125rem;
		width: 0.75rem;
		height: 0.75rem;
		content: "";
		background-image: url("/assets/img/up-down.svg");
		background-repeat: no-repeat;
		background-size: cover;
	}

	.select-wrapper--inline-width {
		display: inline-block;
	}

	select {
		text-indent: 1px;
		text-overflow: "";
		-webkit-appearance: none;
		-moz-appearance: none;
	}

	.select {
		width: 100%;
		height: 2rem;
		padding-right: 0.625rem;
		padding-left: 0.625rem;
		border: 1px solid #bcd8db;
		border-radius: 3px;
		font-size: 0.75rem;
		background-color: #ebf8f2;
	}

	.select--inline-width {
		width: auto;
		padding-right: 1.5rem;
	}

	.select--currency {
		width: 5.625rem;
	}

	@media screen and (max-width: 560px) {
		:host {
			max-width: 100%;
		}

		.select-wrapper--inline-width {
			display: flex;
		}

		.select--inline-width {
			width: 100%;
		}
	}
`;
