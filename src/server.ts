import app from "./app";
import config from "./app/config";

async function main() {
  app.listen(config.port, () => {
    console.log(`Bike Service Server running on port ${config.port}`);
  });
}

main();
