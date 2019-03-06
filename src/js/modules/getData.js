import { setData, getData, isDataEmpty } from './cache.js'
import { API } from '../oba-wrapper/index.js'
import { filterAllData } from './filterData.js'

export const getObaData = async () => {
  /* Check if allPokemon array is empty */
  if (isDataEmpty()) {
    // Store all data in array
    let data = []
    // Set the API key
    const api = new API({ key:"1e19898c87464e239192c8bfe422f280" })
    // Search query endpoint
    const iterator = await api.createIterator("search/muziek&facet=Type(cd)&facet=Type(audiobook){20}")

    for await (const response of iterator) {
      // Filter all responses
      const filteredData = filterAllData(response)

      for (const object of filteredData) {
        // Remove all objects with null's
        if(object.title !== null && object.publication_year !== null && object.cover_image !== null && object.subject !== null) 
        data.push(object)
      }
    }
    /* Cache data */
    setData(data)

    return data
  }
  /* Return data from getData array */
  return getData()
}

export const getSubjectData = async (name) => {
  const data = getData()

  console.log(data)
}