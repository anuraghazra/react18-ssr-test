// // server.tsx
import * as React from "react";
import express from "express";
import * as ReactDOMServer from "react-dom/server";
import { App } from "../client/src/App";
import { readFileSync } from "fs";
import path from "path";

const app = express();

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "static/manifest.json"));
  const meta = readFileSync(path.join(__dirname, "static/manifest.json"), {
    encoding: "utf-8",
  });
  const assets = JSON.parse(meta);
  const scripts = Object.keys(assets).map((key) => `static/${assets[key]}`);
  // @ts-ignore
  const { pipe, abort } = ReactDOMServer.renderToPipeableStream(<App />, {
    bootstrapScripts: scripts,
    onAllReady() {
      res.statusCode = 200;
      res.setHeader("Content-type", "text/html");
      pipe(res);
    },
    onShellError(x: any) {
      res.statusCode = 500;
      res.send(
        '<!doctype html><p>Loading...</p><script src="clientrender.js"></script>'
      );
    },
  });
});

app.use(express.static("./dist"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening at ${PORT}...`);
});
