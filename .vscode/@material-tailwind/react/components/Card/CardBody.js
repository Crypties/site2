function _extends() {
    return (_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }).apply(this, arguments);
}
import React from "react";
import classnames from "classnames";
import objectsToString from "../../utils/objectsToString";
import { useTheme } from "../../context/theme";
import { propTypesClassName, propTypesChildren } from "../../types/components/card";
var CardBody = React.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "className",
        "children"
    ]), cardBody = useTheme().cardBody, defaultProps = cardBody.defaultProps, base = cardBody.styles.base;
    className = null != className ? className : defaultProps.className;
    var cardBodyClasses = classnames(objectsToString(base), className);
    return React.createElement("div", _extends({}, rest, {
        ref: ref,
        className: cardBodyClasses
    }), children);
});
CardBody.propTypes = {
    className: propTypesClassName,
    children: propTypesChildren
}, CardBody.displayName = "MaterialTailwind.CardBody";
export default CardBody;
export { CardBody };
