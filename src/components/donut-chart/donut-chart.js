import {
   ResponsiveContainer,
   PieChart,
   Pie,
   Legend,
   Cell,
   Tooltip,
} from "recharts";
import "./donut-chart.css";

const Donutchart = () => {
   const data = [
      {
         name: "Basic Tees",
         value: 55,
      },
      {
         name: "Short Pants",
         value: 31,
      },
      {
         name: "Super Hoodies",
         value: 14,
      },
   ];

   const COLORS = ["#98d89e", "#f6dc7d", "#ee8484"];

   return (
      <div className="donut-chart-container">
         <div className="title-subtitle-container">
            <h2 className="title">Activities</h2>
            <h4 className="subtitle">May - June 2021</h4>
         </div>
         <ResponsiveContainer width="100%" height="80%">
            <PieChart width={100} height={100}>
               <Legend
                  iconType="circle"
                  layout="vertical"
                  align="right"
                  verticalAlign="middle"
                  wrapperStyle={{ right: -5 }}
               />
               <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#82ca9d"
               >
                  {data.map((entry, index) => (
                     <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                     />
                  ))}
               </Pie>
               <Tooltip />
            </PieChart>
         </ResponsiveContainer>
      </div>
   );
};

export default Donutchart;
