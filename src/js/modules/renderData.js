import { removeChildren } from './utils.js'

export const renderHome = (data, images) => {
  const title = document.querySelector('hgroup > h1')
  const dataContainer = document.querySelector('article > section')
  const breadcrumb = document.querySelector('article > small')
  const HTMLMarkup = 'Ontdek luisterboeken bij de OBA'
  // Remove all elements in section
  removeChildren(dataContainer)
  dataContainer.removeAttribute('class')

  if(document.querySelector('.wikipedia')) {
    document.querySelector('.wikipedia').remove()
  }
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
  const dataContainer = document.querySelector('article > section')
  const breadcrumb = document.querySelector('article > small')
  // Remove all elements in section
  removeChildren(dataContainer)
  dataContainer.classList.remove('book')
  dataContainer.classList.add('list')

  if(document.querySelector('.wikipedia')) {
    document.querySelector('.wikipedia').remove()
  }

  // Empty title and replace with new title
  title.textContent = ""
  title.insertAdjacentHTML('beforeend', name)
  breadcrumb.textContent = ""
  breadcrumb.insertAdjacentHTML('beforeend', `<a href="/#">Home</a> &#187; <a href="#${name}">${name}</a>`)

  console.log(data)

  data.map(object => {
    // If book is available, add class green else red
    let color = "green"
    let textColor = "green-text"
    if (object.availableAmount === "0") {
      color = "red"
      textColor = "red-text"
    } 

    /* This is the HTML Markup that will be inserted */
    const HTMLMarkup =
    `<a href="#book/${object.title}" class="list-item ${color}">
      <img src="${object.cover_image}" alt="${object.title}">
      <h2>${object.title}</h2>
      <p>${object.description}</p>
      <small><strong>${object.author}</strong> • ${object.publication_year} • ${object.language} • ${object.characteristic}</small>
      </a>
      <a href="https://iguana.oba.nl/iguana/www.main.cls?sUrl=search&theme=OBA#app=Reserve&ppn=${object.pica}" target="_blank" rel="noopener" class="call-to-action">Er is/zijn in totaal <strong>${object.amount} exemplaar</strong> waarvan er <strong class="${textColor}">${object.availableAmount} beschikbaar</strong> is/zijn</a>
      </a>`

    /* Insert markup to HTML section */
    dataContainer.insertAdjacentHTML('beforeend', HTMLMarkup)
  })
}

export const renderBook = (data, name) => {
  const title = document.querySelector('hgroup > h1')
  const breadcrumb = document.querySelector('article > small')
  const dataContainer = document.querySelector('article > section')
  const article = document.querySelector('article')
  // If book is available, add class green else red
  let color = "green-text"
  if (data.availableAmount === "0") color = "red-text"
  // Remove all elements in section
  removeChildren(dataContainer)
  // Empty title and replace with new title
  title.textContent = ""
  title.insertAdjacentHTML('beforeend', name)
  breadcrumb.textContent = ""
  breadcrumb.insertAdjacentHTML('beforeend', `<a href="/#">Home</a> &#187; <a href="#${data.subject}">${data.subject}</a> &#187; <a href="#book/${name}">${name}</a>`)
  dataContainer.classList.add('book')
  dataContainer.classList.remove('list')

  /* This is the HTML Markup that will be inserted */
  const HTMLMarkup =
    `<img src="${data.cover_image}" alt="${data.title}">
     <h2>${data.title}</h2>
     <p>${data.description}</p>
     <small><strong>${data.author}</strong> • ${data.publication_year} • ${data.language} • ${data.characteristic}</small>
     <span><strong>ISBN:</strong> ${data.isbn}</span>
     <span><strong>PICA:</strong> ${data.pica}</span>
     <a href="https://iguana.oba.nl/iguana/www.main.cls?sUrl=search&theme=OBA#app=Reserve&ppn=${data.pica}" target="_blank" rel="noopener">Er is/zijn in totaal <strong>${data.amount} exemplaar</strong> waarvan er <strong class="${color}">${data.availableAmount} beschikbaar</strong> is/zijn</a>`
  /* Insert markup to HTML section */
  dataContainer.insertAdjacentHTML('beforeend', HTMLMarkup)

  const wikipediaHTML = 
  `<section class="wikipedia">
    <div>
    <h1>Over de auteur</h1>
    <img src="./src/images/auteur.jpg" alt="${data.author}">
    <h2>${data.author}</h2>
    <p>${data.author} (Brielle, 18 november 1941) is een Nederlandse schrijver, arts en dichter die vooral bekend is om zijn kinderboeken. Vooral zijn dierenverhalen rond de mier en de eekhoorn zijn erg geliefd en worden ook door volwassenen graag gelezen vanwege de amusante, bizarre situaties en filosofische diepgang.</p>
    </div>
  </section>`
  /* Insert markup to HTML section */
  article.insertAdjacentHTML('beforeend', wikipediaHTML)
}