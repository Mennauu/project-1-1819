/* Array where we save all the data */
let data = []

export const setData = (data) => {
  data = data
}

export const getData = () => {
  return data
}

export const isDataEmpty = () => {
  return data.length === 0
}

export const addObject = (object) => {
  data.push(object)
}