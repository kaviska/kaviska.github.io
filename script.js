document.addEventListener('DOMContentLoaded', (event) => {
  createInputRow('Date of Birth', 'date', 'Enter your date of birth', 'dob', 'Place of Birth', 'text', 'Enter your place of birth', 'pob');
  //Name
  singleInput('Name', 'Enter your name', 'name');
  //gender
  createRadioInput('Gender', 'gender', 'Male', 'Female')

  createSectionHeader('Father\'s Details');
  //full Name
  singleInput('Full Name', 'Enter your father\'s name', 'fatherName');
  //date of birth
  singleInput('Date of Birth', 'Enter your father\'s date of birth', 'fatherDob', 'date');
  //place of birth
  singleInput('Place of Birth', 'Enter your father\'s place of birth', 'fatherPob');
  //Nation
  singleInput('National', 'Enter your Nationality', 'fatherNationality');

  createSectionHeader('Mother\'s Details');
  //full Name
  singleInput('Full Name', 'Enter your mother\'s name', 'motherName');
  //date of birth
  singleInput('Date of Birth', 'Enter your mother\'s date of birth', 'motherDob', 'date');
  //place of birth
  singleInput('Place of Birth', 'Enter your mother\'s place of birth', 'motherPob');
  //Nation
  singleInput('National', 'Enter your Nationality', 'motherNationality');

  singleLine();

  //were parents married
  createRadioInput('Were your parents married?', 'married', 'Yes', 'No')

  createSectionHeader('If Grandfather Born in Sri Lanka');
  //full Name
  singleInput('Full Name', 'Enter your grandfather\'s name', 'grandfatherName');
  //date of birth
  singleInput('Date of Birth', 'Enter your grandfather\'s date of birth', 'grandfatherDob', 'date');
  //place of birth
  singleInput('Place of Birth', 'Enter your grandfather\'s place of birth', 'grandfatherPob');

  createSectionHeader(' lf the Father Was Not born in Sri Lanka and If the Great Grandfather was born in Sri Lanka Great Grandfather\'s Details');
  //full Name
  singleInput('Full Name', 'Enter your great grandfather\'s name', 'greatGrandfatherName');
  //date of birth
  singleInput('Date of Birth', 'Enter your great grandfather\'s date of birth', 'greatGrandfatherDob', 'date');
  //place of birth
  singleInput('Place of Birth', 'Enter your great grandfather\'s place of birth', 'greatGrandfatherPob');

  singleLine();
  singleInput('Informant\'s full name, residence and in what capacity he gives information', 'informantInfo', 'informantInfo', 'text');
  singleInput('Informant\'s signature', 'informantSignature', 'informantSignature', 'text');
  singleInput('Date of Registration', 'Enter the date of registration', 'dateOfRegistration', 'date');
  singleInput('Registrar\'s Signature', 'Enter the registrar\'s signature', 'registrarSignature', 'text');
  singleInput('Name Inserted or Substituted After Registration', 'Enter the name inserted or substituted after registration', 'nameInserted', 'text');
  singleInput('Name of person on whose information particular: relating to item I were supplied and in what capacity he gave information', 'Enter the name of the person on whose information particular relating to item I were supplied and in what capacity he gave information', 'nameOfPerson', 'text');
  singleInput('Notation of insertion or substitution and District Registrar or Registrar General\'s signature', 'Enter the notation of insertion or substitution and District Registrar or Registrar General\'s signature', 'notation', 'text');

  singleLine();

  createButtonGroup()



});

function singleInput(name, placeholder, id, type) {
  // Create the row div
  const rowDiv = document.createElement('div');
  rowDiv.className = 'row mt-3';

  // Create the column div
  const colDiv = document.createElement('div');
  colDiv.className = 'col-12';

  // Create the label
  const label = document.createElement('label');
  label.textContent = name;

  // Create the input
  const input = document.createElement('input');
  input.className = 'form-control';
  input.placeholder = placeholder;
  input.id = id
  if (type) {
    input.type = type;
  }

  // Append the label and input to the column div
  colDiv.appendChild(label);
  colDiv.appendChild(input);

  // Append the column div to the row div
  rowDiv.appendChild(colDiv);

  // Append the row div to the form content
  document.querySelector('.form-content').appendChild(rowDiv);
}


function createInputRow(label1Text, input1Type, input1Placeholder, id1, label2Text, input2Type, input2Placeholder, id2) {
  // Create the row div
  const rowDiv = document.createElement('div');
  rowDiv.className = 'row mt-3';

  // Create the first column div
  const colDiv1 = document.createElement('div');
  colDiv1.className = 'col-md-6';

  // Create the first label
  const label1 = document.createElement('label');
  label1.textContent = label1Text;

  // Create the first input
  const input1 = document.createElement('input');
  input1.type = input1Type;
  input1.className = 'form-control';
  input1.placeholder = input1Placeholder;
  input1.id = id1;

  // Append the first label and input to the first column div
  colDiv1.appendChild(label1);
  colDiv1.appendChild(input1);

  // Create the second column div
  const colDiv2 = document.createElement('div');
  colDiv2.className = 'col-md-6';

  // Create the second label
  const label2 = document.createElement('label');
  label2.textContent = label2Text;

  // Create the second input
  const input2 = document.createElement('input');
  input2.type = input2Type;
  input2.className = 'form-control';
  input2.placeholder = input2Placeholder;
  input2.id = id2;

  // Append the second label and input to the second column div
  colDiv2.appendChild(label2);
  colDiv2.appendChild(input2);

  // Append both column divs to the row div
  rowDiv.appendChild(colDiv1);
  rowDiv.appendChild(colDiv2);

  // Append the row div to the form content
  document.querySelector('.form-content').appendChild(rowDiv);
}
function createSectionHeader(headerText) {
  // Create the hr element
  const hr = document.createElement('hr');
  hr.className = 'mt-5';

  // Create the h3 element
  const h3 = document.createElement('h3');
  h3.className = 'my-3';
  h3.textContent = headerText;

  // Append the hr and h3 elements to the form content
  const formContent = document.querySelector('.form-content');
  formContent.appendChild(hr);
  formContent.appendChild(h3);
}


function createRadioInput(labelText, radioName, maleLabel, femaleLabel) {
  // Create the row div
  const rowDiv = document.createElement('div');
  rowDiv.className = 'row mt-3';

  // Create the column div for the label
  const colDivLabel = document.createElement('div');
  colDivLabel.className = 'col-12';

  // Create the label
  const label = document.createElement('label');
  label.textContent = labelText;

  // Append the label to the column div
  colDivLabel.appendChild(label);

  // Create the column div for the radio buttons
  const colDivRadio = document.createElement('div');
  colDivRadio.className = 'col-12';

  // Create the first radio button div
  const radioDiv1 = document.createElement('div');
  radioDiv1.className = 'form-check form-check-inline mx-5';

  // Create the first radio button input
  const radioInput1 = document.createElement('input');
  radioInput1.className = 'form-check-input';
  radioInput1.type = 'radio';
  radioInput1.name = radioName;
  radioInput1.id = 'inlineRadio1';
  radioInput1.value = maleLabel;

  // Create the first radio button label
  const radioLabel1 = document.createElement('label');
  radioLabel1.className = 'form-check-label';
  radioLabel1.htmlFor = 'inlineRadio1';
  radioLabel1.textContent = maleLabel;

  // Append the first radio button input and label to the first radio button div
  radioDiv1.appendChild(radioInput1);
  radioDiv1.appendChild(radioLabel1);

  // Create the second radio button div
  const radioDiv2 = document.createElement('div');
  radioDiv2.className = 'form-check form-check-inline';

  // Create the second radio button input
  const radioInput2 = document.createElement('input');
  radioInput2.className = 'form-check-input';
  radioInput2.type = 'radio';
  radioInput2.name = radioName;
  radioInput2.id = 'inlineRadio2';
  radioInput2.value = femaleLabel;

  // Create the second radio button label
  const radioLabel2 = document.createElement('label');
  radioLabel2.className = 'form-check-label';
  radioLabel2.htmlFor = 'inlineRadio2';
  radioLabel2.textContent = femaleLabel;

  // Append the second radio button input and label to the second radio button div
  radioDiv2.appendChild(radioInput2);
  radioDiv2.appendChild(radioLabel2);

  // Append both radio button divs to the column div for radio buttons
  colDivRadio.appendChild(radioDiv1);
  colDivRadio.appendChild(radioDiv2);

  // Append the column divs to the row div
  rowDiv.appendChild(colDivLabel);
  rowDiv.appendChild(colDivRadio);

  // Append the row div to the form content
  document.querySelector('.form-content').appendChild(rowDiv);
}

function singleLine() {
  const line = document.createElement('hr');
  line.className = 'mt-5';
  document.querySelector('.form-content').appendChild(line);
}

function createButtonGroup() {
  // Create the div with class "flex gap-3 mt-3"
  const buttonGroupDiv = document.createElement('div');
  buttonGroupDiv.className = 'flex gap-3 mt-3';

  // Create the Submit button
  const submitButton = document.createElement('button');
  submitButton.className = 'btn btn-primary mt-3 w-100';
  submitButton.textContent = 'Submit';
  submitButton.id = 'submit';

  // Add event listener to the submit button
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    generateExcel();
  });

  // Create the Reset button
  const resetButton = document.createElement('button');
  resetButton.className = 'btn btn-danger mt-3 w-100';
  resetButton.textContent = 'Reset';
  resetButton.id = 'reset';

  // Add event listener to the reset button
  resetButton.addEventListener('click', (event) => {
    event.preventDefault();
    clearForm();
  });

  // Append the buttons to the div
  buttonGroupDiv.appendChild(submitButton);
  buttonGroupDiv.appendChild(resetButton);

  // Append the div to the form content
  document.querySelector('.form-content').appendChild(buttonGroupDiv);
}


function clearForm() {
  const inputs = document.querySelectorAll('.form-content input');
  inputs.forEach(input => {
    if (input.type === 'radio') {
      input.checked = false;
    } else {
      input.value = '';
    }
  });
}

function printFormValues() {
  const inputs = document.querySelectorAll('.form-content input');
  let printArea = document.createElement('div');
  printArea.className = 'print-area';

  let dobValue = '';
  let pobValue = '';

  inputs.forEach(input => {
    // Only print the values of non-radio inputs or the checked radio buttons
    if ((input.type === 'radio' && input.checked) || input.type !== 'radio') {
      if (input.id === 'dob') {
        dobValue = input.value;
      } else if (input.id === 'pob') {
        pobValue = input.value;
      } else {
        const valueP = document.createElement('p');
       
     
        // if(input.id==='informantInfo'){
        //   printArea.appendChild(document.createElement('br'));
        // }
        // if(input.id==='nameInserted'){

        //   printArea.appendChild(document.createElement('br'));
        // }
        // if(input.id==='notation'){
        //   printArea.appendChild(document.createElement('br'));
        

        // }
        // if(input.id==='nameOfPerson'){
        //   printArea.appendChild(document.createElement('br'));
        

        // }
        // else{


        // }
        valueP.style.marginTop = '49px';


        valueP.textContent = input.value;  // Only print the value, not the label

        printArea.appendChild(valueP);
        // if (input.id === 'grandfatherPob') {
        //   printArea.appendChild(document.createElement('br'));
        //   printArea.appendChild(document.createElement('br'));
        //   printArea.appendChild(document.createElement('br'));
        
         
        // }
        // if(input.id==='notation'){
        //   printArea.appendChild(document.createElement('br'));
          

        // }
        // if(input.id==='nameOfPerson'){
        //   printArea.appendChild(document.createElement('br'));
          

        // }


        }
      }
    });

  if (dobValue || pobValue) {
    const dobPobP = document.createElement('p');
    dobPobP.style.marginTop = '0px';
    dobPobP.textContent = `${dobValue} ${pobValue}`;
    printArea.insertBefore(dobPobP, printArea.firstChild);
  }

  // Prepare the print window
  const printWindow = window.open('', '', 'height=600,width=800');
  printWindow.document.write('<html><head><title>Form Values</title>');
  printWindow.document.write('<style>body { font-family: Arial, sans-serif; padding: 260px 0px 0px 50%; }</style>');
  printWindow.document.write('</head><body>');
  printWindow.document.write(printArea.innerHTML);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();

  // Clear the print window and other additonal window after user close the print window
  printWindow.onafterprint = function () {
    printWindow.close();
  }

}


function generateExcel() {
  const inputs = document.querySelectorAll('.form-content input');
  const data1 = [];
  const data2 = [];

  inputs.forEach(input => {
    if ((input.type === 'radio' && input.checked) || input.type !== 'radio') {
      if (input.id === 'greatGrandfatherName' || input.id === 'greatGrandfatherDob' || input.id === 'greatGrandfatherPob' || input.id === 'informantInfo' || input.id === 'informantSignature' || input.id === 'dateOfRegistration' || input.id === 'registrarSignature' || input.id === 'nameInserted' || input.id === 'nameOfPerson' || input.id === 'notation') {
        data2.push([input.value]);
      } else {
        data1.push([input.value]);
      }
    }
  });

  const worksheet1 = XLSX.utils.aoa_to_sheet(data1);
  const worksheet2 = XLSX.utils.aoa_to_sheet(data2);
  worksheet1['!cols'] = [
  
    { wch: 60 }  // Width of the second column
  ];

  worksheet2['!cols'] = [
  
    { wch: 60 }  // Width of the second column
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet1, 'Page 1');
  XLSX.utils.book_append_sheet(workbook, worksheet2, 'Page 2');

  XLSX.writeFile(workbook, 'form_values.xlsx');
}