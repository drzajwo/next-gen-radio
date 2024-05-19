import type { FunctionComponent, ReactNode } from "react";
import {
  AppShell as MantineAppShell,
  AppShellHeader,
  AppShellMain,
  Title,
} from "@mantine/core";

import classes from "./AppShell.module.scss";

interface AppBarProps {
  children: ReactNode;
  title: string;
}

export const AppShell: FunctionComponent<AppBarProps> = ({
  children,
  title,
}) => {
  return (
    <MantineAppShell header={{ height: 60 }} padding="md">
      <AppShellHeader className={classes.header}>
        <Title className={classes.title} order={1}>
          {title}
        </Title>
      </AppShellHeader>

      <AppShellMain>{children}</AppShellMain>
    </MantineAppShell>
  );
};
