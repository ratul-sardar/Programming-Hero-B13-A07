import { useContext } from "react";
import { Line, Pie, PieChart, Tooltip } from "recharts";
import TimelineContextProvider, {
  TimelineContext,
} from "../../../context/TimelineContext";

// #endregion
export default function StatusPieChart({
  isAnimationActive = true,
  defaultIndex,
}) {
  const timelineData = useContext(TimelineContext);
  const [timeLine] = timelineData;
  const isNotZero = timeLine.length;

  const called = timeLine.filter((item) => item.interaction === "Called");
  const videoCall = timeLine.filter(
    (item) => item.interaction === "Video call",
  );
  const texted = timeLine.filter((item) => item.interaction === "Texted");

  console.log(timeLine);

  // Data to feed the chart
  const data = [
    { name: "Called", value: called.length, fill: "#244D3F" },
    { name: "Video call", value: videoCall.length, fill: "#37A163" },
    { name: "Texted", value: texted.length, fill: "#7E35E1" },
  ];

  return (
    <>
      {isNotZero ? (
        <PieChart
          style={{
            width: "100%",
            maxWidth: "250px",
            maxHeight: "80vh",
            aspectRatio: 1,
            margin: "0 auto",
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={isAnimationActive}
          />
          <Tooltip defaultIndex={defaultIndex} />
        </PieChart>
      ) : (
        <p className="text-center py-4">No data to show yet</p>
      )}
    </>
  );
}
