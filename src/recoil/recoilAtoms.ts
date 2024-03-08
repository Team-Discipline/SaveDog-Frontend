import {atom} from "recoil";

export const switchState = atom<boolean>({
  key: 'switchState',
  default: false,
});