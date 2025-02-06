// create
function SubminForm() {
    companyID = document.getElementById('ID_Compeny').value
    fetch('http://localhost:5000/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({
            ferstyName: `${document.getElementById('nameInput').value}`,
            LastName: `${document.getElementById('regesterInpu').value}`,
            IDNumber: `${document.getElementById('cityInpu').value}`,
            gender: `${document.getElementById('stateInpu').value}`,
            isManger: `${document.getElementById('createInpu').value}`,
            berthday: `${document.getElementById('phoneInpu').value}`,
            companyID: companyID,
        })
    })
    .then(response => response.json()) // Convert response to JSON
    .then((data)=> {
        if(data.msg === "ok"){
            window.location.href = `http://localhost:5000/users/${companyID}`;
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
    companyID = document.getElementById('ID_Compeny').value
    const id = document.getElementById("user").value;
    fetch(`http://localhost:5000/users/${id}`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json()) // Convert response to JSON
    .then((data)=> {
        window.location.href = `http://localhost:5000/users/${companyID}`;
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
