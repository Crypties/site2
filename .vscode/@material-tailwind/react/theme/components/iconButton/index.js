import buttonFilled from "../button/buttonFilled";
import buttonGradient from "../button/buttonGradient";
import buttonOutlined from "../button/buttonOutlined";
import buttonText from "../button/buttonText";
import { propTypesVariant, propTypesSize, propTypesColor } from "../../../types/components/button";
export var iconButton = {
    defaultProps: {
        variant: "filled",
        size: "md",
        color: "blue",
        fullWidth: !1,
        ripple: !0,
        className: ""
    },
    valid: {
        variants: propTypesVariant,
        sizes: propTypesSize,
        colors: propTypesColor
    },
    styles: {
        base: {
            display: "inline-grid",
            placeItems: "place-items-center",
            userSelect: "none",
            fontFamily: "font-sans",
            fontWeight: "font-medium",
            textAlign: "text-center",
            textTransform: "uppercase",
            transition: "transition-all"
        },
        sizes: {
            sm: {
                width: "w-8",
                maxWidth: "max-w-[32px]",
                height: "h-8",
                maxHeight: "max-h-[32px]",
                borderRadius: "rounded-lg",
                fontSize: "text-xs"
            },
            md: {
                width: "w-10",
                maxWidth: "max-w-[40px]",
                height: "h-10",
                maxHeight: "max-h-[40px]",
                borderRadius: "rounded-lg",
                fontSize: "text-xs"
            },
            lg: {
                width: "w-12",
                maxWidth: "max-w-[48px]",
                height: "h-12",
                maxHeight: "max-h-[48px]",
                borderRadius: "rounded-lg",
                fontSize: "text-sm"
            }
        },
        variants: {
            filled: buttonFilled,
            gradient: buttonGradient,
            outlined: buttonOutlined,
            text: buttonText
        }
    }
};
export default iconButton;
