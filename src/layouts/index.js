import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"

import logo from './../assets/img/logo.png'
import favicon32 from './../assets/favicon/favicon-32x32.png'
import favicon16 from './../assets/favicon/favicon-16x16.png'
import faviconApple from './../assets/favicon/apple-touch-icon.png'
import safariTab from './../assets/favicon/safari-pinned-tab.svg'

// Component imports
import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'

require('typeface-roboto');
require('typeface-source-sans-pro');

const Layout = ({ children, data }) => (
    <StaticQuery
    query={graphql`
    query SiteTitleQuery {
		site {
			siteMetadata {
				title
				description
				siteUrl
			}
		}
	}
    `}
    render={data => (
        <MainContainer>
            <Helmet title={data.site.siteMetadata.title}>
                <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <meta name="description" content={data.site.siteMetadata.description} />
                <meta name="image" content={logo}/>
                <meta itemprop="name" content="Jude Park"/>
                <meta itemprop="description" content={data.site.siteMetadata.description}/>
                <meta itemprop="image" content={data.site.siteMetadata.siteUrl + logo}/>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content="Jude Park"/>
                <meta name="twitter:description" content={data.site.siteMetadata.description}/>
                <meta name="twitter:site" content="@judepark"/>
                <meta name="twitter:image" content={data.site.siteMetadata.siteUrl + logo}/>

                <meta name="og:title" content="Jude Park"/>
                <meta name="og:description" content={data.site.siteMetadata.description}/>
                <meta name="og:image" content={data.site.siteMetadata.siteUrl + logo}/>
                <meta name="og:url" content={data.site.siteMetadata.siteUrl}/>
                <meta name="og:site_name" content="Jude Park"/>
                <meta name="og:locale" content="en_US"/>
                <meta name="og:type" content="website"/>

                <link rel="apple-touch-icon" sizes="180x180" href={faviconApple}/>
                <link rel="icon" type="image/png" sizes="32x32" href={favicon32}/>
                <link rel="icon" type="image/png" sizes="16x16" href={favicon16}/>
                <link rel="mask-icon" href={safariTab} color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#000000"/>
                <meta name="theme-color" content="#ffffff"/>

                <script src="https://kit.fontawesome.com/d940246cad.js" crossorigin="anonymous"></script>

            </Helmet>

            <Header />

            {children}

            <Footer />

        </MainContainer>
    )}
    />
)

const MainContainer = styled.div`
	width: 100%;
`

export default Layout