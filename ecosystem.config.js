module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'boilerplate',
      script    : './server.js',
      watch     : true,
      cwd: '/home/deploy/universal-boilerplate',
      env: {
      },
      env_production : {
        NODE_ENV: 'production'
      },
      interpreter: '/home/deploy/universal-boilerplate/source/node_modules/.bin/babel-node'
    },

    // Second application
    //{
      //name      : 'WEB',
      //script    : 'web.js'
    //}
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'deploy',
      host : '54.238.209.90',
      ref  : 'origin/master',
      repo : 'git@github.com:cyclehq/universal-boilerplate.git',
      path : '/home/deploy/universal-boilerplate',
      'post-deploy' : 'yarn install && yarn run build && pm2 reload ecosystem.config.js --env production'
    },
  }
};
