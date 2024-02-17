const fs = require('fs');
const path = require('path');

// Function to create directory if it does not exist
const createDirectory = (directory) => {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
    }
};

// Function to move file to target directory
const moveFile = (source, target) => {
    fs.rename(source, target, (err) => {
        if (err) {
            console.error(`Error moving file ${source} to ${target}: ${err.message}`);
        } else {
            console.log(`Moved file ${source} to ${target}`);
        }
    });
};

// Function to organize files by extension
const organizeFiles = (sourceDir) => {
    fs.readdir(sourceDir, (err, files) => {
        if (err) {
            console.error(`Error reading directory ${sourceDir}: ${err.message}`);
            return;
        }

        files.forEach((file) => {
            const sourceFile = path.join(sourceDir, file);
            if (fs.lstatSync(sourceFile).isDirectory()) {
                // Skip directories
                return;
            }

            const ext = path.extname(file).toLowerCase();
            // Exclude specific file extensions
            if (ext === '.js' || ext === '.json') {
                return;
            }

            const targetDir = path.join(sourceDir, ext.substring(1)); // Remove leading dot
            createDirectory(targetDir);

            const targetFile = path.join(targetDir, file);
            moveFile(sourceFile, targetFile);
        });
    });
};

// Example usage: organize files in current directory
const sourceDirectory = '.'; // Change this to the directory containing files to be organized
organizeFiles(sourceDirectory);
