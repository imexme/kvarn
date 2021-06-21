import React from 'react'
import useWindowDimensions from '../../hooks/use-windowDimensions';
import Hero from './Hero';
import './Section.css'
const Section = (props) => {
    const dimensions = useWindowDimensions();
    const bgImgPath = `/images/${dimensions.width < 600 ? 'mobile' : 'desktop'}-${props.backgroundImage}`
    const bgImg = {
        backgroundImage: 'url(' + bgImgPath + ')'
    }


    return (
        <div className='wrap' style={bgImg} >
            <Hero
                title={props.title}
                description={props.description}
                descriptionSpan={props.descriptionSpan}
                leftButton={props.leftButton}
                rightButton={props.rightButton} />
        </div>
    )
}

export default Section