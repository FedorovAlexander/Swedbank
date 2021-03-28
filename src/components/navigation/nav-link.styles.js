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
		align-items: center;
		justify-content: center;
		text-decoration: none;
		color: inherit;
		width: 100%;
		text-align: center;
	}

	.nav-link--align-left {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		text-decoration: none;
		color: inherit;
		width: 100%;
		text-align: center;
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
