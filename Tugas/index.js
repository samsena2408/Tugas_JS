function getDataUser() {
  const dataUser = localStorage.getItem('user');

  if (dataUser) {
    const conData = JSON.parse(dataUser);

    const imgElm = document.getElementById('img_user');
    imgElm.src = conData.imgUrl;

    const usernameElm = document.getElementById('username');
    usernameElm.innerHTML = conData.username.toUpperCase(); 
  } else {
    window.location.href = 'login.html';
  }
}

function onLogout() {
  localStorage.removeItem('user');

  window.location.href = 'login.html';
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const statusSelect = document.getElementById('statusSelect');
  
  const task = taskInput.value.trim();
  const status = statusSelect.value;

  if (task) {
    let list;

    switch (status) {
      case 'ongoing':
        list = document.getElementById('ongoing');
        break;
      case 'finished':
        list = document.getElementById('finished');
        break;
      case 'willDo':
        list = document.getElementById('willDo');
        break;
      default:
        console.error("Unknown status: " + status);
        return;
    }
    
    const listItem = document.createElement('li');
    listItem.className = "list-item";
    
    const date = new Date();
    const formattedDate = formatDate(date);
    listItem.textContent = `${task} - ${formattedDate}`;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = "btn-edit";
    editButton.onclick = function() {
      taskInput.value = task;
      statusSelect.value = status;
      list.removeChild(listItem);
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = "btn-delete";
    deleteButton.onclick = function() {
      list.removeChild(listItem);
    };

    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    taskInput.value = '';
  }
}

function formatDate(date) {
  const hari = ("0" + date.getDate()).slice(-2);
  const bulan = ("0" + (date.getMonth() + 1)).slice(-2);
  const tahun = date.getFullYear();
  const jam = ("0" + date.getHours()).slice(-2);
  const menit = ("0" + date.getMinutes()).slice(-2);
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

  return `${hari}/${bulan}/${tahun} ${jam}:${menit}`
}


  
getDataUser();