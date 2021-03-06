const getFact = async ([...arr], setFacts) => {
    const factPromise = fetch('https://api.pokemontcg.io/v1/cards?name=pichu&pageSize=2', {headers: {Accept: 'application/json'}})
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

export default getFact
