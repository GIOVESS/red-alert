"use client"

import { Line, LineChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    Floods: 35,
    Fires: 22,
    Accidents: 28,
    Other: 40,
  },
  {
    name: "Feb",
    Floods: 32,
    Fires: 20,
    Accidents: 25,
    Other: 38,
  },
  {
    name: "Mar",
    Floods: 30,
    Fires: 18,
    Accidents: 24,
    Other: 35,
  },
  {
    name: "Apr",
    Floods: 28,
    Fires: 15,
    Accidents: 22,
    Other: 32,
  },
  {
    name: "May",
    Floods: 25,
    Fires: 14,
    Accidents: 20,
    Other: 30,
  },
  {
    name: "Jun",
    Floods: 22,
    Fires: 12,
    Accidents: 18,
    Other: 28,
  },
]

export function ResponseTimeChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: "Minutes", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Floods" stroke="#3b82f6" strokeWidth={2} />
        <Line type="monotone" dataKey="Fires" stroke="#ef4444" strokeWidth={2} />
        <Line type="monotone" dataKey="Accidents" stroke="#f59e0b" strokeWidth={2} />
        <Line type="monotone" dataKey="Other" stroke="#8b5cf6" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

