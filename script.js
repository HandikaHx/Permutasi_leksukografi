const inputField = document.getElementById('input');
const generateButton = document.getElementById('generate');
const resultDiv = document.getElementById('result');

generateButton.addEventListener('click', () => {
  const input = inputField.value.trim();
  if (!input) {
    alert('Please enter input');
    return;
  }

  const isNumeric = /^\d+$/.test(input);
  const isAlpha = /^[a-zA-Z]+$/.test(input);
  if (!(isNumeric || isAlpha)) {
    alert('Input must be either numbers only or letters only');
    return;
  }

  const permutations = getPermutations(input);
  resultDiv.innerHTML = '';
  
  
  let resultHTML = '<ul>';  
  permutations.forEach((permutation) => {
    resultHTML += `<li>${permutation}</li>`;
  });
  resultHTML += '</ul>';
  resultDiv.innerHTML = resultHTML;
});

function getPermutations(input) {
  const inputArray = input.split('');
  const permutations = [];

  function permute(arr, m = []) {
    if (arr.length === 0) {
      permutations.push(m.join(''));
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);
        permute(curr, m.concat(next));
      }
    }
  }

  permute(inputArray, []);
  return permutations.sort();
}
