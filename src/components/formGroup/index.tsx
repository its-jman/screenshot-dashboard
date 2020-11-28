import React from "react";

import styles from "./formGroup.module.css";

type FormGroupProps = {
  children: React.ReactNode;
  name: string;
  description: string;
};

const FormGroup = (props: FormGroupProps) => {
  const { name, description, children } = props;

  return (
    <section>
      <hr />
      <div className={styles.container}>
        <div className={styles.info}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.desc}>{description}</p>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
};

export default FormGroup;
