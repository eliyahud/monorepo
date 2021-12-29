import { formatJSONResponse } from "../libs/apiGateway";

export const handler = async (event) => {
  console.log(event);
  return formatJSONResponse({
    abc: 123,
  });
};
