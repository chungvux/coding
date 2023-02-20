const redis = require('redis');
let count = 0;
(async () => {

  const client = redis.createClient();

  const subscriber = client.duplicate();

  await subscriber.connect();

  await subscriber.subscribe('article', (message) => {
    count++;
    console.log(count, message); // 'message'
  });
})();

// let obj = { a: 1 }
// function covertObjectToBinary(obj) {
//   let output = '',
//     input = JSON.stringify(obj) // convert the json to string.
//   // loop over the string and convert each charater to binary string.
//   for (i = 0; i < input.length; i++) {
//     output += input[i].charCodeAt(0).toString(2) + " ";
//   }
//   return output.trimEnd();
// }

// function convertBinaryToObject(str) {
//   var newBin = str.split(" ");
//   var binCode = [];
//   for (i = 0; i < newBin.length; i++) {
//     binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
//   }
//   let jsonString = binCode.join("");
//   return JSON.parse(jsonString)
// }
// console.log('covertObjectToBinary =>', covertObjectToBinary(obj))
// console.log('convertBinaryToObject =>', convertBinaryToObject(covertObjectToBinary(obj)))  