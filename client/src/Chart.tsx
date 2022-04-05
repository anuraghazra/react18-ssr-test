// @ts-ignore
import ResizableBox from "./ResizableBox";
import useChartConfig from "../useChartConfig";
import React from "react";
import { AxisOptions, Chart as ReChart } from "react-charts";

export default function Chart({
  amount,
  enableTransition,
}: {
  amount: number;
  enableTransition: boolean;
}) {
  const data = useChartConfig({
    series: amount,
    dataType: "time",
    enableTransition,
  });

  const primaryAxis = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary as unknown as Date,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  return (
    <>
      <ResizableBox>
        <ReChart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </ResizableBox>
    </>
  );
}
