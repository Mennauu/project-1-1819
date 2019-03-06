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
  for (const object of data) {
    if(object.subject === name) {
      return object
    }
  }
}