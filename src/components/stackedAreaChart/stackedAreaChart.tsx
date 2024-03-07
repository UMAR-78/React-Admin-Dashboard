import { Area, AreaChart, ResponsiveContainer, Tooltip, YAxis } from "recharts";
import "./stackedAreaChart.css";

const data = [
    {
      name: "Sun",
      books: 4000,
      clothes: 2400,
      electronic: 2400,
    },
    {
      name: "Mon",
      books: 3000,
      clothes: 1398,
      electronic: 2210,
    },
    {
      name: "Tue",
      books: 2000,
      clothes: 9800,
      electronic: 2290,
    },
    {
      name: "Wed",
      books: 2780,
      clothes: 3908,
      electronic: 2000,
    },
    {
      name: "Thu",
      books: 1890,
      clothes: 4800,
      electronic: 2181,
    },
    {
      name: "Fri",
      books: 2390,
      clothes: 3800,
      electronic: 2500,
    },
    {
      name: "Sat",
      books: 3490,
      clothes: 4300,
      electronic: 2100,
    },
  ];
  

const stackedAreaChart = () => {
  return (
    <div className="stackedAreaChart">
      <h2>Review Analytics</h2>
      <div className="stackedchart">
        <ResponsiveContainer width="99%" height={180}>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" /> */}
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="electronic"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="books"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default stackedAreaChart;
