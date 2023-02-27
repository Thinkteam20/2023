import * as React from "react";
import {
    Box,
    ChakraProvider,
    ColorModeScript,
    useColorModeValue,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
// import { theme } from "./styles/theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { flashless } from "@laurabeatris/chakra-ui-flashless";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme(
    flashless({
        config: {
            initialColorMode: "light",
        },
    })
);

export default function App() {
    return (
        <ChakraProvider resetCSS={true}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Navbar />
            <Box
                textAlign='center'
                fontSize='xl'
                w={["90%", "85%", "80%"]}
                maxW={900}
                mx='auto'
                style={{
                    backgroundSize: "1200% 1200%",
                }}
            >
                <Box pt={10} pb={10} mt={2}>
                    <Outlet />
                </Box>
                <Footer />
            </Box>
        </ChakraProvider>
    );
}
