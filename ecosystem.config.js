module.exports = {
  apps: [
    {
      name: "api.event.socket.agentsoncloud.com",
      script: "./bin/www",
      instances: "1",
      exec_mode: "cluster",
    },
  ],
};




