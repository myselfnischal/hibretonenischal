import React, { useState, useCallback } from 'react'
import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from 'recharts';

const PieGraph = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const COLOR = ["#00C49F","#06d6a0","#f78c6b","#118ab2","#073b4c","#ef476f"]

  const color_key = {
    "Strategic": "#00C49F",
    "People": "#06d6a0",
    "Environment": "#f78c6b",
    "Finance": "#118ab2",
    "Product": "#073b4c",
    "Customer/User": "#ef476f"
  }

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 50) * cos;
    const my = cy + (outerRadius + 50) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <g>
        <text className="fs-5 fw-bolder" x={cx} y={cy-10} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <text className="fs-5 fw-bolder" x={cx} y={cy+10} dy={8} textAnchor="middle" fill={fill}>
        {`(${(percent * 100).toFixed(2)}%)`}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius+10}
          outerRadius={outerRadius + 15}
          fill={fill}
        />
      </g>
    );
  };

  return (
    <ResponsiveContainer className="mt-5" width="100%" height="92%">
      <PieChart>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx="50%"
          cy="45%"
          innerRadius={100}
          outerRadius={170}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.name in color_key ? color_key[entry.name] : COLOR[index % COLOR.length]} />
        ))}
        </Pie>
      </PieChart>
      </ResponsiveContainer>
  )
}

export default PieGraph
