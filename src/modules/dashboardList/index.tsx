import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { IoMdArrowDropright, IoMdMore } from "react-icons/io";

import { getClassNames as gcn } from "src/utils";
import {
  Dashboard as IDashboard,
  DashboardContext
} from "src/state/stores/dashboards";

import styles from "./_dashboardList.module.css";
import { TabList } from "./tabList";

const Dashboard = ({ dashboard }: { dashboard: IDashboard }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={styles.headerContainer}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <IoMdArrowDropright
          className={gcn(
            styles.icon,
            styles.arrow,
            open ? styles.rotated : null
          )}
          size={40}
        />
        <div className={styles.itemText}>
          <h3>{dashboard.name}</h3>
          <span>{dashboard.id}</span>
        </div>
        <div className={gcn(styles.icon, styles.more)}>
          <IoMdMore className={gcn(styles.rotated)} size={40} />
        </div>
      </div>
      <TabList dashboard={dashboard} open={open} />
    </div>
  );
};

const DashboardList = observer(() => {
  const dashboardContext = useContext(DashboardContext);

  return (
    <div className={styles.listContainer}>
      {Object.keys(dashboardContext.dashboards).length === 0
        ? "No dashboards found..."
        : Object.values(dashboardContext.dashboards).map((dashboard) => (
            <Dashboard key={dashboard.id} dashboard={dashboard} />
          ))}
    </div>
  );
});

export default DashboardList;
