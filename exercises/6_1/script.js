window.onload = function() {
  const stateForm = document.querySelector('');
}
const brStates = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
  "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR",
  "SC", "SP", "SE", "TO"
];

function optionGenerate() {
  let tagOption = document.createElement('option');
  return tagOption;
};

function tagOptionGenerate(array) {
  let stateNew = '';
  for (index = 0; index < array.length; index += 1) {
    stateNew = optionGenerate();
    stateNew.innerText = array[index];
    stateForm.appendChild(stateNew);
  }
};

tagOptionGenerate(brStates)
