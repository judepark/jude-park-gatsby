import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import {MoveUp} from './../animations/m-styled-animations'
 
const WorkCard = (props) => {
  return (

    <Link to={props.data.fields.slug}>

        <WorkCardContainer data-filter={props.data.frontmatter.categories} className="active">

            <PreviewContainerMobile>
                <PreviewImage fluid={props.data.frontmatter.thumb.childImageSharp.fluid} alt="Work Image"/>
            </PreviewContainerMobile>

            <WorkCardContent>


                <h4><strong>{props.data.frontmatter.title}</strong><br/>{props.data.frontmatter.workheading}</h4>                

 
            </WorkCardContent>

            <PreviewContainer>
            <PreviewImage fluid={props.data.frontmatter.thumb.childImageSharp.fluid} alt="Work Image"/>
            </PreviewContainer>

        </WorkCardContainer>

    </Link>

  )
}


const WorkCardContainer = styled.div`

    transition: all 0.4s;

    h4 {
        display: none;
        @media(max-width: 1000px) {
            display:inline-block;
        }
    }


    &.active {
        display: grid;
        opacity: 1;
    }

    &:hover {
        animation: ${MoveUp} 0.3s;
        animation-fill-mode: forwards;

        h4 {
            display: inline-block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            line-height: 30px;
            min-width: 250px;
            margin-bottom: 0px;
            font-weight: 400;
            color: hsla(0, 0%, 0%, 0.80);
            text-shadow: 2px 2px 5px #f8f7f3;
            text-align: center;
            @media(max-width: 1000px) {
                position: relative;
                top: 0%;
                left: 0%;
                transform: translate(0%, 0%);
                text-align: left;
                text-shadow: none;
            }
        }

        img {
            filter: blur(4px);
            transition: filter 0.3s ease-in;
            transform: scale(1.1);
            @media(max-width: 1000px) {
                filter: none;
                transition: none;
                transform: none;
            }
        }

    }

    @media(max-width: 1000px) {
        padding: 0px;
        grid-template-columns: 1fr;
        width: 100%;
    }
`;

const PreviewImage = styled(Img)`
    display: block;
`;

const PreviewContainer = styled.div`
    position: relative;

    ${PreviewImage}  {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 0px;
        margin: 0px;
    }

    @media(max-width: 1000px) {
        display: none;
    }
`;

const PreviewContainerMobile = styled.div`
    position: relative;
    display: none;
    margin-bottom: 0px;
    
    width: 300px;
    height: auto;
    padding-top: 36.25%;

    @media(max-width: 1000px) {
        display: block;
        margin-top: 20px;
    }

    ${PreviewImage} {
        position: absolute !important;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 0px;
        margin: 0px;
        border-bottom: 1px solid #FFFFFF33;
    }
`;

const WorkCardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-right: 24px;

    @media(max-width: 1000px) {
        padding: 32px 10px;
    }
`;




export default WorkCard;
