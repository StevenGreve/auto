import { Writable } from "node:stream";
import { createInterface, emitKeypressEvents } from "node:readline";

export const mutableStdout = new Writable({
    write: function(chunk, encoding, callback) {
        if (!this.muted) {
            process.stdout.write(chunk, encoding);
        }
        callback();
    }
});

export const terminal = createInterface({
    input: process.stdin,
    output: mutableStdout,
    terminal: true
});

export function initTerminal() {
    emitKeypressEvents(process.stdin);

    if (process.stdin.isTTY) {
        process.stdin.setRawMode(true);
    }

    process.stdin.resume();
}
