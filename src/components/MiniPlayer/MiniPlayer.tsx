"use client";

import { useContext } from "react";
import { ActionIcon, AppShellFooter, Flex, Image, Text } from "@mantine/core";
import {
  IconPlayerPause,
  IconPlayerPlay,
  IconPlayerSkipBack,
  IconPlayerSkipForward,
  IconPlayerStop,
} from "@tabler/icons-react";

import classes from "./MiniPlayer.module.scss";

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
    hasPlaybackError,
    radioInfo,
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
        <div className={classes.radioInfoContainer}>
          <Image src={radioInfo?.imgUrl} alt={radioInfo?.name} height={75} />
          <Text className={classes.timeContainer} size="sm">
            {radioInfo?.name}
          </Text>
        </div>
        <Text className={classes.timeContainer} size="lg">
          {toColonTime(currentPlayingTime)}
        </Text>
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
            disabled={hasPlaybackError}
          >
            <IconPlayerPlay />
          </ActionIcon>
        ) : (
          <ActionIcon
            size={42}
            variant="default"
            aria-label={commonLocales[CommonLocales.PAUSE]}
            onClick={pause}
            disabled={hasPlaybackError}
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
