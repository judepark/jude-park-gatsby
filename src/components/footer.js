import React from 'react'
import styled from 'styled-components'
import {fadeIn} from '../animations/m-styled-animations'

const Footer = () => {
  return (
	  <Navmenu>
	<PageFooter>

		<EmailLink>© {new Date().getFullYear()} Jude Park 💛 <br/> Built with Gatsby, deployed on Netlify</EmailLink>

	</PageFooter>
	</Navmenu>
  )
}

const Navmenu = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	grid-template-rows: 0px;
	& > * {
		grid-column: center;
	}
`
const PageFooter = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: flex-end;
	width: 100%;
	flex-grow: 1;

    padding: 0px 0px;
    margin: 0 auto;
	margin-top: 0px;
	margin-bottom: 0px;
	padding-bottom: 0px;
    
	animation: ${fadeIn} 1.3s;
	
	@media(max-width: 1000px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		margin-top: 50px;
		padding: 0 24px;
	}

`

const EmailLink = styled.a`
	font-size: calc(10px + (12 - 10) * (100vw - 400px) / (1300 - 400) );
	display: block;
	margin-bottom: 0px;
	font-weight: 900;
	padding: 0px 0px 20px 0px;
	color: hsla(0, 0%, 0%, 0.20);
`

export default Footer;


/* 

		<EmailLink href="mailto:hello@maxmckinney.com">hello@maxmckinney.com</EmailLink>

		<FooterSocialLinks>
            <li>
				<a href="https://dribbble.com/MaxMcKinney" target="_blank" rel="noopener noreferrer">
					<FaDribbble size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://github.com/MaxMcKinney" target="_blank" rel="noopener noreferrer">
					<FaGithub size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/mckinneymax" target="_blank" rel="noopener noreferrer">
					<FaLinkedin size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://medium.com/@maxmckinney" target="_blank" rel="noopener noreferrer">
					<FaMedium size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://twitter.com/madmaxmckinney" target="_blank" rel="noopener noreferrer">
					<FaTwitter size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://maxmckinneyphoto.com/" rel="noopener noreferrer">
					<IoIosCamera size={iconSize+6}/>
				</a>
			</li>
		</FooterSocialLinks>
		
*/