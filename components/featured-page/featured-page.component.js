import PostGrid from "../posts/post-grid/post-grid.component"
import { LatestSection, Title } from "./featured-page.styles"

const Featured = ({posts}) => {
    return (
        <LatestSection>
            <Title>Featured Posts</Title>
            <PostGrid posts={posts}/>
        </LatestSection>
    )
}

export default Featured
