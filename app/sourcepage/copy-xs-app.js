const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'xs-app.json');
const dest = path.join(__dirname, 'dist', 'xs-app.json');  
fs.copyFile(src, dest, (err) => {
  if (err) {
    console.error('❌ Failed to copy xs-app.json:', err);
  } else {
    console.log('✅ xs-app.json copied to dist/webapp/');
  }
});