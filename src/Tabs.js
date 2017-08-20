import React from "react";
import { GENERIC_TAB } from "./utils";

function Tab({ handleClick, isActive, name }) {
  return (
    <li onClick={handleClick} className={isActive ? "active" : null}>
      <a>
        {name}
      </a>
    </li>
  );
}

function Tabs({ activeTab, tabs, onTabChange }) {
  let relTabs = tabs.filter(({ tabID }) => tabID !== GENERIC_TAB);
  if (relTabs.length > 0) {
    return (
      <div className="form-group field field-object">
        <div className="form-group field field-object col-md-12">
          <ul className="nav nav-pills">
            {relTabs.map(({ tabID, name }, i) =>
              <Tab
                key={i}
                name={name ? name : tabID}
                isActive={activeTab === tabID}
                handleClick={() => onTabChange(tabID)}
              />
            )}
          </ul>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

export default Tabs;
