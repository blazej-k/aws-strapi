/**
 * custom-webhook service
 */

export default () => ({
  overwriteWebhook: async () => {
    await fetch(process.env.GITHUB_WEBHOOK_LINK, {
      body: JSON.stringify({ event_type: "content-update" }),
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
      method: "POST",
    });
  },
});
