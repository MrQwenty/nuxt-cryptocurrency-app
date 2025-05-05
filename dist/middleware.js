const middleware = {}

middleware['geo-redirect'] = require('../middleware/geo-redirect.ts')
middleware['geo-redirect'] = middleware['geo-redirect'].default || middleware['geo-redirect']

export default middleware
