import { useContext } from "react";
import { useParams } from "react-router";
import { useLoaderData } from "react-router";
import { TimelineContext } from "../context/TimelineContext";
import ProfileCard from "../components/ui/ProfileCard/ProfileCard";
import { FaBellSlash } from "react-icons/fa6";
import { FaBoxArchive } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import StatusCard from "../components/ui/StatusCard/StatusCard";
import { IoCall } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoVideocam } from "react-icons/io5";

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
      <div className="w-11/12 mx-auto max-w-360 py-16 md:py-20 grid grid-cols-5 md:grid-rows-[repeat(7, minmax(1fr, 200px))] gap-6">
        {/* Profile Card*/}
        <div className="col-span-full md:col-span-2 row-span-4 flex flex-col gap-6">
          <ProfileCard
            avatar={picture}
            title={name}
            tags={tags}
            status={status}
            bio={bio}
            email={email}
          ></ProfileCard>
        </div>

        {/* Buttons*/}
        <button className="btn col-span-full md:col-span-2 md:col-start-1 md:row-start-5">
          <FaBellSlash /> Snooze 2 weeks
        </button>
        <button className="btn col-span-full md:col-span-2  md:col-start-1 md:row-start-6">
          <FaBellSlash />
          <FaBoxArchive /> Archive
        </button>
        <button className="btn text-red-500 col-span-full md:col-span-2 md:col-start-1 md:row-start-7">
          <FaBellSlash />
          <MdDeleteOutline /> Delete
        </button>

        {/* Status Cards*/}
        <div className=" col-span-full md:col-span-3 row-span-2 flex max-md:flex-col gap-6 ">
          <StatusCard
            title={days_since_contact}
            body={"Days Since Contact"}
          ></StatusCard>
          <StatusCard title={goal} body={"Goal (Days)"}></StatusCard>
          <StatusCard title={next_due_date} body={"Next Due"}></StatusCard>
        </div>

        {/* Relation goal*/}
        <div className=" col-span-full md:col-span-3 row-span-2 grid items-stretch">
          <div className="w-full bg-white text-brand text-left border border-base-200 shadow-brand/20 shadow-md flex max-sm:flex-col max-sm:gap-3 justify-between p-5 rounded-xl">
            {/* Title*/}
            <div className="space-y-4">
              <p className="text-xl">Relationship Goal</p>
              <p className="text-lg">
                Connect every <strong>{goal} days</strong>
              </p>
            </div>

            <button className="btn">Edit</button>
          </div>
        </div>

        {/* Quick Check Ins*/}
        <div className=" col-span-full md:col-span-3 row-span-3 grid items-stretch">
          <div className="w-full bg-white text-brand text-left border border-base-200 shadow-brand/20 shadow-md flex flex-col gap-3 p-5 rounded-xl">
            {/* Title*/}
            <p className="text-xl">Quick Check-In</p>

            <div className=" w-full h-full grid grid-cols-3 gap-4 ">
              <button
                onClick={() =>
                  handleAddTimeline(
                    { id, name, time: new Date().toDateString() },
                    `Called ${name}`,
                  )
                }
                className="w-full min-h-fit h-full btn flex flex-col gap-2"
              >
                <span className="text-[27px] ">
                  <IoCall />
                </span>
                Call
              </button>
              <button
                onClick={() =>
                  handleAddTimeline(
                    { id, name, time: new Date().toDateString() },
                    `Text Sent to ${name}`,
                  )
                }
                className="w-full min-h-fit h-full btn flex flex-col gap-2 "
              >
                <span className="text-[27px] ">
                  <LuMessageSquareMore />
                </span>
                Text
              </button>
              <button
                onClick={() =>
                  handleAddTimeline(
                    { id, name, time: new Date().toDateString() },
                    `Video called ${name}`,
                  )
                }
                className="w-full min-h-fit h-full btn flex flex-col gap-2 "
              >
                <span className="text-[27px] ">
                  <IoVideocam />
                </span>
                Video
              </button>
            </div>
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
