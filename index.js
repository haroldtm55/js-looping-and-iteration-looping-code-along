// Code your solutions in this file

function writeCards(array) {
  const newArray = []
  for (let i of array) {
    newArray.push(`Thank you, ${i}, for the wonderful surprise gift!`)
  }
  return newArray
}

function countDown(number) {
  while (number >=0) {
    console.log(number)
    number--
  }
}