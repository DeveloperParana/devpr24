import { get } from "node:https";
import { resolve } from "node:path";
import { writeFileSync } from "node:fs";

get("https://apoia.se/api/v1/users/devpr", (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    try {
      writeFileSync(
        resolve("public", "progress.json"),
        JSON.stringify(JSON.parse(data), null, 2),
        "utf-8"
      );
    } catch (e) {
      console.error("Erro ao processar o JSON", e);
    }
  });
}).on("error", (err) => {
  console.error("Erro ao fazer a requisição:", err.message);
});
