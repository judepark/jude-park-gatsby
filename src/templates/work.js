import React from 'react'
import {Link} from 'gatsby'
import logo from './../assets/img/logo.png'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {fadeInDown, fadeInScaleDown, MoveUp} from './../animations/m-styled-animations'

import LiveContentCard from '../components/LiveContentCard'

import {FaEnvelope} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

const iconSize = 23;

const SIZE_MOBILE = "715px";

export default function WorkTemplate({ data }) {
	return (
		<React.Fragment>

<Banner color={data.markdownRemark.frontmatter.color}></Banner>

<PageGrid>
<Row>
<Column>

	<Helmet title={data.site.siteMetadata.title + ' | ' + data.markdownRemark.frontmatter.title}>
        <meta name="theme-color" content={data.markdownRemark.frontmatter.color}/>
	</Helmet>


	<WorkHeader color={data.markdownRemark.frontmatter.color}>

		<a href={data.markdownRemark.frontmatter.url} target="_blank" rel="noopener noreferrer"><Img style={{position: 'absolute', top: 0, left: 0, width: '100%', height: `100%`}} fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid}/></a>
		<WorkPostTitle>
		<a href={data.markdownRemark.frontmatter.url} target="_blank" rel="noopener noreferrer"><HeaderTitle>{data.markdownRemark.frontmatter.title}</HeaderTitle></a>
		<HeaderSubtitle>{data.markdownRemark.frontmatter.workheading}</HeaderSubtitle>
		<Line>
			<hr></hr>
		</Line>

		<HeaderColumn> 
			<HeaderDescription>
				{data.markdownRemark.frontmatter.worksummary}
			</HeaderDescription>

			<NonExistentLine/>

			<HeaderMetadata>
				<h5 style={{lineHeight:"1.25"}}>Year</h5>
				<h4 style={{lineHeight:"1.25", marginBottom:"15px"}}>{data.markdownRemark.frontmatter.year}</h4>

				<h5 style={{lineHeight:"1.25"}}>My Role</h5>
				<h4 style={{lineHeight:"1.25", marginBottom:"15px"}}>{data.markdownRemark.frontmatter.myrole}</h4>
			</HeaderMetadata>
		</HeaderColumn>
		
		</WorkPostTitle>
	</WorkHeader>

	<br/><br/><br/><br/>

	<ScrollAnimation>
<div id="scroll-down-animation">
  <span class="scroll-down-mouse">
    <span class="scroll-down-move"></span>
  </span>
  <h5>Scroll down</h5>
</div>
</ScrollAnimation>
	
	<WorkContentGrid color={data.markdownRemark.frontmatter.color}>
			<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
			{data.markdownRemark.frontmatter.showLiveContent}
		</WorkContentGrid>

		<BackgroundColor color={data.markdownRemark.frontmatter.color}/>
</Column>
</Row>
</PageGrid>





<br/><br/><br/>

		<FooterBanner>
		<FooterContainer>
			<Footer>
				<div><strong>Jude Park</strong> is a user experience designer working for the Government of Canada.</div>
			</Footer>	
	
				<SiteSocial>
	  	<li>
		<Link to="/">
		<SiteLogo src={logo} alt="Home link"/>
		</Link>
	  	</li>
      	<li>
        <IconEnvelope>
				<a href="mail:jude@judepark.com" rel="noopener noreferrer" title="mail to jude@judepark.com Email icon">
					<FaEnvelope size={iconSize}/>
				</a>
        </IconEnvelope>
	  	</li>
      	<li>
        <IconDribble>
				<a href="https://dribbble.com/judepark/" target="_blank" rel="noopener noreferrer" title="Dribble icon">
					<FaDribbble size={iconSize}/>
				</a>
        </IconDribble>
	    </li>
		<li>
        <IconGithub>
				<a href="https://github.com/judepark/" target="_blank" rel="noopener noreferrer" title="Github icon">
					<FaGithub size={iconSize}/>
				</a>
        </IconGithub>
		</li>
		<li>
        <IconLinkedin>
				<a href="https://www.linkedin.com/in/judepark/" target="_blank" rel="noopener noreferrer" title="LinkedIn icon">
					<FaLinkedin size={iconSize}/>
				</a>
        </IconLinkedin>
		</li>
		<li>
        <IconTwitter>
				<a href="https://twitter.com/judepark/" target="_blank" rel="noopener noreferrer" title="Twitter icon">
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

const PageGrid2 = styled.div`
    display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 900px) [end] minmax(24px, 1fr);
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
  flex: 100%;
  @media (max-width: 1000px) {
    flex: 100%;
}
`

const Banner = styled.div`
	width: 100%;
	height: 100%;
	opacity: 0.3;
	position: fixed; 
	transform: rotate(0deg);
	--accent-color: ${props => props.color};
	background: linear-gradient(
		to bottom, 
		#f8f7f3 0%,
		var(--accent-color, black) 80%
	  );

	z-index: -2;
	@media (max-width: 1000px) {
		position: absolute;
		left: 0vw;
		height: 50vh;
		top: 18vh;
		right: -30vw;
		transform: rotate(0deg);
		background: linear-gradient(to top, #f8f7f3 0%, var(--accent-color, black) 100%);
	}
`

const HeaderTitle = styled.h1`
	margin-bottom: 5px;
	max-width: 400px;
	margin-top: 40px;
	font-weight: 800;
	line-height: 1.3875;
	&:hover {
		animation: ${MoveUp} 0.3s;
		animation-fill-mode: forwards;
		color: hsla (0, 0%, 0%, 0.8);
	  }
	@media(max-width: 425px) {
		margin-top: 130px;
	}
`

const Line = styled.p`
	width: 90%;
	@media(max-width: 1000px) {
		width: 100%;
	}
`

const HeaderSubtitle = styled.h3`
	margin-bottom: 24px;
	max-width: 350px;
	font-size: 21px;
	color: rgba(0, 0, 0, 0.65);
	font-weight: 400;
	line-height: 34px;
	@media(max-width: 425px) {

	}
`

const HeaderColumn = styled.div`
    columns: 2;
    column-gap: 40px;
    column-rule: 1.5px solid hsla(0, 0%, 0%, 0.2);
    margin-bottom: 100px;
    margin-right: 50px;
	@media(max-width: 1000px) {
		margin-bottom: 0px;
		margin-right: 0px;
	}
`

const HeaderDescription = styled.h4`
	max-width: 100%;
	min-height: 100px;
    font-size: calc(10px + (12 - 10) * (100vw - 400px) / (1300 - 400) );
    color: rgba(0, 0, 0, 0.65);
    display: inline-block;
	@media(max-width: 1000px) {
		min-height: 100px;
	}
`

const NonExistentLine = styled.div`

`

const HeaderMetadata = styled.div`
        margin-bottom: 0px;
        max-width: 600px;
        height: 100px;
		h4 {
			font-size: calc(10px + (12 - 10) * (100vw - 400px) / (1300 - 400) );
		}
`

const WorkHeader = styled.div`
	height: 325px;
	display: flex;
	justify-content: left;
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

const WorkPostTitle = styled.h1`
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
		max-width: 100%;
		margin-top: 300px;
	}
	@media(max-width: 455px) {
		margin-top: 200px;
	}
`

const WorkContentGrid = styled.div`
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

	background-image:url("https://64.media.tumblr.com/d6749c041b64221fff9f5d6d17ae54b2/ba709a90e08afdd0-bd/s640x960/33d3c31a10e78e5ff5ebab5f92fd3c1ceaddaa96.png");
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

const ScrollAnimation = styled.div`
	@media(max-width: 1000px) {
		display: none;
	}
`

export const query = graphql`
	query WorkBySlug($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
                workheading
                worksummary
                year
                myrole
                link
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
