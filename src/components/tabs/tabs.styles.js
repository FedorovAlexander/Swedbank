import { css } from 'lit-element';

export const TabsStyles = css`
	:host {
		display: flex;
		width: 100%;
	}

	.tabs {
		display: block;
		width: 100%;
		max-width: 1536px;
		padding: 0 0.625rem;
		background-color: #fff;
		border-radius: 3px;
		margin: 0 auto;
	}

	.tabs__wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-bottom: 2rem;
	}
`;
