import config from "../config";
const { create } = require("ipfs-http-client");

const ipfshttpClient = create(config.ipfsUrl);

const encodeData = (data: any): string =>
  JSON.stringify({ data, version: "v1" });

export const uploadToIPFS = async (data) => {
  console.log("uploadToIPFS", { data });
  const file = encodeData(data);
  const cid = await ipfshttpClient.add(file);
  console.log("uploadToIPFS done", { cid });
  return cid.path;
};
