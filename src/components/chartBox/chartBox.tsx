import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import "./chartBox.css";
import { Link } from "react-router-dom";

type Props = {

  color:string;
  icon:string;  
  title : string;
  dataKey : string;
  number : number | string
  chartData : object[]  // this will be array of objects only becayse recharts used data in this format
  percentage : number
  
}
const chartBox = (props : Props) => {
  return (
    <div className="chartbox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon}alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{color:props.color}}>View All</Link>
      </div>

      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
                <Tooltip
                  contentStyle={{background:'transparent' , border: 'none'}}
                  labelStyle={{display:'none'}}
                  position={{ x: 30, y: 90 }}
              />

              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-Text">
          <span className="percentage" style={{color: props.percentage < 0 ? 'tomato' : 'limegreen'}}>{props.percentage}%</span>
          <span className="percentage-text">this month</span>
        </div>
      </div>
    </div>
  );
};

export default chartBox;
