import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";
import * as Joi from "joi";
import { formatJSONResponse, formatWeb3Response } from "../libs/apiGateway";
import { createClient } from "../libs/complyCube";
import { uploadToIPFS } from "../libs/ipfs";
import { joiMiddleware } from "../libs/validator";

const HEX_REGEX = /^0x[0-9a-fA-F]+$/;

const schema = Joi.object({
  body: Joi.any(),
  queryStringParameters: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    address: Joi.string().regex(HEX_REGEX),
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

export const handler = middy(createClientHandler).use(jsonBodyParser()).use(
  joiMiddleware({
    schema,
  })
);
