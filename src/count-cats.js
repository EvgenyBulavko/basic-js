module.exports = function countCats( matrix ) {
  //throw 'Not implemented';
  // remove line with error and write your code here

let s = 0;

for(let i=0;i<matrix.length;i++)
{
  for (let j=0;j<matrix[i].length;j++)
  {
    if(matrix[i][j] === "^^") s++;

  }
}
return s;
};
