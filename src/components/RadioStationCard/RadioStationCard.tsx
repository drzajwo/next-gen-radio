import type { FunctionComponent } from "react";
import {
  Badge,
  Button,
  Card,
  CardSection,
  Group,
  Image,
  Title,
} from "@mantine/core";

import classes from "./RadioStationCard.module.scss";

import type { RadioStationInfo } from "@/lib/types";

interface RadioStationCardProps {
  radioStationInfo: RadioStationInfo;
}

export const RadioStationCard: FunctionComponent<RadioStationCardProps> = ({
  radioStationInfo,
}) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <CardSection>
        <Image src={radioStationInfo.imgUrl} alt="Norway" />
      </CardSection>

      <Group justify="space-between" mt="md" mb="xs">
        <Title order={4}>{radioStationInfo.name}</Title>
        <Badge color="pink">Rates ETC.</Badge>
      </Group>

      {/* <Text size="sm" c="dimmed">
        {radioStationInfo.description}
      </Text> */}

      <div className={classes.buttonContainer}>
        <Button
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          // TODO: open modal on click
        >
          Details
        </Button>
      </div>
    </Card>
  );
};
