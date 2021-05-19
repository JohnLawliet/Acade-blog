import PostItem from '../post-item/post-item.component'
import {PostGridUl} from './post-grid.styles'

const PostGrid = ({posts}) => {
    return (
        <PostGridUl>
        {
            posts.map(post => 
                <PostItem 
                    key={post.slug}
                    post={post}
                />
            )
        }
        </PostGridUl>
    )
}

export default PostGrid
