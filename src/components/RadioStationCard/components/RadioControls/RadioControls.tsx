"use client";
import { type FunctionComponent, useContext } from "react";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { RadioDetailsModal } from "../RadioDetailsModal";

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
  const [opened, { open, close }] = useDisclosure(false);
  const { playRadioStation, currentAudioId, hasPlaybackError } =
    useContext(AudioContext);
  const isCurrentlyPlaying = currentAudioId === radioStationInfo.namedId;

  const renderStateText = () => {
    return hasPlaybackError ? (
      <Button color="red" fullWidth mt="md" radius="md">
        {commonLocales[CommonLocales.PLAYBACK_ERROR]}
      </Button>
    ) : (
      <Button color="green" fullWidth mt="md" radius="md">
        {commonLocales[CommonLocales.CURRENTLY_PLAYING]}
      </Button>
    );
  };

  return (
    <>
      <RadioDetailsModal
        isOpen={opened}
        close={close}
        radioStationInfo={radioStationInfo}
      />
      <div className={classes.buttonContainer}>
        <Button color="blue" fullWidth mt="md" radius="md" onClick={open}>
          {commonLocales[CommonLocales.DETAILS]}
        </Button>
        {isCurrentlyPlaying ? (
          renderStateText()
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
    </>
  );
};
