'use client'

import { useState, useEffect } from "react"


export default function Joke() {

    const [joke, setJoke] = useState('')
    const [loading, setLoading] = useState(false)

    const getJoke = async () => {
        const url = 'https://icanhazdadjoke.com/'
        const response = await new Promise(resolve => {
            setTimeout(() => {
                resolve(fetch(url, {
                    method: "GET",
                    headers: {
                        "User-Agent": "hobby usage",
                        "Accept": "application/json",
                    }
                }
            ))
            }, "3000")
        })
        const data = await response.json()
        return data.joke
    }


    const handleJoke = async () => {
        setLoading(true)
        setJoke('')
        const joke = await getJoke()
        setJoke(joke)
        setLoading(false)
    }

    useEffect(() => {
        handleJoke()
    }, [])

    return (
        <div className="border border-gray-600 py-5 flex justify-center items-center rounded-full flex-wrap">
        {loading ?
            <div>Happy April Fools Day! Here is a joke...</div>
            :
            <div>{joke}</div>
        }
        </div>
    )
}
