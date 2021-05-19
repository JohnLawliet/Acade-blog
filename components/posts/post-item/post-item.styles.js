import styled from 'styled-components'

export const PostList = styled.li`
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    background-color: var(--color-grey-800);
    text-align: center; 

    >a{
        color: var(--color-grey-100);
        cursor:pointer;
    }
`

export const PostImage = styled.div`
    width: 100%;
    max-height: 20rem;
    overflow: hidden;

    >img{
        object-fit: cover;
    }
`

export const PostInfo = styled.div`
    padding: var(--size-4);
    padding-bottom: var(--size-5);

    @media (min-width:768px){
        padding:0 var(--size-8);
    }
`

export const Title = styled.h3`
    margin: var(--size-2) 0;
    font-size: var(--size-6);
`

export const Time = styled.time`
    font-style: italic;
    color: var(--color-grey-300);
`

export const Description = styled.p`
    line-height: var(--size-6);
`
