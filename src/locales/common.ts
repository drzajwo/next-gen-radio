export enum CommonLocales {
  TITLE = "TITLE",
  DESCRIPTION = "DESCRIPTION",
  PLAY = "PLAY",
  PAUSE = "PAUSE",
  STOP = "STOP",
  SKIP_FORWARD = "SKIP_FORWARD",
  SKIP_BACK = "SKIP_BACK",
  DETAILS = "DETAILS",
  START_LISTENING = "START_LISTENING",
  CURRENTLY_PLAYING = "CURRENTLY_PLAYING",
  STOP_LISTENING = "STOP_LISTENING",
}

export const commonLocales: Record<CommonLocales, string> = {
  [CommonLocales.TITLE]: "Next gen radio",
  [CommonLocales.DESCRIPTION]:
    "This is aspiring next generation online radio to listen anywhere!",
  [CommonLocales.PLAY]: "Play",
  [CommonLocales.PAUSE]: "Pause",
  [CommonLocales.STOP]: "Stop",
  [CommonLocales.SKIP_FORWARD]: "Next station",
  [CommonLocales.SKIP_BACK]: "Previous station",
  [CommonLocales.DETAILS]: "Details",
  [CommonLocales.START_LISTENING]: "Start listening",
  [CommonLocales.CURRENTLY_PLAYING]: "Playing...",
  [CommonLocales.STOP_LISTENING]: "Stop listening",
};
