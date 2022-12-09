import React from 'react';
import {LeftSidebar} from "widgets/LeftSidebar";
import {RightSidebar} from "widgets/RightSidebar";
import {AppRoute} from "./providers/RouteProvider";

export const App = () => {
  return (
      <div className={'app'}>
          <LeftSidebar />
          <div className={'timeline'} style={{width: '600px'}}>
              <AppRoute />
          </div>
          <RightSidebar />
      </div>
  );
};
