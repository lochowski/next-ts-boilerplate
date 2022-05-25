import React from 'react'
import Head from 'next/head'

interface HeadProps {
  title: string
  description: string
  url: string
  siteName: string
  image: string
  imageAlt: string
  facebookAppId?: string
  twitterSite?: string
}

const Seo: React.FC<HeadProps> = ({
  description,
  title,
  url,
  siteName,
  image,
  imageAlt,
  facebookAppId,
  twitterSite,
}) => (
  <Head>
    <title>{title}</title>
    <meta name='description' content={description} />

    <meta name='og:url' content={url} />
    <meta name='og:type' content='website' />
    <meta name='og:title' content={title} />
    <meta name='og:description' content={description} />
    <meta property='og:image' content={image} />
    <meta property='og:image:alt' content={imageAlt} />
    <meta name='og:site_name' content={siteName} />

    <meta name='twitter:card' content='summary' />
    <meta name='twitter:creator' content='@lochowski_' />

    {facebookAppId && <meta property='fb:app_id' content={facebookAppId} />}
    {twitterSite && <meta name='twitter:site' content={twitterSite} />}
  </Head>
)

export default Seo
