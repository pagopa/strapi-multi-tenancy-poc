module.exports = {
    apps: [
      {
        name: 'firma',
        cwd: '/Users/OmicronIt/www/strapi-multitenancy',
        script: 'npm',
        args: 'start',
        env: {
          NODE_ENV: 'firma',
          HOST_PORT_FIRMA: 4338,
          DOMAIN_URL: 'firma.example.com'
        }
      },
      {
        name: 'pdnd',
        cwd: '/Users/OmicronIt/www/strapi-multitenancy',
        script: 'npm',
        args: 'start',
        env: {
          NODE_ENV: 'pdnd',
          HOST_PORT_PDND: 4339,
          DOMAIN_URL: 'pdnd.example.com'
        }
      },
      {
        name: 'send',
        cwd: '/Users/OmicronIt/www/strapi-multitenancy',
        script: 'npm',
        args: 'start',
        env: {
          NODE_ENV: 'send',
          HOST_PORT_SEND: 4340,
          DOMAIN_URL: 'send.example.com'
        }
      }
    ]
};