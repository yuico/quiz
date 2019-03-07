import React from "react";
import PageTemplate from "../components/common/PageTemplate";
import ListWrapper from "../components/list/ListWrapper";
import Listcontainer from "../containers/list/ListContainer";

const ListPage = () => {
  return (
    <PageTemplate>
      <ListWrapper>
        <Listcontainer />
      </ListWrapper>
    </PageTemplate>
  );
};

export default ListPage;
