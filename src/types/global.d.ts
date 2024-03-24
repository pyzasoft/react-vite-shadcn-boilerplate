// global.d.ts

// Define types for the Google Publisher Tags (GPT)
interface Googletag {
  cmd: Array<() => void>;
  pubads: () => PubAds;
  defineSlot: (
    adUnitPath: string,
    size: [number, number] | [number, number][],
    divId: string
  ) => Slot;
  display: (slotId: string) => void;
  enableServices: () => void;
}

interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  googletag?: any;
}
