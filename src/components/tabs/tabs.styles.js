import { css } from "lit-element";

export const TabsStyles = css`
	:host {
		display: flex;
		width: 100%;
	}

	.tabs {
		display: block;
		width: 100%;
		max-width: 1536px;
		margin: 3.5rem auto 1rem;
		padding: 0 0.625rem;
		border-radius: 3px;
		background-color: #fff;
	}

	.tabs__wrapper {
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.tabs__items-list {
		display: flex;
		position: absolute;
		top: -4.125rem;
		left: -0.625rem;
		flex-direction: row;
		justify-content: flex-start;
		padding-left: 0;
		list-style: none;
	}

	.tabs__item {
		padding: 1rem 1.25rem;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		font-weight: 500;
		font-family: var(--font-titles);
		cursor: pointer;
		background-color: #f7f5f3;
	}

	.tabs__item.active {
		background-color: #fff;
	}

	.tabs__content {
		width: 100%;
		padding: 1.25rem 1.25rem 1.25rem;
	}
`;
