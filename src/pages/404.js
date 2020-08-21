import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

import {fadeInDown} from './../animations/m-styled-animations'

const NotFoundPage = () => (
  <ErrorPageGrid>

    <h1>Wuh oh, page not found. 🙁</h1>

        <HeaderSubtitle>⠏⠁⠛⠑ ⠝⠕⠞ ⠋⠕⠥⠝⠙</HeaderSubtitle>

	<MButton to="/">🠈 Back to Home</MButton>
	<br></br><br></br><br></br>
  </ErrorPageGrid>
)

export default NotFoundPage

const ErrorPageGrid = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	animation: ${fadeInDown} 1s;
	& > * {
		grid-column: center;
	}
	h1 {
		padding-top: 40px;
		font-weight: 800;
		margin-bottom: 24px;
	}
`

const HeaderSubtitle = styled.h3`
	margin-bottom: 40px;
`;

const MButton = styled(Link)`
	display: flex;
	margin-top: 24px;
	&:hover {
		font-weight: bold;
	}
`;