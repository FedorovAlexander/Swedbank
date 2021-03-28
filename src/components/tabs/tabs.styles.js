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
		padding: 0 0.625rem;
		background-color: #fff;
		border-radius: 3px;
		margin: 3.5rem auto 1rem;
	}

	.tabs__wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.tabs__items-list {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		position: absolute;
		top: -4.125rem;
		left: -0.625rem;
		list-style: none;
		padding-left: 0;
	}

	.tabs__item {
		font-family: var(--font-titles);
		font-weight: 500;
		padding: 1rem 1.25rem;
		background-color: #f7f5f3;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		cursor: pointer;
	}

	.tabs__item.active {
		background-color: #fff;
	}

	.tabs__content {
		width: 100%;
		padding: 1.25rem 1.25rem 1.25rem;
	}
`;
