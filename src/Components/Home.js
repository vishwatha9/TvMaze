import axios from 'axios';
import { debounce } from "lodash";
import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import './Home.css'
import Cards from './Cards'

//https://api.tvmaze.com/search/shows?q=friends
//https://api.tvmaze.com/search/people?q=akon
function Home() {
    const [opt, setOpt] = useState();
    const [err, setErr] = useState(true)
    const [place, setPlace] = useState('')
    const selected = useRef('')
    const [param, setParam] = useState('')
    const [text, setText] = useState();
    const [data, setData] = useState([])


    const clickHandler = (data) => {
        setErr(false);
        const value = data
        setText('Enter the text')


        if (value === "actors") {
            setOpt('people')
            setPlace('Enter any actor name')
            console.log('ACTORS')
        } else if (value === "shows") {
            setOpt('shows')
            setPlace('Enter any show name')
            console.log('ShowS')
        }

    }
    useEffect(() => {
        const query = param
        if (query !== '') {
            setText('')

            selected.current = opt
            axios.get(`https://api.tvmaze.com/search/${selected.current}?q=${query}`)
                .then((res) => {
                    if (res.data.length === 0) {
                        setText("No Data Found !")
                    }
                    else {
                        setData(res.data)
                    }
                }
                )
                .catch(err => {
                    console.log(err)
                })
        }

    }, [param])

    const handleChange = debounce((val) => {
        if (val === '') {
            setText('Enter the Text')
        }
        setParam(val)
    }, 1000);

    // const sendReq = () => {
    //     const query = param;
    //     console.log(param)
    //     if (query !== '') {
    //         setText('')
    //     }

    //     selected.current = opt
    //     fetch(`https://api.tvmaze.com/search/${selected.current}?q=${query}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data.length === 0) {
    //                 setText("No Matches Found !")
    //             }
    //             else {
    //                 // console.log(data)
    //                 setData(data)
    //                 console.log(data)
    //             }
    //         }
    //         )
    // }

    // const debounce = (func, delay) => {
    //     let timer
    //     return function () { // beeterSendReq
    //         // console.log(this);
    //         console.log(this)
    //         let context = this;
    //         let args = arguments;

    //         clearTimeout(timer);

    //         timer = setTimeout(() => {
    //             func.apply(context, args);
    //         }, delay);
    //     }
    // }

    // const changeHandler = (e) => {
    //     setParam(e.target.value)
    //     debounce(sendReq, 1000);
    // }


    return (
        <div >

            <div className={'mainDiv'}>
                <h1>TV Maze</h1>
                <h2>Search Your Favourite Shows</h2>
                <div className={'errTag'}>
                    {
                        err ? <p >Select one option</p> : null
                    }

                </div>


                <div>
                    <div className={'radioButt'}>
                        <input
                            type="radio"
                            name='category'
                            key={1}
                            value={opt}
                            onClick={() => clickHandler('actors')} /> Actors
                        <input
                            type="radio"
                            name='category'
                            key={2}
                            value={opt}
                            onClick={() => clickHandler('shows')} /> Shows
                    </div>
                    <br />
                    <input
                        className={'inpBox'}
                        type={"text"}
                        placeholder={place}
                        onChange={(e) => handleChange(e.target.value)} />


                    <p className={'errTag'}>{text}</p>

                </div>
            </div>
            <div className={'cardFlex'}>
                <Cards opt={selected.current} data={data} />
            </div>


        </div >
    )
}

export default Home
