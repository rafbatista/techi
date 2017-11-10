const getNames = () => {
  fetch('https://techi.envivent.com/names.json')
    .then(res => res.json())
    .then(data => data.employees.forEach(name => namesArr.push(name)))
    .then(() => renderNames())
}

const getTitles = () => {
  fetch('https://techi.envivent.com/description.json')
    .then(res => res.json())
    .then(data => data.employees.forEach(title => titlesArr.push(title)))
    .then(() => renderTitles())
}

const getImgs = () => {
  fetch('https://techi.envivent.com/images.json')
    .then(res => res.json())
    .then(data => {
      imgSrc.src = data['images-folder']
      data.employees.forEach(img => imgsArr.push(img))
    })
    .then(() => renderImgs())
}

getNames()
getTitles()
getImgs()

const namesArr = []
const titlesArr = []
const imgSrc = {}
const imgsArr = []

const renderNames = () => {
  const $nameCaptions = document.querySelectorAll('.caption-one')
  for (var i = 0; i < namesArr.length; i++) {
    for (var j = 0; j < $nameCaptions.length; j++) {
      if (
        namesArr[i].id.toString() === $nameCaptions[j].getAttribute('data-id')
      ) {
        $nameCaptions[j].textContent =
          namesArr[i].first_name.toUpperCase() +
          ' ' +
          namesArr[i].last_name.toUpperCase()
      }
    }
  }
}

const renderTitles = () => {
  const $titleCaptions = document.querySelectorAll('.caption-two')
  const $descriptCaptions = document.querySelectorAll('.caption-three')
  for (var i = 0; i < titlesArr.length; i++) {
    for (var j = 0; j < $titleCaptions.length; j++) {
      if (
        titlesArr[i].id.toString() === $titleCaptions[j].getAttribute('data-id')
      ) {
        $titleCaptions[j].textContent = titlesArr[i].title.toLowerCase()
      }
    }
    for (var k = 0; k < $descriptCaptions.length; k++) {
      if (
        titlesArr[i].id.toString() ===
        $descriptCaptions[k].getAttribute('data-id')
      ) {
        $descriptCaptions[k].textContent = titlesArr[i].description
      }
    }
  }
}

const renderImgs = () => {
  const $captionImgs = document.querySelectorAll('img[data-id]')
  for (var i = 0; i < imgsArr.length; i++) {
    for (var j = 0; j < $captionImgs.length; j++) {
      if (
        imgsArr[i].id.toString() === $captionImgs[j].getAttribute('data-id')
      ) {
        $captionImgs[j].setAttribute('src', imgSrc.src + imgsArr[i].full)
      }
    }
  }
}
