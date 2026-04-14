import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";

export default function Timeline() {
  const [timeLine] = useContext(TimelineContext);

  return (
    <section className="">
      <div className="cssContainer">
        <h1 className="">hi, from timeline page</h1>

        {!(timeLine.length === 0) ? (
          timeLine.map((item) => (
            <p>
              {item.name} {item.time}
            </p>
          ))
        ) : (
          <p>No data to show yet</p>
        )}
      </div>
    </section>
  );
}
