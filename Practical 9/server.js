const express = require("express");
const app = express();
const homeRoutes = require("./routes/home");

app.use("/", homeRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
