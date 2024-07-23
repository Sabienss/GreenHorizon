import React from "react";

const sizes = {
textxs:"text- [24px] font-normal not-italic lg:text-[20px] md:text- [22px]",
textmd:"text- [50px] font-normal not-italic lg:text-(42px] md:text-[46px] sm:text-[40px]",
textlg:"text -[180px] font-normal not-italic lg:text-[180px] md:text-[48px]",
textxl:"text- [200px] font-normal not-italic lg:text-[200px] md:text-[48px]",
};
const Text = ({ children, className ="", as, size = "textxs", ...restProps }) => {
const Component = as ||"p"；
return {
<Component className={`text-deep_orange-300 font-luckiestguy ${className} ${sizes[size]}`} {...restProps}>
{children}
</Component>
);
};

export { Text };