"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts"

const data = [
  { name: "Emergency Vehicles", value: 35 },
  { name: "Medical Teams", value: 25 },
  { name: "Relief Supplies", value: 20 },
  { name: "Volunteers", value: 15 },
  { name: "Other Resources", value: 5 },
]

const COLORS = ["#ef4444", "#3b82f6", "#f59e0b", "#10b981", "#8b5cf6"]

export function ResourceUtilizationChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

