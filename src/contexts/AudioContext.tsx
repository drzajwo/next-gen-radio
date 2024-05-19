"use client";

import {
  createContext,
  type FunctionComponent,
  type ReactNode,
  useRef,
  useState,
} from "react";

import type { RadioStationInfo } from "@/lib/types";

interface AudioProviderProps {
  children: ReactNode;
}

interface AudioContextType {
  currentAudioId?: string;
  radioInfo?: RadioStationInfo;
  currentPlayingTime: number;
  playRadioStation: (radioStationInfo: RadioStationInfo) => void;
  resetAudio: () => void;
  play: () => void;
  pause: () => void;
  isBuffering: boolean;
  isPaused: boolean;
  hasPlaybackError: boolean;
  // TODO: volume
}

export const AudioContext = createContext<AudioContextType>({
  currentAudioId: undefined,
  radioInfo: undefined,
  currentPlayingTime: 0,
  playRadioStation: () => {},
  resetAudio: () => {},
  play: () => {},
  pause: () => {},
  isBuffering: false,
  isPaused: true,
  hasPlaybackError: false,
});

export const AudioProvider: FunctionComponent<AudioProviderProps> = ({
  children,
}) => {
  const audio = useRef<HTMLAudioElement | null>(null);
  const [radioInfo, setRadioInfo] = useState<RadioStationInfo | undefined>();
  const [seekTime, setSeekTime] = useState(0);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [hasPlaybackError, setHasPlaybackError] = useState(false);

  const playRadioStation = (radioStationInfo: RadioStationInfo) => {
    if (audio.current) {
      resetAudio();
    }
    setRadioInfo(radioStationInfo);
    audio.current = new Audio(radioStationInfo.streamUrl);
    play();
    setListeners();
  };

  const setListeners = () => {
    if (!audio.current) {
      return;
    }
    audio.current.onwaiting = () => setIsBuffering(true);
    audio.current.onplaying = () => {
      setIsBuffering(false);
      setHasPlaybackError(false);
    };
    audio.current.onerror = () => {
      setIsPaused(true);
      setIsBuffering(false);
      setHasPlaybackError(true);
    };
    audio.current.ontimeupdate = () => {
      if (!audio.current) {
        return;
      }
      setSeekTime(audio.current.currentTime);
    };
  };

  const resetAudio = () => {
    pause();
    setRadioInfo(undefined);
    setIsPaused(true);
    setHasPlaybackError(false);
    setSeekTime(0);
    audio.current = null;
  };

  const play = () => {
    if (!audio.current || !audio.current.paused) {
      return;
    }
    setIsPaused(false);
    audio.current.play();
  };

  const pause = () => {
    if (!audio.current || audio.current.paused) {
      return;
    }
    setIsPaused(true);
    audio.current.pause();
  };

  const value = {
    currentAudioId: radioInfo?.namedId,
    radioInfo,
    currentPlayingTime: seekTime,
    playRadioStation,
    resetAudio,
    play,
    pause,
    isBuffering,
    isPaused,
    hasPlaybackError,
  };
  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
};
