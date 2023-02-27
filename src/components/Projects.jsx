import {
    chakra,
    Box,
    Stack,
    Image,
    Flex,
    Text,
    Icon,
    HStack,
    useColorModeValue,
} from "@chakra-ui/react";
import { FaReact, FaBitbucket, FaAws } from "react-icons/fa";
import { SiJquery, SiMysql, SiDotnet, SiElectron } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { DiNodejs, DiPhp } from "react-icons/di";

import { MotionBox } from "./motion";
import { BsFillBriefcaseFill } from "react-icons/bs";

// 2B2D38 e
// 3F843C node
//6878C5 php

const getIconComponent = (iconName) => {
    switch (iconName) {
        case "FaReact":
            return (
                <Box mr={1} ml={1}>
                    <FaReact color='#53c8c4' size={35} />
                </Box>
            );
        case "Aws":
            return (
                <Box mr={1} ml={1}>
                    <FaAws color='#2B2D38' size={35} />
                </Box>
            );
        case "GitHub":
            return (
                <Box mr={1} ml={1}>
                    <BsGithub color='#2B2D38' size={35} />
                </Box>
            );
        case "SiElectron":
            return (
                <Box mr={1} ml={1}>
                    <SiElectron color='#2B2D38' size={35} />
                </Box>
            );
        case "Node":
            return (
                <Box mr={1} ml={1}>
                    <DiNodejs color='#3F843C' size={35} />
                </Box>
            );
        case "Php":
            return (
                <Box mr={1} ml={1}>
                    <DiPhp color='#6878C5' size={35} />
                </Box>
            );
        case "MySql":
            return (
                <Box mr={1} ml={1}>
                    <SiMysql color='#DD8900' size={35} />
                </Box>
            );

        case "FaBitbucket":
            return (
                <Box mr={1} ml={1}>
                    <FaBitbucket color='#2784FE' size={35} />
                </Box>
            );

        case "SiJquery":
            return (
                <Box mr={1} ml={1}>
                    <SiJquery color='#162B43' size={35} />
                </Box>
            );
        case "SiDotnet":
            return (
                <Box mr={1} ml={1}>
                    <SiDotnet color='#1069B3' size={35} />
                </Box>
            );

        default:
            return null;
    }
};

export const projects = [
    {
        id: 1,
        name: "One Dream Community",
        description: `This is a NDIS management website for the NDIS clients, Internal NDIA and aged care teams. 
           It helps to collaborate and manage all of stakeholders XERO payroll in one place, matching helpers and invoices`,
        stack: {
            1: "SiDotnet",
            2: "FaReact",
            3: "SiJquery",
            4: "MySql",
            5: "GitHub",
        },
        img: "https://res.cloudinary.com/dlnh85cl7/image/upload/v1676592964/portfolio/odc-min_twexrv.jpg",
        fontColor: "#87BD42",
    },
    {
        id: 2,
        name: "Laep in!",
        description: `The free Leap in! app is the perfect partner to help client unlock your NDIS. Capture what client's life looks like now, tell your story once and share it with others, get help to set goals and manage clent's NDIS Plan in one place.`,
        // stack: ["SiDotnet", "SiJquery", "FaReact", "FaBitbucket"],
        img: "https://res.cloudinary.com/dlnh85cl7/image/upload/v1676598560/portfolio/leapin_r7wjvm.jpg",
        fontColor: "red.500",
        stack: { 1: "FaReact", 2: "Aws", 3: "FaBitbucket" },
    },
    {
        id: 3,
        name: "Uhak Station",
        description: `website and desktop application provides a wide variety of features like submitting form, timesheet generation, push notification, student's data and education material management and many more.`,
        // stack: ["SiDotnet", "SiJquery", "FaReact", "FaBitbucket"],
        img: "https://res.cloudinary.com/dlnh85cl7/image/upload/v1676599614/portfolio/uhakstation_1_d5regy.png",
        fontColor: "gray.500",
        stack: { 1: "SiElectron", 2: "Php", 3: "FaBitbucket", 4: "Node" },
    },
];

export default function Projects() {
    const color = useColorModeValue("white", "gray.800");

    return (
        <>
            <Flex
                alignItems='center'
                justifyContent='center'
                mt={5}
                fontWeight='bold'
            >
                Projects
                <Stack pl={3}>
                    <Box as={BsFillBriefcaseFill} size='25px' />
                </Stack>
            </Flex>

            {projects.map((project) => (
                <MotionBox
                    whileHover={{ y: -5 }}
                    _hover={{
                        shadow: "lg",
                        // textShadow: "1px 1px #ff0000",
                        borderLeft: "1.5px solid #53c8c4",
                        mb: "2px",
                    }}
                    transition={{
                        duration: 0.35,
                        ease: "easeIn",
                    }}

                    // backgroundColor='white'
                >
                    <Box mt={5} key={project.id} shadow='base'>
                        <Flex
                            direction={{ base: "column", md: "row" }}
                            _light={{ bg: "brand.500" }}
                            px={8}
                            py={5}
                            mx='auto'
                        >
                            <Box
                                w={{ base: "full", d: 11 / 12, xl: 9 / 12 }}
                                mx='auto'
                                pr={{ md: 20 }}
                            >
                                <Text
                                    textTransform={"uppercase"}
                                    color={project.fontColor}
                                    fontWeight={600}
                                    fontSize={"sm"}
                                    p={2}
                                    alignSelf={"flex-start"}
                                    rounded={"md"}
                                >
                                    {project.name}
                                </Text>

                                <chakra.p
                                    mb={6}
                                    maxWidth='500px'
                                    fontSize={{
                                        base: "small",
                                        md: "small",
                                    }}
                                    color='gray.500'
                                    _dark={{ color: "white" }}
                                >
                                    {project.description}
                                </chakra.p>

                                <Flex>
                                    <HStack align='center'>
                                        <Flex mt={2} align='center'>
                                            {/* {Object.values(project.stack).map(
                                            (data) => (
                                                <div>{data}</div>
                                            )
                                        )} */}
                                            {Object.values(project.stack).map(
                                                (data) => {
                                                    const IconComponent =
                                                        getIconComponent(data);
                                                    if (IconComponent) {
                                                        const IconComp = (
                                                            <div>
                                                                {IconComponent}
                                                            </div>
                                                        );
                                                        return IconComp;
                                                    }
                                                    return null;
                                                }
                                            )}
                                        </Flex>
                                    </HStack>
                                </Flex>

                                <Stack
                                    direction={{
                                        base: "column",
                                        sm: "row",
                                    }}
                                    mb={{ base: 4, md: 8 }}
                                    spacing={2}
                                ></Stack>
                            </Box>

                            <Box
                                w={{ base: "full", md: 10 / 12 }}
                                mx='auto'
                                textAlign='center'
                            >
                                <Image
                                    w='full'
                                    height='200'
                                    rounded='lg'
                                    shadow='2xl'
                                    src={project.img}
                                    alt='career screenshot'
                                />
                            </Box>
                        </Flex>
                    </Box>
                </MotionBox>
            ))}
        </>
    );
}
