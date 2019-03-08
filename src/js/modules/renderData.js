import { removeChildren } from './utils.js'

export const renderHome = (data, images) => {
  const title = document.querySelector('hgroup > h1')
  const dataContainer = document.querySelector('article section:first-of-type')
  const breadcrumb = document.querySelector('article > small')
  const HTMLMarkup = 'Ontdek luisterboeken bij de OBA'
  // Remove all elements in section
  removeChildren(dataContainer)
  dataContainer.removeAttribute('class')
  // Empty title and replace with new title
  title.textContent = ""
  title.insertAdjacentHTML('beforeend', HTMLMarkup)

  breadcrumb.textContent = ""

  data.map(object => {
    /* This is the HTML Markup that will be inserted */
    const HTMLMarkup =
      `<a href="#${object}" class="subject ">
        <img src="${images[Math.floor(Math.random() * images.length)]}" alt="${object}">
        <span>${object}</span>
       </a>`
    /* Insert markup to HTML section */
    dataContainer.insertAdjacentHTML('beforeend', HTMLMarkup)
  })
}

export const renderSubject = (data, name) => {
  const title = document.querySelector('hgroup > h1')
  const dataContainer = document.querySelector('article section:first-of-type')
  const breadcrumb = document.querySelector('article > small')
  // Remove all elements in section
  removeChildren(dataContainer)
  dataContainer.removeAttribute('class')
  // Empty title and replace with new title
  title.textContent = ""
  title.insertAdjacentHTML('beforeend', name)
  breadcrumb.textContent = ""
  breadcrumb.insertAdjacentHTML('beforeend', `<a href="/#">Home</a> &#187; <a href="#${name}">${name}</a>`)

  console.log(data)

  data.map(object => {
    // If book is available, add class green else red
    let color = "green"
    if (object.availableAmount === "0") color = "red"

    /* This is the HTML Markup that will be inserted */
    const HTMLMarkup =
      `<a href="#book/${object.title}" class="subject ${color}">
        <img src="${object.cover_image}" alt="${object.title}">
        <span>${object.title}</span>
       </a>`
    /* Insert markup to HTML section */
    dataContainer.insertAdjacentHTML('beforeend', HTMLMarkup)


  })
}

export const renderBook = (data, name) => {
  const title = document.querySelector('hgroup > h1')
  const breadcrumb = document.querySelector('article > small')
  const dataContainer = document.querySelector('article section:first-of-type')
  // If book is available, add class green else red
  let color = "green-text"
  if (data.availableAmount === "0") color = "red-text"
  // Remove all elements in section
  removeChildren(dataContainer)
  // Empty title and replace with new title
  title.textContent = ""
  title.insertAdjacentHTML('beforeend', name)
  breadcrumb.insertAdjacentHTML('beforeend', ` &#187; <a href="#book/${name}">${name}</a>`)
  dataContainer.classList.add('book')

  /* This is the HTML Markup that will be inserted */
  const HTMLMarkup =
    `<img src="${data.cover_image}" alt="${data.title}">
     <h2>${data.title}</h2>
     <p>${data.description}</p>
     <small><strong>${data.author}</strong> • ${data.publication_year} • ${data.language} • ${data.characteristic}</small>
     <a href="https://iguana.oba.nl/iguana/www.main.cls?sUrl=search&theme=OBA#app=Reserve&ppn=${data.pica}" target="_blank" rel="noopener">Er is/zijn in totaal <strong>${data.amount} exemplaar</strong> waarvan er <strong class="${color}">${data.availableAmount} beschikbaar</strong> is/zijn</a>`

  /* Insert markup to HTML section */
  dataContainer.insertAdjacentHTML('beforeend', HTMLMarkup)
}