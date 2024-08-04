import { Hono } from 'hono'

const app = new Hono()

console.log('[DEBUG] The TEST_ENV environment variable is:', process.env.TEST_ENV)

app.get('/', async (c) => {
  const example = {
    hello: process.env.TEST_ENV
  }

  return c.json(example)
})

export default {
  port: 3001,
  fetch: app.fetch,
}
