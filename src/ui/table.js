import terminal from "terminal-kit";

function drawTable() {
    terminal.terminal.table([
        ["Header #1", "Header #2", "Header #3"],
        ["Row #1", "A much bigger cell, a much bigger cell, a much bigger cell...", "Cell"],
        ["Row #2", "Cell", "A medium cell"],
        ["Row #3", "Cell", "Cell"],
        ["Row #4", "Cell\nWith\nNew\nLines", "^YThis ^Mis ^Ca ^Rcell ^Gwith ^Bmarkup^R!"],
    ], {
        contentHasMarkup: true,
        borderChars: "lightRounded",
        borderAttr: { color: "blue" },
        firstCellTextAttr: { bgColor: "blue" },
        firstRowTextAttr: { bgColor: "yellow" },
        firstColumnTextAttr: { bgColor: "red" },
        width: 60,
        fit: true,
    });
}

drawTable();
 