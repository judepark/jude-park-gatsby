import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

import logo from './../assets/img/logo.png'

const Header = () => (
	<Navmenu>
		<SiteLogoContainer>

			<Link to="/">
				<SiteLogo src={logo} />
			</Link>

			<LinkDisplay>
			<LinkWork><Link to="/work" activeStyle={{ fontWeight: 700, color: 'hsla(0, 0%, 0%, 0.80)' }}>WORK</Link></LinkWork>
			<LinkBlog><Link to="/notes" activeStyle={{ fontWeight: 700, color: 'hsla(0, 0%, 0%, 0.80)' }}>NOTES</Link></LinkBlog>
			<LinkAbout><Link to="/about"activeStyle={{ fontWeight: 700, color: 'hsla(0, 0%, 0%, 0.80)' }}>ABOUT</Link></LinkAbout>
			</LinkDisplay>

		</SiteLogoContainer>
	</Navmenu>
)

const SIZE_MOBILE = "715px";

const Navmenu = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
`
const SiteLogo = styled.img`
	width: 45px;
    height: auto;
    margin-right: 32px;
	display: block;
	padding-top: 30px;
	padding-bottom: 0px;

    @media(max-width: ${SIZE_MOBILE}) {

    }
`
const SiteLogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
	flex-grow: 1;
	padding: 20px 0px 20px 0px;
	@media (max-width: 1155px) {

	}
	a {
		font-family: 'Product Sans', sans-serif;
		font-size: calc(15px + (17 - 15) * (100vw - 400px) / (1300 - 400) );
		letter-spacing: 1px;
		color: hsla(0, 0%, 0%, 0.5);
		font-weight: bold;

		img {
			align-items: center;
		}
	}
	@media (max-width: 1000px) {

	}
`

const LinkDisplay = styled.div`
a:hover {
	color: hsla(0, 0%, 0%, 0.80);
  }
`

const LinkWork = styled.div`
	display: inline-block;
	margin-right: 28px; 

`

const LinkBlog = styled.div`
	display: inline-block;
	margin-right: 28px;

`

const LinkAbout = styled.div`
	display: inline-block;
`

export default Header;
