document.addEventListener('DOMContentLoaded', (event) => {
    singleInput("Name","Enter your name");
    createInputRow('Email', 'email', 'Enter your email', 'Phone', 'tel', 'Enter your phone number');
    createSectionHeader('Father Details');
   
  });

  function singleInput(name,placeholder){
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
     input.placeholder =placeholder;
   
     // Append the label and input to the column div
     colDiv.appendChild(label);
     colDiv.appendChild(input);
   
     // Append the column div to the row div
     rowDiv.appendChild(colDiv);
   
     // Append the row div to the form content
     document.querySelector('.form-content').appendChild(rowDiv);
  }
  
  
  function createInputRow(label1Text, input1Type, input1Placeholder, label2Text, input2Type, input2Placeholder) {
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