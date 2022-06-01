import React from 'react'
import {Link} from 'gatsby'
import logo from './../assets/img/logo.png'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {fadeInDown, fadeInScaleDown} from '../animations/m-styled-animations'

import LiveContentCard from '../components/LiveContentCard'

import {FaRegImage} from 'react-icons/fa'
import {FaCreativeCommons} from 'react-icons/fa'

import {FaEnvelope} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

const iconSize = 23;

const iconSize2 = 15;

const SIZE_MOBILE = "715px";

export default function Template({ data }) {
	return (
		<React.Fragment>

<Banner color={data.markdownRemark.frontmatter.color}></Banner>

<PageGrid>
<Row>
<Column>

		<Helmet title={data.site.siteMetadata.title + ' | ' + data.markdownRemark.frontmatter.title}>
            <meta name="theme-color" content={data.markdownRemark.frontmatter.color}/>
		</Helmet>
		
		<Date color={data.markdownRemark.frontmatter.color}>{data.markdownRemark.frontmatter.date}</Date>

		<NoteHeader color={data.markdownRemark.frontmatter.color}>
			<Img style={{position: 'absolute', top: 0, left: 0, width: '100%', height: `100%`}} fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid}/>
			<NotePostTitle>{data.markdownRemark.frontmatter.title}</NotePostTitle>
		</NoteHeader>

		<NoteDetails>
				<div>
					<ImageAuthor>
						<li><mark id="myHeader"><Icon><FaRegImage size={iconSize2}/></Icon> {data.markdownRemark.frontmatter.imageauthor} <Icon><FaCreativeCommons size={iconSize2}/></Icon></mark></li>
					</ImageAuthor>
				</div>
			</NoteDetails>
			

		<NoteContentGrid color={data.markdownRemark.frontmatter.color}>
			<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

			{data.markdownRemark.frontmatter.showLiveContent && 
				<LiveContentCard thumbnail={data.markdownRemark.frontmatter.image.childImageSharp.fluid.src} title={data.markdownRemark.frontmatter.title} url={data.markdownRemark.frontmatter.url} color={data.markdownRemark.frontmatter.color}/>
			}
		</NoteContentGrid>

		<BackgroundColor color={data.markdownRemark.frontmatter.color}/>

</Column>
</Row>
</PageGrid>

<br/><br/>
		<FooterBanner color={data.markdownRemark.frontmatter.color}>
		<FooterContainer color={data.markdownRemark.frontmatter.color}>
			<Footer>
				<div><strong>Jude Park</strong> is a user experience designer working for the Government of Canada.</div>
			</Footer>	
			
				<SiteSocial>
	  	<li>
		<Link to="/">
		<SiteLogo src={logo}/>
		</Link>
	  	</li>
      	<li>
        <IconEnvelope>
				<a href="mail:jude@judepark.com" rel="noopener noreferrer">
					<FaEnvelope size={iconSize}/>
				</a>
        </IconEnvelope>
	  	</li>
      	<li>
        <IconDribble>
				<a href="https://dribbble.com/judepark/" target="_blank" rel="noopener noreferrer">
					<FaDribbble size={iconSize}/>
				</a>
        </IconDribble>
	    </li>
		<li>
        <IconGithub>
				<a href="https://github.com/judepark/" target="_blank" rel="noopener noreferrer">
					<FaGithub size={iconSize}/>
				</a>
        </IconGithub>
		</li>
		<li>
        <IconLinkedin>
				<a href="https://www.linkedin.com/in/judepark/" target="_blank" rel="noopener noreferrer">
					<FaLinkedin size={iconSize}/>
				</a>
        </IconLinkedin>
		</li>
		<li>
        <IconTwitter>
				<a href="https://twitter.com/judepark/" target="_blank" rel="noopener noreferrer">
					<FaTwitter size={iconSize}/>
				</a>
        </IconTwitter>
		</li>
		</SiteSocial>
		</FooterContainer>
		</FooterBanner>

		</React.Fragment>
	)
}

const PageGrid = styled.div`
    display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`

const Date = styled.h5`
	display: inline-block;
	position: absolute;
	margin-top: 30px;
	animation: ${fadeInDown} 1s;
	&::after {
		content: "";
		height: 3px;
		width: 50px;
		position: absolute;
		bottom: -20px;
		left: 0px;
		background: ${props => props.color};
	}
`

const Banner = styled.div`
	width: 120vw;
	content: "";
	left: -5vw;
	height: 105vh;
	top: -65vh;
	right: -30vw;
	position: absolute;
	transform: rotate(17.4deg);
	--accent-color: ${props => props.color};
	
	background-image:
    linear-gradient(to top left, #f8f7f3 0%, var(--accent-color, black) 100%),
	url("https://64.media.tumblr.com/d6749c041b64221fff9f5d6d17ae54b2/ba709a90e08afdd0-bd/s640x960/33d3c31a10e78e5ff5ebab5f92fd3c1ceaddaa96.png");
	background-blend-mode: multiply;
		
	z-index: -2;
	@media (max-width: 1000px) {
		left: 0vw;
		height: 50vh;
		top: 18vh;
		right: -30vw;
		transform: rotate(0deg);
		opacity: 0.5;
		background: linear-gradient(to top, #f8f7f3 0%, var(--accent-color, black) 100%);
	}
`

const NoteHeader = styled.div`
	height: 325px;
	display: flex;
	justify-content: left;
	align-items: flex-end;
	position: relative;
	padding: 0px 0px;

	& img {
		text-align: right;
		max-width: 100%;
		position: absolute;
		padding: 0px 0px 0px 50%;
		animation: ${fadeInDown} 1.0s;
		@media (max-width: 1000px) {
			padding: 0px;
			margin-top: 3rem;
			max-height: 250px;
		}
	}

	&:after {
		position: absolute;
		content: '';
		top: -50%;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -3;
	}

	@media (max-width: 715px) {
		height: 430px;
	}
`

const NotePostTitle = styled.h1`
	font-weight: 800;
    line-height: 1.3875;
	text-align: left;
	z-index: 5;
	padding: 10px 15px 10px 0px;
	margin-top: 0px;
	max-width: 50%;
	display: block;
	animation: ${fadeInScaleDown} 1.5s ease-out;

	@media(max-width: 1000px) {
		font-size: 1.9rem;
		line-height: 1.3;
		background-color: #f8f7f3;
		max-width: 100%;
		text-align: center;
	}
`

const NoteContentGrid = styled.div`
	display: grid;
	animation: ${fadeInDown} 1s;
	width: 64.5%;

	& > * {
		grid-column: center;
	}
	p {
		
	}

	blockquote {
		text-shadow: 5px 5px 5px ${props => props.color};
	}

	a {
		background-color: ${props => props.color};
		border-radius: 15px;
	}

	h2 {

	}

	
	@media(max-width: 715px) {
		width: 100%;
	}
`

const NoteDetails = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 0px;
	margin-top: 0px;
	Z-index: 1;
	

	div {
		padding-right: 0px;
		padding-bottom: 0px;
		width: 100%;
	}

	@media(max-width: 1155px) {
		padding: 0px;
    	margin-bottom: 0px;

		div {
			padding-right: 0px;
			padding-bottom: 20px;
			width: 49%;
		}
		div:last-child {
			width: 100%;
		}
	}
`

const ImageAuthor = styled.div`
	display: flex;
	justify-content: flex-start;
	writing-mode: vertical-rl;
	align-items: flex-start;
	list-style: none;
	margin-right: 40px;
	margin-left: 0px;
	margin-bottom: 100px;
	margin-top: -100px;
	z-index: 3;
	font-size: calc(10px + (12 - 10) * (100vw - 400px) / (1300 - 400) );
	font-weight: 600;
	letter-spacing: 0.5px;
	color: hsla(0, 0%, 0%, 0.50);
	animation: ${fadeInDown} 1s;
	li {
		margin: 0;
		padding: 0px 1px;
	}
	mark {
		color: hsla(0, 0%, 0%, 0.50);
	}
	@media(max-width: 1000px) {
		display: none;
	}
`

const Icon = styled.div`
	transform: rotate(90deg);
	display: inline-block;
	color: hsla(0, 0%, 0%, 0.50);
`

const BackgroundColor = styled.div`
	position: fixed;
	z-index: -10;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background-color: none;
`

const FooterBanner = styled.div`
	--accent-color: ${props => props.color};
	background-image:
    linear-gradient(to top, #f8f7f3 0%, var(--accent-color, black) 200%),
	url("https://64.media.tumblr.com/d6749c041b64221fff9f5d6d17ae54b2/ba709a90e08afdd0-bd/s640x960/33d3c31a10e78e5ff5ebab5f92fd3c1ceaddaa96.png");
	background-blend-mode: multiply;
	
	height: 280px;
`

const FooterContainer = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
`

const Footer = styled.div`
	font-size: calc(14px + (16 - 14) * (100vw - 400px) / (1300 - 400) );
	margin-bottom: 40px;
	padding: 60px 0px 0px 0px;
	width: 30%;
	@media(max-width: 1000px) {
		width: 100%;
	}
` 

const SiteSocial = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	list-style: none;
	text-transform: uppercase;
	font-size: 0.7rem;
	font-weight: 500;
	letter-spacing: 1px;
	margin-right: 0px;
	margin-left: 0px;
	margin-bottom: 0px;
	animation: ${fadeInDown} 1s;
	/*width: 100%;*/
	li {
		margin: 0;
		padding: 0px 20px 0px 0px;
		a {
			font-size: 0.7rem;
			font-weight: 500;
			text-decoration: none;
			transition: all 0.6s;
			&:hover {
				
			}
		}
	}
	@media(max-width: 1155px) {
		margin-right: 0;
	}
`

const IconEnvelope = styled.div`
  a {
    &:hover {
      color: #f1d592;
    }
  }
`

const IconDribble = styled.div`
  a {
    &:hover {
      color: #ea4c89;
    }
  }
`

const IconGithub = styled.div`
  a {
    &:hover {
      opacity: 0.6;
    }
  }
`

const IconLinkedin = styled.div`
  a {
    &:hover {
      color: #0077b5;
    }
  }
`

const IconTwitter = styled.div`
  a {
    &:hover {
      color: #1da1f2;
    }
  }
`

const SiteLogo = styled.img`
	width: 30px;
    height: auto;
	margin-right: 0px;
	margin-top: -5px;
	display: block;
	padding-top: 0px;
	padding-bottom: 0px;

    @media(max-width: ${SIZE_MOBILE}) {

    }
`

export const query = graphql`
	query ResearchBySlug($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				notebrief
				imageauthor
				date(formatString: "MMM D, YYYY")
				color
				url
				showLiveContent
				image {
					childImageSharp {
					  fluid(maxWidth: 1600) {
						...GatsbyImageSharpFluid
					  }
					}
				  }
			}
			html
			fields {
				slug
			}
		}
	}
`
