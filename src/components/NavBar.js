// this comp. will be the navbar, it will display the user name and how many movies
import {useContext} from 'react'
import {FactContext} from '../contexts/FactContext'
import {AddFact} from '../components'

export default function NavBar() {
    const [facts, setFacts] = useContext(FactContext)

    return (
        <div id='NavBar'>
            <h3>Pichu Cards</h3>
            <p>How many cards are there? {facts.length}</p>
            <AddFact></AddFact>
        </div>
    )
}