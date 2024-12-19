const button1 = document.querySelector("#check-btn");
const button2 = document.querySelector("#clear-btn");
const numberInput = document.getElementById("user-input");

const checkUserInput = () =>
  {
    const inputNumber = numberInput.value;
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

    if (inputNumber === "") {
      alert("Please provide a phone number");
    }  else 

    if (inputNumber.match(phoneRegex)) {
      document.querySelector("#results-div").innerHTML =`Valid US number: ${inputNumber}`;
    } else 
    
    {
      document.querySelector("#results-div").innerHTML =`Invalid US number: ${inputNumber}`;
    }

  numberInput.value = "";

  };

const clearUserInput = () => {
  document.querySelector("#results-div").innerHTML = "";
};

button1.addEventListener("click", checkUserInput);

button2.addEventListener("click", clearUserInput);

