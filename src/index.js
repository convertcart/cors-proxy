const cors_proxy = require('cors-anywhere');
const ENV = process.env;

const port = ENV.PORT || 3100;
const originWhitelist = (process.env.ORIGINS || '')
                          .split(/,/)
                          .filter(o => o);

cors_proxy.createServer({
    originWhitelist,
    requireHeader: ['origin', 'x-requested-with'],
    corsMaxAge: 600,
}).listen(port, '0.0.0.0', () => console.log(`listening.on ${port}`));
