if (!checkSession()) {
    window.location.href = '/'; 
}

function checkSession() {
    return document.cookie.includes('username');
}

let user;

function getCookie(name) {
    const value = `; ${document.cookie}`;
    console.log(value);
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
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

async function fetchData(userId) {
    const response = await fetch(`/PendingRequests/${userId}`);
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
            td.textContent = row['user_id'];
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
            const cancleLeave = document.createElement('button');
            cancleLeave.textContent = ' ';
            cancleLeave.classList.add('cancleButton');
            cancleLeave.addEventListener('click', () => {
                cancle_Leave(requestId)
            });
            td.appendChild(cancleLeave);
            const ApproveLeave = document.createElement('button');
            ApproveLeave.textContent = ' ';
            ApproveLeave.classList.add('ApproveButton');
            ApproveLeave.addEventListener('click', () => {
                Approve_Leave(requestId)
            });
            td.appendChild(ApproveLeave)
            td.style.textAlign = 'center';
        
            tr.appendChild(td);

            tableBody.appendChild(tr);
        });
    }
}

async function fetchOlderData(userId) {
    const response = await fetch(`/OldRequests/${userId}`);
    const data = await response.json();
    console.log(response, data);

    if (data.success !== false) {
        const tableBody = document.getElementById('tbody1');
        tableBody.innerHTML = '';

        data.forEach(row => {
            const tr = document.createElement('tr');
            let td = document.createElement('td');
            td.textContent = row['req_id'];
            tr.appendChild(td);
            td = document.createElement('td');
            td.textContent = row['user_id'];
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
            if (status == 'Approved'){
                const cancleLeave = document.createElement('button');
                cancleLeave.textContent = ' ';
                cancleLeave.classList.add('cancleButton');
                cancleLeave.addEventListener('click', () => {
                    cancle_Leave(requestId)
                });
                td.appendChild(cancleLeave);
            }
            else if (status == 'Cancelled'){
                const ApproveLeave = document.createElement('button');
                ApproveLeave.textContent = ' ';
                ApproveLeave.classList.add('ApproveButton');
                ApproveLeave.addEventListener('click', () => {
                    Approve_Leave(requestId)
                });
                td.appendChild(ApproveLeave)
            }
            td.style.textAlign = 'center';
            tr.appendChild(td);

            tableBody.appendChild(tr);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tab2').addEventListener('click', function() {
        fetchOlderData(user);
    });
});

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
    fetchData(user);
});

async function cancle_Leave(requestId) {
    const userConfirmed = window.confirm("Are you sure you want to cancel this leave?");
    if (userConfirmed){
        const response = await fetch(`/cancle/${requestId}`);
        const data = await response.json();
        if (data.success === true) {
            fetchData(user);
            fetchOlderData(user);
        }
    }else{
        console.log("Cancellation aborted by user");
    }   
}

async function Approve_Leave(requestId){
    const userConfirmed = window.confirm("Are you sure you want to approve this leave?");
    if (userConfirmed){
        const response = await fetch(`/approve/${requestId}`);
        const data = await response.json();
        if (data.success === true) {
            fetchData(user);
            fetchOlderData(user);
        }
    }else{
        console.log("Approval aborted by user");
    }   
}