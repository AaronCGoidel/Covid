import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Monday",
    cases: 90,
  },
  {
    name: "Tuesday",
    cases: 80,
  },
  {
    name: "Wednesday",
    cases: 10,
  },
  {
    name: "Thursday",
    cases: 50,
  },
  {
    name: "Friday",
    cases: 70,
  },
];

const CaseGraph = (props) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 0, left: 0, right: 40, bottom: 50 }}
      >
        <XAxis stroke="#fff" dataKey="name" interval="preserveStartEnd" />
        <YAxis stroke="#fff" interval="preserveStartEnd" minTickGap={10} />
        <Tooltip stroke="#000" itemStyle={{ color: "#000" }} />

        <Line
          type="monotone"
          dataKey="cases"
          stroke="#fff"
          strokeWidth={4}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CaseGraph;
