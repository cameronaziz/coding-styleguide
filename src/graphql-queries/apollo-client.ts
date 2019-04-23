import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Just building an apollo client to connect to graphcool.
const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjusxtfol2b3301843yg75vee' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default client
