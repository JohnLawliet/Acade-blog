// utility to fetch post data and extract metadata from md files
// gray-matter is npm package to split md file to metadata and actual content
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const postsDirectory = path.join(process.cwd(),'content','posts')


export const getFilesInDir = () => {
    return fs.readdirSync(postsDirectory)
}

// this f(x) gets each file's data.  
// matter takes a string and to separate the metadata and content 
export const getPostData = (pathIdentifier) => {
    // removes the .md after the filename
    const postSlug = pathIdentifier.replace(/\.md$/,'')

    const filePath = path.join(postsDirectory, `${postSlug}.md`)    
    const fileContent = fs.readFileSync(filePath,'utf-8')
    const {data, content} = matter(fileContent)


    const postData = {
        slug:postSlug,
        ...data,
        content:content
    }

    return postData
}

// readdirSync() reads the directory syncronously returns an array
export const getAllPosts = () => {
    const postFiles = getFilesInDir()
    const allPosts = postFiles.map(postFile => getPostData(postFile))

    // default js method for sorting
    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)

    return sortedPosts
}

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts()
    const featuredPosts = allPosts.filter(post => post.isFeatured)
    
    return featuredPosts
}
