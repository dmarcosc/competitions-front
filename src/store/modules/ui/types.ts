export interface StateUi {
  modal: StateUiModal;
  mask: StateUiMask;
  menu: StateUiMenu;
  mode: StateUiMode;
}

export interface StateUiModal {
  open: boolean;
  text: string;
  settings: boolean;
}

export interface StateUiMask {
  show: boolean;
  text: string;
}

export interface StateUiMenu {
  show: boolean;
}

export interface StateUiMode {
  dark: boolean;
}

export const test = '3'
