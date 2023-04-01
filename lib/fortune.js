const fortunes = [
  "hello world",
  "my practice",
  "Node js and",
  "express",
  "with mongodb",
];

exports.getFortune = () => {
  const idx = Math.floor(Math.random() * fortunes.length);
  return fortuneCookies[idx];
};
