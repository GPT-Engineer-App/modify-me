import { Box, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="teal.500" p={4} position="fixed" bottom="0" width="100%" textAlign="center">
      <Text color="white">© 2024 Your Company. All rights reserved.</Text>
    </Box>
  );
}

export default Footer;
