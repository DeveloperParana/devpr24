import { allSettled, createWriter, getToken } from "./utils";

const users = [
  "guiseek",
  "ByIvo",
  "endersonmenezes",
  "elinatorresn",
  "jtheodsn",
  "GHamerschimidt",
  "anadevti",
  "GeovaneNorbert",
  "causticsudo",
  "jgbz",
  "anakubitz",
  "profburnes",
  "o-laureano",
  "estevanbs"
];

const fetchAPI = async (username: string) => {
  const headers = {
    Authorization: `Bearer ${getToken()}`,
    "X-GitHub-Api-Version": "2022-11-28",
  };
  const url = `https://api.github.com/users/${username}`;
  return await (await fetch(url, { headers })).json();
};

const writeFile = createWriter("dist", "team.json");

const request = async () => {
  try {
    await allSettled(users.map(fetchAPI)).then(writeFile);
  } catch (e) {
    console.error(e);
  }
};

(() => request())();
