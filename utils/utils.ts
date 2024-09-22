import { randomBytes } from "crypto";

const generateRadomCode = (length = 10) => {
  return randomBytes(length)
    .toString("base64")
    .replace(/\+/g, "0")
    .replace(/\//g, "0")
    .substring(0, length);
};

export default generateRadomCode;
