import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

function App(): React.JSX.Element {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" p={12} rounded={6} background={formBackground}>
        <Heading mb={6} textAlign="center">
          Log In
        </Heading>
        <Input
          placeholder="example@gmail.com"
          variant="filled"
          type="email"
          mb={6}
        />
        <Input
          placeholder="*********"
          variant="filled"
          type="password"
          mb={6}
        />
        <Button colorScheme="teal" mb={6}>
          Log In
        </Button>
        <Button onClick={toggleColorMode}>Toogle Color Mode</Button>
      </Flex>
    </Flex>
  );
}

export default App;
