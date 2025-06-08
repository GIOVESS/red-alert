"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts"

// Sample data for rainfall forecast
const data = [
  { day: "Today", actual: 85, predicted: 0, average: 25 },
  { day: "Tomorrow", actual: 0, predicted: 65, average: 25 },
  { day: "Day 3", actual: 0, predicted: 45, average: 25 },
  { day: "Day 4", actual: 0, predicted: 30, average: 25 },
  { day: "Day 5", actual: 0, predicted: 20, average: 25 },
  { day: "Day 6", actual: 0, predicted: 15, average: 25 },
  { day: "Day 7", actual: 0, predicted: 10, average: 25 },
]

export function RainfallForecastChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis label={{ value: "Rainfall (mm)", angle: -90, position: "insideLeft" }} />
        <Tooltip formatter={(value) => [`${value}mm`, ""]} labelFormatter={(label) => `${label}`} />
        <Legend />
        <ReferenceLine
          y={50}
          stroke="red"
          strokeDasharray="3 3"
          label={{ value: "Flood Risk", position: "right", fill: "red", fontSize: 10 }}
        />
        <Bar dataKey="actual" name="Actual Rainfall" fill="#3b82f6" />
        <Bar dataKey="predicted" name="Predicted Rainfall" fill="#93c5fd" />
        <Bar dataKey="average" name="Historical Average" fill="#cbd5e1" />
      </BarChart>
    </ResponsiveContainer>
  )
}

