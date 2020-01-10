module.exports = function findElement(arr, propName, propValue) {
  // console.log(arr);
  for (var i = 0; i < arr.length; i++)
    if (arr[i][propName] == propValue)
      return arr[i];

  // will return undefined if not found
}
