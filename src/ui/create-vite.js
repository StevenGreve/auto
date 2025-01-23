import chalk from "chalk";
import { fallbackSymbols } from "figures";

console.log("\n> npx \n> create-vite my-app-01 react-ts\n");
console.log(chalk.cyan("?") + " Select a framework: " + chalk.grey("» - Use arrow-keys. Return to submit."));
console.log(chalk.yellow("    Vanilla"));
console.log(chalk.green("    Vue"));
console.log(chalk.cyan("    React"));
console.log(chalk.magenta("    Preact"));
console.log(chalk.redBright("    Lit"));
console.log(chalk.red("    Svelte"));
console.log(chalk.cyan(">") + "   " + chalk.blue.underline("Solid"));
console.log(chalk.blueBright("    Qwik"));
console.log(chalk.red("    Angular"));
console.log("    Others");

setTimeout(() => {
    console.clear();
    console.log("\n> npx \n> create-vite my-app-01 react-ts\n");
    console.log(chalk.green(fallbackSymbols.tick) + " Select a framework: " + chalk.grey("»") + chalk.blue(" Solid"));
    console.log(chalk.cyan("?") + " Select a variant: " + chalk.grey(" » - Use arrow-keys. Return to submit."));
    console.log(chalk.cyan(">") + "   " + chalk.blue.underline("TypeScript"));
    console.log(chalk.yellow("    JavaScript") + "\n");
}, 5000);

setTimeout(() => {
    console.clear();
    console.log("\n> npx \n> create-vite my-app-01 react-ts\n");
    console.log(chalk.green(fallbackSymbols.tick) + " Select a framework: " + chalk.grey("»") + chalk.blue(" Solid"));
    console.log(chalk.green(fallbackSymbols.tick) + " Select a variant: " + chalk.grey("»") + chalk.blue(" TypeScript") + "\n");
    console.log("Scaffolding project in C:\\Users\\steven.greve\\Desktop\\my-app-01...\n");
    console.log("Done. Now run:\n");
    console.log("  cd my-app-01");
    console.log("  npm install");
    console.log("  npm run dev\n");
}, 10000);
