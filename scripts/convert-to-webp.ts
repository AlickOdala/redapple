import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

// Base input folder containing all image folders
const imagesRoot = path.join("src", "assets", "images");
// Base output folder where a parallel tree of webp images will be created
const outputRoot = path.join("src", "assets", "images_webp");

// Folders (direct children of imagesRoot) to start converting.
// Each folder will be walked recursively; nested subfolders will be preserved in the output tree.
const foldersToConvert = ["posters", "flyer"];

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".tif", ".tiff", ".webp", ".gif"]);

async function convertFile(inputPath: string, outputPath: string) {
  await sharp(inputPath)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outputPath);
}

async function convertDirectory(inputDir: string, outputDir: string) {
  if (!fs.existsSync(inputDir)) return;

  const entries = fs.readdirSync(inputDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(inputDir, entry.name);
    const destPath = path.join(outputDir, entry.name);

    if (entry.isDirectory()) {
      await convertDirectory(srcPath, destPath);
      continue;
    }

    if (!entry.isFile()) continue;

    const ext = path.extname(entry.name).toLowerCase();
    if (!imageExtensions.has(ext)) continue;

    // ensure output folder exists
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    const outputFilePath = path.join(outputDir, `${path.parse(entry.name).name}.webp`);
    try {
      await convertFile(srcPath, outputFilePath);
      console.log(`Converted: ${srcPath} -> ${outputFilePath}`);
    } catch (err) {
      console.error(`Failed to convert ${srcPath}:`, err);
    }
  }
}

async function convertAll() {
  for (const folder of foldersToConvert) {
    const inputFolder = path.join(imagesRoot, folder);
    const outputFolder = path.join(outputRoot, folder);
    await convertDirectory(inputFolder, outputFolder);
  }
  console.log("All folders converted");
}

convertAll().catch((err) => {
  console.error(err);
  process.exit(1);
});

/*
const inputFolder = "src/assets/posters";
const outputFolder = "src/assets/posters_webp";

if (!fs.existsSync(outputFolder)) {
  (fs.mkdirSync(outputFolder), { recursive: true });
}

console.log("inputFolder", inputFolder);
console.log("exist", fs.existsSync(inputFolder));

async function convertImages() {
  const files = fs.readdirSync(inputFolder);

  for (const file of files) {
    const inputPath = path.join(inputFolder, file);

    if (!fs.statSync(inputPath).isFile()) continue;

    const outputPath = path.join(outputFolder, `${path.parse(file).name}.webp`);
    await sharp(inputPath)
      .resize({
        width: 1200,
        withoutEnlargement: true,
      })
      .webp({
        quality: 80,
      })
      .toFile(outputPath);
    console.log("concerted file", `${file}`);
  }
}

convertImages();
*/
