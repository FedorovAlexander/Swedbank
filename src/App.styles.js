import { css } from 'lit-element';

export const AppStyles = css`
	h1 {
		font-family: "Swedbank Headline";
		font-size: 1.625rem;
		color: var(--brand-orange);
		max-width: 1526px;
		margin: 1rem auto;
		padding: 0 1.5rem;
		width: 100%;
		box-sizing: border-box;
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
