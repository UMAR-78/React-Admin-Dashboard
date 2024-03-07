import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barChartBox.css";


type Props= {
   title : string;
   chartData:object[];
   color : string;
   dataKey : string;
}


const barChartBox = (props:Props) => {
  return (
    <div className="barChartBox">
      <h1 className='title'>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip contentStyle={{background:'#2a3447', borderRadius:1}}
            labelStyle={{display : "none"}} 
             cursor={{fill:"none"}}/>
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default barChartBox;
