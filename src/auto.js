import {
    mutableStdout,
    terminal,
    initTerminal
} from "./utils.js";

import stringLength from "string-length";

initTerminal();
mutableStdout.muted = true;

const configs = {
    autoKey: "tab",
    confirmKey: "return",
    marker: ">"
}

// Props
const blockedKeys = new Set(
    [
        "f1", "f2", "f3", "f4", "f5", 
        "f6", "f7", "f8", "f9", "f10", 
        "f11", "f12"
    ]
);

let cPos = 0;
let input = "";
let pCount = 0;

function render(input) {
    process.stdout.write("\x1B[?25l");
    process.stdout.clearLine(0);
    process.stdout.write(`\r${configs.marker} ${input}`);
    process.stdout.cursorTo(stringLength(configs.marker) + 1 + cPos);
    process.stdout.write("\x1B[?25h");
}

// Use Cases

// Minimalist Mode
const model = new Array(5);

function auto() {
    render(input);

    terminal.input.on("keypress", function handler(str, key) {
        if (blockedKeys.has(key.name)) {
            return;
        }

        if (key.name === configs.autoKey) {
            // TODO
        } else if (key.ctrl) {
            process.exit();
        } else if (key.name === "left") {
            if (cPos > 0) {
                cPos--;
            }
        } else if (key.name === "right") {
            if (cPos < input.length) {
                cPos++;
            }
        } else if (key.name === "home") {
            cPos = 0;
        } else if (key.name === "end") {
            cPos = input.length;
        } else if (key.name === "backspace") {
            if (cPos > 0) {
                input = input.slice(0, cPos - 1) + input.slice(cPos);
                cPos--;
            }
        } else if (key.name === configs.confirmKey) {
            terminal.input.removeListener("keypress", handler);
            pCount++;

            if (pCount < model.length) {
                auto();
            } else {
                process.exit();
            }
        } else {
            input = input.slice(0, cPos) + str + input.slice(cPos);
            cPos++;
        }

        render(input);
    });
}

auto();
