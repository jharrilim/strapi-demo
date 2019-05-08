'use strict';

/**
 * Pizza.js controller
 *
 * @description: A set of functions called "actions" for managing `Pizza`.
 */

module.exports = {

  /**
   * Retrieve pizza records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.pizza.search(ctx.query);
    } else {
      return strapi.services.pizza.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a pizza record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.pizza.fetch(ctx.params);
  },

  /**
   * Count pizza records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.pizza.count(ctx.query, populate);
  },

  /**
   * Create a/an pizza record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.pizza.add(ctx.request.body);
  },

  /**
   * Update a/an pizza record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.pizza.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an pizza record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.pizza.remove(ctx.params);
  }
};
