import { PATH_DB } from "../constants/contacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import fs from "fs/promises";

const generateContacts = async (number) => {
  let data = await fs.readFile(PATH_DB, "utf8");
  const parseData = JSON.parse(data);
  for (let i = 0; i < number; i++) {
    parseData.push(createFakeContact());
  }

  await fs.writeFile(PATH_DB, JSON.stringify(parseData));
};

await generateContacts(5);
