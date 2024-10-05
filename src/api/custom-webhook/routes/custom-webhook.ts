export default {
  routes: [
    {
      method: "POST",
      path: "/custom-webhook",
      handler: "custom-webhook.overwriteWebhook",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
