import chalk from "chalk";
import ora from "ora";

console.log(chalk.green("?") + chalk.bold(" Which stylesheet format would you like to use? (Use arrow keys)"));
console.log(chalk.cyan("> CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]"));
console.log("  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]");
console.log("  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]");
console.log("  Less            [ http://lesscss.org                                             ]");

setTimeout(() => {
    console.clear();
    console.log("\n" + chalk.green("?") + chalk.bold( " Which stylesheet format would you like to use?") + chalk.cyan(" Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]"));
    console.log(chalk.green("?") + chalk.bold(" Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? (y/N)"));   
}, 5000);

setTimeout(() => {
    console.clear();
    console.log("\n" + chalk.green("?") + chalk.bold( " Which stylesheet format would you like to use?") + chalk.cyan(" Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]"));
    console.log(chalk.green("?") + chalk.bold(" Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? (y/N)") + chalk.cyan(" yes"));
    console.log(chalk.green("CREATE") + " angular-project2/angular.json (3057 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/package.json (1294 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/README.md (1103 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/tsconfig.json (1045 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/.editorconfig (290 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/.gitignore (629 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/tsconfig.app.json (504 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/tsconfig.spec.json (449 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/server.ts (1786 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/.vscode/extensions.json (134 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/.vscode/launch.json (490 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/.vscode/tasks.json (980 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/src/main.ts (256 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/src/index.html (314 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/src/styles.scss (81 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/src/main.server.ts (271 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/src/app/app.component.html (20239 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/src/app/app.component.spec.ts (975 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/src/app/app.component.ts (326 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/src/app/app.component.scss (0 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/src/app/app.config.ts (413 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/src/app/app.routes.ts (80 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/src/app/app.config.server.ts (361 bytes)");
    console.log(chalk.green("CREATE") + " angular-project2/public/favicon.ico (15086 bytes)");
    const spinner = ora({ text: "Installing packages (npm)...", color: "cyan" }).start();
    setTimeout(() => {
        spinner.succeed("Packages installed successfully!");
        console.log("    Successfully initialized git.");
    }, 5000);
}, 10000);
