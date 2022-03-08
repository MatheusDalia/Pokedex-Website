"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let Pokemon = (_dec = (0, _typeorm.Entity)(), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)('uuid'), _dec3 = (0, _typeorm.Column)('text'), _dec4 = (0, _typeorm.Column)(), _dec5 = (0, _typeorm.Column)('text'), _dec6 = (0, _typeorm.Column)(), _dec7 = (0, _typeorm.Column)('text'), _dec8 = (0, _typeorm.Column)(), _dec9 = (0, _typeorm.Column)(), _dec10 = (0, _typeorm.Column)(), _dec11 = (0, _typeorm.Column)('text'), _dec12 = (0, _typeorm.Column)('text'), _dec13 = (0, _typeorm.Column)('text'), _dec14 = (0, _typeorm.Column)('text'), _dec15 = (0, _typeorm.Column)(), _dec16 = (0, _typeorm.Column)(), _dec17 = (0, _typeorm.Column)(), _dec18 = (0, _typeorm.Column)(), _dec19 = (0, _typeorm.Column)(), _dec20 = (0, _typeorm.Column)(), _dec21 = (0, _typeorm.Column)(), _dec22 = (0, _typeorm.Column)(), _dec23 = (0, _typeorm.Column)(), _dec24 = (0, _typeorm.Column)(), _dec25 = (0, _typeorm.Column)(), _dec26 = (0, _typeorm.Column)(), _dec27 = (0, _typeorm.Column)(), _dec28 = (0, _typeorm.Column)(), _dec29 = (0, _typeorm.Column)(), _dec30 = (0, _typeorm.Column)(), _dec31 = (0, _typeorm.Column)(), _dec(_class = (_class2 = class Pokemon {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "name", _descriptor2, this);

    _initializerDefineProperty(this, "pokemon_number", _descriptor3, this);

    _initializerDefineProperty(this, "img_name", _descriptor4, this);

    _initializerDefineProperty(this, "generation", _descriptor5, this);

    _initializerDefineProperty(this, "evolution_stage", _descriptor6, this);

    _initializerDefineProperty(this, "evolved", _descriptor7, this);

    _initializerDefineProperty(this, "family_id", _descriptor8, this);

    _initializerDefineProperty(this, "cross_gen", _descriptor9, this);

    _initializerDefineProperty(this, "type1", _descriptor10, this);

    _initializerDefineProperty(this, "type2", _descriptor11, this);

    _initializerDefineProperty(this, "weather1", _descriptor12, this);

    _initializerDefineProperty(this, "weather2", _descriptor13, this);

    _initializerDefineProperty(this, "stat_total", _descriptor14, this);

    _initializerDefineProperty(this, "atk", _descriptor15, this);

    _initializerDefineProperty(this, "def", _descriptor16, this);

    _initializerDefineProperty(this, "sta", _descriptor17, this);

    _initializerDefineProperty(this, "legendary", _descriptor18, this);

    _initializerDefineProperty(this, "acquirable", _descriptor19, this);

    _initializerDefineProperty(this, "spawns", _descriptor20, this);

    _initializerDefineProperty(this, "regional", _descriptor21, this);

    _initializerDefineProperty(this, "raidable", _descriptor22, this);

    _initializerDefineProperty(this, "hatchable", _descriptor23, this);

    _initializerDefineProperty(this, "shiny", _descriptor24, this);

    _initializerDefineProperty(this, "nest", _descriptor25, this);

    _initializerDefineProperty(this, "news", _descriptor26, this);

    _initializerDefineProperty(this, "not_gettable", _descriptor27, this);

    _initializerDefineProperty(this, "future_evolve", _descriptor28, this);

    _initializerDefineProperty(this, "full_cp_40", _descriptor29, this);

    _initializerDefineProperty(this, "full_cp_39", _descriptor30, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pokemon_number", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "img_name", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "generation", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "evolution_stage", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "evolved", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "family_id", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "cross_gen", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "type1", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "type2", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "weather1", [_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "weather2", [_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "stat_total", [_dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "atk", [_dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "def", [_dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "sta", [_dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "legendary", [_dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "acquirable", [_dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "spawns", [_dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "regional", [_dec22], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "raidable", [_dec23], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "hatchable", [_dec24], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "shiny", [_dec25], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "nest", [_dec26], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "news", [_dec27], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "not_gettable", [_dec28], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "future_evolve", [_dec29], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "full_cp_40", [_dec30], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "full_cp_39", [_dec31], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.default = Pokemon;