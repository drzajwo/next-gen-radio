import type { FunctionComponent } from "react";
import { Card, CardSection, Image, Title } from "@mantine/core";

import { RadioControls, ReliabilityBar } from "./components";

import classes from "./RadioStationCard.module.scss";

import type { RadioStationInfo } from "@/lib/types";

interface RadioStationCardProps {
  radioStationInfo: RadioStationInfo;
}

export const RadioStationCard: FunctionComponent<RadioStationCardProps> = ({
  radioStationInfo,
}) => {
  const { name, imgUrl, reliability } = radioStationInfo;
  return (
    <Card
      className={classes.card}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <CardSection>
        <Image src={imgUrl} alt={name} />
      </CardSection>
      <Title order={4}>{name}</Title>
      <div className={classes.detailsContainer}>
        <ReliabilityBar score={reliability} />
        <RadioControls radioStationInfo={radioStationInfo} />
      </div>
    </Card>
  );
};
