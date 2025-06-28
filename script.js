const appForm = document.getElementById('appForm');
const appList = document.getElementById('appList');

let applications = JSON.parse(localStorage.getItem('applications')) || [];

function renderApps() {
  appList.innerHTML = '';
  applications.forEach((app, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${app.company}</td>
      <td>${app.position}</td>
      <td>${app.date}</td>
      <td>${app.status}</td>
      <td><button class="delete-btn" onclick="deleteApp(${index})">Delete</button></td>
    `;
    appList.appendChild(row);
  });
}

function deleteApp(index) {
  applications.splice(index, 1);
  localStorage.setItem('applications', JSON.stringify(applications));
  renderApps();
}

appForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const newApp = {
    company: document.getElementById('company').value,
    position: document.getElementById('position').value,
    date: document.getElementById('date').value,
    status: document.getElementById('status').value,
  };
  applications.push(newApp);
  localStorage.setItem('applications', JSON.stringify(applications));
  appForm.reset();
  renderApps();
});

renderApps();
