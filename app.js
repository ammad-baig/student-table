var students = [
  {
    name: "ABC",
    rollNum: "AB-01",
    inst: "SAIMS",
  },
  {
    name: "DEF",
    rollNum: "AB-02",
    inst: "SAIMS",
  },
  {
    name: "GHI",
    rollNum: "AB-03",
    inst: "SAIMS",
  },
  {
    name: "JKL",
    rollNum: "AB-04",
    inst: "SAIMS",
  },
  {
    name: "MNO",
    rollNum: "AB-05",
    inst: "SAIMS",
  },
  {
    name: "PQR",
    rollNum: "AB-06",
    inst: "SAIMS",
  },
  {
    name: "STU",
    rollNum: "AB-07",
    inst: "SAIMS",
  },
  {
    name: "VWX",
    rollNum: "AB-08",
    inst: "SAIMS",
  },
  {
    name: "YZ",
    rollNum: "AB-09",
    inst: "SAIMS",
  },
  {
    name: "AMMAD",
    rollNum: "AB-10",
    inst: "SAIMS",
  },
];

var tbody = document.getElementById("tbody");

for (let i = 0; i < students.length; i++) {
  tbody.innerHTML += `            <tr>
    <td class="p-1">${students[i].name}</td>
    <td class="p-1">${students[i].rollNum}</td>
    <td class="p-1">${students[i].inst}</td>
</tr>`;
}

var search = document.getElementById("search");

function searchBtn() {
  for (let i = 0; i < students.length; i++) {
    if (students[i].rollNum == search.value) {
      alert(
        `Name: ${students[i].name}\nRoll No: ${students[i].rollNum}\nInstitute: ${students[i].inst}`
      );
    }
  }
  search.value = "";
}
