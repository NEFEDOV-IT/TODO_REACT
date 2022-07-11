const SHOW_ERRORS = {
  addTask: 'Please, enter a task',
  onTheList: 'This task is on the list',
}

const TASKS_HIGH = 'high'
const TASKS_LOW = 'low'

function deleteAllCookies() {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

export { TASKS_HIGH, TASKS_LOW, SHOW_ERRORS }
