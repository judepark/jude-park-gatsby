import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Pill from './Pill'
import {Link} from 'gatsby'
import {MoveUp} from './../animations/m-styled-animations'
 
const WorkCard = (props) => {
    return (
      <Content>
      <ul style={{marginLeft: "0"}}>
  
      <Link to={props.data.fields.slug}>
  
          <NoteCardContainer data-filter={props.data.frontmatter.categories} className="active">
  
              <PreviewContainerMobile>
                  <PreviewImage fluid={props.data.frontmatter.thumb.childImageSharp.fluid} alt="Note Image"/>
              </PreviewContainerMobile>
  
              <NoteCardContent>
  
  
                  <h4>{props.data.frontmatter.title}</h4>
                  <h5>{props.data.frontmatter.workheading}</h5>
                  <p>{props.data.frontmatter.worksummary}<Date>{props.data.frontmatter.date}</Date> </p>
                  
                  <PillList>
                  
                  {props.data.frontmatter.categories && props.data.frontmatter.categories.map(category => {
                          return <Pill text={category}/>
                      })}
                  </PillList>
   
              </NoteCardContent>
  
              <PreviewContainer>
              <PreviewImage fluid={props.data.frontmatter.thumb.childImageSharp.fluid} alt="Note Image"/>
              </PreviewContainer>
  
          </NoteCardContainer>
  
      </Link>
  
      </ul>
      </Content> 
    )
  }
  
  
  const NoteCardContainer = styled.div`
      width: 100%;
      min-height: 100px;
      display: none;
      position: relative;
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 50px;
      transition: all 0.4s;
  
      h4 {
          display: inline-block;
          line-height: 30px;
          max-width: 350px;
          margin-bottom: 0px;
          font-weight: 600;
          color: hsla(0, 0%, 0%, 0.80);
          @media(max-width: 1000px) {
              font-size: 1em;
              line-height: 40px;
              max-width: 100%;
          }
      }
      p {
          font-size: calc(10px + (12 - 10) * (100vw - 400px) / (1300 - 400) );
          margin-top: 0px;
          margin-bottom: 20px;
          padding-bottom: 0px;
          opacity: 0.70;
          max-width: 350px;
          color: hsla(0, 0%, 0%, 0.80);
          @media(max-width: 1000px) {
              font-size: calc(12px + (14 - 12) * (100vw - 400px) / (1300 - 400) );
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
  
  const NoteCardContent = styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-right: 24px;
  
      @media(max-width: 1000px) {
      }
  `;
  
  const PillList = styled.div`
      display: flex;
      margin-bottom: 0px;
      > * {
          margin-right: 16px
      }
  `;
  
  const Date = styled.div`
          letter-spacing: 0px;
          font-size: calc(10px + (12 - 10) * (100vw - 400px) / (1300 - 400) );
          font-family: 'Product Sans', sans-serif;
          font-weight: 400;
          font-variant: small-caps;
          line-height: 165%;
          color: hsla(0, 0%, 0%, 0.80);
          margin-bottom: 0px;
          @media(max-width: 1000px) {
              font-size: calc(12px + (14 - 12) * (100vw - 400px) / (1300 - 400) );
          }
  `;
  
  
  const Content = styled.div`
      h2, h3, h4 {
        
      }
      ul {
        border-left: 1px solid hsla(0, 0%, 0%, 0.2);;
        padding-left: 20px;
        margin-left: 0px;
        margin-bottom: 0px;
      }
  `;
  
  export default WorkCard;