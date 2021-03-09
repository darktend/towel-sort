
// You should implement your task here.

module.exports = function towelSort (matrix) {

 if(!matrix || matrix.length===0) return []
 let newArr=[];
 let revArr=(item,index)=>{
     return index%2===0?[...item]:[...item.reverse()]
 }
 matrix.forEach((item,index) => {
     newArr=[...newArr,...revArr(item,index)]
 });
 return newArr
}