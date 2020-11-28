import React from "react";
import { A } from "hookrouter";
import styles from "src/layouts/_base.module.css";
import { FiPlus } from "react-icons/all";
import FormGroup from "src/components/formGroup";
import DashboardList from "src/modules/dashboardList";

const Screenshots = () => {
  return (
    <div>
      <button className={styles.button}>
        <FiPlus size={32} style={{ marginRight: 8 }} />
        {"Add Dashboard"}
      </button>
      <FormGroup
        name={"Dashboard List"}
        description={
          "The place to put introductory information and minor details."
        }
      >
        <DashboardList />
      </FormGroup>
    </div>
  );
};

export default Screenshots;
