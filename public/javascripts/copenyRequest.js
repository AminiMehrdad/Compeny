// create
function SubminForm() {
    fetch('http://localhost:5000/compenys/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: `${document.getElementById('nameInput').value}`,
            regester_id: `${document.getElementById('regesterInpu').value}`,
            city: `${document.getElementById('cityInpu').value}`,
            state: `${document.getElementById('stateInpu').value}`,
            createat: `${document.getElementById('createInpu').value}`,
            phone: `${document.getElementById('phoneInpu').value}`,
        })
    })
    .then(response => response.json()) // Convert response to JSON
    .then((data)=> {
        if(data.msg === "ok"){
            window.location.href = "http://localhost:5000/compenys/";
        }else {
            let alertBox = document.getElementById("Alert");

            alertBox.textContent = data.msg;
            document.getElementById("Alert").classList.remove("d-none");

            setTimeout(() => {
                document.getElementById("Alert").classList.add("d-none");
                alertBox.textContent = ""; // Clear the text
            }, 5000);
        }
            
    })
    .catch(error => console.error('Error:', error));
}

// delete
function delete_compeny(){
    const id = document.getElementById("user").value;
    fetch(`http://localhost:5000/compenys/${id}`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json()) // Convert response to JSON
    .then((data)=> {
        window.location.href = "http://localhost:5000/compenys/";
    })
    .catch(error => console.error('Error:', error));
    
}

// update
function Update_compeny() {
    const id = document.getElementById("user").value;
    fetch(`http://localhost:5000/compenys/${id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: `${document.getElementById('nameInputU').value}`,
            regester_id: `${document.getElementById('regesterInputU').value}`,
            city: `${document.getElementById('cityInputU').value}`,
            state: `${document.getElementById('stateInputU').value}`,
            createat: `${document.getElementById('createInputU').value}`,
            phone: `${document.getElementById('phoneInputU').value}`,
        })
    })
    .then(response => response.json()) // Convert response to JSON
    .then((data)=> {
        if(data.msg === "ok"){
            window.location.href = "http://localhost:5000/compenys/";
        }else {
            let alertBox = document.getElementById("AlertU");

            alertBox.textContent = data.msg;
            document.getElementById("AlertU").classList.remove("d-none");

            setTimeout(() => {
                document.getElementById("AlertU").classList.add("d-none");
                alertBox.textContent = ""; // Clear the text
            }, 5000);
        }
            
    })
    .catch(error => console.error('Error:', error));
}
