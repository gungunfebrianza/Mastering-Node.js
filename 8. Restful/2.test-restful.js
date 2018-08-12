const fetch = require('node-fetch')

const r = async (url, method) => (await fetch(`http://localhost:9999${url}`, {method}).then(r => r.json()))
const log = (...obj) => (obj.forEach(o => console.dir(o, {colors: true})))

async function test() {
  const users = await r('/users/all', 'get')
  const {id} = users[0]
  const getById = await r(`/users/${id}`, 'get')
  const updateById = await r(`/users/${id}=John`, 'put')
  const deleteById = await r(`/users/${id}`, 'delete')
  const addUsr = await r(`/users/Smith`, 'post')
  const getAll = await r('/users/all', 'get')

  log('[GET] users:', users)
  log(`[GET] a user with id="${id}":`, getById)
  log(`[PUT] a user with id="${id}":`, updateById)
  log(`[POST] a new user:`, addUsr)
  log(`[DELETE] a user with id="${id}":`, deleteById)
  log(`[GET] users:`, getAll)
}

test()
