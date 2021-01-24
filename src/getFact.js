const getFact = async ([...arr], setFacts) => {
    const factPromise = fetch('https://api.pokemontcg.io/v1/cards?name=pichu&pageSize=9', {headers: {Accept: 'application/json'}})
    const res = await factPromise
    const factData = await res.json()
    const facts = factData.cards.map(c => {
        return {
            id: c.id,
            imgUrl: c.imageUrl,
        }
    })
    setFacts([...arr, ...facts])
}

export default getFact
