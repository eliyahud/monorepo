import { formatJSONResponse, formatWeb3Response } from "../libs/apiGateway";
import { createClient } from "../libs/complyCube";
import { uploadToIPFS } from "../libs/ipfs";

export const handler = async (event) => {
  const { firstName, lastName, email, address } = event.queryStringParameters;

  const clientId = await createClient({
    firstName,
    lastName,
    email,
    address,
  });

  const result = await uploadToIPFS(clientId);

  return formatJSONResponse(formatWeb3Response(result));
};
