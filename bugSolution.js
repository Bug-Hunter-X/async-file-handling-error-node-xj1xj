```javascript
const fs = require('fs');

async function processFile(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    // Process the data
    console.log(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error(`File not found: ${filePath}`);
    } else {
      console.error(`An error occurred: ${err}`);
    }
  }
}

processFile('./myFile.txt');
```