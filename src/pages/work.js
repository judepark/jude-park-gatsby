import React from 'react'
import { graphql } from "gatsby"
import styled from 'styled-components'
import {Link} from 'gatsby'

import {fadeInDown} from './../animations/m-styled-animations'
import {MoveUp} from './../animations/m-styled-animations'

import WorkCard from '../components/WorkCard';

const WorkPage = ({data}) => (
  <React.Fragment>
	  <PageGrid>
      <Row>

        <Column>
          <HeaderTitle>Work</HeaderTitle>
          <Line>
          <hr></hr>
          </Line>
          <HeaderSubtitle>A list of things I made.</HeaderSubtitle>
        </Column>

        <Column>
        </Column>

    </Row>    
	</PageGrid>


    <PageGrid>

    <Row>
      <Column>

        <Title>
        LAYOUTS
        </Title>

        <ArchiveColumn>
        <Alphabet>
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>J</h4>    
        </Alphabet>
        <AlphabetList>
        <Content>
        <ul style={{marginLeft: "0"}}>
        <Link to="/work/jude-journal">
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>JUDE Journal</h4>
        <h4 style={{}}>Digital Magazine</h4>    
        </Link>
        </ul>
        </Content>
        </AlphabetList>
        </ArchiveColumn>

        <ArchiveColumn>
        <Alphabet>
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>F</h4>    
        </Alphabet>
        <AlphabetList>
        <Content>
        <ul style={{marginLeft: "0"}}>
        <Link to="/work/faculty-response-to-student-mental-health">
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>Faculty Response to Student Mental Health</h4>
        <h4 style={{}}>User Research Poster</h4>    
        </Link>
        </ul>
        </Content>
        </AlphabetList>
        </ArchiveColumn>

        
        <ArchiveColumn>
        <Alphabet>
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>R</h4>    
        </Alphabet>
        <AlphabetList>
        <Content>
        <ul style={{marginLeft: "0"}}>
        <Link to="/work/robarts-library-kiosks">
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>Robarts Library Kiosks</h4>
        <h4 style={{}}>Experience Map / UI Design</h4>    
        </Link>
        </ul>
        </Content>
        </AlphabetList>
        </ArchiveColumn>

      </Column>


      <Column>

        <Title>
        ⠀Mobile/Web
        </Title>

        <ArchiveColumn>
        <Alphabet>
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>J</h4>    
        </Alphabet>
        <AlphabetList>
        <Content>
        <ul style={{marginLeft: "0"}}>
        <Link to="/work/second-chance-fertility-clinic">
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>Jude Park Portfolio</h4>
        <h4 style={{}}>Web Development</h4>    
        </Link>
        </ul>
        </Content>
        </AlphabetList>
        </ArchiveColumn>

        <ArchiveColumn>
        <Alphabet>
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>L</h4>    
        </Alphabet>
        <AlphabetList>
        <Content>
        <ul style={{marginLeft: "0"}}>
        <Link to="/work/lumii">
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>Lumii</h4>
        <h4 style={{}}>Chatbot</h4>    
        </Link>
        </ul>
        </Content>
        </AlphabetList>
        </ArchiveColumn>

        
        <ArchiveColumn>
        <Alphabet>
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>S</h4>    
        </Alphabet>
        <AlphabetList>
        <Content>
        <ul style={{marginLeft: "0"}}>
        <Link to="/work/second-chance-fertility-clinic">
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>Second Chance Fertility Clinic</h4>
        <h4 style={{}}>Website Design</h4>    
        </Link>
        </ul>
        </Content>
        </AlphabetList>
        </ArchiveColumn>

      </Column>


        <Column>

        <Title>
        OTHER
        </Title>


        <ArchiveColumn>
        <Alphabet>
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>B</h4>    
        </Alphabet>
        <AlphabetList>
        <Content>
        <ul style={{marginLeft: "0"}}>
        <Link to="/work/book-of-revelations">
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>Book of Revelations</h4>
        <h4 style={{}}>A Collection of Essays</h4>    
        </Link>
        </ul>
        </Content>
        </AlphabetList>
        </ArchiveColumn>

        <ArchiveColumn>
        <Alphabet>
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>H</h4>    
        </Alphabet>
        <AlphabetList>
        <Content>
        <ul style={{marginLeft: "0"}}>
        <Link to="/work/hey-jude-comic">
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>Hey Jude Comic</h4>
        <h4 style={{}}>Webcomic Series</h4>    
        </Link>
        </ul>
        </Content>
        </AlphabetList>
        </ArchiveColumn>

        <ArchiveColumn>
        <Alphabet>
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>N</h4>    
        </Alphabet>
        <AlphabetList>
        <Content>
        <ul style={{marginLeft: "0"}}>
        <Link to="/work/nightstand">
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>Nightstand</h4>
        <h4 style={{}}>Radio Show / Podcast</h4>    
        </Link>
        </ul>
        </Content>
        </AlphabetList>
        </ArchiveColumn>

      </Column>

    </Row>
    </PageGrid>

    
    <br></br><br></br><br></br>
  </React.Fragment>
)


/*

Book Cover

        <Title>
        FEATURED
        </Title>

    
        <Image>
        <a class="grid-img" href="https://dribbble.com/shots/6839300-Lumii-iOS" target="_blank">
          <img src="https://cdn.dribbble.com/users/1813673/screenshots/6839300/3-1_4x.png?compress=1&resize=800x600" width="400" ></img>
        </a>
        </Image>


Work posts call outs, (only images)



<br/><br/>

	  <PageGrid>
      <Row2>

        <Column2>

        <WorkCardGrid>
			{data.allMarkdownRemark.edges.map(({node}) => (
				<WorkCard data={node} key={node.key}></WorkCard>
			))}
		</WorkCardGrid>

        </Column2>


    </Row2>    
	</PageGrid>
        



        <ArchiveColumn>
        <Alphabet>
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>B</h4>    
        </Alphabet>
        <AlphabetList>
        <Content>
        <ul style={{marginLeft: "0"}}>
        <Link to="/work/bookies">
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>Bookies</h4>
        <h4 style={{}}>App for Bibliophiles</h4>    
        </Link>
        </ul>
        </Content>
        </AlphabetList>
        </ArchiveColumn>

        <ArchiveColumn>
        <Alphabet>
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>C</h4>    
        </Alphabet>
        <AlphabetList>
        <Content>
        <ul style={{marginLeft: "0"}}>
        <Link to="/work/code-for-ethics">
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>Code for Ethics</h4>
        <h4 style={{}}>Repository of Ethical Codes</h4>    
        </Link>
        </ul>
        </Content>
        </AlphabetList>
        </ArchiveColumn>

                
        <ArchiveColumn>
        <Alphabet>
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>⠀</h4>    
        </Alphabet>
        <AlphabetList>
        <Content>
        <ul style={{marginLeft: "0"}}>
        <Link to="/work/fair-design">
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>Fair Design</h4>
        <h4 style={{}}>Social Privilege Measurement</h4>    
        </Link>
        </ul>
        </Content>
        </AlphabetList>
        </ArchiveColumn>


        <ArchiveColumn>
        <Alphabet>
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>L</h4>    
        </Alphabet>
        <AlphabetList>
        <Content>
        <ul style={{marginLeft: "0"}}>
        <Link to="/work/loo">
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>Loo</h4>
        <h4 style={{}}>Public Toilet Finding App</h4>    
        </Link>
        </ul>
        </Content>
        </AlphabetList>
        </ArchiveColumn>

        
        <ArchiveColumn>
        <Alphabet>
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>T</h4>    
        </Alphabet>
        <AlphabetList>
        <Content>
        <ul style={{marginLeft: "0"}}>
        <Link to="/work/lumii">
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>toxicworkenvironment.com</h4>
        <h4 style={{}}>Online Course</h4>    
        </Link>
        </ul>
        </Content>
        </AlphabetList>
        </ArchiveColumn>   

        <ArchiveColumn>
        <Alphabet>
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>T</h4>    
        </Alphabet>
        <AlphabetList>
        <Content>
        <ul style={{marginLeft: "0"}}>
        <Link to="/work/lumii">
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>They Taught Me</h4>
        <h4 style={{}}>Mobile Journal</h4>    
        </Link>
        </ul>
        </Content>
        </AlphabetList>
        </ArchiveColumn>

        <ArchiveColumn>
        <Alphabet>
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>T</h4>    
        </Alphabet>
        <AlphabetList>
        <Content>
        <ul style={{marginLeft: "0"}}>
        <Link to="/work/lumii">
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>twitternewspaper.io</h4>
        <h4 style={{}}>Web API</h4>    
        </Link>
        </ul>
        </Content>
        </AlphabetList>
        </ArchiveColumn>

        <ArchiveColumn>
        <Alphabet>
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>?</h4>    
        </Alphabet>
        <AlphabetList>
        <Content>
        <ul style={{marginLeft: "0"}}>
        <Link to="/work/robarts-library-kiosks">
        <h4 style={{marginBottom: "1.5px", color: "hsla(0, 0%, 0%, 0.8)", fontWeight: "600"}}>???</h4>
        <h4 style={{}}>BPMN Map</h4>    
        </Link>
        </ul>
        </Content>
        </AlphabetList>
        </ArchiveColumn>

*/

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
  flex: 33%;
  @media (max-width: 1000px) {
    flex: 100%;
}
`
const Row2 = styled.div`

`
const Column2 = styled.div`

`

const WorkCardGrid = styled.div`
  animation: ${fadeInDown} 1.0s;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1em;
`

const ArchiveColumn = styled.div`
    display: flex;
    animation: ${fadeInDown} 1s;
    margin-bottom: 40px;
`

const HeaderTitle = styled.h1`
	margin-bottom: 24px;
	max-width: 400px;
    margin-top: 40px;
    font-weight: 800;
    line-height: 1.3875;
	animation: ${fadeInDown} 1s;
`

const Line = styled.p`
    width: 350px;
`

const HeaderSubtitle = styled.h3`
	margin-bottom: 130px;
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

const Title = styled.div`
        font-family: 'Product Sans', sans-serif;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-size: calc(10px + (12 - 10) * (100vw - 400px) / (1300 - 400) );
        font-weight: 600;
        line-height: 165%;
        color: hsla(0, 0%, 0%, 0.65);
        margin-top: 0px;
        margin-bottom: 20px;
        padding: 0;
        animation: ${fadeInDown} 1.5s;
        transition: all 0.3s;
        @media(max-width: 1000px) {
            font-size: calc(12px + (14 - 12) * (100vw - 400px) / (1300 - 400) );
        }
`

const Alphabet = styled.div`
    margin-right: 20px;
    cursor: default;
    width: 13px; 
    text-align: left; 
`

const AlphabetList = styled.div`
    max-width: 100%;
    min-height: 80px;
    &:hover {
        animation: ${MoveUp} 0.3s;
        animation-fill-mode: forwards;
    }
    @media(max-width: 1000px) {
      min-height: 0;
    }
`

const Content = styled.div`
    ul {
      border-left: 1px solid hsla(0, 0%, 0%, 0.2);
      padding-left: 20px;
      margin-bottom: 0px;
    }
`

const TestColumn = styled.div`
column-count: 3;
animation: ${fadeInDown} 1s;
margin-bottom: 40px;
`

const Image = styled.div`
  display: flex;
	justify-content: left;
  align-items: left;
  animation: ${fadeInDown} 1s;
  &:hover {

}

  @media(max-width: 1000px) {
		margin-bottom: 110px;
	}
`


export default WorkPage

export const query = graphql`
query WorkQuery {
	allMarkdownRemark(
    sort: {fields: [frontmatter___year], order: DESC},
    filter: { fileAbsolutePath: {regex : "\/works/"} }
    ) {
		edges {
		  node {
			fields {
				slug
			}
			frontmatter {
			  title
        workheading
        worksummary
        year
        myrole
        link
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