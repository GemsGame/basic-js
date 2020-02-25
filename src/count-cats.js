module.exports = function countCats(matrix) {
let counter = 0;
matrix.forEach(element => {
  element.filter(el => el === "^^"? counter +=1:null);
});
return counter;
};
