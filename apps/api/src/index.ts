import { Hono } from 'hono'

const app = new Hono()

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
