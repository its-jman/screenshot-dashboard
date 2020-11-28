import React, { useContext } from "react";
import Helmet from "react-helmet";
import { IconContext } from "react-icons";
import { UIContext } from "src/state/stores";
import Wrap from "src/components/wrap";
import { observer } from "mobx-react-lite";

const BaseLayout = observer(({ children }) => {
  const uiStore = useContext(UIContext);

  return (
    <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
      <Helmet title={uiStore.title} />
      <div style={{ paddingBottom: "150px" }}>
        <Wrap width={1160}>{children}</Wrap>
      </div>
    </IconContext.Provider>
  );
});

export default BaseLayout;
