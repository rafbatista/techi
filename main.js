const getNames = () => {
  fetch('https://techi.envivent.com/names.json')
    .then(res => res.json())
    .then(data => data.employees.forEach(name => namesArr.push(name)))
}

getNames()

const namesArr = []

const renderNames = () => {
  const $picsContent = document.querySelectorAll('.team-pic')
  for (var i = 0; i < array.length; i++) {
    array[i]
  }
}
