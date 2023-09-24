import {
   ResponsiveContainer,
   BarChart,
   CartesianGrid,
   XAxis,
   YAxis,
   Tooltip,
   Legend,
   Bar,
} from "recharts";
import "./bar-chart.css";

const Barchart = () => {
   const data = [
      {
         week: "Week 1",
         User: 4000,
         Guest: 2400,
      },
      {
         week: "Week 2",
         User: 3000,
         Guest: 1398,
      },
      {
         week: "Week 3",
         User: 2000,
         Guest: 9800,
      },
      {
         week: "Week 4",
         User: 2780,
         Guest: 3908,
      },
   ];
   return (
      <div className="bar-chart-container">
         <h2 className="title">Activities</h2>
         <h4 className="subtitle">May - June 2021</h4>
         <ResponsiveContainer width="100%" height="90%">
            <BarChart width={500} height={500} data={data}>
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="week" />
               <YAxis />
               <Tooltip />
               <Legend
                  iconType="circle"
                  verticalAlign="top"
                  align="right"
                  wrapperStyle={{ top: -10 }}
               />
               <Bar dataKey="User" barSize={20} fill="#98d89e" />
               <Bar dataKey="Guest" barSize={20} fill="#ee8484" />
            </BarChart>
         </ResponsiveContainer>
      </div>
   );
};

export default Barchart;
