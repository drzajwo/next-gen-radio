"use client";
import { type FunctionComponent, useContext } from "react";
import { Button } from "@mantine/core";

import classes from "./RadioControls.module.scss";

import { AudioContext } from "@/contexts";
import type { RadioStationInfo } from "@/lib/types";
import { CommonLocales, commonLocales } from "@/locales";

interface RadioControlsProps {
  radioStationInfo: RadioStationInfo;
}

export const RadioControls: FunctionComponent<RadioControlsProps> = ({
  radioStationInfo,
}) => {
  const { playRadioStation, currentAudioId } = useContext(AudioContext);
  const isCurrentlyPlaying = currentAudioId === radioStationInfo.id;

  return (
    <div className={classes.buttonContainer}>
      <Button
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        // TODO: open modal on click
      >
        {commonLocales[CommonLocales.DETAILS]}
      </Button>
      {isCurrentlyPlaying ? (
        <Button color="green" fullWidth mt="md" radius="md" disabled>
          {commonLocales[CommonLocales.CURRENTLY_PLAYING]}
        </Button>
      ) : (
        <Button
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          onClick={() => playRadioStation(radioStationInfo)}
        >
          {commonLocales[CommonLocales.START_LISTENING]}
        </Button>
      )}
    </div>
  );
};
