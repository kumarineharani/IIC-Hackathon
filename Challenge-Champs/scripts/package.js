import archiver from 'archiver';
import fs from 'fs';
import path from 'path';

// Create output directory if it doesn't exist
const outputDir = path.join(process.cwd(), 'dist');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Create a file to stream archive data to
const output = fs.createWriteStream(path.join(outputDir, 'social-media-blocker.zip'));
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level
});

// Listen for all archive data to be written
output.on('close', () => {
  console.log(`Extension packaged successfully! (${archive.pointer()} total bytes)`);
  console.log('The ZIP file is located in the dist/social-media-blocker.zip');
});

// Good practice to catch warnings (ie stat failures and other non-blocking errors)
archive.on('warning', (err) => {
  if (err.code === 'ENOENT') {
    console.warn('Warning:', err);
  } else {
    throw err;
  }
});

// Good practice to catch this error explicitly
archive.on('error', (err) => {
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Add the files
const files = [
  'manifest.json',
  'background.js',
  'popup.html',
  'popup.css',
  'popup.js'
];

files.forEach(file => {
  archive.file(file, { name: file });
});

// Add the icons directory
archive.directory('icons/', 'icons');

// Finalize the archive (ie we are done appending files but streams have to finish yet)
archive.finalize();