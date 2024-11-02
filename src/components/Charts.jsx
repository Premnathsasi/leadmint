import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { day: "Day 1", registration: 100, referrals: 200 },
  { day: "Day 2", registration: 75, referrals: 300 },
  { day: "Day 3", registration: 100, referrals: 400 },
  { day: "Day 4", registration: 250, referrals: 500 },
  { day: "Day 5", registration: 200, referrals: 800 },
  { day: "Day 6", registration: 150, referrals: 400 },
  { day: "Day 7", registration: 100, referrals: 300 },
];

const Charts = () => {
  return (
    <div className="w-full h-[400px]  bg-gray-200 p-3 shadow-lg rounded-lg mt-5">
      <h4 className="  font-semibold">
        Last 7 Days: Registration vs Referrals
      </h4>
      <div className="flex justify-center space-x-6 mb-4 text-sm font-medium text-gray-700">
        <div className="flex items-center space-x-2">
          <span className="w-8 h-4 bg-green-200 border-2 border-green-300 "></span>
          <span className="text-gray-800">Registration</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-8 h-4 bg-yellow-200 border-yellow-300 border-2"></span>
          <span className="text-gray-800">Referrals</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-400" />
          <XAxis dataKey="day" className="text-gray-600" />
          <YAxis
            className="text-gray-600"
            domain={[0, 800]}
            ticks={[0, 100, 200, 300, 400, 500, 600, 700, 800]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
            }}
            itemStyle={{ color: "#374151" }}
            labelStyle={{ color: "#6b7280" }}
          />
          <Area
            type="monotone"
            dataKey="registration"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
            dot={{ r: 4 }}
          />
          <Area
            type="monotone"
            dataKey="referrals"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
            dot={{ r: 4 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
