import {
    mutableStdout,
    terminal
} from "./utils.js";

process.stdin.setRawMode();
process.stdin.resume();
mutableStdout.muted = true;

terminal.input.on("keypress", function handler(str, key) {
    console.log(key, str);
});
