import { RoutesContext } from "../../contexts/RouteContext";
import { useContext } from "react";

import { House, MagnifyingGlass, UserFocus, UsersThree } from "phosphor-react";

import LogoAside from "../../assets/logo-endeavour-aside.png";
import { AsideContent, AsideNav, NavButton } from "./styles";

export function HomeSideBar() {
  const { defineRoute } = useContext(RoutesContext);

  return (
    <AsideContent>
      <aside className="asideContainer">
        <AsideNav>
          <NavButton onClick={() => defineRoute("dashboard")}>
            <House size={25} />
            <span>Home</span>
          </NavButton>
          <NavButton onClick={() => defineRoute("open-positions")}>
            <MagnifyingGlass size={25} />
            <span>Open Positions</span>
          </NavButton>
          <NavButton onClick={() => defineRoute("profile")}>
            <UserFocus size={25} />
            <span>Candidates</span>
          </NavButton>
          <NavButton onClick={() => defineRoute("associates")}>
            <UsersThree size={25} />
            <span>Associates</span>
          </NavButton>
        </AsideNav>
        <div className="endeavourAsideLogo">
          <img src={LogoAside.src} alt="" />
        </div>
      </aside>
    </AsideContent>
  );
}
