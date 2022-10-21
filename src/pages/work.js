import React from 'react'
import { graphql } from "gatsby"
import styled, { keyframes } from 'styled-components'
import WorkCard from '../components/WorkCard';
 
import {fadeInDown} from '../animations/m-styled-animations'

const getFilterActionButtons = () => {
    return document.querySelectorAll('#FilterContainer h5');
}

const getFilterPortfolioItems = () => {
    return document.querySelectorAll('[data-filter]');
}

const clearFilterItemsActive = () => {
    let items = getFilterActionButtons();
    items.forEach(item => {
        item.classList.remove('active');
    })

    let AllItems = getFilterPortfolioItems();
    AllItems.forEach(item => {
        item.classList.remove('active');
    })
}

/**
 * Filters the all items
 *
 */
const filterClickBoth = () => {
    let AllItems = document.querySelectorAll('[data-filter]');

    clearFilterItemsActive();
    document.querySelector('#FilterItemAll').classList.add('active');

    setTimeout(() => {
        AllItems.forEach(item => {
            item.classList.add('active');
        })
    }, 50)
}

/**
 * Filters the Design works, anything that contains "Design" using *
 *
 */
 const filterClickDesign = () => {
    let DesignItems = document.querySelectorAll('[data-filter*="Design"]')

    clearFilterItemsActive();
    document.querySelector('#FilterItemDesign').classList.add('active');

    setTimeout(() => {
        DesignItems.forEach(item => {
            item.classList.add('active');
        })
    }, 50)
}


/**
 * Filters the UX Research works, anything that contains "UX Research" using *
 *
 */
const filterClickUXResearch = () => {
    let UXResearchItems = document.querySelectorAll('[data-filter*="UX Research"]')

    clearFilterItemsActive();
    document.querySelector('#FilterItemUXResearch').classList.add('active');

    setTimeout(() => {
        UXResearchItems.forEach(item => {
            item.classList.add('active');
        })
    }, 50)
}


/**
 * Filters the other works, anything that contains "Other" using *
 *
 */
const filterClickOther = () => {
    let OtherItems = document.querySelectorAll('[data-filter*="Other"]')

    clearFilterItemsActive();
    document.querySelector('#FilterItemOther').classList.add('active');

    setTimeout(() => {
        OtherItems.forEach(item => {
            item.classList.add('active');
        })
    }, 50)
}





const WorkPage = ({data}) => (
  <React.Fragment>
	<PageGrid>
    <Row>
        <Column>
            <HeaderTitle>Work</HeaderTitle>
            <Line>
            <hr></hr>
            </Line>
            <HeaderSubtitle>Things I worked on.</HeaderSubtitle>
        </Column>

        <Column>
        </Column>

    </Row>
	</PageGrid>


    <PageGrid>
    <Row>
        <Column>
        <FilterContainer id="FilterContainer">
            <h5 className="active" onClick={filterClickBoth} id="FilterItemAll">ALL</h5>
            <h5 onClick={filterClickDesign} id="FilterItemDesign">DESIGN</h5>
            <h5 onClick={filterClickUXResearch} id="FilterItemUXResearch">UX RESEARCH</h5>
            <h5 onClick={filterClickOther} id="FilterItemOther">Other</h5>

        </FilterContainer>

		<NoteCardGrid>
			{data.allMarkdownRemark.edges.map(({node}) => (
				<WorkCard data={node} key={node.key}></WorkCard>
			))}
		</NoteCardGrid>
        </Column>

        <Column>
        </Column>

    </Row>
	</PageGrid>

    <br></br><br></br>
  </React.Fragment>
)


/*
        <Title>
        MY BOOKS
        </Title>

        <BookShelfContainer>

            <a class="grid-img" href="https://issuu.com/judepark/docs/bookofrevelations" target="_blank">
            <div class="bookcontainer">
		<div class="book">
			<div class="front">
				<div class="cover">
                   <img src="https://66.media.tumblr.com/a7ae968f765989498b137520ab552b3b/696aba03eac693a6-28/s400x600/24ee6e6151a2f181dd9030e0817b57b974687d03.png" alt="" width="190"></img>
				</div>
			</div>

		</div>
	</div>
            </a>

        </BookShelfContainer>
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
  flex: 50%;
  @media (max-width: 1000px) {
    flex: 100%;
}
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

const HeaderSubtitle = styled.h4`
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

const NoteCardGrid = styled.div`
	animation: ${fadeInDown} 1.0s;
`

const FilterContainer = styled.div`
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 24px;
    justify-content: flex-start;
    animation: ${fadeInDown} 1.5s;
    margin-top: 0px;
    margin-bottom: 38px;
    padding: 0px 0px 0px 0px;

    h5 {
        text-transform: uppercase;
        line-height: 165%;
        margin: 0;
        padding: 0;
        cursor: pointer;
        transition: all 0.3s;
        @media(max-width: 1000px) {
            font-size: calc(12px + (14 - 12) * (100vw - 400px) / (1300 - 400) );
        }

        &:hover {
            color: hsla(0, 0%, 0%, 0.80);
        }
    }
    
    h5.active {
        color: hsla(0, 0%, 0%, 0.80);
        font-weight: bold;
    }
    h5.active::before {
        content:'[';
        display: inline-block;
        padding-right: 5px;
        transition: all 0.3s;
    }
    h5.active::after {
        content:']';
        display: inline-block;
        padding-left: 5px;
        transition: all 0.3s;
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

const BookShelfContainer = styled.div`
    animation: ${fadeInDown} 1s;
    display: flex;
    justify-content: left;
    align-items: left;
    @media(max-width: 1000px) {
        width: 100%;
        margin-bottom: 50px;
    }

    a {

    }

    &:hover {

    }
`

export default WorkPage

export const query = graphql`
query WorkQuery {
	allMarkdownRemark(
        sort: {fields: [frontmatter___date], order: DESC},
        filter: { fileAbsolutePath: {regex : "\/work/"} }
        ) {
		edges {
		  node {
			fields {
				slug
			}
			frontmatter {
			  title
              worksummary 
              workheading
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
              date(formatString: "YYYY")
			}
		  }
		}
	  }
  }
`