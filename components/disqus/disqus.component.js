import {DiscussionEmbed} from "disqus-react"
import { DisqusDiv, DisqusWrapper } from "./disqus.styles"

const Disqus = ({post}) => {
    const disqusShortname = "https-acade-blog-vercel-app"

    const disqusConfig = {
        url: `https://acade-blog.vercel.app/posts/${post.slug}`,
        identifier: post.slug, // Single post id
        title: post.title // Single post title
    }

    return (
        <DisqusDiv>
            <DisqusWrapper>
                <DiscussionEmbed
                    shortname={disqusShortname}
                    config={disqusConfig}
                />            
            </DisqusWrapper>
        </DisqusDiv>
    )
}

export default Disqus
