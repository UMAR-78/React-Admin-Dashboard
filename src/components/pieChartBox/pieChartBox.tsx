import "./pieChartBox.css";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Tablet", value: 300, color: "#FFBB28" },
  { name: "Laptop", value: 200, color: "#FF8042" },
];

const pieChartBox = () => {
  return (
    <div className="pieChartbox">
      <h2>Leads By Source</h2>
      <div className="piechart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip contentStyle={{ background: "white", borderRadius: 1 }} />
            <Pie
              data={data}
              innerRadius={"50%"}
              outerRadius={"70%"}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

     <div className="options">
      {data.map(item =>(
        <div className="option" key={item.name}>
          <div className="title">
            <div className="dot" style={{backgroundColor:item.color}}></div>
            <span>{item.name}</span>
          </div>
          <span>{item.value}</span>
        </div>
      ))}
     </div>
    </div>
  );
};

export default pieChartBox;
