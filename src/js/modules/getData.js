import { getData, isDataEmpty, addObject } from './cache.js'
import { API } from '../oba-wrapper/index.js'
import { filterAllData } from './filterData.js'

export const getObaData = async () => {
  /* Check if allPokemon array is empty */
  if (isDataEmpty()) {
    // Set the API key
    const api = new API({ key: "1e19898c87464e239192c8bfe422f280" })
    // Search query endpoint
    const iterator = await api.createIterator("search/muziek&facet=Type(cd)&facet=Type(audiobook){100}")

    for await (const response of iterator) {
      console.log(response)
      // Filter all responses
      const filteredData = filterAllData(response)

      for (const object of filteredData) {
        // Remove all objects with null's
        if (object.amount !== null && object.availableAmount !== null && object.author !== null && object.characteristic !== null && object.cover_image !== null && object.description !== null && object.isbn !== null && object.pica !== null && object.language !== null && object.publication_year !== null && object.subject !== null && object.title !== null)
          /* Cache data */
          addObject(object)
      }
    }
    /* retrieve data from the cached data */
    const data = getData()

    return data
  }
  /* Return data from getData array */
  return getData()
}