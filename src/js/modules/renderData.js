import { removeChildren } from './utils.js'

export const renderHome = (data) => {
  const title = document.querySelector('main > section > h1')
  const dataContainer = document.querySelector('.response')
  const HTMLMarkup = `Luister je liever naar boeken? Bekijk onze collectie van Luisterboeken.`

  removeChildren(dataContainer)

  title.insertAdjacentHTML('beforeend', HTMLMarkup)

  data.map(object => {
    /* This is the HTML Markup that will be inserted */
    const HTMLMarkup =
    `<a href="#${object}" class="subject">${object}</a>`

    /* Insert markup to HTML section */
    dataContainer.insertAdjacentHTML('beforeend', HTMLMarkup)
  })
}

export const renderSubject = (data) => {
  const title = document.querySelector('main > section > h1')
  const dataContainer = document.querySelector('.response')
  const titleText = `${data.title}`

  removeChildren(dataContainer, title)

  title.insertAdjacentHTML('beforeend', titleText)
}