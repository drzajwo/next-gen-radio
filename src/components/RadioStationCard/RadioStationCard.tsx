import type { FunctionComponent } from "react";
import { Badge, Card, CardSection, Group, Image, Title } from "@mantine/core";

import { RadioControls } from "./components";

import type { RadioStationInfo } from "@/lib/types";

interface RadioStationCardProps {
  radioStationInfo: RadioStationInfo;
}

export const RadioStationCard: FunctionComponent<RadioStationCardProps> = ({
  radioStationInfo,
}) => {
  const { name, imgUrl } = radioStationInfo;
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <CardSection>
        <Image src={imgUrl} alt="Norway" />
      </CardSection>

      <Group justify="space-between" mt="md" mb="xs">
        <Title order={4}>{name}</Title>
        <Badge color="pink">Rates ETC.</Badge>
      </Group>

      {/* <Text size="sm" c="dimmed">
        {radioStationInfo.description}
      </Text> */}

      <RadioControls radioStationInfo={radioStationInfo} />
    </Card>
  );
};
