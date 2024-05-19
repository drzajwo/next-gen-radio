"use client";

import { useContext } from "react";
import { ActionIcon, AppShellFooter, Flex } from "@mantine/core";
import {
  IconPlayerPause,
  IconPlayerPlay,
  IconPlayerSkipBack,
  IconPlayerSkipForward,
  IconPlayerStop,
} from "@tabler/icons-react";

import { AudioContext } from "@/contexts";
import { toColonTime } from "@/lib/helpers";
import { CommonLocales, commonLocales } from "@/locales";

export const MiniPlayer = () => {
  const {
    currentAudioId,
    play,
    pause,
    resetAudio,
    isPaused,
    isBuffering,
    currentPlayingTime,
  } = useContext(AudioContext);

  return (
    <AppShellFooter hidden={!currentAudioId}>
      <Flex
        mih={90}
        bg="rgba(0, 0, 0, .3)"
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="nowrap"
      >
        {toColonTime(currentPlayingTime)}
        <ActionIcon
          size={42}
          variant="default"
          aria-label={commonLocales[CommonLocales.SKIP_BACK]}
        >
          <IconPlayerSkipBack />
        </ActionIcon>
        {isPaused ? (
          <ActionIcon
            size={42}
            variant="default"
            aria-label={commonLocales[CommonLocales.PLAY]}
            onClick={play}
            loading={isBuffering}
          >
            <IconPlayerPlay />
          </ActionIcon>
        ) : (
          <ActionIcon
            size={42}
            variant="default"
            aria-label={commonLocales[CommonLocales.PAUSE]}
            onClick={pause}
          >
            <IconPlayerPause />
          </ActionIcon>
        )}
        <ActionIcon
          size={42}
          variant="default"
          aria-label={commonLocales[CommonLocales.STOP]}
          onClick={resetAudio}
        >
          <IconPlayerStop />
        </ActionIcon>
        <ActionIcon
          size={42}
          variant="default"
          aria-label={commonLocales[CommonLocales.SKIP_FORWARD]}
        >
          <IconPlayerSkipForward />
        </ActionIcon>
      </Flex>
    </AppShellFooter>
  );
};
