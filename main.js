async function getListOfSensorValues() { 

    fetch('http://localhost:3000/sensor')// its is making a GET request
        .then(res => res.json())//when you get the responce from the api, run this; it converts responce to json
            .then(data => {//when you finish converting the json, run the code
                console.log(data)// its printing the data
                document.getElementById("sensor").innerHTML = data["value"];// acsess the tag with id sensor and; putting the data into the value
            })
} 
