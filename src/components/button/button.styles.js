import { css } from "lit-element";

export const ButtonStyles = css`
	.button {
		display: block;
		margin-left: 0.625rem;
		padding: 0 0.625rem;
		padding: 0.5rem 1rem;
		border: none;
		border: 1px solid;
		border-radius: 3px;
		color: #fff;
		cursor: pointer;
	}

	.button--mobile {
		width: 100%;
		margin-bottom: 0.625rem;
		margin-left: 0;
	}

	@media screen and (max-width: 560px) {
		:host {
			width: 100%;
		}
	}
`;
