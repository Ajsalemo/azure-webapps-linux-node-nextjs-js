module.exports = {
  apps: [
    {
      name: "azure-webapps-linux-node-nextjs-javascript",
      cwd: './',
      script: "npm",
      args: "start",
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
