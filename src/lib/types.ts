export interface GetRadioStationsResponse {
  data: RadioStationInfo[];
}

export interface RadioStationInfo {
  id: string;
  namedId?: string;
  description: string;
  name: string;
  imgUrl: string;
  streamUrl: string;
  reliability: number;
  popularity: number;
  tags: RadioStationTag[];
}

// TODO: it would be best to have known list of all possible tags
type RadioStationTag = string;
