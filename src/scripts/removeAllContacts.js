import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";

export const removeAllContacts = async () => {
  const data = await fs.readFile(PATH_DB, "utf8");
  let parseData = JSON.parse(data);
  parseData = [];
  await fs.writeFile(PATH_DB, JSON.stringify(parseData));
};

await removeAllContacts();
