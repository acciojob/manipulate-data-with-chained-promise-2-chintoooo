function getInitialArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); // initial delay of 3 seconds
  });
}

function filterEvenNumbers(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = array.filter(num => num % 2 === 0);
      document.getElementById("output").textContent = evenNumbers.join(',');
      resolve(evenNumbers);
    }, 1000); // delay of 1 second after initial resolution
  });
}

function multiplyByTwo(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multiplied = array.map(num => num * 2);
      document.getElementById("output").textContent = multiplied.join(',');
      resolve(multiplied);
    }, 2000); // delay of 2 seconds after filtering
  });
}

// Chain the promises
getInitialArray()
  .then(filterEvenNumbers)
  .then(multiplyByTwo)
  .catch(error => {
    console.error("Something went wrong:", error);
  });
