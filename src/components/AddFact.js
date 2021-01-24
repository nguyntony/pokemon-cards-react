import {useState,  useContext} from 'react'
import {FactContext} from '../contexts/FactContext'
import getNewFact from '../getNewFact'

const AddFact = () => {
    const [facts, setFacts] = useContext(FactContext)

    const btnHandler = e => {
        getNewFact(facts, setFacts)
    }

    return (
        <button onClick={btnHandler}>
            Add Card
        </button>
    )
}

export default AddFact