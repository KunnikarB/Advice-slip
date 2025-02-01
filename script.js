const resultsAdvice = document.querySelector('#results');

const adviceID = document.querySelector('#advice-id');

const resultsBtn = document.querySelector('#getData');

resultsBtn.addEventListener('click', () => {
  getAdvice();
})

function getAdvice() {
  fetch('https://api.adviceslip.com/advice')
  .then(response => {
    return response.json();
  })
  .then(adviceData => {
    const adviceObj =adviceData.slip;
    adviceID.innerHTML = `ADVICE #${adviceObj.id}`;
    resultsAdvice.innerHTML = `<p>"${adviceObj.advice}"</p>`;
  })
  .catch(error => {
    console.log(error);
  })
}

