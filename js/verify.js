
const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRQD3fFT6unfqWGvXunMBI-Ltx_LdVU9TC3x_m-1Vqhgz7s6nCQ-Ph57UeA9mqXxfN1nSSo8-ATfTM0/pub?output=csv";

async function verifyCertificate() {

const certID = document.getElementById("certID").value.trim();
const resultBox = document.getElementById("result");

resultBox.innerHTML = "Checking certificate...";

const response = await fetch(sheetURL);
const data = await response.text();

const rows = data.split("\n").slice(1);

let found = false;

rows.forEach(row => {

const cols = row.split(",");

const id = cols[2];     
const name = cols[3];
const course = cols[4];
const date = cols[5];
const link = cols[6];

if(id === certID){

found = true;

resultBox.innerHTML = `
<h3>Certificate Verified ✅</h3>
<p><b>Name:</b> ${name}</p>
<p><b>Course:</b> ${course}</p>
<p><b>Date:</b> ${date}</p>
<a href="${link}" target="_blank">Download Certificate</a>
`;

}

});

if(!found){

resultBox.innerHTML = `<p style="color:red;">Certificate not found</p>`;

}

}
