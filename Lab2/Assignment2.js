const fs = require('fs');

// File names
const file1 = 'file1.txt';
const file2 = 'file2.txt';
const mergedFile = 'merged.txt';

// Read file1
fs.readFile(file1, 'utf8', (err1, data1) => {
  if (err1) {
    console.error(`Error reading ${file1}:`, err1);
    return;
  }

  // Read file2
  fs.readFile(file2, 'utf8', (err2, data2) => {
    if (err2) {
      console.error(`Error reading ${file2}:`, err2);
      return;
    }

    // Merge the contents
    const mergedContent = data1 + '\n' + data2;

    // Write to merged.txt
    fs.writeFile(mergedFile, mergedContent, (err) => {
      if (err) {
        console.error('Error writing merged.txt:', err);
        return;
      }
      console.log('Files merged successfully into merged.txt');
    });
  });
});