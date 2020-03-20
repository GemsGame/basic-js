module.exports = function transform(arr) {
if(Array.isArray(arr) === false) { throw new Error;}
if(arr.length === 0) {return arr;}

let array = arr;

for(let index = 0; index < array.length; index++) {

if(array[index] === '--discard-next') {
    if(array.length - 1 != index) {
    array.splice(index + 1, 1);
    }
    array.splice(index, 1);
}
if(array[index] === '--discard-prev') {
    if(index != 0) {
    array.splice(index - 1, 1);
    }
    array.splice(index, 1);
}
if(array[index] === '--double-next') {
    if(array.length - 1 != index) {
    array.splice(index + 1, 0, item[index + 1]);
    array.splice(index, 1);
    }
}
if(array[index] === '--double-prev') {
    if(index != 0) {
    array.splice(index - 1, 0, item[index - 1]);

    }
    array.splice(index, 1);
}

}

return array;

};
