import { css } from "lit-element";

export const HomePageStyles = css`
	.home-page {
		display: block;
		box-sizing: border-box;
		width: 100%;
		padding: 0 0.5rem;
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
		max-width: 1556px;
		margin-top: 0.625rem;
		margin-right: -0.625rem;
		margin-bottom: 1.875rem;
		margin-left: -0.625rem;
		padding: 1.125rem 0.375rem;
		border-radius: 3px;
		background-color: #fff;
	}

	.home-page__advantage-title {
		margin: 0;
		margin-bottom: 0.5rem;
		font-size: 0.75rem;
	}

	.home-page__advantage-text {
		margin: 0;
		font-size: 0.75rem;
		line-height: 1.5;
	}

	.home-page__advantage-list {
		margin: 0;
		margin-bottom: 1.875rem;
		padding-left: 0;
		list-style: none;
		font-size: 0.75rem;
	}

	.home-page__advantage-list-item {
		position: relative;
		margin-bottom: 0.375rem;
		padding-left: 0.75rem;
	}

	.home-page__advantage-list-item:before {
		position: absolute;
		top: 2px;
		left: 0;
		width: 5px;
		height: 10px;
		border-radius: 0 10px 10px 0;
		content: "";
		background: #c5569a;
	}

	@media screen and (max-width: 767px) {
		.home-page__advantages-list {
			flex-direction: column;
		}
	}
`;
