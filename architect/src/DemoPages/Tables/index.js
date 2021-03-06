import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Tables

import DataTableBasic from "./DataTables/Examples/Basic";
import DataTableCustomComps from "./DataTables/Examples/CustomComps";
import DataTableEditable from "./DataTables/Examples/EditableTable";
import DataTableFixedHeader from "./DataTables/Examples/FixedHeader";
import DataTablePivoting from "./DataTables/Examples/Pivoting";
import RegularTables from "./RegularTables";
import GridTables from "./GridTables";

// Layout

import AppHeader from "../../AdminDashboardApp/AppHeader";
import AppSidebar from "../../AdminDashboardApp/AppSidebar";
import AppFooter from "../../AdminDashboardApp/AppFooter";

// Theme Options

import ThemeOptions from "../../AdminDashboardApp/ThemeOptions";

const Tables = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          {/* Tables */}

          <Route path={`${match.url}/data-tables`} component={DataTableBasic} />
          <Route path={`${match.url}/datatables-custom-components`} component={DataTableCustomComps}/>
          <Route path={`${match.url}/datatables-editable`} component={DataTableEditable}/>
          <Route path={`${match.url}/datatables-fixed-header`} component={DataTableFixedHeader}/>
          <Route path={`${match.url}/datatables-aggregation`} component={DataTablePivoting}/>
          <Route path={`${match.url}/regular-tables`} component={RegularTables}/>
          <Route path={`${match.url}/grid-tables`} component={GridTables} />
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Tables;
