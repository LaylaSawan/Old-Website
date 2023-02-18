async function getListOfSensorValues() { 

    fetch('http://localhost:3000/sensor')// its is making a GET request
        .then(res => res.json())//when you get the responce from the api, run this; it converts responce to json
            .then(data => {//when you finish converting the json, run the code
                console.log(data["value"])// its printing the data

                let dataBaseValues = data["value"];
                const myValue = dataBaseValues.split(",");
                document.getElementById("bottomMoistureSensor").innerHTML = myValue[0];// acsess the tag with id sensor and; putting the data into the value
                document.getElementById("topMoistureSensor").innerHTML = myValue[1];
                document.getElementById("tempSensorValue").innerHTML = myValue[2];
                document.getElementById("photoSensorValue").innerHTML = myValue[3];
            })
} 
