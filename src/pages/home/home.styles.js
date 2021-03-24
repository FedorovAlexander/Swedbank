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
		max-width: 1556px;
		background-color: #fff;
		border-radius: 3px;
		margin-top: 0.625rem;
		margin-bottom: 1.875rem;
		margin-right: -0.625rem;
		margin-left: -0.625rem;
		padding: 1.125rem 0.375rem;
	}

	.home-page__advantage-title {
		font-size: 0.75rem;
		margin: 0;
		margin-bottom: 0.5rem;
	}

	.home-page__advantage-text {
		font-size: 0.75rem;
		line-height: 1.5;
		margin: 0;
	}

	.home-page__advantage-link {
		position: relative;
		display: inline-block;
		font-size: 0.75rem;
		color: var(--link-color);
		margin-top: 0.5rem;
		padding-left: 0.5rem;
		cursor: pointer;
	}

	.home-page__advantage-link:hover {
		text-decoration: none;
	}

	.home-page__advantage-link:before {
		content: "";
		position: absolute;
		top: 1px;
		left: 0;
		width: 0;
		height: 0;
		border-top: 5px solid transparent;
		border-bottom: 5px solid transparent;
		border-left: 5px solid #257886;
	}

	.home-page__advantage-list {
		list-style: none;
		padding-left: 0;
		margin: 0;
		margin-bottom: 1.875rem;
		font-size: 0.75rem;
	}

	.home-page__advantage-list-item {
		position: relative;
		margin-bottom: 0.375rem;
		padding-left: 0.75rem;
	}

	.home-page__advantage-list-item:before {
		content: "";
		position: absolute;
		top: 2px;
		left: 0;
		height: 10px;
		width: 5px;
		border-radius: 0 10px 10px 0;
		background: #c5569a;
	}

	@media screen and (max-width: 767px) {
		.home-page__advantages-list {
			flex-direction: column;
		}
	}
`;
