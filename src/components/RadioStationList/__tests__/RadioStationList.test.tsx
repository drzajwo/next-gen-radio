import { MantineProvider } from "@mantine/core";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

import { RadioStationList } from "../RadioStationList";

import { getRadioStations } from "@/lib/services";

window.matchMedia = jest.fn();
jest.mock("@/lib/services", () => ({
  getRadioStations: jest.fn(),
}));
jest.mock("../../RadioStationCard", () => ({
  RadioStationCard: jest.fn().mockRejectedValue("RadioStationCard"),
}));
jest.mock("@mantine/core", () => ({
  ...jest.requireActual("@mantine/core"),
  GridCol: jest.fn(() => <div>Grid col</div>),
}));

const RenderUI = async () => (
  <MantineProvider>{await RadioStationList()}</MantineProvider>
);

describe("RadioStationList test", () => {
  it("renders a grid with items", async () => {
    (getRadioStations as jest.Mock).mockResolvedValue([
      {
        id: "s135217",
        namedId: "Radio Mozart_s135217",
        description: "Only Mozart Music",
        name: "Radio Mozart",
        imgUrl: "https://cdn-radiotime-logos.tunein.com/s135217d.png",
        streamUrl: "https://streamingv2.shoutcast.com/Radio-Mozart",
        reliability: 68,
        popularity: 2.9,
        tags: ["music", "classical"],
      },
    ]);

    const { getByTestId, container } = render(await RenderUI());

    expect(getByTestId("radio-grid")).toBeInTheDocument();
    expect(getRadioStations).toHaveBeenCalled();
    expect(container).toMatchSnapshot();
  });
});
