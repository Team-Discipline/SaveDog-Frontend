import {atom} from "recoil";

interface StreamerInfo {
  streamerId: string;
  streamerName: string;
  profileImage: string;
  game?: string;
  isLive?: string;
  viewers?: string;
}
export const switchState = atom<boolean>({
  key: 'switchState',
  default: false,
});

export const foundStreamerState = atom<StreamerInfo | undefined>({
  key: 'foundStreamerState',
  default: undefined,
});