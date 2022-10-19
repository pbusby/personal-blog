import * as React from "react";
// npx @svgr/cli -- public/images/hamburger_menu.svg

const SvgHamburgerMenu = (props) => (
  <svg viewBox="0 0 80 70" width={23} height={23} {...props}>
    <path fill={"var(--color-text)"} d="M0 0h100v15H0zM0 30h100v15H0zM0 60h100v15H0z" />
  </svg>
);

export default SvgHamburgerMenu;