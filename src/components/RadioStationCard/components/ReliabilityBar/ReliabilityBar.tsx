import type { FunctionComponent } from "react";
import { Group, Progress, Title } from "@mantine/core";

import classes from "./ReliabilityBar.module.scss";

import { CommonLocales, commonLocales } from "@/locales";

interface ReliabilityBarProps {
  score: number;
}

export const ReliabilityBar: FunctionComponent<ReliabilityBarProps> = ({
  score,
}) => {
  return (
    <Group justify="space-between" mt="md" mb="xs">
      <Title order={6}>{commonLocales[CommonLocales.RELIABILITY]}</Title>
      <Progress className={classes.reliabilityBar} value={score} color="cyan" />
    </Group>
  );
};
