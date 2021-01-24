const getNewFact = async ([...arr], setFacts) => {
    const id = Math.floor(Math.random() * 151)

    const factPromise = fetch(`https://api.pokemontcg.io/v1/cards?nationalPokedexNumber=${id}&pageSize=1`, {headers: {Accept: 'application/json'}})
    const res = await factPromise
    const factData = await res.json()
    const facts = factData.cards.map(c => {
        return {
            id: c.id,
            imgUrl: c.imageUrl,
            abilityDescription: c.attacks[0].text,
            abilityName: c.attacks[0].name
        }
    })
    setFacts([...arr, ...facts])
}

export default getNewFact