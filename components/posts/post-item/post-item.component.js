import Link from "next/link"
import Image from 'next/image'
import { Description, PostImage, 
    PostList, Time, PostInfo,
    Title
} from "./post-item.styles"

const PostItem = ({post}) => {
    const {title, image, excerpt, date, slug} = post
    const formattedDate = new Date(date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    const imagePath = `/images/posts/${slug}/${image}`
    const linkPath = `/posts/${slug}`

    return (
        <PostList>
            <Link href={linkPath}>
                <a>
                    <PostImage>
                        <Image 
                            src={imagePath}
                            alt={title}
                            width={300}
                            height={200}
                            layout="responsive"
                        />
                    </PostImage>
                    
                    <PostInfo>
                        <Title>{title}</Title>
                        <Time>{formattedDate}</Time>
                        <Description>{excerpt}</Description>
                    </PostInfo>
                </a>
            </Link>
        </PostList>
    )
}

export default PostItem
