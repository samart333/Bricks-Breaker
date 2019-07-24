const level1 = [
    [ 0, 1, 0, 0 ,1, 1, 0, 1, 0, 0 ],
    [ 1, 0, 1, 1 ,0, 1, 1, 1, 0 ],
    [ 0, 1, 0, 0 ,1, 1, 0, 1, 0, 1 ],
    // [ 0, 1, 1, 0 ,1, 1, 0, 1, 1, 0 ],
]

function buildLevel(game, level){
    let pokemons = []

    level.forEach((row, rowIndex) => {
        row.forEach((pokemon, pokemonIndex) => {
            if(pokemon === 1){
                let position = {
                    x: 90 * pokemonIndex,
                    y: 100 + 80 * rowIndex
                }
                pokemons.push(new Pokemon(game, position))
            }
        })
    });

    return pokemons
}