import { getObaData } from './getData.js'
import { subjectData, uniqueSubjects, removeLoadingAnimation, imageList, bookData } from './utils.js'
import { renderHome, renderSubject, renderBook } from './renderData.js'

export const home = async () => {
  try {
     // Get all data
    const data = await getObaData()
    console.log(data)
    // Get all unique subjects
    const subjects = uniqueSubjects(data)
    // Get list of unique images
    const images = imageList(data)
    // Render data to HTML
    renderHome(subjects, images)
  } catch (err) {
    throw err
  } finally {
    removeLoadingAnimation()
  }
}

export const subject = async (name) => {
  try {
    // Get all data
    const data = await getObaData()
    // Get only subject data based
    const object = subjectData(data, name)
    // Render data to HTML
    renderSubject(object, name)
  } catch (err) {
    throw err
  } finally {
    removeLoadingAnimation()
  }
}

export const book = async (name) => {
  try {
    // Get all data
    const data = await getObaData()
    // Get only subject data based
    const object = bookData(data, name)
    // Render data to HTML
    renderBook(object, name)
  } catch (err) {
    throw err
  } finally {
    removeLoadingAnimation()
  }
}