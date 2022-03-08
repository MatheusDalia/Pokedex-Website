"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _models = require("../models");

var _Pokemon = require("../DTOs/Pokemon");

var _dec, _class;

let UserRepository = (_dec = (0, _typeorm.EntityRepository)(_models.Pokemon), _dec(_class = class UserRepository extends _typeorm.Repository {
  async findById(id) {
    try {
      const user = await this.findOne(id);

      if (!user) {
        return false;
      }

      return user;
    } catch (error) {
      return error.severity || error;
    }
  }

  async patch(id, user) {
    try {
      const auxUser = { ...user
      };
      await _Pokemon.UpdatePokemon.validateAsync(auxUser);
      await this.update(id, auxUser);
      const updatedUser = await this.findOne(id);
      return updatedUser;
    } catch (error) {
      return error;
    }
  }

}) || _class);
exports.default = UserRepository;