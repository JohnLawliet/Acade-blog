import Image from 'next/image'
import { Header, Title } from "./header.styles"

const PostHeader = ({title, image}) => {
    return (
        <Header>
            <Title>{title}</Title>
            <Image 
                src={image}
                width={200}
                height={150}
                alt={title}
            />
        </Header>
    )
}

export default PostHeader
