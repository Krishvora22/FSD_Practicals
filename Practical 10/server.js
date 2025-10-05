import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 4000;

const logFilePath = path.join(process.cwd(), "logs", "error.log");

app.use(express.static("public"));

app.get("/", (req, res) => {
  fs.readFile(logFilePath, "utf-8", (err, data) => {
    if (err) {
      res.status(500).send(`
        <h1>Log Viewer</h1>
        <p style="color:red;">⚠️ Unable to read log file. Check if <code>logs/error.log</code> exists.</p>
      `);
    } else {
      res.send(`
        <html>
          <head>
            <title>Log Viewer</title>
            <link rel="stylesheet" href="/style.css">
          </head>
          <body>
            <h1>Server Logs</h1>
            <pre>${data}</pre>
          </body>
        </html>
      `);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Log viewer running at http://localhost:${PORT}`);
});