const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    // Whenever submit button is clicked the data will be sent to the server and the page will reload. To prevent this we use e.preventDefault()
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if(height === '' || isNaN(height) || height < 0) {
        result.innerHTML = "Please provide a valid height!";
    }
    else if(weight === '' || isNaN(weight) || weight < 0) {
        result.innerHTML = "Please provide a valid weight!";
    }
    else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        let message = "";
        if (bmi < 18.5) {
            message = `${bmi} - Underweight`;
        }
        else if (bmi >= 18.5 && bmi < 25) {
            message = `${bmi} - Normal Weight`;
        }
        else {
            message = `${bmi} - Overweight`;
        }
        
        result.textContent = ""; // Clear previous result,
        const span = document.createElement("span");
        span.textContent = message;
        result.appendChild(span);
    }
})