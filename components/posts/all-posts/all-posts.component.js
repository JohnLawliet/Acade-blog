import PostGrid from "../post-grid/post-grid.component"
import { AllPostsSection, AllPostsTitle } from "./all-posts.styles"

const AllPosts = ({posts}) => {
    return (
        <AllPostsSection>
            <AllPostsTitle>All Posts</AllPostsTitle>
            <PostGrid posts={posts}/>
        </AllPostsSection>
    )
}

export default AllPosts
