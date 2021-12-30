import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";
import httpErrorHandler from "@middy/http-error-handler";
import * as Joi from "joi";

import { formatJSONResponse, formatWeb3Response } from "../libs/apiGateway";
import { createClient } from "../libs/complyCube";
import { uploadToIPFS } from "../libs/ipfs";
import { joiMiddleware } from "../libs/validator";

const schema = Joi.object({
  body: Joi.any(),
  queryStringParameters: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    address: Joi.string().regex(/^0x[0-9a-fA-F]+$/),
  }).required(),
});

const createClientHandler = async (event) => {
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

export const handler = middy(createClientHandler)
  .use(jsonBodyParser())
  .use(httpErrorHandler())
  .use(
    joiMiddleware({
      schema,
    })
  );
