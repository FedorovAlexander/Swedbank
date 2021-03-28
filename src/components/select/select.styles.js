import { css } from "lit-element";

export const SelectStyles = css`
	:host {
		flex: 1;
		max-width: 18.75rem;
		width: 100%;
	}

	.select-wrapper {
		position: relative;
	}

	.select-wrapper:after {
		content: "";
		position: absolute;
		height: 0.75rem;
		width: 0.75rem;
		display: block;
		right: 0.3125rem;
		top: 0.625rem;
		background-image: url("/assets/img/up-down.svg");
		background-size: cover;
		background-repeat: no-repeat;
	}

	.select-wrapper--inline-width {
		display: inline-block;
	}

	select {
		-webkit-appearance: none;
		-moz-appearance: none;
		text-indent: 1px;
		text-overflow: "";
	}

	.select {
		height: 2rem;
		background-color: #ebf8f2;
		border: 1px solid #bcd8db;
		border-radius: 3px;
		font-size: 0.75rem;
		padding-left: 0.625rem;
		padding-right: 0.625rem;
		width: 100%;
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
