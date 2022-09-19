import React from 'react'
import './Actors.css'

function Actorcards(props) {
    const { item } = props
    if (item.person !== null) {

        let picture = 'https://sirinc2.org/branch129/wp-content/uploads/2019/04/no-photo-icon-22.png'
        if (item.person.image !== null) {
            picture = item.person.image.medium
        }
        let wiki = `https://en.wikipedia.org/wiki/${item.person.name}`
        return (
            <div className={'actorCard'}>

                <img src={picture} alt="NO-image" />
                <h5><a href={wiki} target="_blank" >{item.person.name}</a></h5>
            </div>

        )


    }
    else {
        return ""
    }
}

export default Actorcards
