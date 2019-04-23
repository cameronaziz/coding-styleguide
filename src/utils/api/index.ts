import data from './data'

// Just a mock api
const sleep = (time: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const api = async (searchString: string): Promise<SearchResult[]> => {
  // Delay that ish
  const results = await sleep(3000).then(() => {
    // Fint the data
    return data.filter((element) => {
      const lowerCaseElement = element.name.toLowerCase()
      return lowerCaseElement.includes(searchString.toLowerCase())
    })
  })
  return results
}

export default api
