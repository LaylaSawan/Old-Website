setInterval(getListOfSensorValues, 5000);
async function getListOfSensorValues() { 

    fetch('https://cvpcmc3kka.execute-api.us-east-1.amazonaws.com/prod')// its is making a GET request
        .then(res => res.json())//when you get the responce from the api, run this; it converts responce to json
            .then(data => {//when you finish converting the json, run the code
                console.log(data["value"])// its printing the data
                
                let dataBaseValues = data["value"];
                const myValue = dataBaseValues.split(",");
                document.getElementById("bottomMoistureSensor").innerHTML = (Math.round(((1700 - parseInt(myValue[0])) / 1700) * 10000) / 100) + "%";// acsess the tag with id sensor and; putting the data into the value
                document.getElementById("topMoistureSensor").innerHTML = Math.round(((4100 - parseInt(myValue[1])) / 4100) * 10000) / 100+ "%";
                document.getElementById("tempSensorValue").innerHTML = myValue[2] += "&#8451";
                document.getElementById("photoSensorValue").innerHTML = (Math.round((( parseInt(myValue[3])) / 4000) * 10000) / 100) + "%";
            })
} 
