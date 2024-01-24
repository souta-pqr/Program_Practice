import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const dataFile = path.join(fileDir, "../uhyo.txt");

async function countOccurrences() {
    try {
        const data = await Promise.race([
            readFile(dataFile, {encoding: "utf-8"}),
            new Promise(resolve => setTimeout(() => resolve(''), 1))
        ]) as string;

        let count = 0;
        let currentIndex = 0;
        while(true) {
            const nextIndex = data.indexOf("uhyo", currentIndex);
            if (nextIndex >= 0) {
                count++;
                currentIndex = nextIndex + 1;
            } else {
                break;
            }
        }
        console.log(count);
    } catch(err) {
        console.error(err);
        process.exit(1);
    }
}

countOccurrences();
