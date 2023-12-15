document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('disableslots');
    var select1 = document.getElementById('fslot');
    var select2 = document.getElementById('tslot');

    checkbox.addEventListener('change', function() {
        select1.disabled = checkbox.checked;
        select2.disabled = checkbox.checked;
    });
});

let user;

function getCookie(name) {
    const value = `; ${document.cookie}`;
    console.log(value);
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}



function toggleDropdown(container) {
    container.classList.toggle('active');
}

function logout() {
    fetch('/logout', {
        method: 'GET'
    })
    .then(() => {
        window.location.href = '/';
    })
    .catch(error => {
        console.error('Logout error:', error);
    });
}

function handleItemClick() {
    window.location.href = '/changePassword';
}

if (!checkSession()) {
    window.location.href = '/'; 
}

function checkSession() {
    return document.cookie.includes('username');
}

async function sendrequest() {
    var myform = document.getElementById('applyform');
    var type = document.querySelector('input[name="type"]:checked').value;
    var from_date = document.getElementById('from_date').value;
    var to_date = document.getElementById('To_date').value;
    var fslot = document.getElementById('fslot').value;
    var tslot = document.getElementById('tslot').value;
    var disableslots = document.getElementById('disableslots').checked;
    var description = document.getElementById('description').value;
    var fileInput = document.getElementById('Doc');
    
    var formData = new FormData();
    formData.append('user', user);
    formData.append('type', type);
    formData.append('from_date', from_date);
    formData.append('to_date', to_date);
    formData.append('description', description);
    formData.append('disableslots', disableslots);

    formData.append('file', fileInput.files[0]);

    if (!disableslots) {
        formData.append('fslot', fslot);
        formData.append('tslot', tslot);
    }

    if (type == "ml" || type == "od"){
        formData.append('subtype', document.querySelector('input[name="subtype"]:checked').value);
    }

    await fetch('/request', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.success) {
            myform.reset();
            alert('Leave Requested Successfully');
            document.getElementById('subtype').innerHTML = ''
        } else {
            console.error('Error:', data.message);
            Alert('Server Error, Please try after a While');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

async function SubmitForm(){
    var myform = document.getElementById('applyform');
    if (myform.checkValidity()) {
        if(validateDates()){
            sendrequest();
        }
    } else {
        alert('Please fill in all required fields.');
    }
}
function handleOD() {
    document.getElementById('subtype').innerHTML = `
    <div>
    Select subtype:<br>
    <input type="radio" id="CULTURAL" name="subtype" value="cultural" required/>
    <label for="CULTURAL">Cultural OD</label>

    <input type="radio" id="FIELD" name="subtype" value="field work" required/>
    <label for="FIELD">Field Work</label>

    <input type="radio" id="INTERNSHIP" name="subtype" value="internship" required/>
    <label for="INTERNSHIP">Internship</label>

    <input type="radio" id="PROJECT WORK" name="subtype" value="project work" required/>
    <label for="PROJECT WORK">Project Work</label>

    <input type="radio" id="TRAINING" name="subtype" value="training" required/>
    <label for="TRAINING">Training</label>

    <input type="radio" id="OTHER" name="subtype" value="other" required/>
    <label for="OTHER">Other (explain in description)</label>
    </div>
    `
}

function handleML(){
    document.getElementById('subtype').innerHTML = `
    <div>
    Select subtype:<br>
    <input type="radio" id="SHORT SPAN" name="subtype" value="short span" required/>
    <label for="SHORT SPAN">Short Span</label>

    <input type="radio" id="LONG SPAN" name="subtype" value="long span" required/>
    <label for="LONG SPAN">Long Span</label>
    `
}

function handleCas(){
    document.getElementById('subtype').innerHTML = ''
}

let user_name

function get_user() {
    var endpoint = '/get_user';

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: user}),
    })
    .then(response => response.json())
    .then(data => {
        user_name = data.username
        document.getElementById('user').innerText = user_name;
    })
}

document.addEventListener('DOMContentLoaded', function() {
    user = getCookie('username');
    get_user();
});

async function fetchData(userId) {
    const response = await fetch(`/data/${userId}`);
    const data = await response.json();

    if (data.success !== false) {
        const tableBody = document.getElementById('tbody');
        tableBody.innerHTML = '';

        data.forEach(row => {
            const tr = document.createElement('tr');
            let td = document.createElement('td');
            td.textContent = row['req_id'];
            tr.appendChild(td);
            td = document.createElement('td');
            td.textContent = row['type'];
            tr.appendChild(td);
            td = document.createElement('td');
            const sub_typee = row['sub_type'];
            if (sub_typee === null || sub_typee === undefined) {
            td.textContent = '-';
            } else {
            td.textContent = sub_typee;
            }
            tr.appendChild(td);
            td = document.createElement('td');
            var dateTimeString = row['from_date'];
            var date = new Date(dateTimeString);
            const formatter2 = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            });
            const from_Date = formatter2.format(date);
            td.textContent = from_Date;
            tr.appendChild(td);
            td = document.createElement('td');
            const fslotValue = row['fslot'];
            if (fslotValue === null || fslotValue === undefined) {
            td.textContent = '-';
            } else {
            td.textContent = fslotValue;
            }
            tr.appendChild(td);
            td = document.createElement('td');
            dateTimeString = row['to_date'];
            date = new Date(dateTimeString);
            const to_Date = formatter2.format(date);
            td.textContent = to_Date;
            tr.appendChild(td);
            td = document.createElement('td');
            const tslotValue = row['tslot'];
            if (tslotValue === null || tslotValue === undefined) {
            td.textContent = '-';
            } else {
            td.textContent = tslotValue;
            }
            tr.appendChild(td);
            td = document.createElement('td');
            const timestamp = row['applied_at'];
            const app_date = new Date(timestamp);
            const formatter = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
            });
            const formattedDate = formatter.format(app_date);
            td.textContent = formattedDate;
            tr.appendChild(td);
            
            const requestId = row['req_id'];

            const viewPdfButton = document.createElement('button');
            viewPdfButton.textContent = 'View PDF';
            viewPdfButton.classList.add('vpdf');
            viewPdfButton.addEventListener('click', () => {
                if (requestId !== undefined) {
                    viewPdf(requestId);
                } else {
                    console.error("Request Id is undefined.");
                }
            });

            td = document.createElement('td');
            td.appendChild(viewPdfButton);
            td.style.textAlign = 'center';
            tr.appendChild(td);
            td = document.createElement('td');
            const status = row['status'];
            td.textContent = status;
            tr.appendChild(td);
            td = document.createElement('td');
            if(status === 'Pending' || status === 'Approved'){
                const cancleLeave = document.createElement('button');
                cancleLeave.textContent = ' ';
                cancleLeave.classList.add('cancleButton');
                cancleLeave.addEventListener('click', () => {
                    Withdraw_Leave(requestId)
                });
                td.appendChild(cancleLeave);
                td.style.textAlign = 'center';
            }
            else{
                td.textContent = 'Option Not Available';
            }
            tr.appendChild(td);

            tableBody.appendChild(tr);
        });
    }
}

async function viewPdf(requestId) {
    const response = await fetch(`/pdf/${requestId}`);
    const blob = await response.blob();
    const pdfViewerModal = document.getElementById('pdfViewerModal');

    const objectUrl = URL.createObjectURL(blob);
    pdfViewerModal.innerHTML = `<embed src="${objectUrl}" width="100%" height="600px" />`;

    const modal = document.getElementById('pdfModal');
    modal.style.display = 'block';
}

  function closeModal() {
    const modal = document.getElementById('pdfModal');
    modal.style.display = 'none';

    const pdfViewerModal = document.getElementById('pdfViewerModal');
    pdfViewerModal.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tab2').addEventListener('click', function() {
        fetchData(user);
    });
});

async function Withdraw_Leave(requestId) {
    const userConfirmed = window.confirm("Are you sure you want to Withdraw this leave?");
    if (userConfirmed){
        const response = await fetch(`/withdraw/${requestId}`);
        const data = await response.json();
        if (data.success === true) {
            fetchData(user);
        }
    }else{
        console.log("Withdrawal aborted by user");
    }   
}

function validateDates() {
    const fromDate = new Date(document.getElementById('from_date').value);
    const toDate = new Date(document.getElementById('To_date').value);
    const currentDate = new Date();

    if (fromDate >= toDate) {
        alert('Please ensure that the "From" date is before the "To" date.');
        return false;
    }

    const threeMonthsAgo = new Date(currentDate);
    threeMonthsAgo.setMonth(currentDate.getMonth() - 3);

    const threeMonthsLater = new Date(currentDate);
    threeMonthsLater.setMonth(currentDate.getMonth() + 3);

    if (fromDate < threeMonthsAgo || fromDate > threeMonthsLater || toDate < threeMonthsAgo || toDate > threeMonthsLater) {
        alert('Please select dates within a plus or minus 3 months period from now.');
        return false;
    }

    return true;
}