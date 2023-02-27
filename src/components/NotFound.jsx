import React from "react";
import { Text, VStack } from "@chakra-ui/react";
import background404 from "../assets/images/404.jpg";
import { NavLink } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <VStack
                w='100%'
                h='100vh'
                backgroundImage={background404}
                backgroundPosition='center'
                backgroundRepeat='no-repeat'
                alignContent='center'
            >
                <Text>PAGE NOT FOUND</Text>
                <NavLink name='Home' to='/'>
                    Go Back to Home
                </NavLink>
            </VStack>
        </>
    );
}
