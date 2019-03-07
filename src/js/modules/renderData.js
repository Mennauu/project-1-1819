import { removeChildren } from './utils.js'

export const renderHome = (data, images) => {
  const title = document.querySelector('main > section > h1')
  const dataContainer = document.querySelector('.response')
  const breadcrumb = document.querySelector('main > section > small')
  const HTMLMarkup = 'Ontdek luisterboeken bij de OBA'
  // Remove all elements in section
  removeChildren(dataContainer)
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
  const title = document.querySelector('main > section > h1')
  const dataContainer = document.querySelector('.response')
  const breadcrumb = document.querySelector('main > section > small')
  // Remove all elements in section
  removeChildren(dataContainer)
  // Empty title and replace with new title
  title.textContent = ""
  title.insertAdjacentHTML('beforeend', name)
  breadcrumb.textContent = ""
  breadcrumb.insertAdjacentHTML('beforeend', `<a href="/#">Home</a> &#187; <a href="#${name}">${name}</a>`)

  console.log(data)
  
  data.map(object => {
    /* This is the HTML Markup that will be inserted */
    if(object.availableAmount === 0) {
      
    }
    const HTMLMarkup =
      `<a href="#book/${object.title}" class="subject">
        <img src="${object.cover_image}" alt="${object.title}">
        <span>${object.title}</span>
       </a>`
    /* Insert markup to HTML section */
    dataContainer.insertAdjacentHTML('beforeend', HTMLMarkup)
  })
}

export const renderBook = (data, name) => {
  const title = document.querySelector('main > section > h1')
  const breadcrumb = document.querySelector('main > section > small')
  const dataContainer = document.querySelector('.response')
  // Remove all elements in section
  removeChildren(dataContainer)
  // Empty title and replace with new title
  title.textContent = ""
  title.insertAdjacentHTML('beforeend', name)
  breadcrumb.insertAdjacentHTML('beforeend', ` &#187; <a href="#book/${name}">${name}</a>`)

  /* This is the HTML Markup that will be inserted */
  const HTMLMarkup =
    `<img src="${data.cover_image}" alt="${data.title}">
     Publicatie jaar: <span>${data.publication_year}</span>
     Auteur: ${data.author}
     Taal: ${data.language}`
  /* Insert markup to HTML section */
  dataContainer.insertAdjacentHTML('beforeend', HTMLMarkup)
}