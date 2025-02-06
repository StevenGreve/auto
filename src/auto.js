import {
    mutableStdout,
    terminal,
    initTerminal
} from "./utils.js";


initTerminal();
mutableStdout.muted = true;

const configs = {
    autoKey: "tab",
    confirmKey: "return"
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


function render(input) {

}

function auto() {
    terminal.input.on("keypress", function handler(str, key) {
        if (blockedKeys.has(key.name)) {
            return;
        }

        if (key.name === configs.autoKey) {
            // TODO
        } else if (key.ctrl) {
            process.exit();
        }
    });
}

auto();
