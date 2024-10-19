const { cpus } = require('node:os')

const cpuLen = cpus().length

module.exports = {
  apps: [
    {
      name: 'test',
      script: './dist/main.js',
      autorestart: true,
      watch: false,
      instances: 1,
      max_memory_restart: '600M',
      args: '',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
      },
    },
  ],
}
