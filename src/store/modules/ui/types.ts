export interface StateUi {
  modal: StateUiModal;
  mask: StateUiMask;
  menu: StateUiMenu;
}

export interface StateUiModal {
  open: boolean;
  component: any;
  props: any;
}

export interface StateUiMask {
  show: boolean;
  text: string;
}

export interface StateUiMenu {
  show: boolean;
}

export const test = '3'
