"use client";
import type { FunctionComponent } from "react";
import { Badge, Image, Modal, Rating, Text, Title } from "@mantine/core";

import { ReliabilityBar } from "../ReliabilityBar";

import classes from "./RadioDetailsModal.module.scss";

import type { RadioStationInfo } from "@/lib/types";
import { CommonLocales, commonLocales } from "@/locales";

interface RadioDetailsModalProps {
  isOpen: boolean;
  close: () => void;
  radioStationInfo: RadioStationInfo;
}

export const RadioDetailsModal: FunctionComponent<RadioDetailsModalProps> = ({
  isOpen,
  close,
  radioStationInfo,
}) => {
  const { imgUrl, name, description, tags, reliability, popularity } =
    radioStationInfo;
  return (
    <Modal opened={isOpen} onClose={close} title={name} centered size="xl">
      <div className={classes.container}>
        <Image src={imgUrl} alt={name} height={250} />
        <div className={classes.details}>
          <Title order={2}>{name}</Title>
          <Text size="md">{description}</Text>
          <ReliabilityBar score={reliability} />
          <div className={classes.rowContent}>
            {tags.map((tag, index) => (
              <Badge key={`${tag}_${index}`} color="pink">
                {tag}
              </Badge>
            ))}
          </div>
          <div className={classes.rowContent}>
            <Title order={5}>{commonLocales[CommonLocales.POPULARITY]}</Title>
            <Rating value={popularity} fractions={2} readOnly />
          </div>
        </div>
      </div>
    </Modal>
  );
};
