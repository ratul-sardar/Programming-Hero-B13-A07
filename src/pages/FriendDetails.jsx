import { useContext } from "react";
import { useParams } from "react-router";
import { useLoaderData } from "react-router";
import { TimelineContext } from "../context/TimelineContext";
import ProfileCard from "../components/ui/ProfileCard/ProfileCard";
import { FaBellSlash } from "react-icons/fa6";
import { FaBoxArchive } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import StatusCard from "../components/ui/StatusCard/StatusCard";

export default function FriendDetails() {
  //Getting the friend data to show in details
  const friendsData = useLoaderData();
  const { id: dynamicId } = useParams();
  const friendToShow = friendsData.find((friend) => friend.id == dynamicId);
  const {
    id = 1,
    name = "Arif Hasan",
    picture = "https://randomuser.me/api/portraits/men/32.jpg",
    email = "arif.hasan@gmail.com",
    days_since_contact = 18,
    status = "overdue",
    tags = ["college", "close friend"],
    bio = "Met during CSE at university. We used to build side projects and play football on weekends.",
    goal = 14,
    next_due_date = "2026-03-30",
  } = friendToShow;

  // To add data in the Timeline page
  const [, handleAddTimeline] = useContext(TimelineContext);

  return (
    <section className="">
      <div className="cssContainer max-w-277.5 grid grid-cols-5 gap-6 ">
        {/* Left Panel*/}
        <div className="col-span-full md:col-span-2 flex flex-col gap-6">
          {/* Profile Card*/}
          <ProfileCard
            avatar={picture}
            title={name}
            tags={tags}
            status={status}
            bio={bio}
            email={email}
          ></ProfileCard>

          {/* Buttons*/}
          <button className="btn">
            <FaBellSlash /> Snooze 2 weeks
          </button>
          <button className="btn">
            <FaBellSlash />
            <FaBoxArchive /> Archive
          </button>
          <button className="btn text-red-500">
            <FaBellSlash />
            <MdDeleteOutline /> Delete
          </button>
        </div>

        {/* Right Panel*/}
        <div className="col-span-full md:col-span-3 space-y-6">
          {/* Status Cards*/}
          <div className="flex gap-6">
            <StatusCard></StatusCard>
            <StatusCard></StatusCard>
            <StatusCard></StatusCard>
          </div>

          {/* Relation goal*/}
          <div className="col-span-3 row-span-2">
            <StatusCard></StatusCard>
          </div>

          {/* Quick Check Ins*/}
          <div className="col-span-3 row-span-3">
            <StatusCard></StatusCard>
          </div>
        </div>
      </div>
    </section>
  );
}

// <h1 className="">hi, from friend details</h1>
// <h2 className="text-red-500">{name}</h2>
// <p className="text-amber-400-500">{bio} </p>
// <button
//   className="btn"
//   onClick={() =>
//     handleAddTimeline(
//       { id, name, time: new Date().toDateString() },
//       `Sent text to ${name}`,
//     )
//   }
// >
//   add to timeline
// </button>
