import { users } from './data.js'

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault()

  const username = document.querySelector('#username').value
  const password = document.querySelector('#password').value

  const user = users.find(user => user.username === username && user.password === password)

  if (user) {
    localStorage.setItem('user', JSON.stringify(user))
    window.location.href = 'index.html'
  } else {
    alert('Incorrect username or password')
  }
})
