const fs = require("fs");

const moveFile = (dir, file) => {
  console.log(`Moving: src/library/${dir}/${file} to lib/${dir}/${file}`);
  fs.writeFileSync(
    `lib/${dir}/${file}`,
    fs.readFileSync(`src/library/${dir}/${file}`)
  );
};

fs.readdirSync("src/library").forEach((item) => {
  fs.lstatSync(`src/library/${item}`).isDirectory() &&
    fs.readdirSync(`src/library/${item}`).forEach((file) => {
      file.includes(".css") && moveFile(item, file);
    });
});
