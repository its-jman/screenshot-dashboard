import { observable } from "mobx";
import { createContext } from "react";

export class Region {
  @observable name: string;
  @observable bounds: [number, number];

  constructor(name: string, bounds: [number, number]) {
    this.name = name;
    this.bounds = bounds;
  }
}

export class Filter {
  @observable name: string;
  @observable values: string[];

  constructor(name: string, values: string[]) {
    this.name = name;
    this.values = values;
  }
}

export class Tab {
  @observable name: string;
  @observable filters: Filter[];
  @observable regions: Region[];

  constructor(name: string, filters: Filter[] = [], regions: Region[] = []) {
    this.name = name;
    this.filters = filters;
    this.regions = regions;
  }
}

export class Dashboard {
  @observable name: string;
  @observable id: string;

  @observable tabs: Tab[];

  constructor(name: string, id: string, tabs: Tab[] = []) {
    this.id = id;
    this.tabs = tabs;

    this.name = name; /*fetchDashboardName(id)*/
  }
}

class DashboardsStore {
  @observable dashboards: { [key: string]: Dashboard } = {};

  constructor() {
    const demo = [
      new Dashboard("Custom HR Report", "123456", [
        new Tab("Summary", [], [
          new Region("Monthly One-Time GM", [190, 590]),
          new Region("Pie Chart", [590, 890]),
        ]),
        new Tab(
          "Total GM",
          [
            new Filter("Project Team", ["CivicHR", "CivicClerk"]),
            new Filter("Project Lead", ["Adam Block"]),
            new Filter("Project Suite", ["CivicEngage"])
          ],
          [
            new Region("Monthly One-Time GM", [190, 590]),
            new Region("Pie Chart", [590, 890]),
            new Region("Monthly One-Time GM", [190, 590]),
            new Region("Pie Chart", [590, 890]),
            new Region("Monthly One-Time GM", [190, 590])
          ]
        )
      ]),
      new Dashboard("Temporary Onboarding", "654321", [
        new Tab("Summary", [
          new Filter("Project Suite", ["CivicEngage"])
        ], [
          new Region("Monthly One-Time GM", [190, 590]),
          new Region("Pie Chart", [590, 890]),
        ]),
      ]),
      new Dashboard("COVID-19 Resource Expenditures", "789456"),
      new Dashboard("Global Financial Situation", "654987")
    ];

    for (const dash of demo) {
      this.dashboards[dash.id] = dash;
    }
  }
}

const dashboardStore = new DashboardsStore();
export const DashboardContext = createContext(dashboardStore);
