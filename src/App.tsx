import {
  Button,
  Center,
  Circle,
  Checkbox,
  Flex,
  FormControl,
  IconButton,
  Input,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  BsFillMoonFill,
  BsFillSunFill,
  BsFillLightningChargeFill,
} from "react-icons/bs";

function App(): JSX.Element {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex
      h="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <IconButton
        icon={
          formBackground === "gray.100" ? <BsFillMoonFill /> : <BsFillSunFill />
        }
        aria-label="toggle theme"
        mb={9}
        onClick={toggleColorMode}
      />
      <Flex direction="column" p={12} rounded={6} background={formBackground}>
        <Center pb={6}>
          <Circle bg="teal.400" size="40px" color="white">
            {<BsFillLightningChargeFill size={24} />}
          </Circle>
        </Center>

        <FormControl pb={6}>
          <Input type="email" placeholder="example@mail.com" variant="filled" />
        </FormControl>
        <FormControl pb={2}>
          <Input
            type="password"
            placeholder="***************"
            variant="filled"
          />
        </FormControl>
        <Link mb={6} fontSize="xs" color="teal.400">
          Forgot your password?
        </Link>
        <Button
          bg="teal.400"
          mb={2}
          color="white"
          _hover={{ bg: "teal.200", color: "black" }}
        >
          Log In
        </Button>
        <Checkbox colorScheme="teal" mb={6}>
          <Text fontSize="xs">Remember me</Text>
        </Checkbox>
        <Text textAlign="center" mb={-4} fontSize="xs">
          or{" "}
          <Link fontSize="sm" color="teal.400">
            Sign Up
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
}

export default App;
