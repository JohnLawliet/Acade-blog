import { ArticleContent, ContentImage } from "./content.styles"
import PostHeader from "./header.component"
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'

SyntaxHighlighter.registerLanguage('js', js)

// cjs is for server side rendering, esm is csr
const PostContent = ({post}) => {
    const imagePath = `/images/posts/${post.slug}`

    // customRenderers is to manage the different elements within the markdown.
    // with img(image) it takes the default image that is passed to the renderer
    // image.alt is the text within [] in .md and image.src refers to the filename
    // react markdown renders li, p, img as p tag so to select what to customize in the p tag
    // node.children[0].type is used
    // img(image){
    //     return (
            
    //     )
    // },
    // Using the above would give warnings as above would render divs wrapped in a p
    // below is defining what all to return for exactly what type of html element
    const customRenderers = {        
        p(paragraph){
            const {node} = paragraph
            if (node.children[0].tagName==="img"){
                const image = node.children[0]

                return (
                    <ContentImage>
                        <Image 
                            src={`${imagePath}/${image.properties.src}`} 
                            alt={image.alt} 
                            width={600} 
                            height={300} 
                        />
                    </ContentImage>
                )
            }
            else return <p>{paragraph.children}</p>
        },

        code(code){
            const { className, children } = code;
            // className is something like language-js => We need the "js" part here
            const language = className.split('-')[1]; 

            return (
                <SyntaxHighlighter
                  style={atomDark}
                  language={language}
                  children={children}
                />
            );
        }
    }

    return (
        <ArticleContent>
            <PostHeader title={post.title} image={`${imagePath}/${post.image}`}/>
            <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>         
        </ArticleContent>
    )
}

export default PostContent
