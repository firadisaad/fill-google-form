// Import the express in typescript file
import express from "express";
import { FillGoogleForms } from "./src/classes/fill-google-form";

// Initialize the express engine
const app: express.Application = express();

// Take a port 3000 for running server.
const port: number = 3000;

// Handling '/' Request
app.get("/fill", async (_req, _res) => {
  const content = await FillGoogleForms.scrapeWebsite("https://docs.google.com/forms"); // insert the link pof google form here 
  _res.send(content);
});

// Server setup
app.listen(port, () => {
  console.log(`TypeScript with Express
         http://localhost:${port}/`);
});
