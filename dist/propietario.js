"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Propietario = /*#__PURE__*/function () {
  function Propietario(nombre, direccion, telefono) {
    _classCallCheck(this, Propietario);

    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
  }

  _createClass(Propietario, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nombre) {
      this._nombre = nombre;
    }
  }, {
    key: "direccion",
    get: function get() {
      return this._direccion;
    },
    set: function set(direccion) {
      this._direccion = direccion;
    }
  }, {
    key: "telefono",
    get: function get() {
      return this._telefono;
    },
    set: function set(telefono) {
      this._telefono = telefono;
    }
  }]);

  return Propietario;
}();

exports["default"] = Propietario;