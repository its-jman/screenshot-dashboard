import React, { ReactNode } from "react";

type IWrapProps = {
  children: ReactNode;
  width: number;
  staticWidth?: boolean;
};

const Wrap = (props: IWrapProps) => {
  const { children, width, staticWidth } = props;

  const styles: React.CSSProperties = {
    margin: "0 auto"
  };

  if (staticWidth) styles.width = width;
  else styles.maxWidth = width;

  return <div style={styles}>{children}</div>;
};

export default Wrap;
