import { removeChildren } from './utils.js'

export const renderHome = (data) => {
  const title = document.querySelector('main > section > h1')
  const dataContainer = document.querySelector('.response')
  const HTMLMarkup = `Ontdek luisterboeken bij de OBA`

  removeChildren(dataContainer)

  title.textContent = ""
  title.insertAdjacentHTML('beforeend', HTMLMarkup)

  console.log(data)

  data.map(object => {
    /* This is the HTML Markup that will be inserted */
    const HTMLMarkup =
      `<a href="#${object}" class="subject">
        <span>${object}</span>
       </a>`

    /* Insert markup to HTML section */
    dataContainer.insertAdjacentHTML('beforeend', HTMLMarkup)
  })
}

export const renderSubject = (data) => {
  const title = document.querySelector('main > section > h1')
  const dataContainer = document.querySelector('.response')
  const HTMLMarkup = `${data.subject}`

  title.textContent = ""
  removeChildren(dataContainer)

  title.insertAdjacentHTML('beforeend', HTMLMarkup)
}