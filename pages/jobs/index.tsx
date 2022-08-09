import { VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { JobListItem } from "../../components/JobListItem";
import { JobObj, jwtAxios } from "../../context/types";

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
  const [state, setState] = useState<JobObj[]>([]);
  useEffect(() => {
    async function apiData() {
      const { data } = await jwtAxios.get("/jobs");
      setState(data);
    }
    apiData();
  }, []);

  console.log("Jobs ", state);
  return (
    <>
      <VStack gap={4}>
        {state.map(s => (
          <JobListItem
            title={s.title}
            department={s.department}
            description={s.description}
          />
        ))}
      </VStack>
    </>
  );
};

export default index;
