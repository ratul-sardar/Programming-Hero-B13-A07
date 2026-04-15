import { NavLink } from "react-router";
import { useLoaderData } from "react-router";
import { FaPlus } from "react-icons/fa6";
import StatusCard from "../components/ui/StatusCard/StatusCard";
import ProfileCard from "../components/ui/ProfileCard/ProfileCard";

export default function Home() {
  const friendData = useLoaderData();

  return (
    <section className="">
      <div className="cssContainer">
        {/* Top Panel*/}
        <header className="text-center text-brand ">
          <h1 className="mb-4 ">Friends to keep close in your life</h1>
          <p className="mb-8 mx-auto max-w-130 ">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <NavLink
            to={"/"}
            className="mx-auto w-fit button bg-brand hover:bg-brand/80 text-white"
          >
            <FaPlus />
            Add Friend
          </NavLink>
        </header>
        {/* Bottom Panel*/}

        <div className="space-y-10">
          {/* Status Cards*/}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatusCard
              title={friendData.length}
              body={"Total Friends"}
            ></StatusCard>
            <StatusCard
              title={
                friendData.filter((item) => item.status === "on-track").length
              }
              body={"On Track"}
            ></StatusCard>
            <StatusCard
              title={
                friendData.filter((item) => item.status !== "on-track").length
              }
              body={"Need Attention"}
            ></StatusCard>
            <StatusCard
              title={12}
              body={"Interactions This Month"}
            ></StatusCard>
          </div>

          <div className="divider"></div>

          {/*Friends Card*/}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Your Friends</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {friendData.map((friend) => (
                <NavLink key={friend.id} to={`/friend/${friend.id}`}>
                  <ProfileCard
                    avatar={friend.picture}
                    title={friend.name}
                    sinceContact={friend.days_since_contact}
                    tags={friend.tags}
                    status={friend.status}
                  ></ProfileCard>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
