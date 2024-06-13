#!/usr/bin/env node

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Directory containing the images to process
const inputDir = path.join("images");
const outputDir = path.join("public");

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to process an image
async function processImage(filePath) {
  const fileName = path.basename(filePath);
  const outputFilePath = path.join(outputDir, `${fileName.split(".")[0]}.webp`);

  try {
    await sharp(filePath)
      .resize({ width: 1280, withoutEnlargement: true })
      .webp({ force: true })
      .toFile(outputFilePath);
    console.log(`Processed ${fileName}`);
  } catch (error) {
    console.error(`Error processing ${fileName}:`, error);
  }
}

// Read all files in the input directory
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error("Error reading input directory:", err);
    return;
  }

  // Process each file
  for (const file of files) {
    const filePath = path.join(inputDir, file);
    // Check if it's a file (and not a directory)
    fs.stat(filePath, (err, stats) => {
      if (err)
        return console.error(`Error reading file stats for ${file}:`, err);

      if (stats.isFile()) processImage(filePath);
    });
  }
});
