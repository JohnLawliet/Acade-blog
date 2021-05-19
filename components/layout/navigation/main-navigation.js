import Link from 'next/link'
import Logo from '../logo/logo'
import { HeaderContainer, List, UList } from "./main-navigation.styles"

const MainNavigation = () => {
    return (
        <HeaderContainer>
            <Link href="/">
                <a><Logo /></a>            
            </Link>
            <nav >
                <UList>
                    <List><Link href="posts">POSTS</Link></List>
                    <List><Link href="contact">CONTACT</Link></List>
                </UList>
            </nav>
        </HeaderContainer>
    )
}

export default MainNavigation
