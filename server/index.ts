import { createServer } from 'http'
import { parse } from 'url'
import * as next from 'next'
import currentprice from '../services/prices-service';

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

async function dataR() {
  const data = await currentprice();
  console.log(`Called from within server` + data);
  console.log(data);
}
dataR().then(d => console.log(d), e => console.log(e));
app.prepare()
.then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/a') {
      app.render(req, res, '/a', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query)
    } else {
      handle(req, res, parsedUrl)
    }
  })
  .listen(port)
})
