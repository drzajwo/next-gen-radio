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
  PLAYBACK_ERROR = "PLAYBACK_ERROR",
  STOP_LISTENING = "STOP_LISTENING",
  RELIABILITY = "RELIABILITY",
  POPULARITY = "POPULARITY",
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
  [CommonLocales.PLAYBACK_ERROR]: "Error",
  [CommonLocales.STOP_LISTENING]: "Stop listening",
  [CommonLocales.RELIABILITY]: "Reliability score:",
  [CommonLocales.POPULARITY]: "Popularity score:",
};
