import Image from 'next/image'
import {HeroSection, HeroImage, HeroTitle, HeroPara } from './hero.styles'

const Hero = () => {
    return (
        <HeroSection>
            <HeroImage>
                <Image src="/images/site/pp.jpg" 
                    alt="image showing me" 
                    layout="responsive"
                    height={300}
                    width={300}
                />
            </HeroImage>
            <HeroTitle>
                Hi, Im Chintu
            </HeroTitle>
            <HeroPara>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facilis minima quam voluptas ipsa rerum soluta sed! Suscipit architecto, possimus esse ea accusamus harum beatae laboriosam ratione ullam voluptatibus ipsam.
            </HeroPara>
        </HeroSection>
    )
}

export default Hero
