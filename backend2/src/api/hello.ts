import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";
import httpErrorHandler from "@middy/http-error-handler";

import { formatJSONResponse } from "../libs/apiGateway";

export const hello = async (event) => {
  console.log(event);
  return formatJSONResponse({
    abc: 123,
  });
};

export const handler = middy(hello)
  .use(jsonBodyParser())
  .use(httpErrorHandler());
