import React from "react";
import Proptypes from "prop-types";

const shapes = {
round: "rounded- [50px]",
square: "rounded-[opx]",
};

const variants = {
fill: {
yellow_900: "bg-yellow-900 text-white-a700",
},
};

const sizes = {

xs: "h-[48px] px-7 text-[16px]",
md: "h- [100px]",
sm: "h- [100px] px-[34px] text-[40px]",
xl: "h- [112px]",
lg: "h- [112px] px-[34px] text-[40px]",

};

const Button = ({

children,
className= "",
leftIcon,
righticon,
shape,
variant = "fill",
size = "lg",
color = "yellow_900",
... restProps
}) => {
return (
<button
className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${(shape && shapes[shape]) || "*"} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?. [color]) || ""}`}
{...restProps}
>
{!!leftIcon && leftIcon}
{children}
{!!righticon && rightIcon}
</button>
);
};
Button.propTypes = {
className: Proptypes.string,
children: Proptypes.node, 
leftIcon: Proptypes.node,
rightIcon: Proptypes.node, 
shape: Proptypes.oneOf(["round","square"]),
size: Proptypes.oneOf (["xs", "md","sm","xl", "lg"]),
variant: Proptypes.oneOf(["fill"]),
color: Proptypes.oneOf (["yellow_900"]),
};

export { Button };