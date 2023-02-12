
import { Layout } from "components/layouts";
import { PokemonListResponse } from "interfaces";
import type { NextPage, GetStaticProps } from "next";
import pokeApi from '../../api/pokeApi';
import { SmallPokemon } from '../../interfaces/pokemon-list';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  // console.log(pokemons);

  return (
    <Layout title="List of pokemon">

      <ul>
        {
          pokemons.map((pokemon) => (
            <li key={pokemon.id}>
              #{pokemon.id} - {pokemon.name}
            </li>
          ))
        }
      </ul>
      
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  // console.log(data);
  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage