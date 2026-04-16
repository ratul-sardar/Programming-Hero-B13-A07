import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import TimelineCard from "../components/ui/TimelineCard/TimelineCard";
import { useState } from "react";

export default function Timeline() {
  const [timeLine] = useContext(TimelineContext);

  //Filter state
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [showFilter, setShowFilter] = useState(false);

  function handleSelectedFilter(value) {
    selectedFilter === value || setSelectedFilter(value);
    handleShowFilter();
  }

  function handleShowFilter() {
    setShowFilter(!showFilter);
  }

  return (
    <section className="">
      <div className="cssContainer">
        <h1 className="">hi, from timeline page</h1>

        {/* Timeline Card*/}
        <div className="w-full max-w-227.5 space-y-4">
          <Filter
            selectedFilter={selectedFilter}
            handleSelectedFilter={handleSelectedFilter}
            showFilter={showFilter}
            handleShowFilter={handleShowFilter}
          ></Filter>

          {!(timeLine.length === 0) ? (
            selectedFilter !== "All" ? (
              selectedFilter === "Video call" ? (
                timeLine
                  .filter((item) => item.interaction === "Video call")
                  .map((item) => (
                    <TimelineCard key={item.id} data={item}></TimelineCard>
                  ))
              ) : selectedFilter === "Called" ? (
                timeLine
                  .filter((item) => item.interaction === "Called")
                  .map((item) => (
                    <TimelineCard key={item.id} data={item}></TimelineCard>
                  ))
              ) : (
                timeLine
                  .filter((item) => item.interaction === "Texted")
                  .map((item) => (
                    <TimelineCard key={item.id} data={item}></TimelineCard>
                  ))
              )
            ) : (
              timeLine.map((item) => (
                <TimelineCard key={item.id} data={item}></TimelineCard>
              ))
            )
          ) : (
            <p>No data to show yet</p>
          )}
        </div>
      </div>
    </section>
  );
}

function Filter({
  selectedFilter,
  handleSelectedFilter,
  showFilter,
  handleShowFilter,
}) {
  return (
    <div className="relative">
      {/* Dropdown Trigger*/}
      <p className="text-lg">Show:</p>
      <button
        onClick={handleShowFilter}
        className="w-full max-w-50 py-2 bg-white text-gray-900 border border-gray-400 rounded-md cursor-pointer "
      >
        {selectedFilter}
      </button>

      {/* Dropdown options*/}
      {showFilter && (
        <div className="absolute top-[110%] w-full max-w-50 bg-white border border-gray-500 rounded-xl flex flex-col gap-4 p-4 ">
          <button
            onClick={() => handleSelectedFilter("All")}
            className="hover:bg-gray-200 p-2 rounded-md cursor-pointer"
          >
            All
          </button>
          <button
            onClick={() => handleSelectedFilter("Video call")}
            className="hover:bg-gray-200 p-2 rounded-md cursor-pointer"
          >
            Video call
          </button>
          <button
            onClick={() => handleSelectedFilter("Called")}
            className="hover:bg-gray-200 p-2 rounded-md cursor-pointer"
          >
            Call
          </button>
          <button
            onClick={() => handleSelectedFilter("Texted")}
            className="hover:bg-gray-200 p-2 rounded-md cursor-pointer"
          >
            Text
          </button>
        </div>
      )}
    </div>
  );
}
