var fs = require("fs");
var appSettingsContent = process.argv[2];

var random = Math.random();

console.log("----------------------------------------------------");
console.log("Random Number:");
console.log(random);
console.log("----------------------------------------------------");
console.log("AppSetting Content");
console.log(appSettingsContent);
console.log("----------------------------------------------------");

var index = fs.readFileSync("build/index.html", "utf8");
console.log("Current index.html");
console.log(index);

console.log("----------------------------------------------------");

var newIndex = index.replace(
  "app-settings.js",
  "app-settings" + random + ".js"
);

console.log("New index.html");
console.log(newIndex);

console.log("----------------------------------------------------");
console.log("Writing new index.html");
fs.writeFileSync("build/index.html", newIndex, "utf8");

console.log("Writing new app-settings" + random + ".js");
fs.writeFileSync(
  "build/app-settings" + random + ".js",
  appSettingsContent,
  "utf8"
);

console.log("Deleting app-settings.js");

if (fs.existsSync("build/app-settings.js"))
  fs.unlinkSync("build/app-settings.js");

console.log("Complete");
console.log("----------------------------------------------------");
