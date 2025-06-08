"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    Floods: 12,
    Fires: 8,
    Accidents: 15,
    Other: 5,
  },
  {
    name: "Feb",
    Floods: 8,
    Fires: 10,
    Accidents: 12,
    Other: 7,
  },
  {
    name: "Mar",
    Floods: 15,
    Fires: 12,
    Accidents: 18,
    Other: 9,
  },
  {
    name: "Apr",
    Floods: 25,
    Fires: 15,
    Accidents: 20,
    Other: 12,
  },
  {
    name: "May",
    Floods: 18,
    Fires: 20,
    Accidents: 22,
    Other: 15,
  },
  {
    name: "Jun",
    Floods: 22,
    Fires: 25,
    Accidents: 18,
    Other: 10,
  },
]

export function IncidentTrendsChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Floods" fill="#3b82f6" />
        <Bar dataKey="Fires" fill="#ef4444" />
        <Bar dataKey="Accidents" fill="#f59e0b" />
        <Bar dataKey="Other" fill="#8b5cf6" />
      </BarChart>
    </ResponsiveContainer>
  )
}

