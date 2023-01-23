async function getListOfSensorValues() { 

    fetch('http://localhost:3000/sensor')
        .then(res => res.json())
            .then(data => {
                console.log(data)
                document.getElementById("sensor").innerHTML = data["value"];
            })
} 
