import { useRouter } from "next/router"
import { useState, useEffect } from "react"

import InputSuggestions from "../form/inputSuggestions/Inputsuggestions"

export default function SearchCity() {
    const [searchText, setSearchText] = useState('')
    const [suggestions, setSuggestions] = useState([])

    const router = useRouter()
    
    const fetchCity = async () => {
        const CITY_LIMIT = 5
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=${CITY_LIMIT}&appid=${process.env.NEXT_PUBLIC_API_KEY}`)
        const json = await response.json()
        handleList(json)
    }

    const handleList = (list) => {
        const formattedList = list.map((obj) => ({
            text: `${obj.name}, ${obj.state}, ${obj.country}`,
            onClick: () => router.push(`/info/${obj.lat}/${obj.lon}`)
        }))
        setSuggestions(formattedList)
    }

    useEffect(() => {
        if(searchText.length >= 3) fetchCity()
        else setSuggestions([])
    }, [searchText])

    return(
        <InputSuggestions 
          placeholder="Digite o nome da cidade"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          suggestions={suggestions}
        />
    )
}