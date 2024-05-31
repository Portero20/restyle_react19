import { useEffect, useState } from 'react'

const List = () => {

    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchPokemons = async() => {

        try {

            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            const data = await response.json()


            setPokemons(data.results)

        } catch (error) {

            console.error('Error fetching the Pokémon: ', error)

        } finally {

            setLoading(false)

        }

      }
    
      fetchPokemons()

    }, [])
    

    if(loading) {

        return <div>Loading...</div>

    }

  return (
    
    <div>
        <h1>Pokemon List</h1>

        <ul>

            {pokemons.map((pokemon, index) => (

                <li key={index}>{pokemon.name}</li>

            ))}

        </ul>

    </div>

  )
}

export default List