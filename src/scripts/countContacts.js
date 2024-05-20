import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";

export const countContacts = async () => {
  const data = await fs.readFile(PATH_DB, "utf8");
  const parseData = JSON.parse(data);
  return parseData.length;
};

console.log(await countContacts());
