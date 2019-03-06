import { getObaData } from './getData.js'
import { subjectData, uniqueSubjects } from './utils.js'
import { renderHome, renderSubject } from './renderData.js'

export const home = async () => {
  // Get all data
  const data = await getObaData()
  // Get all unique subjects
  const subjects = uniqueSubjects(data)
  // Render data to HTML
  renderHome(subjects)
}

export const subject = async (name) => {
  // Get all data
  const data = await getObaData()
  // Get only subject data based
  const object = subjectData(data, name)
  // Render data to HTML
  renderSubject(object)
}