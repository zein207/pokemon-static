import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { Navbar } from '../ui';

interface Props extends PropsWithChildren {
    title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{ title || 'Pokemon App' }</title>
                <meta name="author" content="David Ponce" />
                <meta name="description" content={`Information about ${ title }`} />
                <meta name="keywords" content={`${ title }, pokemon, pokedex`} />
            </Head>

            <Navbar></Navbar>

            <main style={{
                padding: '0 20px'
            }}>
                { children }
            </main>
        </>
    )
}
