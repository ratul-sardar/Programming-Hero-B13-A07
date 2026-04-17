import called from "../../../assets/call.png";
import video from "../../../assets/video.png";
import text from "../../../assets/text.png";

export default function TimelineCard({ data }) {
  const { name, interaction, time } = data;

  return (
    <div className="w-full bg-white border border-gray-400 rounded-2xl p-4 flex items-center gap-4">
      <img
        src={
          interaction === "Video call"
            ? video
            : interaction === "Called"
              ? called
              : text
        }
        alt="card icon"
        className="w-10 h-10 "
      />
      <div className="space-y-1 text-gray-500">
        <p className="text-lg">
          <span className="text-xl text-gray-800">{interaction}</span> with{" "}
          {name}
        </p>
        <p className="text-[1rem] ">{time}</p>
      </div>
    </div>
  );
}
