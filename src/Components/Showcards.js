import React from 'react'
import './Showcards.css'

function Showcards(props) {
    const { item } = props


    if (item.show.name !== null) {
        let picture = 'https://sirinc2.org/branch129/wp-content/uploads/2019/04/no-photo-icon-22.png'

        if (item.show.image !== null) {
            picture = item.show.image.medium
        }
        let genee = item.show.genres.join(', ')

        if (item.show.runtime === null) {
            item.show.runtime = 160
        }
        if (item.show.rating.average === null) {
            item.show.rating.average = 5
        }

        let wiki = `https://en.wikipedia.org/wiki/${item.show.name}`


        return (
            <div className={'showCard'}>
                <img src={picture} alt='No-image' />
                <h6>Runtime : {item.show.runtime} mins</h6>
                <h5>Genre : {genee}</h5>
                {/* <h5>Rating : {item.show.rating.average}</h5> */}
                <h5>Rating : {item.show.rating.average}⭐</h5>
                <h3><a href={wiki} target="_blank" >{item.show.name}</a></h3>


            </div>
        )

    }
    else {
        return ""
    }


}

export default Showcards
