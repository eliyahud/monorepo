import { ComplyCube } from "@complycube/api";
import config from "../config";

const complycubeClient = new ComplyCube({
  apiKey: config.complyCubeApiKey,
});

interface CreateClientParams {
  email: string;
  firstName: string;
  lastName: string;
}

export const createClient = async ({
  email,
  firstName,
  lastName,
}: CreateClientParams) => {
  console.log("createClient", { email, firstName, lastName });
  const result = await complycubeClient.client.create({
    type: "person",
    email,
    personDetails: {
      firstName,
      lastName,
    },
  });
  console.log("createClient finished", { email, firstName, lastName, result });
  return result;
};
