import * as React from "react";
import {
    Flex,
    Avatar,
    Box,
    Text,
    Badge,
    Stack,
    Link,
    UnorderedList,
    ListItem,
    Divider,
    Code,
    VStack,
    Heading,
    HStack,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import { MotionBox, MotionFlex } from "./motion";
import img1 from "../assets/images/projects/gosave.png";
import img2 from "../assets/images/projects/notch.png";
import img3 from "../assets/images/projects/souq.png";
import { getDayOfWeek } from "../utils/getDayOfWeek";
import Projects from "./Projects";
import colorModeVariables from "../styles/theme/colorModeVariable";

const ANIMATION_DURATION = 0.5;

export default function HomeContents({ bg }) {
    const now = new Date();
    const dayOfWeek = getDayOfWeek(
        now.getDate(),
        now.getMonth(),
        now.getFullYear()
    );
    return (
        <>
            <Box h='100%' w='full'>
                <Flex direction='column' align='center'>
                    <Flex direction={["column", "column", "row"]}>
                        <MotionBox
                            opacity='0'
                            initial={{
                                translateX: -150,
                                opacity: 0,
                            }}
                            animate={{
                                translateX: 0,
                                opacity: 1,
                                transition: {
                                    duration: ANIMATION_DURATION,
                                },
                            }}
                            m='auto'
                            mb={[16, 16, "auto"]}
                        >
                            <Heading as='h1'>
                                Happy {dayOfWeek}!
                                <br />
                                I'm Sangpil Jung
                            </Heading>
                            <Box
                                as='h2'
                                fontSize='2xl'
                                fontWeight='400'
                                mt={5}
                                bgGradient='linear(to-l, #7928CA, #FF0080)'
                                bgClip='text'
                                textAlign='center'
                            >
                                JAVASCRPT | REACT | .NET DEVELOPER
                            </Box>
                        </MotionBox>
                    </Flex>
                    <Stack direction='row' h='100%' p={4}>
                        <Divider orientation='vertical' />
                        <Code colorScheme='purple' children='Prudent' />
                        <Code colorScheme='red' children='Consistent' />
                        <Code colorScheme='yellow' children='Honest' />
                        <Code colorScheme='blue' children='Resilience' />
                    </Stack>
                    <MotionBox
                        w='100%'
                        opacity='0'
                        initial={{
                            translateY: 80,
                        }}
                        animate={{
                            translateY: 0,
                            opacity: 1,
                            transition: {
                                delay: ANIMATION_DURATION - 0.1,
                                duration: ANIMATION_DURATION,
                            },
                        }}
                    >
                        <Box mt={10} backgroundColor='transparent'>
                            <MotionBox
                                whileHover={{ y: -0 }}
                                transition={{
                                    duration: 0.35,
                                    ease: "easeIn",
                                }}
                            >
                                <Stack
                                    mb={0}
                                    mx={[0, 0, 10]}
                                    padding={4}
                                    align='start'
                                    borderLeft='4px solid'
                                    borderColor={"#53c8c4"}
                                    _hover={{
                                        shadow: "lg",
                                    }}
                                    backgroundColor='gray.900'
                                    rounded='sm'
                                    fontSize='md'
                                >
                                    <Text
                                        textAlign='center'
                                        color='#53c8c4'
                                        fontWeight='bold'
                                    >
                                        SKILLS
                                    </Text>
                                    <UnorderedList
                                        textAlign='left'
                                        paddingLeft={5}
                                        m={0}
                                        color='white'
                                    >
                                        <ListItem>
                                            {/* <Link as={NavLink} to='/open-source'> */}
                                            Vanilla JavaScript / DOM / Libraries
                                            - REACT.JS REACT NATIVE
                                            <Badge ml='1' colorScheme='red'>
                                                STRONG
                                            </Badge>
                                            {/* </Link> */}
                                        </ListItem>
                                        <ListItem>
                                            {/* <Link as={NavLink} to='/story-timeline'> */}
                                            Dotnet core Framework / MVC pattern
                                            - C#
                                            {/* </Link> */}
                                        </ListItem>
                                        <ListItem>
                                            {/* <Link as={NavLink} to='/tech-stack'> */}
                                            Building business logic API
                                            {/* </Link> */}
                                        </ListItem>
                                        <ListItem>
                                            {/* <Link
                                            as={NavLink}
                                            to='/achievements'
                                        ></Link> */}
                                            Duplicating Figma | Adobe design
                                        </ListItem>
                                        <ListItem>
                                            {/* <Link
                                            as={NavLink}
                                            to='/achievements'
                                        ></Link> */}
                                            MySQL | MongoDb
                                        </ListItem>
                                    </UnorderedList>
                                </Stack>
                            </MotionBox>
                        </Box>

                        <Projects />
                    </MotionBox>
                </Flex>
            </Box>
        </>
    );
}
