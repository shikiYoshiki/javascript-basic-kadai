const now = new Date();

let nowFormated = now.toLocaleDateString(undefined, {
  dateStyle: "long",
});
console.log(nowFormated);
