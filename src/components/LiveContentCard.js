import React from 'react'
import styled from 'styled-components'

export default (props) => {
  return (
		<LiveContentInfo color={props.color}>
			<a href={props.url}>Link</a>
		</LiveContentInfo>

  )
}


const LiveContentInfo = styled.div`
	a {
		line-height: 1.25;
		font-size: calc(10px + (12 - 10) * (100vw - 400px) / (1300 - 400) );
		font-weight: 600;
		letter-spacing: 0.5px;
		color: hsla(0, 0%, 0%, 0.50);
	}
	
	a:hover {
		color: hsla(0, 0%, 0%, 0.80);
	}

`;


