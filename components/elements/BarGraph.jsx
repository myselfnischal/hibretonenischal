import React, { useState, useCallback } from 'react'
import { BarChart, Bar, XAxis, YAxis, Cell, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const BarGraph = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];

  const color_key = {
    "Strategic": "#00C49F",
    "People": "#06d6a0",
    "Environment": "#f78c6b",
    "Finance": "#118ab2",
    "Product": "#073b4c",
    "Customer/User": "#ef476f"
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        layout="vertical"
        className="mt-30"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis hide type="number" />
        <YAxis
          dataKey="name"
          type="category" width={150}
        />
        <Tooltip />
        <Bar dataKey="Percentage"
          data={data}
          fill="#323232"
          barSize={50}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={color_key[entry.category]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarGraph
