"use client"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Legend,
} from "recharts"

// Sample data for water levels over time
const data = [
  { time: "00:00", tanaRiver: 4.2, nyandoRiver: 2.8, nzoiaRiver: 2.5 },
  { time: "02:00", tanaRiver: 4.3, nyandoRiver: 2.9, nzoiaRiver: 2.5 },
  { time: "04:00", tanaRiver: 4.4, nyandoRiver: 3.0, nzoiaRiver: 2.6 },
  { time: "06:00", tanaRiver: 4.5, nyandoRiver: 3.0, nzoiaRiver: 2.6 },
  { time: "08:00", tanaRiver: 4.6, nyandoRiver: 3.1, nzoiaRiver: 2.7 },
  { time: "10:00", tanaRiver: 4.7, nyandoRiver: 3.2, nzoiaRiver: 2.7 },
  { time: "12:00", tanaRiver: 4.8, nyandoRiver: 3.2, nzoiaRiver: 2.8 },
  { time: "14:00", tanaRiver: 4.8, nyandoRiver: 3.3, nzoiaRiver: 2.8 },
  { time: "16:00", tanaRiver: 4.9, nyandoRiver: 3.3, nzoiaRiver: 2.9 },
  { time: "18:00", tanaRiver: 5.0, nyandoRiver: 3.4, nzoiaRiver: 2.9 },
  { time: "20:00", tanaRiver: 5.1, nyandoRiver: 3.4, nzoiaRiver: 3.0 },
  { time: "22:00", tanaRiver: 5.2, nyandoRiver: 3.5, nzoiaRiver: 3.0 },
  { time: "00:00", tanaRiver: 5.3, nyandoRiver: 3.6, nzoiaRiver: 3.1 },
]

export function WaterLevelChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis label={{ value: "Water Level (m)", angle: -90, position: "insideLeft" }} domain={[2, 6]} />
        <Tooltip formatter={(value) => [`${value}m`, ""]} labelFormatter={(label) => `Time: ${label}`} />
        <Legend />

        {/* Critical threshold lines */}
        <ReferenceLine
          y={4.5}
          stroke="red"
          strokeDasharray="3 3"
          label={{ value: "Critical", position: "right", fill: "red", fontSize: 10 }}
        />
        <ReferenceLine
          y={3.5}
          stroke="orange"
          strokeDasharray="3 3"
          label={{ value: "Warning", position: "right", fill: "orange", fontSize: 10 }}
        />
        <ReferenceLine
          y={2.5}
          stroke="yellow"
          strokeDasharray="3 3"
          label={{ value: "Alert", position: "right", fill: "yellow", fontSize: 10 }}
        />

        <Area type="monotone" dataKey="tanaRiver" name="Tana River" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
        <Area
          type="monotone"
          dataKey="nyandoRiver"
          name="Nyando River"
          stroke="#f97316"
          fill="#f97316"
          fillOpacity={0.3}
        />
        <Area
          type="monotone"
          dataKey="nzoiaRiver"
          name="Nzoia River"
          stroke="#eab308"
          fill="#eab308"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

