const fs = require("fs");
const archiver = require("archiver");
const output = fs.createWriteStream("dist/sourcepage.zip");
const archive = archiver("zip");

output.on("close", () => {
  console.log("✅ sourcepage.zip created:", archive.pointer(), "bytes");
});

archive.on("error", err => { throw err; });

archive.pipe(output);
archive.directory("dist/", false);  
archive.finalize();
