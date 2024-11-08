import { Box, Button, Flex, Grid, Text, Theme } from "@radix-ui/themes"

import "@radix-ui/themes/styles.css"
import "styles.css"

import { togglePesticide } from "./helpers/toggle-pesticide"
import { togglePesticideHover } from "./helpers/toggle-pesticide-hover"

function IndexPopup() {
  const onClickActive = async () => {
    await togglePesticide()
  }

  const onClickActiveHover = async () => {
    await togglePesticideHover()
  }

  return (
    <Theme
      appearance="dark"
      style={{ minHeight: "fit-content", backgroundColor: "transparent" }}>
      <Box width={"300px"}>
        <div>
          <Grid gap="4">
            <Text as="label" size="2">
              <Flex gap="2">
                <Button onClick={onClickActive} size="2">
                  Toggle Pesticide
                </Button>
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <Button onClick={onClickActiveHover} size="2">
                  Toggle Pesticide Hover
                </Button>
              </Flex>
            </Text>
          </Grid>
        </div>
      </Box>
      <footer>
        <Text size="1">
          original css from{" "}
          <a href="https://github.com/mrmrs/pesticide" target="_blank">
            Learn more about Pesticide on GitHub
          </a>
        </Text>
      </footer>
    </Theme>
  )
}

export default IndexPopup
