import { ComplyCube } from "@complycube/api";
import config from "../config";

const complycubeClient = new ComplyCube({
  apiKey: config.complyCubeApiKey,
});

interface CreateClientParams {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
}

export const createClient = async ({
  email,
  firstName,
  lastName,
  address,
}: CreateClientParams): Promise<string> => {
  console.log("createClient", { email, firstName, lastName, address });
  const result = await complycubeClient.client.create({
    type: "person",
    email,
    externalId: address,
    personDetails: {
      firstName,
      lastName,
    },
  });
  console.log("createClient finished", result);
  return result.id;
};
