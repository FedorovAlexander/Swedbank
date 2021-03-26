import { css } from "lit-element";

export const SelectStyles = css`
	:host {
		flex: 1;
		max-width: 18.75rem;
		width: 100%;
		position: relative;
	}

	:host:after {
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
		width: 100%;
	}

	.select--currency {
		width: 5.625rem;
	}
`;
