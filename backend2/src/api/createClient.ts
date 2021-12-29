import { formatJSONResponse } from "../libs/apiGateway";
import { createClient } from "../libs/complyCube";

export const handler = async (event) => {
  console.log("createClient", event);
  console.log(process.env);
  const { firstName, lastName, email } = JSON.parse(event.body);

  const result = await createClient({
    firstName,
    lastName,
    email,
  });

  return formatJSONResponse({
    result,
  });
};
