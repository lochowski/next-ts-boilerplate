import { NextPage } from 'next'

import Seo from '@/components/atoms/seo'

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title='NextJS boilerplate with TypeScript by Kacper'
        description='NextJS boilerplate with TypeScript by Kacper'
        url='https://example.url'
        siteName='NextJS boilerplate'
        image='https://nextjs.org/static/twitter-cards/home.jpg'
        imageAlt='The React Framework for Production'
      />
      <div>123</div>
    </>
  )
}

export default Home
