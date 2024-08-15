const readFile = () => {
  const res = fs.readFileSync("~/.zshrc", "utf-8");
  console.log(res.toString());
};

readFile();
