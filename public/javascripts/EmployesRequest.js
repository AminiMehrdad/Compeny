// create
function SubminForm() {
    
    const companyID = document.getElementById('ID_Compeny').value;
    fetch('http://localhost:5000/users/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({
            ferstyName: `${document.getElementById('nameInput').value}`,
            lastName: `${document.getElementById('regesterInpu').value}`,
            IDNumber: `${document.getElementById('cityInpu').value}`,
            gender: `${document.getElementById('stateInpu').value}`,
            isManager: `${document.getElementById('createInpu').value}`,
            berthday: `${document.getElementById('phoneInpu').value}`,
            companyID: companyID
        })
    })
    .then(response => response.json()) // Convert response to JSON
    .then((data)=> {
        console.log(data)
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
    const companyID = document.getElementById('ID_Compeny').value
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
function Update_employ() {
    const companyID = document.getElementById('ID_Compeny').value;
    const id = document.getElementById("user").value;
    fetch(`http://localhost:5000/users/${id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ferstyName: `${document.getElementById('nameInputU').value}`,
            lastName: `${document.getElementById('regesterInputU').value}`,
            IDNumber: `${document.getElementById('cityInputU').value}`,
            gender: `${document.getElementById('stateInputU').value}`,
            isManager: `${document.getElementById('createInputU').value}`,
            berthday: `${document.getElementById('phoneInputU').value}`,
            companyID: companyID
        })
    })
    .then(response => response.json()) // Convert response to JSON
    .then((data)=> {
        if(data.msg === "ok"){
            window.location.href = `http://localhost:5000/users/${companyID}`;
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

function back_page(){
    window.location.href = `http://localhost:5000/compenys/`;
}
