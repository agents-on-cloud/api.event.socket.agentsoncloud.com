module.exports = {
  apps: [
    {
      name: "api.event.notifier.agentsoncloud.com_Release_3",
      script: "./bin/www",
      instances: "6",
      exec_mode: "cluster",
    },
  ],
};




