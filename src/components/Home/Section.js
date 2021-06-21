import React from 'react'
import Hero from './Hero';
import './Section.css'
const Section = (props) => {

    return (
        <div className={`wrap ${props.model}`}>
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