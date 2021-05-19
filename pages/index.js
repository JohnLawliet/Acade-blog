import Head from 'next/head'
import Featured from '../components/featured-page/featured-page.component'
import Hero from '../components/hero/hero.component'
import { getFeaturedPosts } from '../lib/posts-util'

 
export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Chintu's Blog</title>
        <meta 
          name="description"
          content="Post about programming and web dev"
        />
      </Head>
      <Hero />
      <Featured posts={posts}/>
    </div>
  )
}

export function getStaticProps () {
  const featured = getFeaturedPosts()
  return {
    props: {
      posts: featured
    }
  }
}

// 1. hero
// 2. featured posts