// Just a mock api
const sleep = (time: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const api = async (searchString: string) => {
  // Delay that ish
  const results = await sleep(3000).then(() => {
    return fakeData.filter((element) => {
      const lowerCaseElement = element.text.toLowerCase()
      return lowerCaseElement.includes(searchString.toLowerCase())
    })
  })
  return results
}

export default api

const fakeData = [
  {
    text: 'Lee Brouwer'
  },
  {
    text: 'Alexa Elkins'
  },
  {
    text: 'Lanell Reasoner'
  },
  {
    text: 'Nikita Serio'
  },
  {
    text: 'Pauline Napolitano'
  },
  {
    text: 'Sharika Gumbs'
  },
  {
    text: 'Abbey Lampron'
  },
  {
    text: 'Claud Boggan'
  },
  {
    text: 'Jene Pontius'
  },
  {
    text: 'Marcus Blanck'
  },
  {
    text: 'Nancey Jesse'
  },
  {
    text: 'Deandra Olivera'
  },
  {
    text: 'Yesenia Mossey'
  },
  {
    text: 'Santiago Vandemark'
  },
  {
    text: 'Selene Eye'
  },
  {
    text: 'Lester Anding'
  },
  {
    text: 'Hortensia Italiano'
  },
  {
    text: 'Fidelia Detrick'
  },
  {
    text: 'Nu Bushway'
  },
  {
    text: 'Maye Plata'
  },
  {
    text: 'Jose Woodman'
  },
  {
    text: 'Season Dunmore'
  },
  {
    text: 'Sal Debonis'
  },
  {
    text: 'Ingeborg Bizier'
  },
  {
    text: 'Bill Pritts'
  },
  {
    text: 'Yanira Hoss'
  },
  {
    text: 'Suzette Bettinger'
  },
  {
    text: 'Thelma Espana'
  },
  {
    text: 'Rosina Sgro'
  },
  {
    text: 'Roseline Elamin'
  },
  {
    text: 'Genna Coty'
  },
  {
    text: 'Vincenzo Glotfelty'
  },
  {
    text: 'Wava Fellers'
  },
  {
    text: 'Loise Radigan'
  },
  {
    text: 'Flo Noonan'
  },
  {
    text: 'Mathew Delavega'
  },
  {
    text: 'Joey Mccullers'
  },
  {
    text: 'Lacie Steigerwald'
  },
  {
    text: 'Iliana Overcash'
  },
  {
    text: 'Angle Duty'
  },
  {
    text: 'Mariette Mckissack'
  },
  {
    text: 'Camila Summerfield'
  },
  {
    text: 'Josie Stribling'
  },
  {
    text: 'Ivana Acord'
  },
  {
    text: 'Clemencia Beauvais'
  },
  {
    text: 'Stevie Heckel'
  },
  {
    text: 'Eboni Arvie'
  },
  {
    text: 'Rochelle Allsop'
  },
  {
    text: 'Nila Raasch'
  },
  {
    text: 'Gilbert Blakemore'
  }
]