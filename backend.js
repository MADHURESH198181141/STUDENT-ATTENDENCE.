const form = document.getElementById("attendanceForm");
const recordList = document.getElementById("recordList");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const record = {
    name: document.getElementById("name").value,
    roll: document.getElementById("roll").value,
    date: document.getElementById("date").value,
    status: document.getElementById("status").value,
  };

  let attendance = JSON.parse(localStorage.getItem("attendance")) || [];
  attendance.push(record);
  localStorage.setItem("attendance", JSON.stringify(attendance));
  displayRecords();
  form.reset();
});

function displayRecords() {
  const data = JSON.parse(localStorage.getItem("attendance")) || [];
  recordList.innerHTML = "";
  data.forEach((rec) => {
    const li = document.createElement("li");
    li.innerText = `${rec.name} | ${rec.roll} | ${rec.date} | ${rec.status}`;
    recordList.appendChild(li);
  });
}

displayRecords();
