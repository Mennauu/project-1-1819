/* Clear children of parent */
export const removeChildren = (element) => {
  while (element.firstChild) element.removeChild(element.firstChild)
}

/* Array with unique subjects */
export const uniqueSubjects = (data) => {
  let values = []
  let subjects

  data.map(result => {
    values.push(result.subject)
    subjects = [...new Set(values)]
  })

  return subjects
}

/* Array with unique subjects */
export const subjectData = (data, name) => {
  let objects = []

  for (const object of data) {
    if(object.subject === name) {
      objects.push(object)
    }
  }
  
  return objects
}

/* Array with unique subjects */
export const imageList = (data) => {
  let values = []
  let images

  data.map(result => {
    values.push(result.cover_image)
    images = [...new Set(values)]
  })

  return images
}

export const removeLoadingAnimation = () => {
  const loader = document.querySelector('.loader')
  const loaderTitle = document.querySelector('.loader-title')
  
  if (document.body.contains(loader)) {
    loader.remove()
    loaderTitle.remove()
  }
}

export const bookData = (data, name) => {
  for (const object of data) {
    if(object.title === name) {
      return object
    }
  }
}