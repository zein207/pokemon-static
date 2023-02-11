import { Button } from "@nextui-org/react";
import { Layout } from "components/layouts";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Layout title="List of pokemon">
      <Button>
        Hello World
      </Button>
    </Layout>
  )
}

export default HomePage