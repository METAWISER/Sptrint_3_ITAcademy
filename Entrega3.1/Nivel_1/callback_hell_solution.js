const { readdir, readFile, writeFile } = require("fs").promises;
const { join } = require("path");
const inbox = join(__dirname, "./");
const outbox = join(__dirname, "./");

const reverseText = (str) => str.split("").reverse().join("");

//Leo y invierto los datos del archivo inbox hacia el archivo outbox
const readAndReverseFile = async (inFile,outFile) => {
  try {
    const data = await readFile(join(inbox, inFile), "utf8");
    const reversedData = reverseText(data);
    await writeFile(join(outbox, outFile), reversedData);
    console.log(`${inFile} was successfully saved in the outbox!`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

readAndReverseFile("inbox.txt", "outbox.txt")

