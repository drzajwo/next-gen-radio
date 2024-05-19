import { Grid, GridCol } from "@mantine/core";

import { RadioStationCard } from "../RadioStationCard";

import classes from "./RadioStationList.module.scss";

import { getRadioStations } from "@/lib/services";

export const RadioStationList = async () => {
  const radioStationsList = await getRadioStations();

  return (
    <Grid
      gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}
      align="stretch"
      data-testid="radio-grid"
    >
      {radioStationsList.map((radioStationInfo, index) => (
        <GridCol
          span={{ base: 12, xs: 6, sm: 6, md: 4, lg: 2 }}
          key={`${radioStationInfo.id}_${index}`}
          className={classes.gridItem}
        >
          <RadioStationCard radioStationInfo={radioStationInfo} />
        </GridCol>
      ))}
    </Grid>
  );
};
