const colors = [
  {"color": "red"},
  {"color": "green"},
  {"color": "blue"}
];

const blueColor = colors.find((obj) => {
  return obj.color === "blue";
});
console.log(blueColor);

const whiteColor = colors.find((obj) => {
  return obj.color === "white";
});
console.log(whiteColor);
