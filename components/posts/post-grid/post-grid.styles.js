import styled from 'styled-components'

export const PostGridUl = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 1.5rem;
    align-content: center;

    /* sm:grid-cols-1 sm:gap-2
    md:grid-cols-2 md:gap-4
    lg:grid-cols-3 lg:gap-6 */
`
// grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));