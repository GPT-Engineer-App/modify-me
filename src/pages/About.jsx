import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">
          About Us
        </Heading>
        <Text fontSize="lg">This is the About Us page of our application.</Text>
      </VStack>
    </Container>
  );
};

export default About;
