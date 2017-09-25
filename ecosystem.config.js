module.exports = {
    apps: [{
      name: 'cecs378',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-13-59-12-101.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/oranges127697.pem',
        ref: 'origin/master',
        repo: 'https://github.com/JosetheJedi/cecs378.git',
        path: '/home/ubuntu/cecs378',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }