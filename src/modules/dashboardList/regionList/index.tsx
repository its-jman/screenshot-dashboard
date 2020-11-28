import React from "react";
import { Region as IRegion, Tab as ITab } from "src/state/stores/dashboards";
import { IoMdCreate } from "react-icons/io";

import { getClassNames as gcn } from "src/utils";

import styles from "./_regionList.module.css";
import AnimateHeight from "react-animate-height";

const Region = ({ region }: { region: IRegion }) => {
  return (
    <div className={styles.regionContainer}>
      <span className={styles.regionName}>{region.name}</span>
      <span className={styles.regionBounds}>
        {"[ "}
        <span>
          {region.bounds[0]}
          {", "}
          {region.bounds[1]}
        </span>
        {" ]"}
      </span>
      <button className={styles.editRegion}>
        <IoMdCreate size={24} />
      </button>
    </div>
  );
};

export const RegionList = ({ tab, open }: { tab: ITab; open: boolean }) => {
  return (
    <AnimateHeight height={open ? "auto" : 0} duration={500} easing={"ease"}>
      <div className={gcn(styles.container, open ? styles.open : undefined)}>
        <div className={styles.innerContainer}>
          {tab.regions.length === 0 ? (
            <span className={styles.noRegions}>{"No regions found..."}</span>
          ) : (
            <div className={styles.regionListContainer}>
              {tab.regions.map((region, i) => (
                <Region key={i} region={region} />
              ))}
            </div>
          )}
          <button className={styles.addRegion}>{"+ Add Region"}</button>
        </div>
      </div>
    </AnimateHeight>
  );
};
