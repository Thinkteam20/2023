import React from "react";
import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Tooltip,
    Image,
    Link,
    useColorMode,
} from "@chakra-ui/react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../assets/images/logos/slogo.png";

const webLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/Resume" },
    { name: "Contact", path: "/Contact" },
];

const mobileLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/Resume" },
    { name: "Contact", path: "/Contact" },
];

export default function TopNav({ bg, text }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const SwitchIcon = useColorModeValue(FaMoon, FaSun);
    const { colorMode, toggleColorMode } = useColorMode();

    const NavLink = (props) => {
        return (
            <Link
                as={RouterNavLink}
                px={2}
                py={1}
                rounded={"md"}
                color={useColorModeValue("black", "white")}
                _hover={{
                    textDecoration: "none",
                    color: "black",
                    bg: useColorModeValue("white", "white"),
                }}
                _activeLink={{
                    color: useColorModeValue("#53c8c4", "#53c8c4"),
                }}
                onClick={() => props.onClose()}
                to={props.path}
            >
                {props.name}
            </Link>
        );
    };

    return (
        <>
            <Box bg={bg} px={4} boxShadow={"lg"}>
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    w={["90%", "85%", "80%"]}
                    maxW={800}
                    mx='auto'
                >
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                        aria-label={"Open Menu"}
                        display={["inherit", "inherit", "none"]}
                        onClick={isOpen ? onClose : onOpen}
                        bg={useColorModeValue("white", "gray.700")}
                        _hover={{ backgroundColor: "white" }}
                    />
                    <HStack
                        as={"nav"}
                        spacing={4}
                        display={{ base: "none", md: "flex" }}
                        sx={{ color: "white" }}
                    >
                        <Image src={logo} h={100} w={100}></Image>
                        {webLinks.map((link, index) => (
                            <NavLink
                                key={index}
                                name={link.name}
                                path={link.path}
                                onClose={onClose}
                            />
                        ))}
                    </HStack>
                    <Flex alignItems={"center"}>
                        <Tooltip label='Linkedin'>
                            <IconButton
                                as={Link}
                                href={
                                    "https://www.linkedin.com/in/philip-jung-b546181a3"
                                }
                                size={"md"}
                                icon={<FaLinkedin />}
                                isExternal
                                aria-label={"Linkedin account"}
                                bg={useColorModeValue("white", "gray.700")}
                                _hover={{
                                    textDecoration: "none",
                                    bg: useColorModeValue(
                                        "gray.200",
                                        "gray.900"
                                    ),
                                }}
                            />
                        </Tooltip>

                        <Tooltip
                            label={text === "dark" ? "Dark mode" : "Light mode"}
                            aria-label='A tooltip'
                        >
                            <IconButton
                                size='md'
                                fontSize='md'
                                variant='ghost'
                                color='current'
                                marginLeft='2'
                                icon={<SwitchIcon />}
                                aria-label={`Switch to ${text} mode`}
                                bg={useColorModeValue("white", "gray.700")}
                                _hover={{
                                    bg: useColorModeValue(
                                        "gray.200",
                                        "gray.900"
                                    ),
                                }}
                                onClick={toggleColorMode}
                            />
                        </Tooltip>
                    </Flex>
                </Flex>
                {isOpen ? (
                    <Box
                        pb={4}
                        w={["100%", "100%", "80%"]}
                        maxW={800}
                        display={["inherit", "inherit", "none"]}
                        color='white'
                    >
                        <Stack as={"nav"} spacing={4}>
                            {mobileLinks.map((link, index) => (
                                <NavLink
                                    name={link.name}
                                    path={link.path}
                                    onClose={onClose}
                                />
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
