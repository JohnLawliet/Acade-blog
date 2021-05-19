import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6rem;
    background-color: var(--color-grey-900);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
`

export const UList = styled.ul`
    list-style: none;
    display: flex;
    align-items: baseline;
    margin: 0;
    padding: 0;

    @media (min-width: 768px) {
        gap: 0.5rem;    
    }
`

export const List = styled.li`
    margin: 0 var(--size-4);
    font-size:1rem;
    color: var(--color-grey-200);

    >a{
        color: var(--color-grey-100);
        font-size: var(--size-4);
        cursor: pointer;

        :hover, :active {
            color: var(--color-grey-200);
        }

        @media (min-width: 768px) {
            font-size: var(--size-5);    
        }
    }
`
  