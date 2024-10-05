/**
 * A set of functions called "actions" for `custom-webhook`
 */

export default {
  overwriteWebhook: async (ctx) => {
    try {
      await strapi
        .service("api::custom-webhook.custom-webhook")
        .overwriteWebhook(ctx.request.body);

      ctx.body = ctx.request.body;
    } catch (err) {
      ctx.badRequest("Custom webhook controller error", { moreDetails: err });
    }
  },
};
