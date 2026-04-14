import { useState, createContext } from "react";
import { Bounce, toast } from "react-toastify";

// The context hook
export const TimelineContext = createContext("");

export default function TimelineContextProvider({ children }) {
  // Timeline list
  const [timeLine, setTimeLine] = useState([]);
  // Function to add more data in timeline
  function handleAddTimeline(newData, msg) {
    setTimeLine([...timeLine, newData]);
    toast.success(`${msg}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  return (
    <TimelineContext value={[timeLine, handleAddTimeline]}>
      {children}
    </TimelineContext>
  );
}
