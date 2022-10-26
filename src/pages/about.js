import React from 'react'
import { graphql } from "gatsby"
import styled from 'styled-components'

import {fadeInDown} from './../animations/m-styled-animations'
import {MoveUp} from './../animations/m-styled-animations'


const AboutPage = ({data}) => (
  <React.Fragment>
	  <PageGrid>
    <Row>

    <Column>
      <HeaderTitle>About</HeaderTitle>
      <Line>
        <hr></hr>
      </Line>
      <HeaderSubtitle>Me.</HeaderSubtitle>
    </Column>

    <Column>
    
      


    </Column>

    </Row>
    </PageGrid>


    <PageGrid>
    <Row>
    <Column>

      <Title>
      WORK EXPERIENCE
      </Title>

      <Content>
      <ul style={{marginLeft: "0"}}>
      <h3 style={{margin:"0", lineHeight:"1.45", fontWeight: "800"}}>Design Lead</h3>
      <WorkLink><a href="https://www.canada.ca/en/employment-social-development.html" target="_blank" rel="noopener noreferrer"><h4 style={{marginTop:"10px", lineHeight:"1.25", fontWeight: "400"}}>Employment and Social Development Canada</h4></a></WorkLink><br/><WorkLink><a href="https://ised-isde.canada.ca/site/ised/en" target="_blank" rel="noopener noreferrer"><h4 style={{lineHeight:"1.25", fontWeight: "400"}}>Innovation, Science and Economic Development</h4></a></WorkLink><br/><WorkLink><a href="https://tc.canada.ca/en" target="_blank" rel="noopener noreferrer"><h4 style={{lineHeight:"1.25", fontWeight: "400"}}>Transport Canada</h4></a></WorkLink>
      <h4 style={{color: "hsla(0, 0%, 0%, 0.5)", marginBottom: "20px"}}>2020-2022</h4>
      </ul>
      <ul style={{marginLeft: "0"}}>
      <h3 style={{margin:"0", lineHeight:"1.45", fontWeight: "800"}}>UI & UX Designer</h3>
      <WorkLink><a href="https://codefor.ca/" target="_blank" rel="noopener noreferrer"><h4 style={{marginTop:"10px", lineHeight:"1.25", fontWeight: "400"}}>Code for Canada</h4></a></WorkLink><br/><WorkLink><a href="https://www.ventureforcanada.ca/" target="_blank" rel="noopener noreferrer"><h4 style={{lineHeight:"1.25", fontWeight: "400"}}>Venture for Canada</h4></a></WorkLink><br/><WorkLink><a href="https://jobs.rbc.com/ca/en/amplify" target="_blank" rel="noopener noreferrer"><h4 style={{lineHeight:"1.25", fontWeight: "400"}}>Royal Bank of Canada</h4></a></WorkLink>
      <h4 style={{color: "hsla(0, 0%, 0%, 0.5)", marginBottom: "20px"}}>2016-2020</h4>
      </ul>
      <ul style={{marginLeft: "0"}}>
      <h3 style={{margin:"0", lineHeight:"1.45", fontWeight: "800"}}>Information Management</h3>
      <WorkLink><a href="https://www.torontopubliclibrary.ca/" target="_blank" rel="noopener noreferrer"><h4 style={{marginTop:"10px", lineHeight:"1.25", fontWeight: "400"}}>Toronto Public Library</h4></a></WorkLink><br/><WorkLink><a href="https://its.utoronto.ca/" target="_blank" rel="noopener noreferrer"><h4 style={{lineHeight:"1.25", fontWeight: "400"}}>University of Toronto</h4></a></WorkLink><br/><WorkLink><a href="https://www.ontario.ca/page/government-ontario" target="_blank" rel="noopener noreferrer"><h4 style={{lineHeight:"1.25", fontWeight: "400"}}>Ontario Public Service</h4></a></WorkLink>
      <h4 style={{color: "hsla(0, 0%, 0%, 0.5)", marginBottom: "60px"}}>2009-2016</h4>
      </ul>
      </Content>


      <Title>
      EDUCATION & TRAINING
      </Title>

      <Content>
      <ul style={{marginLeft: "0"}}>
      <h3 style={{margin:"0", lineHeight:"1.45", fontWeight: "800"}}>Master of Information</h3>
      <h4 style={{marginTop:"10px", marginBottom:"10px", lineHeight:"1.35", fontWeight: "400"}}>Information Systems Design<br/>User Experience Design</h4>
      <WorkLink><a href="https://www.utoronto.ca/" target="_blank" rel="noopener noreferrer"><h4 style={{margin:"0", lineHeight:"1.45", fontWeight: "400"}}>University of Toronto</h4></a></WorkLink>
      <h4 style={{color: "hsla(0, 0%, 0%, 0.50)", marginBottom: "20px"}}>2016-2018</h4>
      </ul>
      <ul style={{marginLeft: "0"}}>
      <h3 style={{margin:"0", lineHeight:"1.45", fontWeight: "800"}}>Bachelor of Arts</h3>
      <h4 style={{marginTop:"10px", marginBottom:"10px", lineHeight:"1.35", fontWeight: "400"}}>Anthropology<br/>History<br/>Linguistics</h4>
      <WorkLink><a href="https://www.trentu.ca/" target="_blank" rel="noopener noreferrer"><h4 style={{margin:"0", lineHeight:"1.45", fontWeight: "400"}}>Trent University</h4></a></WorkLink>
      <h4 style={{color: "hsla(0, 0%, 0%, 0.50)", marginBottom: "60px"}}>2009-2012, 2016</h4>
      </ul>
      </Content>  




      <Title>
      LANGUAGES
      </Title>

      <Content>
      <ul style={{marginLeft: "0"}}>
      <h4 style={{color: "hsla(0, 0%, 0%, 0.80)", fontWeight:"800"}}>Korean</h4>
      <h4 style={{color: "hsla(0, 0%, 0%, 0.80)", fontWeight:"800"}}>English</h4>
      <h4 style={{color: "hsla(0, 0%, 0%, 0.80)", fontWeight:"800", marginBottom: "60px"}}>French</h4>
      </ul>
      </Content>

    </Column>


    <Column>

      <Title>
      FAVOURITE TOOLS
      </Title>

      <Content>
      <ul style={{marginLeft: "0"}}>
        <ToolShelf>
          
          <div class="grid-img">
            <img src="https://64.media.tumblr.com/3989de26cb05b3503924882c14e7a8cc/6d5fde614fe47287-bd/s640x960/3326505e3b5c37fcfe68f1fca338acc65ad4574f.png" alt="Figma Logo" width="60"></img>
            
            <Item style={{marginRight: "10px"}}>
            Figma
            </Item>
          </div>
          
          <div class="grid-img">
            <img src="https://64.media.tumblr.com/aff84866df52830e1291de352a73fbea/a24a727ed83cabb8-59/s500x750/f33e96a5235de60916c23a05013cd7163ca249d3.png" alt="Airtable Logo" width="60"></img>
            
            <Item style={{marginRight: "10px"}}>
            Airtable
            </Item>
          </div>

          <div class="grid-img">
            <img src="https://64.media.tumblr.com/78b2001a45bb8a56c36e34037288cfb6/2fed1712a927064c-5e/s640x960/9ee311d32910538df4147c9c50aa82630c380c5f.png" alt="Procreate Logo" width="60"></img>
            
            <Item style={{marginRight: "10px"}}>
            Procreate
            </Item>
          </div>

          <div class="grid-img">
            <img src="https://66.media.tumblr.com/0cded3a3276425911d55a2552bf361bf/tumblr_pwpktsX5HV1taz7avo1_1280.png" alt="JavaScript Logo" width="60"></img>
            
            <Item style={{marginRight: "10px"}}>
            JavaScript
            </Item>
          </div>

          <div class="grid-img">
            <img src="https://66.media.tumblr.com/aab3e12a5e711fdb5a616313754e65cd/tumblr_pwpexqLa9N1taz7avo1_1280.png" alt="InDesign Logo" width="60"></img>
            
            <Item style={{marginRight: "10px"}}>
            InDesign
            </Item>
          </div>

          <div class="grid-img">
            <img src="          https://64.media.tumblr.com/55fd5f506fdf92a5a8f0bc1ca5090029/fa5aafd1e8e637bf-ba/s500x750/56bf0fd9d6ed8ed98e299283a797e5d8595bec89.gifv" alt="Tableau Logo" width="60"></img>
            
            <Item style={{marginRight: "10px"}}>
            Tableau
            </Item>
          </div>


          <div class="grid-img">
            <img src="https://66.media.tumblr.com/e8293f9c4ccbd080dbcc29c2609ea9d4/43ee8e5089c2299d-02/s640x960/70225bb23fb3ccb16cf769dd3d2f81fa24161e59.png" alt="Blender Logo" width="60"></img>
            
            <Item style={{marginRight: "10px"}}>
            Blender
            </Item>
          </div>

          <div class="grid-img">
            <img src="https://66.media.tumblr.com/52633729d85703723cf52f8ca5000f9c/tumblr_pwsp9kLocD1taz7avo1_1280.png" alt="After Affects Logo" width="60"></img>
            
            <Item style={{marginRight: "10px"}}>
            After Effects
            </Item>
          </div>

        </ToolShelf>
        </ul>
      </Content>  


      <Title style={{marginTop: "60px"}}>
      SPECIALTIES
      </Title>

      <Content>
      <ul style={{marginLeft: "0"}}>
      <h4 style={{color: "hsla(0, 0%, 0%, 0.80)", fontWeight:"800"}}>Fair & Inclusive Design</h4>
      <h4 style={{color: "hsla(0, 0%, 0%, 0.80)", fontWeight:"800"}}>Accessibility & Usability Testing</h4>
      <h4 style={{color: "hsla(0, 0%, 0%, 0.80)", fontWeight:"800", marginBottom: "60px"}}>Experience Mapping</h4>
      </ul>
      </Content>


      <Title>
      HELLO!
      </Title>

      <Content>
      <ul style={{marginLeft: "0"}}>
      <h4 style={{marginBottom: "60px", maxWidth:"400px"}}>
        My name is Jude and I currently work for the Government of Canada as a Design Lead at Service Canada.
        <br/><br/>
        You can usually find me working in digital government initiatives, researching and designing services that help Canadians.
        <br/><br/>
        Feel free to read through my CV and How I Work below. If you want get to together, let's chat.
      </h4>
      </ul>
      </Content> 


      <Title>
      DOWNLOAD
      </Title>

      <Content>
      <ul style={{marginLeft: "0"}}>
      <WorkLink><a href="https://www.torontopubliclibrary.ca/" target="_blank" rel="noopener noreferrer"><h4 style={{color: "hsla(0, 0%, 0%, 0.80)", fontWeight:"800"}}>CV/Resume <b>⭳</b></h4></a></WorkLink>
      </ul>
      <ul style={{marginLeft: "0", marginBottom: "60px"}}>
      <WorkLink><a href="https://www.torontopubliclibrary.ca/" target="_blank" rel="noopener noreferrer"><h4 style={{color: "hsla(0, 0%, 0%, 0.80)", fontWeight:"800"}}>How I Work <b>⭳</b></h4></a></WorkLink>
      </ul>
      </Content>

    </Column>
    </Row>
	  </PageGrid>
    <br></br><br></br><br></br>
  </React.Fragment>
)

/*



      <Image>
      <div class="drop-shadow">
      <img src="https://66.media.tumblr.com/2d51783599d2047d02926c6ba426936d/333e5e774516d2ae-57/s1280x1920/8c1e79d39031b2a7ae65f1be748a3ff3d0cebef6.jpg" alt="" width="290"></img>
      </div>
      </Image> 


    <Title>
    ME AS A KID
    </Title>
      
    <Image>
    <div class="drop-shadow rotated">
    <img src="https://66.media.tumblr.com/2d51783599d2047d02926c6ba426936d/333e5e774516d2ae-57/s1280x1920/8c1e79d39031b2a7ae65f1be748a3ff3d0cebef6.jpg" alt="" width="290"></img>
    </div>
    </Image> 


        <PageGrid>
      <Row>
        <Column>
          <Title style={{marginTop: "20px"}}>
          VIDEOS I LOVE
          </Title>
          <RecommendationShelf>
          <a class="grid-img" href="https://www.youtube.com/embed/9AThycGCakk" target="_blank" rel="noopener noreferrer">
          <iframe width="252" height="141" src="https://www.youtube.com/embed/9AThycGCakk" frameborder="0" title="Life Lessons from 100-Year-Olds" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <Item>
                <strong>Life Lessons from 100-Year-Olds</strong>
              </Item>
          </a>

          <a class="grid-img" href="https://www.youtube.com/embed/afvN6se3Yug" target="_blank" rel="noopener noreferrer">
          <iframe width="252" height="141" src="https://www.youtube.com/embed/afvN6se3Yug" frameborder="0" title="Forgiveness" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <Item>
                <strong>Forgiveness</strong>
              </Item>
          </a>

          <a class="grid-img" href="https://www.youtube.com/embed/eJYn4uX98IE" target="_blank" rel="noopener noreferrer">
          <iframe width="252" height="141" src="https://www.youtube.com/embed/eJYn4uX98IE" frameborder="0" title="How Diversity Shapes Multiracial Experiences" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <Item>
                <strong>How Diversity Shapes Multiracial Experiences</strong>
              </Item>
          </a>

          <a class="grid-img" href="https://www.youtube.com/embed/itMWEDflzw0" target="_blank" rel="noopener noreferrer">
          <iframe width="252" height="141" src="https://www.youtube.com/embed/itMWEDflzw0" frameborder="0" title="3 Questions You Must Ask Yourself" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
              <Item>
                <strong>3 Questions You Must Ask Yourself</strong>
              </Item>
          </a>
          
          <a class="grid-img" href="https://www.youtube.com/embed/ltun92DfnPY" target="_blank" rel="noopener noreferrer">
          <iframe width="252" height="141" src="https://www.youtube.com/embed/ltun92DfnPY" frameborder="0" title="To This Day" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <Item>
                <strong>To This Day</strong>
              </Item>
          </a>

          <a class="grid-img" href="https://www.youtube.com/embed/-8RhNMRyKG0" target="_blank" rel="noopener noreferrer">
          <iframe width="252" height="141" src="https://www.youtube.com/embed/-8RhNMRyKG0" frameborder="0" title="Surviving Schizophrenia" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
              <Item>
                <strong>Surviving Schizophrenia</strong>
              </Item>
          </a>

          <a class="grid-img" href="https://www.youtube.com/embed/WcPrDVhD84g" target="_blank" rel="noopener noreferrer">
          <iframe width="252" height="141" src="https://www.youtube.com/embed/WcPrDVhD84g" frameborder="0" title="Living with Charge Syndrome" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <Item>
                <strong>Living with Charge Syndrome</strong>
              </Item>
          </a>

          <a class="grid-img" href="https://www.youtube.com/embed/iCvmsMzlF7o" target="_blank" rel="noopener noreferrer">
          <iframe width="252" height="141" src="https://www.youtube.com/embed/iCvmsMzlF7o" frameborder="0" title="The Power of Vulnerability" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <Item>
                <strong>The Power of Vulnerability</strong>
              </Item>
          </a>
        </RecommendationShelf>
        </Column>
      </Row>
    </PageGrid>    
    




    <br/><br/>

    <PageGrid>
    <Row>
    <Column>
     <Title style={{marginTop: "20px"}}>
      CURRENTLY READING
     </Title>
     <BookShelf>
     <a class="grid-img" href="https://www.goodreads.com/book/show/16280._Why_Are_All_The_Black_Kids_Sitting_Together_in_the_Cafeteria_" target="_blank" rel="noopener noreferrer">
       <img width="100" src="https://images-na.ssl-images-amazon.com/images/I/51pSmczbnIL._SX331_BO1,204,203,200_.jpg" frameborders="0" allowtransparency="true" allow="encrypted-media" alt="Why Are All the Black Kids Sitting Together in the Cafeteria by Beverly Daniel Tatum"></img>
        <Item2>
          <strong>Why Are All The Black Kids Sitting Together in the Cafeteria?</strong>
          <br/>
          Beverly Daniel Tatum
        </Item2>
     </a>
    </BookShelf>

    <Title style={{marginTop: "20px"}}>
      FAVOURITE FILMS
      </Title>
      <BookShelf>
        <a class="grid-img" href="https://archive.org/details/YouCut20190601150630617" target="_blank" rel="noopener noreferrer">
          <img width="150" src="https://m.media-amazon.com/images/M/MV5BZmM1ZmRkMjItZjc3Ny00ZWQzLWFhYmUtMWE0Y2QwOWY0MTMxXkEyXkFqcGdeQXVyMTIyNzY1NzM@._V1_SY1000_CR0,0,703,1000_AL_.jpg" frameborders="0" allowtransparency="true" allow="encrypted-media" alt="Kawaidan"></img>
            <Item2>
              <strong>Kawaidan</strong>
              <br/>
              1965
            </Item2>
        </a>
      </BookShelf>
    </Column>

    <Column>
      
    <Title style={{marginTop: "20px"}}>
      ALBUMS I'M LISTENING TO
      </Title>
      <BookShelf>
        <a class="grid-img" href="https://open.spotify.com/album/3Yko2SxDk4hc6fncIBQlcM" target="_blank" rel="noopener noreferrer">
        <img width="150" src="https://66.media.tumblr.com/96ebafe90ed128887c54f062b31601ee/tumblr_pwrvr8RJVr1taz7avo1_640.jpg" frameborders="0" allowtransparency="true" allow="encrypted-media" alt="A Seat at the Table by Solange"></img>
          <Item2>
            <strong>A Seat at the Table</strong>
            <br/>
              Solange
          </Item2>
        </a>
      </BookShelf>

      <Title style={{marginTop: "20px"}}>
      VIDEOS I LOVE
      </Title>
      <BookShelf>
          <a class="grid-img" href="https://www.youtube.com/embed/9AThycGCakk" target="_blank" rel="noopener noreferrer">
          <iframe width="252" height="141" src="https://www.youtube.com/embed/9AThycGCakk" frameborder="0" title="Life Lessons from 100-Year-Olds" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <Item2>
                <strong>Life Lessons from 100-Year-Olds</strong>
              </Item2>
          </a>
      </BookShelf>
    </Column>
    </Row>
    </PageGrid>
  


        <Title>
      ABOUT JUDE
      </Title>
      <Content>
      <ul style={{marginLeft: "0", color: "hsla(0, 0%, 0%, 0.80)", maxWidth:"390px", marginBottom: "60px"}}>
      Jude specializes in visualizing user data. He designs layouts, websites and apps, and likes to practice storytelling through animation and art. 
      He currently lives in Toronto with his partner.
      </ul>
      </Content>

      
          <div class="grid-img">
            <img src="https://66.media.tumblr.com/05458add5990eecd59c2995f8269f544/tumblr_pwpfnleSPb1taz7avo1_500.png" alt="Photoshop" width="60"></img>
            
            <Item style={{marginRight: "10px"}}>
            Photoshop
            </Item>
          </div>

      <ul style={{marginLeft: "0"}}>
      <h4 style={{fontWeight: "800", color: "hsla(0, 0%, 0%, 0.80)"}}>Research</h4>
      <h4 style={{fontWeight: "400", color: "hsla(0, 0%, 0%, 0.80)"}}>Design Research</h4>
      <h4 style={{fontWeight: "400", color: "hsla(0, 0%, 0%, 0.80)"}}>Ethnographic/Field Research</h4>
      <h4 style={{fontWeight: "400", color: "hsla(0, 0%, 0%, 0.80)"}}>Participatory/Co-Design</h4>
      <h4 style={{fontWeight: "400", color: "hsla(0, 0%, 0%, 0.80)"}}>Concept Testing</h4>
      <h4 style={{fontWeight: "400", color: "hsla(0, 0%, 0%, 0.80)"}}>Process Mapping</h4>
      <h4 style={{fontWeight: "400", color: "hsla(0, 0%, 0%, 0.80)", marginBottom: "20px"}}>Affinity Analysis</h4>
      </ul>
      <ul style={{marginLeft: "0"}}>
      <h4 style={{fontWeight: "800", color: "hsla(0, 0%, 0%, 0.80)"}}>Design</h4>
      <h4 style={{fontWeight: "400", color: "hsla(0, 0%, 0%, 0.80)"}}>Human-Centered Design</h4>
      <h4 style={{fontWeight: "400", color: "hsla(0, 0%, 0%, 0.80)"}}>Design Thinking</h4>
      <h4 style={{fontWeight: "400", color: "hsla(0, 0%, 0%, 0.80)"}}>Service Design</h4>
      <h4 style={{fontWeight: "400", color: "hsla(0, 0%, 0%, 0.80)"}}>Inclusive Design</h4>
      <h4 style={{fontWeight: "400", color: "hsla(0, 0%, 0%, 0.80)", marginBottom: "20px"}}>Experience Mapping</h4>
      </ul>
      <ul style={{marginLeft: "0"}}>
      <h4 style={{fontWeight: "800", color: "hsla(0, 0%, 0%, 0.80)"}}>Product</h4>
      <h4 style={{fontWeight: "400", color: "hsla(0, 0%, 0%, 0.80)"}}>Design Strategy</h4>
      <h4 style={{fontWeight: "400", color: "hsla(0, 0%, 0%, 0.80)"}}>Stakeholder Engagement</h4>
      <h4 style={{fontWeight: "400", color: "hsla(0, 0%, 0%, 0.80)"}}>Wireframing/Prototyping</h4>
      <h4 style={{fontWeight: "400", color: "hsla(0, 0%, 0%, 0.80)"}}>Web/Mobile Interaction Design</h4>
      <h4 style={{fontWeight: "400", color: "hsla(0, 0%, 0%, 0.80)"}}>Front-end Development</h4>
      <h4 style={{fontWeight: "400", color: "hsla(0, 0%, 0%, 0.80)", marginBottom: "60px"}}>Usability Testing</h4>
      </ul>




      
      <Title>
      HOBBIES
      </Title>

      <Content>
      <ul style={{marginLeft: "0"}}>
      <h4 style={{color: "hsla(0, 0%, 0%, 0.80)", fontWeight:"800"}}>Ballet</h4>
      <h4 style={{color: "hsla(0, 0%, 0%, 0.80)", fontWeight:"800"}}>Swimming</h4>
      <h4 style={{color: "hsla(0, 0%, 0%, 0.80)", fontWeight:"800"}}>Piano</h4>
      <h4 style={{color: "hsla(0, 0%, 0%, 0.80)", fontWeight:"800"}}>DnD</h4>
      <h4 style={{color: "hsla(0, 0%, 0%, 0.80)", fontWeight:"800", marginBottom: "60px"}}>Brazilian Jiu-Jitsu</h4>
      </ul>
      </Content>

*/

const PageGrid = styled.div`
  display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
  }
  @media(max-width: 1000px) {

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

const Image = styled.div`
  display: flex;
	justify-content: left;
  align-items: center;
  margin-bottom: 60px;
  animation: ${fadeInDown} 1s;
  filter: grayscale(60%);
  &:hover {
    filter: opacity(90%);
    filter: contrast(120%);
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
  margin-bottom: 38px;
  padding: 0;
  animation: ${fadeInDown} 1.5s;
  transition: all 0.3s;
  @media(max-width: 1000px) {
    font-size: calc(12px + (14 - 12) * (100vw - 400px) / (1300 - 400) );
  }
`

const ToolShelf = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: repeat(2, 0fr);
   margin-bottom: 0px;
   grid-row-gap: 20px;
   padding-right: 0px;
   animation: ${fadeInDown} 1s;
   img {
    width: 50px;
   }
   @media(max-width: 1000px) {
   }
`

const BookShelf = styled.div`
  align-content: start;
  place-items: start;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0px;
  width: 50%;
  animation: ${fadeInDown} 1s;
    .grid-img {
    width: 500px;
    }
   img {
     @media(max-width: 700px) {
       width: 100px;
     }
   }
   a {
     font-family: 'Product Sans', sans-serif;
     line-height: 1.35;
     letter-spacing: 0.5px;
     margin-bottom: -5px;
     font-weight: normal;
   }
   @media(max-width: 1000px) {

  }
`

const RecommendationShelf = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: repeat(2, 0fr);
   margin-bottom: 0px;
   grid-gap: 20px;
   width: 50%;
   animation: ${fadeInDown} 1s;
   img {
     @media(max-width: 700px) {
       width: 150px;
     }
   }
   @media(max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    iframe {
      width: 171px;
      height:  96px;
    }
  }
`

const Item = styled.div`
    margin-bottom: 0px;
    margin-top: -30px;
    line-height: 1.25;
    color: hsla(0, 0%, 0%, 0.65); 
`

const Item2 = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 200px;
    padding-left: 20px;
    &:hover {
      animation: ${MoveUp} 0.3s;
      animation-fill-mode: forwards;
      color: hsla (0, 0%, 0%, 0.8);
    }
`

const Content = styled.div`
margin-bottom: 20px;
    h2 {
      font-size: calc(25px + (30 - 25) * (100vw - 400px) / (1300 - 400) );
    }
    h2, h3, h4, ul {
      animation: ${fadeInDown} 1s;
    }
    ul {
      border-left: 1px solid hsla(0, 0%, 0%, 0.2);;
      padding-left: 20px;
      margin-left: 3px;
      margin-bottom: 0px;
    }
`

const WorkLink = styled.div`
  display: inline-block;
  &:hover {
      animation: ${MoveUp} 0.3s;
      animation-fill-mode: forwards;
      color: hsla(0, 0%, 0%, 0.80);
   }
 
`

export default AboutPage

export const query = graphql`
query AboutQuery {
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