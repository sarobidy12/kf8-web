import fs from "fs-extra";
import path from "path";

export const onPostBuild = () => {
  console.log("Copying locales");
  fs.copySync(
    path.join(__dirname, "/src/locales"),
    path.join(__dirname, "/public/locales")
  );
};

// const fs = require("fs-extra")
// const path = require("path")

// exports.onPostBuild = () => {
//   console.log("Copying locales")
//   fs.copySync(
//     path.join(__dirname, "/src/locales"),
//     path.join(__dirname, "/public/locales")
//   )
// }
