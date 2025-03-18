/**
 * custom-webhook service
 */

export default () => ({
  overwriteWebhook: async () => {
    await fetch(process.env.AWS_AMPLIFY_WEBOOK_URL, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  },
});
