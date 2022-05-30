function _arrayLikeToArray(arr, len) {
    (null == len || len > arr.length) && (len = arr.length);
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
import PropTypes from "prop-types";
import { propTypesColors } from "../generic";
export var propTypesVariant = [
    "filled",
    "gradient"
];
export var propTypesColor = [
    "transparent",
    "white"
].concat(function(arr) {
    return function(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }(arr) || function(iter) {
        if ("undefined" != typeof Symbol && null != iter[Symbol.iterator] || null != iter["@@iterator"]) return Array.from(iter);
    }(arr) || function(o, minLen) {
        if (o) {
            if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if ("Object" === n && o.constructor && (n = o.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }
    }(arr) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}(propTypesColors));
export var propTypesShadow = PropTypes.bool;
export var propTypesBlurred = PropTypes.bool;
export var propTypesFullWidth = PropTypes.bool;
export var propTypesClassName = PropTypes.string;
export var propTypesChildren = PropTypes.node.isRequired;
