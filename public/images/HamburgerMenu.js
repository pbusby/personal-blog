import * as React from "react";
// npx @svgr/cli -- public/images/hamburger_menu.svg

const SvgHamburgerMenu = (props) => (
  <svg viewBox="0 0 80 70" width={25} height={25} {...props}>
    <path fill={props.fill} d="M0 0h100v15H0zM0 30h100v15H0zM0 60h100v15H0z" style={{
      transition: "all 0.50s linear"
    }} />
  </svg>
);

export default SvgHamburgerMenu;