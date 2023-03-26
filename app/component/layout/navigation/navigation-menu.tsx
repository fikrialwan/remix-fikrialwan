import { css } from "@emotion/css";
import theme from "~/styles/theme";
import { NavLink } from "@remix-run/react";
import { navigationData } from "~/data";
import type { NavigationDataType } from "~/data";
import mq from "~/styles/breakpoints";

interface NavigationMenuProps {
  isNavToggleActive: Boolean;
  onClick: Function;
}

export default function NavigationMenu({
  isNavToggleActive = false,
  onClick,
}: NavigationMenuProps) {
  return (
    <ul
      className={css`
        display: ${isNavToggleActive ? "flex" : "none"};
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        gap: 50px;
        list-style: none;
        ${mq[0]} {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
        }
      `}
    >
      {navigationData.map(
        ({ title, link }: NavigationDataType, key: number) => {
          return (
            <li key={key}>
              <NavLink
                to={link}
                onClick={() => onClick()}
                className={({ isActive }) => css`
                  text-decoration: none;
                  font-size: 16px;
                  font-weight: 600;
                  color: ${isActive ? theme.colors.white : theme.colors.grey};
                `}
                end
              >
                {title}
              </NavLink>
            </li>
          );
        }
      )}
    </ul>
  );
}
