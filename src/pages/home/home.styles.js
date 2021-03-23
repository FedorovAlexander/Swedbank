import { css } from 'lit-element';

export const HomePageStyles = css`
	.home-page {
		display: block;
		width: 100%;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.home-page__wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.home-page__advantages-list {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		box-sizing: border-box;
		width: 100%;
		max-width: 1536px;
		padding: 0 0.625rem;
		background-color: #fff;
		border-radius: 3px;
		margin-top: 0.625rem;
	}
`;
