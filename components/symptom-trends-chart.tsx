"use client"

import { Line, LineChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    date: "Jun 1",
    Fever: 45,
    Cough: 32,
    Diarrhea: 18,
    Rash: 12,
  },
  {
    date: "Jun 5",
    Fever: 52,
    Cough: 38,
    Diarrhea: 25,
    Rash: 15,
  },
  {
    date: "Jun 10",
    Fever: 68,
    Cough: 45,
    Diarrhea: 42,
    Rash: 18,
  },
  {
    date: "Jun 15",
    Fever: 85,
    Cough: 58,
    Diarrhea: 78,
    Rash: 22,
  },
  {
    date: "Jun 20",
    Fever: 92,
    Cough: 65,
    Diarrhea: 65,
    Rash: 28,
  },
]

export function SymptomTrendsChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis label={{ value: "Number of Reports", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Fever" stroke="#ef4444" strokeWidth={2} />
        <Line type="monotone" dataKey="Cough" stroke="#3b82f6" strokeWidth={2} />
        <Line type="monotone" dataKey="Diarrhea" stroke="#10b981" strokeWidth={2} />
        <Line type="monotone" dataKey="Rash" stroke="#8b5cf6" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

