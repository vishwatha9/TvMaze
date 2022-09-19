import React from 'react'
import Showcards from './Showcards'
import Actorcards from './Actorcards'

function Cards(props) {
    const { data, opt } = props
    console.log(data)

    if (data.length > 0) {
        return (
            <>
                {
                    (opt === 'shows') ? (
                        data.map(item => {
                            if (item != null && item.show !== undefined) {
                                return <Showcards key={item.show.id} item={item} />
                            }

                        })
                    ) : (opt === 'people') ? (
                        data.map(item => {
                            if (item != null && item.person !== null && item.person.id !== null
                                && item.person.id !== undefined) {
                                return <Actorcards key={item.person.id} item={item} />
                            }

                        })
                    ) : ""

                }
            </>


        )
    }
    else if (opt != '' && data.length === 0) {
        return ""
    }

}

export default Cards
