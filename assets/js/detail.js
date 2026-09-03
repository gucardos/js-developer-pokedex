const params = new URLSearchParams(window.location.search)
const id = params.get('id')

console.log(id)

pokeApi.getPokemonDetail({
    url: `https://pokeapi.co/api/v2/pokemon/${id}`
}).then((pokemon) => {

    const pokemonDetail = document.getElementById('pokemonDetail')

    const newHtml = `
        <div class="pokemon-detail-card ${pokemon.types[0]}">

            <div class="detail-header">

                <h2 class="pokemonName">
                    ${pokemon.name}
                </h2>

                <span class="pokemonNumber">
                    #${pokemon.number}
                </span>

            </div>

            <div class="detail-image-container">
                <img
                    src="${pokemon.photo}"
                    alt="${pokemon.name}"
                    class="pokemonPhoto"
                >
            </div>

            <div class="detail-content">

                <div class="types">
                    ${pokemon.types
                        .map((type) => `
                            <span class="type ${type}">
                                ${type}
                            </span>
                        `)
                        .join('')
                    }
                </div>

                <div class="basic-information">

                    <div class="info">
                        <span>Height</span>
                        <strong>${pokemon.height}</strong>
                    </div>

                    <div class="info">
                        <span>Weight</span>
                        <strong>${pokemon.weight}</strong>
                    </div>

                </div>

                <div class="pokemon-stats">

                    <div class="stat">
                        <span>HP</span>
                        <strong>${pokemon.stats.hp}</strong>
                    </div>

                    <div class="stat">
                        <span>Attack</span>
                        <strong>${pokemon.stats.attack}</strong>
                    </div>

                    <div class="stat">
                        <span>Defense</span>
                        <strong>${pokemon.stats.defense}</strong>
                    </div>

                </div>

            </div>

        </div>
    `

    pokemonDetail.innerHTML = newHtml

})