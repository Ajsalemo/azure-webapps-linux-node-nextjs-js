module.exports = {
  apps: [
    {
      name: "azure-webapps-linux-node-nextjs-javascript",
      script: "./node_modules/next/dist/bin/next start",
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
