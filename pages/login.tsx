import React from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  Text,
  Heading,
  Divider,
  VStack,
  Button,
  Link,
  useToast,
} from "@chakra-ui/react";
import { InputField } from "../components/form/InputField";
import { Form, Formik } from "formik";
import { PasswordField } from "../components/form/PasswordField";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface loginProps {}

export const login: React.FC<loginProps> = ({}) => {
  const toast = useToast();
  const router = useRouter();

  return (
    <Formik
      initialValues={{ usernameOrEmail: "", password: "" }}
      onSubmit={async (values, { setErrors }) => {}}
    >
      {({ isSubmitting }) => (
        <Box py={20} px={["3%", "3%", "3%", "auto", "auto"]}>
          <Flex
            bg={useColorModeValue("white", "gray.700")}
            py="8"
            px={{ base: "4", md: "10" }}
            shadow="base"
            rounded={{ sm: "lg" }}
            flexDir="column"
          >
            <Flex mb="5%" flexDirection="column">
              <Heading size="xl" textAlign="center" fontWeight="bold" mb={2}>
                Login
              </Heading>
              <Divider />
            </Flex>

            <Form>
              <Flex fontWeight="bold">
                <InputField name="login" placeholder="" label="" hidden />
              </Flex>

              <VStack spacing={6}>
                <InputField
                  name="usernameOrEmail"
                  placeholder="Username or Email"
                  label="Username or Email"
                />
                <PasswordField
                  label="Password"
                  placeholder="Password"
                  name="password"
                  loginOrRegister={true}
                />
                <Button
                  type="submit"
                  fontSize="md"
                  isLoading={isSubmitting}
                  w="100%"
                  bg="#00b074"
                  color="white"
                  size="lg"
                  _hover={{ bg: "green.500" }}
                >
                  Login
                </Button>
              </VStack>
              <Flex gridGap="2%" fontSize="sm" mt="3%">
                <Text fontSize="sm">Don't have account?</Text>
                <NextLink href="/register">
                  <Link fontSize="sm" color="#00b074" fontWeight="semibold">
                    Register
                  </Link>
                </NextLink>
              </Flex>
            </Form>
          </Flex>
        </Box>
      )}
    </Formik>
  );
};

export default login;
