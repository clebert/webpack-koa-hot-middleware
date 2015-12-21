import createExpressMiddleware from 'webpack-hot-middleware'

export default compiler => {
  const expressMiddleware = createExpressMiddleware(compiler)

  return function * hotMiddleware (next) {
    const {req, res} = this

    yield done => {
      expressMiddleware(req, res, () => {
        done(null)
      })
    }

    yield next
  }
}
