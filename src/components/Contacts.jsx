import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Box,
    Flex,
    FormErrorMessage,
    useToast,
    Text,
} from "@chakra-ui/react";

// testing
const MyForm = () => {
    // useEffect(() => {}, []);
    const [loading, isLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        file: "",
    });

    const [fileError, setFileError] = useState(null);
    const toast = useToast();

    const handleFileChange = (e) => {
        if (!e.target.files || !e.target.files[0]) {
            setFileError("Please select a file.");
            setFormValues((prevValues) => ({
                ...prevValues,
                file: e.target.files[0],
            }));
            return;
        }

        const file = e.target.files[0];
        if (!file.type.includes("pdf")) {
            setFileError("Please select a PDF file.");
            setFormValues((prevValues) => ({ ...prevValues, file: undefined }));
            return;
        }

        setFileError(null);
        setFormValues((prevValues) => ({ ...prevValues, file }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        isLoading(true);
        try {
            const response = await axios.post(
                "https://port2023.herokuapp.com/submit-form",
                formValues,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            toast({
                title: `${response.data}`,
                description: "Thank you for your submission!",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top-right",
                variant: "solid",
                colorScheme: "blue.100",
            });
            isLoading(false);
            // console.log(response.data); // do something with response
        } catch (error) {
            console.log(error);
            toast({
                title: `${error.name}`,
                description: `${error.message}`,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top-right",
                variant: "solid",
                // colorScheme: "blue.100",
            });
            isLoading(false);
        }

        setFormValues({
            name: "",
            phone: "",
            email: "",
            message: "",
            file: "",
        });
    };

    return (
        <Box>
            <Text fontWeight='bold'>CONTACTS</Text>
            <form onSubmit={handleSubmit}>
                <FormControl id='name' isRequired mt={5}>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type='text'
                        value={formValues.name}
                        onChange={(e) =>
                            setFormValues((prevValues) => ({
                                ...prevValues,
                                name: e.target.value,
                            }))
                        }
                    />
                </FormControl>

                <FormControl id='phone' isRequired mt={5}>
                    <FormLabel>Phone</FormLabel>
                    <Input
                        type='text'
                        value={formValues.phone}
                        onChange={(e) =>
                            setFormValues((prevValues) => ({
                                ...prevValues,
                                phone: e.target.value,
                            }))
                        }
                    />
                </FormControl>

                <FormControl id='email' isRequired mt={5}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type='text'
                        value={formValues.email}
                        onChange={(e) =>
                            setFormValues((prevValues) => ({
                                ...prevValues,
                                email: e.target.value,
                            }))
                        }
                    />
                </FormControl>

                <FormControl id='message' isRequired mt={5}>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                        value={formValues.message}
                        onChange={(e) =>
                            setFormValues((prevValues) => ({
                                ...prevValues,
                                message: e.target.value,
                            }))
                        }
                    />
                </FormControl>

                <FormControl id='file' mt={5}>
                    <FormLabel>Position Description</FormLabel>
                    <Input
                        type='file'
                        accept='pdf'
                        onChange={handleFileChange}
                    />
                    {fileError && (
                        <FormErrorMessage>{fileError}</FormErrorMessage>
                    )}
                </FormControl>

                <Flex justify='flex-end' mt={4}>
                    <Button colorScheme='blue' type='submit'>
                        {loading ? "...Sending" : "Submit"}
                    </Button>
                </Flex>
            </form>
        </Box>
    );
};

export default MyForm;
