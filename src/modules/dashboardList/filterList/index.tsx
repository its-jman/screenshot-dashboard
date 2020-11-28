import React from "react";
import { Filter as IFilter, Tab as ITab } from "src/state/stores/dashboards";
import { CP_PRODUCTS } from "src/constants";

import styles from "./_filterList.module.css";

const Filter = ({ filter }: { filter: IFilter }) => {
  return (
    <div className={styles.itemText}>
      <h6>
        {filter.name}
        {": "}
      </h6>
      <div>
        {filter.values.map((value, i) => {
          const product = CP_PRODUCTS[value];

          return [
            i > 0 && ", ",
            <span
              key={i}
              className={
                product !== undefined ? styles.productName : styles.filterValue
              }
              style={{
                color: product !== undefined ? product.color : undefined
              }}
            >
              {value}
            </span>
          ];
        })}
      </div>
    </div>
  );
};

export const FilterList = ({ tab }: { tab: ITab }) => {
  return (
    <div className={styles.filtersContainer}>
      {tab.filters.map((filter) => (
        <Filter key={filter.name} filter={filter} />
      ))}
    </div>
  );
};
