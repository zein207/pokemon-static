import { Layout } from "components/layouts";
import { useRouter } from "next/router";

interface Props {
  pokemon: any;
}

const PokemonPage = () => {

  const router = useRouter();
  console.log(router.query);

  return (
    <Layout title="A Pokemon">
        <h1>Hello world</h1>
    </Layout>
  )
};

export default PokemonPage;