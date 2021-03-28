import { css } from "lit-element";

export const AppStyles = css`
	h1 {
		box-sizing: border-box;
		width: 100%;
		max-width: 1526px;
		margin: 1rem auto;
		padding: 0 1.5rem;
		color: var(--brand-orange);
		font-size: 1.625rem;
		font-family: "Swedbank Headline";
	}

	a {
		color: var(--link-color);
	}

	.app-container {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}
`;
