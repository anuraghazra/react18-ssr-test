import React from "react";

type DataType = "time" | "ordinal" | "linear";

export default function useChartConfig({
  series,
  enableTransition = false,
  dataType = "time",
}: {
  series: number;
  enableTransition?: boolean;
  dataType?: DataType;
}) {
  const [state, setState] = React.useState(makeDataFrom(dataType, series));

  React.useEffect(() => {
    if (enableTransition) {
      React.startTransition(() => {
        setState(makeDataFrom(dataType, series));
      });
    } else {
      setState(makeDataFrom(dataType, series));
    }
  }, [series]);

  return state;
}

function makeDataFrom(dataType: DataType, series: number) {
  return [
    ...new Array(series || Math.max(Math.round(Math.random() * 5), 1)),
  ].map((d, i) => makeSeries(i, dataType));
}

function makeSeries(i: number, dataType: DataType) {
  const start = 0;
  const startDate = new Date();
  startDate.setUTCHours(0);
  startDate.setUTCMinutes(0);
  startDate.setUTCSeconds(0);
  startDate.setUTCMilliseconds(0);
  const length = 10; //datums;
  const min = 0;
  const max = 100;
  const nullChance = 0;
  return {
    label: `Series ${i + 1}`,
    data: [...new Array(length)].map((_, i) => {
      let x;

      if (dataType === "ordinal") {
        x = `Ordinal Group ${start + i}`;
      } else if (dataType === "time") {
        x = new Date(startDate.getTime() + 60 * 1000 * 60 * 24 * i);
      } else if (dataType === "linear") {
        x =
          Math.random() < nullChance
            ? null
            : min + Math.round(Math.random() * (max - min));
      } else {
        x = start + i;
      }

      const y =
        Math.random() < nullChance
          ? null
          : min + Math.round(Math.random() * (max - min));

      const r = undefined;

      return {
        primary: x,
        secondary: y,
        radius: r,
      };
    }),
  };
}
