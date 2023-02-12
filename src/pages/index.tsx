
import { Layout } from "components/layouts";
import type { NextPage, GetStaticProps } from "next";
import pokeApi from '../../api/pokeApi';

const HomePage: NextPage = (props) => {

  console.log(props);

  return (
    <Layout title="List of pokemon">

      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
      
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get('/pokemon?limit=151');
  console.log(data);

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default HomePage