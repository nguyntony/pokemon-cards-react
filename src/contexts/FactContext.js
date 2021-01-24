import React, {createContext, useEffect, useState} from 'react'
import getFact from '../getFact'

export const FactContext = createContext()

export const FactProvider = props => {

    const [facts, setFacts] = useState([])
    // getFact(facts, setFacts)
    useEffect(() => {
        getFact([...facts], setFacts)
    }, [])

    return (
        <FactContext.Provider value={[facts, setFacts]}>
            {props.children}
        </FactContext.Provider>
    )
}
