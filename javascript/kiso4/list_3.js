const colors = [
  {"color": "red"},
  {"color": "green"},
  {"color": "blue"}
];

const indexOfBlue = colors.findIndex((obj) => {
  return obj.color === "blue";
});
console.log(indexOfBlue);
console.log(colors[indexOfBlue]);
