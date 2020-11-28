import { action, computed, observable } from "mobx";
import { createContext } from "react";

class UIStore {
  @observable private _title: string | null = null;

  @action setTitle(title: string | null) {
    if (title === "") title = null;
    this._title = title;
  }

  @computed get title() {
    if (this._title === null) return "Screenshot UI";
    else return `${this._title} | Screenshot UI`;
  }
}

const uiStore = new UIStore();
export const UIContext = createContext(uiStore);
