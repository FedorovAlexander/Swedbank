import { css } from "lit-element";

export const NavLinkStyles = css`
	:host {
		display: block;
		width: 100%;
		padding: 0.5rem 0px;
	}

	.nav-link {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		color: inherit;
		text-align: center;
		text-decoration: none;
	}

	.nav-link--align-left {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		color: inherit;
		text-align: center;
		text-decoration: none;
	}

	.nav-link:hover {
		color: inherit;
	}

	@media screen and (max-width: 767px) {
		.nav-link {
			align-items: flex-start;
		}

		:host {
			padding: 0;
		}
	}
`;
