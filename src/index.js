import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.scss';
import data from './users.json';

function getData(data) {
  setTimeout(() => {
    listRender(data);
  }, 10);
}

const tableBody = document.getElementById('tbody');

const listRender = (data) => {
  data.forEach((item) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.first_name}</td>
      <td>${item.last_name}</td>
      <td>${item.email}</td>
      <td>
        <img src=${item.avatar}>
      </td>
    `;
    tableBody.appendChild(tr);
  });
};

getData(data);
