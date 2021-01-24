// this is the container that will hold each movie
import {useContext} from 'react'
import Fact from './Fact'
import {FactContext} from '../contexts/FactContext'

export default function FactList() {
    const [facts, setFacts] = useContext(FactContext)

    return (
        <div id="FactList">
            {
                facts.map(f => (
                    <Fact imgUrl={f.imgUrl} key={f.id} id={f.id} name={f.abilityName} description={f.abilityDescription}></Fact>
                ))
            }
        </div>
    )
}