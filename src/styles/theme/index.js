import { flashless } from "@laurabeatris/chakra-ui-flashless";
import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { config } from "./config";
import { colorModeVariables } from "./colorModeVariable";

export const theme = extendTheme(
    flashless({
        colors,
        config,
        colorModeVariables,
    })
);
