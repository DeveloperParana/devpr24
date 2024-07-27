import { createWriter } from "./utils";

const fetchAPI = async () => {
  const url = "https://apoia.se/api/v1/users/devpr";
  return (await fetch(url)).json();
};

const writeFile = createWriter("dist", "progress.json");

const request = async () => {
  try {
    await fetchAPI().then(writeFile);
  } catch (e) {
    throw e;
  }
};

(() => request())();
