import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CaseGraph = (props) => {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart
        data={props.data}
        margin={{ top: 20, left: 0, right: 40, bottom: 50 }}
      >
        <XAxis stroke="#fff" dataKey="date" interval="preserveStartEnd" />
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
