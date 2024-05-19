import "server-only";

import type { GetRadioStationsResponse, RadioStationInfo } from "../types";

import { getData } from "./http";

const TUNE_IN_BASE_URL =
  "https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com";

export const getRadioStations = async (): Promise<RadioStationInfo[]> => {
  try {
    const { data } = await getData<GetRadioStationsResponse>(
      `${TUNE_IN_BASE_URL}/stations.json`,
    );

    return data.map((radioInfo) => ({
      ...radioInfo,
      namedId: `${radioInfo.name}_${radioInfo?.id}`,
    }));
  } catch (e) {
    return [];
  }
};
