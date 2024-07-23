import React from "react";
const sizes = {
texts:"text-[32px] font-medium lg:text-[27px] md: text-[30px] sm:text-[28px]",
headingxs:"text-[16px] font-semibold lg:text-[13px]",
headings:"text- [18px] font-bold lg:text-[15px]",
headingmd:"text -[20px] font-bold lg:text-[17px]",
headingig:"text-[24px] font-extrabold lg:text-[20px] md: text-[22px]",
headingxl:"text- [32px] font-semibold 1g:text-[27px] md:text-[30px] sm:text-[28px]",
heading2x1:"text- [36px] font-bold lg:text-[30px] md: text- [34px] sm:text-[32px]",
heading3xl:"text-[40px] font-bold lg:text-[34px] md:text-[38px] sm: text-[36px]",
heading4xl:"text-[55px] font-bold lg:text-[46px] md: text-[47px] sm: text-[41px]",
heading5xl:"text- [64px] font-bold 1g:text-[64px] md: text-[48px]",
heading6xl:"text-[96px] font-bold Ig:text-[96px] md:text-[48px]",
};

const Heading = ({ children, className ="", size="heading5xl", as, ...restProps }) => {
const Component = as || "h6";

return (
<Component className={`text-blue_gray-900_01 font-nunito ${className} ${sizes[size]}` } {...restProps}>
{children}
</Component>
);
};
export { Heading };