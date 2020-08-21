import React from 'react'
import { graphql } from "gatsby"
import styled from 'styled-components'
import {fadeInDown} from './../animations/m-styled-animations'

import {FaEnvelope} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

const iconSize = 23;

const IndexPage = ({data}) => (
	<React.Fragment>
		<PageGrid>
		<Row>
	  	<Column>
			<HeaderTitle><strong style={{fontWeight:"800"}}>Jude Park</strong> <br/> Designer, UX</HeaderTitle>
			<Line>
			<hr></hr>
			</Line>
			<HeaderSubtitle>Welcome! This is the site of a digital designer based in Toronto.</HeaderSubtitle>


			<SiteSocial>
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
		</Column>

		<Column>

		<Video>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_JWrobohZYc" frameborder="0" title="Life Lessons from 100-Year-Olds" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
		</Video>

		</Column>
		</Row>
		</PageGrid>
		<br></br><br></br><br></br>
  </React.Fragment>
)


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
  flex: 50%;
  @media (max-width: 1000px) {
    flex: 100%;
}
`

const HeaderTitle = styled.h1`
	margin-bottom: 24px;
	max-width: 400px;
	margin-top: 40px;
	font-weight: 700;
	line-height: 1.3875;
	animation: ${fadeInDown} 1s;
`

const Line = styled.p`
  width: 350px;
`

const HeaderSubtitle = styled.h3`
	margin-bottom: 24px;
	max-width: 350px;
	font-size: 21px;
	color: rgba(0, 0, 0, 0.65);
	font-weight: 400;
	line-height: 34px;
	animation: ${fadeInDown} 1s;
	@media(max-width: 425px) {
		margin-bottom: 110px;
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
const Video = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`


const VideoLoader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	animation: ${fadeInDown} 1.5s;
	@keyframes rotate {
		100% {
			transform: rotate(360deg)
		}
	}

	&:hover {

	}

	@media (max-width: 1000px) {
		justify-content: left;
		align-items: left;
		margin-top: 170px;
	}
`

export default IndexPage

export const query = graphql`
query ProjectQuery {
	allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
		edges {
		  node {
			fields {
				slug
			}
			frontmatter {
			  title
			  notebrief
			  color
			  image {
				childImageSharp {
				  fluid(maxWidth: 900) {
					...GatsbyImageSharpFluid
				  }
				}
              }
              thumb {
				childImageSharp {
				  fluid(maxWidth: 900) {
					...GatsbyImageSharpFluid
				  }
				}
              }
              categories
			}
		  }
		}
	  }
  }
`