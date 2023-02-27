import React, { useState } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Select,
    Box,
    Flex,
    FormErrorMessage,
    useToast,
    Text,
} from "@chakra-ui/react";

// testing
const MyForm = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        address: "",
        message: "",
        dropbox: "",
    });

    const [fileError, setFileError] = useState(null);
    const toast = useToast();

    const handleFileChange = (e) => {
        if (!e.target.files || !e.target.files[0]) {
            setFileError("Please select a file.");
            setFormValues((prevValues) => ({ ...prevValues, file: undefined }));
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        console.log(formValues.file);
        toast({
            title: "Form submitted",
            description: "Thank you for your submission!",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top-right",
            variant: "solid",
            colorScheme: "blue.100",
        });
        setFormValues({
            name: "",
            phone: "",
            address: "",
            message: "",
            dropbox: "",
        });
    };

    return (
        <Box>
            <Text>CONTACTS</Text>
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
                    <FormLabel>Contact Number</FormLabel>
                    <Input
                        type='text'
                        onChange={(e) =>
                            setFormValues((prevValues) => ({
                                ...prevValues,
                                phone: e.target.value,
                            }))
                        }
                    />
                </FormControl>

                <FormControl id='address' isRequired mt={5}>
                    <FormLabel>Address</FormLabel>
                    <Input
                        type='text'
                        value={formValues.address}
                        onChange={(e) =>
                            setFormValues((prevValues) => ({
                                ...prevValues,
                                address: e.target.value,
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

                <FormControl id='file' isRequired mt={5}>
                    <FormLabel>Position Description</FormLabel>
                    <Input type='file' onChange={handleFileChange} />
                    {fileError && (
                        <FormErrorMessage>{fileError}</FormErrorMessage>
                    )}
                </FormControl>

                <Flex justify='flex-end' mt={4}>
                    <Button colorScheme='blue' type='submit'>
                        Submit
                    </Button>
                </Flex>
            </form>
        </Box>
    );
};

export default MyForm;
