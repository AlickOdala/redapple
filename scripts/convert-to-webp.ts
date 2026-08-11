import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";
import existsSync from "node:fs";

const ASSETS_BASE_DIR = path.join(process.cwd(), "src", "assets", "images");
const SUPPORTED_EXTENTIONS = [".jpg", ".jpeg", ".png", ".avif"];
const WEBP_QAULITY = 80;
const convertedFiles: string[] = [];
const skippedFiles: string[] = [];

//===========================================
//help checking
//===========================================

const createdFolder = new Set<string>();
//check folder and make it
const ensureFolderExists = async (folderPath: string) => {
  if (createdFolder.has(folderPath)) return;
  await fs.mkdir(folderPath, { recursive: true });
  createdFolder.add(folderPath);
};

//convert file
const convertFile = async (inputPath: string, outputPath: string) => {
  const fileName = path.basename(inputPath);
  console.log("Conerting:", fileName);

  try {
    await sharp(inputPath, { failOnError: false, limitInputPixels: false })
      .resize(4000, 4000, { fit:"inside", withoutEnlargement: true }) // changes; add 4000, 4000, fit:"inside". alt fit:"inside" -> width:1200
      .webp({ quality: WEBP_QAULITY })
      .toFile(outputPath);

    console.error(fileName, "DONE!");
    return true;
  } catch (err) {
    console.error(`Failed: ${path.basename(inputPath)}`);
    return false;
  }
};

//check new files and convert
const shouldConvert = async ({
  sourcePath,
  targetPath,
}: {
  sourcePath: string;
  targetPath: string;
}) => {
  try {
    const [sourceStat, targetStat] = await Promise.all([
      fs.stat(sourcePath),
      fs.stat(targetPath).catch(() => null),
    ]);
  } catch {
    return true;
  }
};

//================================================================
//main converter
//=================================================================

const convertDirectory = async (inputPath: string) => {
  let totalConverted = 0;

  const categortEntries = await fs.readdir(inputPath, { withFileTypes: true }); // category start

  for (const categoryEntry of categortEntries) {
    if (!categoryEntry.isDirectory()) continue;

    const categoryName = categoryEntry.name;
    const categoryPath = path.join(inputPath, categoryName);
    console.log(`Category: ${categoryName}`);
    //category done

    const serviceEntries = await fs.readdir(categoryPath, {
      withFileTypes: true,
    }); // services start

    for (const serviceEntry of serviceEntries) {
      if (!serviceEntry.isDirectory()) continue;

      const serviceName = serviceEntry.name;
      const servicePath = path.join(categoryPath, serviceName);
      const wedpPath = path.join(servicePath, "webp");
      await ensureFolderExists(wedpPath);
      console.log(`Service: ${serviceName}`);
      //service done

      const fileEntries = await fs.readdir(servicePath, {
        withFileTypes: true,
      }); // file start

      for (const fileEntry of fileEntries) {
        if (fileEntry.name === "webp") {
          //console.log(`   Skipping Folder : ${fileEntry.name}`)
          continue;
        }
        const fileName = fileEntry.name;
        //file extentions
        const fileExt = path.extname(fileName).toLowerCase();
        //console.log(` Checking: ${fileName}, ext=${fileExt}`)

        //skip unknow extentios
        if (!SUPPORTED_EXTENTIONS.includes(fileExt)) {
          //console.log(`   skipping bad ext: ${fileName}`)
          continue;
        }

        const sourcePath = path.join(servicePath, fileName);
        const targetName = `${path.parse(fileName).name}.webp`;
        const targetPath = path.join(wedpPath, targetName);

        if (await shouldConvert(sourcePath, targetPath)) {
          console.log(`Converting: ${fileName}`);
          const ok = await convertFile(sourcePath, targetPath);
          if (ok) {
            totalConverted++;
            convertedFiles.push(
              `${fileName} in ${categoryName}:${serviceName}:`,
            );
          } else {
            skippedFiles.push(`${categoryName}:${serviceName}:${fileName}`);
            console.log(`Skipped: ${fileName}: Already Converted`);
          }
        }
      }
    }
  }
  console.log(`\n FILE CONVERTED SUMMARY`);
  console.log(`\n   Done! Converted ${totalConverted} images`);
  console.log(`____CONVERSION DONE!`);
  console.log(`${"=".repeat(50)}`);
  console.log(`Converted : ${convertedFiles.length}`);
  console.log(`Skipped : ${skippedFiles.length}\n`);

  if (convertedFiles.length > 0) {
    console.log(`|| Converted Files`);
    convertedFiles.forEach((m, i) => console.log(`   ${i}.${m}`));
  }

  if (skippedFiles.length > 0) {
    console.log(`|| Skipped/leady Files`);
    skippedFiles.forEach((m, i) => console.log(`   ${i}.${m}`));
  }
  console.log(`${"=".repeat(50)}\n`);
};

convertDirectory(ASSETS_BASE_DIR).catch(console.error);



interface Prop {
  folderPath: string;
}
class ImageToWebp {
  constructor({ folderPath }: Prop) {}

  InputPath(inputPath?: string) {
    if (!fs.existsSync(inputPath)) return;

    const entries = fs.readdirSync(inputPath, { withFileTypes: true });

    let path: String = "";

    for (const entry of entries) {
      const categoryName = entry.name;
      const categoryPath = path.join(inputPath, categoryName);
      // await console.log("entry", categoryPath);

      const categories = fs.readdirSync(categoryPath, {
        withFileTypes: true,
      });

      for (const service of categories) {
        const serviceName = service.name;
        const servicePath = path.join(categoryPath, serviceName);
        //console.log("serviceName", servicePath);

        const files = fs.readdirSync(servicePath, { withFileTypes: true });

        for (const file of files) {
          const fileName = file.name;
          const fileExt = path.extname(fileName).toLowerCase();

          if (!SUPPORTED_EXTENTIONS.includes(fileExt)) continue;

          const fileSrc = path.join(servicePath, fileName);

          return (path = fileSrc);
        }
      }
    }

    return path;
  }

  OutPut(outPath: string) {}
}
