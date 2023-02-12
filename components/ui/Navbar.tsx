import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"

export const Navbar = () => {

    const { theme } = useTheme()
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0 20px',
            backgroundColor: theme?.colors.gray100.value
        }}>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png"
                alt="App icon"
                width={60}
                height={60}
            />
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okemon</Text>

            <Spacer css={{ flex: 1 }} />

            <Text color="white" h3>Favorites</Text>
        </div>
    )
}
