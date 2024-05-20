import { PATH_DB } from "../constants/contacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import fs from "fs/promises";

export const addOneContact = async () => {
  const data = await fs.readFile(PATH_DB, "utf8");
  const parseData = JSON.parse(data);
  parseData.push(createFakeContact());
  await fs.writeFile(PATH_DB, JSON.stringify(parseData));
};

await addOneContact();
