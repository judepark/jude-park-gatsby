import React from 'react'
import styled from 'styled-components'

export default (props) => {
  return (
	<PillContainer>
		<h5>{props.text}</h5>
	</PillContainer>
  )
}

const PillContainer = styled.div`
	  display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 0px;
    border-radius: 100px;

    h5 {
        text-transform: uppercase;
        font-variant: small-caps;
        line-height: 165%;
        @media(max-width: 1000px) {
      }
    }
`;