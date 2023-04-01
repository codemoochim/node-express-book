const fortuneCookies = [
  "hello world",
  "my practice",
  "Node js and",
  "express",
  "with mongodb",
];

exports.getFortune = () => {
  const idx = Math.floor(Math.random() * fortuneCookies.length);
  return fortuneCookies[idx];
};
