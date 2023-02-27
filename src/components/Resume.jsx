import React, { useState } from "react";
import pdf from "../assets/resume.pdf";
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
    useColorModeValue,
    Divider,
    Code,
    VStack,
    Heading,
    HStack,
} from "@chakra-ui/react";

export default function Resume() {
    const [numPage, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPage);
        setPageNumber(1);
    }
    return (
        <Box
            style={{
                height: "100vh",
            }}
        >
            <embed
                src={`${pdf}#view=fitH#view=fitW`}
                title='testPdf'
                height='100%'
                width='100%'
                frameBorder='0'
            />
        </Box>
    );
}
