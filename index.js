const app = require("./app");

const logger = require("./utils/logger");
const config = require("./utils/config");

require("dotenv").config();

// eslint-disable-next-line no-unused-vars

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
