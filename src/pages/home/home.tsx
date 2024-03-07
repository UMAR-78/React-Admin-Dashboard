import TopDeals from "../../components/TopDeals/TopDeals";
import "./home.css";
import ChartBox from "../../components/chartBox/chartBox";
import BarChartBox from "../../components/barChartBox/barChartBox";
import { chartBoxUser , chartBoxProduct , chartBoxRevenue , chartBoxConversion ,barChartBoxRevenue ,barChartBoxVisit} from "../../menuData";
import PieChartBox from "../../components/pieChartBox/pieChartBox";
import StackedAreaChart from "../../components/stackedAreaChart/stackedAreaChart";
const home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopDeals />
      </div>
      <div className="box box2"><ChartBox {...chartBoxUser}/></div>
      <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
      <div className="box box4"><PieChartBox/></div>
      <div className="box box5"><ChartBox {...chartBoxRevenue}/></div>
      <div className="box box6"><ChartBox {...chartBoxConversion}/></div>
      <div className="box box7"> <BarChartBox {...barChartBoxRevenue}/> </div>
      <div className="box box8"><StackedAreaChart/></div>
      <div className="box box9"> <BarChartBox {...barChartBoxVisit}/></div>
    </div>
  );
};

export default home;
