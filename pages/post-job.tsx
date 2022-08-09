import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Icon,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
import { InputField } from "../components/form/InputField";
import { JobObj, jwtAxios } from "../context/types";
//   import { DashboardLayout } from "../components/layouts/DashboardLayout";
//   import { job_category, location } from "../utils/sample-data";
//   import { layout } from "../utils/types";

interface postJobProps {}

export const postJob: React.FC<postJobProps> = ({}) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const toast = useToast();
  // const [postJob] = usePostJobMutation();
  const [img, setImg] = useState(() => "");
  // const [uploadFile] = useFileUploadMutation();
  const [job, setJob] = useState<JobObj>(null);

  const router = useRouter()

  useEffect(() => {
    creatJob(job);
  }, [job]);

  function creatJob(data: JobObj) {
    async function apiData() {
      const response = await jwtAxios.post("/jobs", data);
      if (response.status === 201) {
        setJob(response.data);
      }
    }
    apiData();
  }

  const initialValues: JobObj = {
    id: "",
    title: "",
    description: "",
    department: "",
    salary: 0,
    userId: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, {setSubmitting}) => {
        console.log(values);
        creatJob(values);
        toast({
          title: "Job post Successful.",
          position: "top-right",
          description: "You successfully post a job.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setSubmitting(false)
        router.push('/jobs');
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Box w="100%" overflow="auto">
          <Flex
            bg={useColorModeValue("white", "gray.700")}
            py={4}
            px={{ base: "4", md: "10" }}
            shadow="base"
            rounded={{ sm: "lg" }}
            flexDir="column"
          >
            <Flex mb="2%" flexDirection="column">
              <Text fontSize="1.5em" fontWeight="semibold" mb={2}>
                Post A Job
              </Text>
              <Divider />
            </Flex>

            <Form>
              <Flex fontWeight="bold">
                <InputField name="login" placeholder="" label="" hidden />
              </Flex>

              <VStack spacing={4} align="flex-start">
                <InputField name="title" label="Title" />
                <HStack w="100%">
                  <InputField name="category" label="Department" select />
                  <InputField name="salary" label="Salary" type="text" />
                </HStack>
                <InputField name="description" label="Description" textarea />

                <Dropzone
                  onDrop={async ([file]) => {
                    // const { data } = await uploadFile({
                    //   variables: { imgUrl: file },
                    // });
                    // setFieldValue("imgUrl", data.fileUpload.url);
                    // setImg((img) => (img = data.fileUpload.url));
                    // setName((name) => (name = file.name));
                    // console.log(file);
                    // console.log(data.fileUpload.url);
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <Box
                      border="1px dashed gray"
                      h="100px"
                      w="100%"
                      {...getRootProps()}
                    >
                      <input {...getInputProps()} name="imgUrl" />
                      <VStack>
                        <Icon as={FiUploadCloud} fontSize="2em" />
                        <Text>Drag and drop or Click to Add Image</Text>
                      </VStack>
                    </Box>
                  )}
                </Dropzone>

                <Button
                  bg="#00b074"
                  color="white"
                  size="lg"
                  _hover={{ bg: "#00b074" }}
                  type="submit"
                  isLoading={isSubmitting}
                >
                  Post Job
                </Button>
              </VStack>
            </Form>
          </Flex>
        </Box>
      )}
    </Formik>
  );
};

export default postJob;
