module.exports = {
	siteMetadata: {
		title: 'Jude Park',
		description: 'Designer, UX',
		siteUrl: "https://judepark.com"
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		`gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-layout`,
		'gatsby-image',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: "UA-60484784-4",
				// Puts tracking script in the head instead of the body
				head: true,
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 1000,
                            backgroundColor: 'transparent',
                            linkImagesToOriginal: false
						}
                    },
                    {
                        resolve: `gatsby-remark-images-medium-zoom`,
                        options: {
                            //...
                        }
                    },
					`gatsby-remark-responsive-iframe`,
				],
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/notes`,
				name: 'notes',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/works`,
				name: 'work',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/assets`,
				name: 'img',
			},
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Jude Park`,
              short_name: `Jude Park`,
              description: `Jude Park is a designer born in South Korea, based in Toronto. He likes Animal Crossing.`,
              start_url: `/`,
              background_color: `#000000`,
              theme_color: `#000000`,
              display: `standalone`,
              icon: `src/assets/img/logo.png`,
            },
        },
	],
}