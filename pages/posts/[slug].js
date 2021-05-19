import Head from "next/head"
import Disqus from "../../components/disqus/disqus.component"
import PostContent from "../../components/posts/post-detail/content.component"
import { getFilesInDir, getPostData } from "../../lib/posts-util"


const PostContentPage = ({post}) => {   

    return (
        <div>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt}/>
            </Head>
            <PostContent post={post}/>
            <Disqus post={post}/>
        </div>
    )
}

export default PostContentPage

// revalidate applied here because updating a single post after every x seconds won't make much
// difference in performance plus for any change applied in rest of the program it won't be necessary to
// call another request
export function getStaticProps(context) {
    const {slug} = context.params
    const postData = getPostData(slug)

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths() {
    const files = getFilesInDir()
    const slugs = files.map(file => file.replace(/\.md$/,''))
    // return {
    //     paths: [{
    //         params: {slug}
    //     }]
    // }

    return {
        paths: slugs.map(slug => ({params : {slug: slug} })),
        fallback: false
    }
}