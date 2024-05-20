import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";

export const thanos = async () => {
  const data = await fs.readFile(PATH_DB, "utf8");
  const parseData = JSON.parse(data);
  const filterData = parseData.filter(() => Math.random() > 0.5);
  await fs.writeFile(PATH_DB, JSON.stringify(filterData));
};

await thanos();
