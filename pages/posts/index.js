import Head from "next/head"
import AllPosts from "../../components/posts/all-posts/all-posts.component"
import { getAllPosts } from "../../lib/posts-util"


const AllPostsPage = ({posts}) => {
    return (
      <div>
        <Head>
          <title>All posts</title>
          <meta name="description" content="List of all programming stuff"/>
        </Head>
        <AllPosts posts={posts}/>
      </div>
    )
}

export default AllPostsPage

export function getStaticProps() {
  const allPosts = getAllPosts()
  return {
    props: {
      posts: allPosts
    }
  }
}