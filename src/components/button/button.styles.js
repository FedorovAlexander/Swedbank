import { css } from "lit-element";

export const ButtonStyles = css`
	.button {
		padding: 0 0.625rem;
		border-radius: 3px;
		border: none;
		color: #fff;
		margin-left: 0.625rem;
		padding: 0.5rem 1rem;
		display: block;
		border: 1px solid;
		cursor: pointer;
	}

	.button--mobile {
		width: 100%;
		margin-left: 0;
		margin-bottom: 0.625rem;
	}

	@media screen and (max-width: 560px) {
		:host {
			width: 100%;
		}
	}
`;
