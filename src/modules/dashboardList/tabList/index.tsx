import React, { useCallback, useEffect, useState } from "react";
import { IoMdFolderOpen, IoMdTrash } from "react-icons/io";

import { getClassNames as gcn } from "src/utils";

import {
  Dashboard as IDashboard,
  Tab as ITab
} from "src/state/stores/dashboards";
import { RegionList } from "../regionList";
import { FilterList } from "../filterList";

import styles from "./_tabList.module.css";
import AnimateHeight from "react-animate-height";

const Tab = ({
  tab,
  parentCollapsed
}: {
  tab: ITab;
  parentCollapsed: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const toggleRegions = useCallback(() => {
    setOpen(!open);
  }, [open]);

  useEffect(() => {
    if (parentCollapsed) setOpen(false);
  }, [parentCollapsed]);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <IoMdFolderOpen size={40} className={gcn(styles.icon, styles.folder)} />
        <div className={styles.itemText}>
          <button className={styles.tabName}>{tab.name}</button>
          <button className={styles.regionToggle} onClick={toggleRegions}>
            {open ? "- Hide Regions" : "+ Show Regions"}
          </button>
        </div>
        <FilterList tab={tab} />
        <button className={gcn(styles.deleteTab, styles.icon)}>
          <IoMdTrash size={26} />
        </button>
      </div>
      <RegionList tab={tab} open={open} />
    </div>
  );
};

export const TabList = ({
  dashboard,
  open
}: {
  dashboard: IDashboard;
  open: boolean;
}) => {
  return (
    <AnimateHeight height={open ? "auto" : 0} duration={500} easing={"ease"}>
      <div
        className={gcn(styles.listContainer, open ? styles.open : undefined)}
      >
        {dashboard.tabs.length === 0 ? (
          <div className={styles.headerContainer}>{"No tabs found..."}</div>
        ) : (
          dashboard.tabs.map((tab) => (
            <Tab key={tab.name} tab={tab} parentCollapsed={!open} />
          ))
        )}
        <div className={styles.container}>
          <div className={styles.headerContainer}>
            <button className={styles.addTab}>{"+ Add Tab"}</button>
          </div>
        </div>
      </div>
    </AnimateHeight>
  );
};
