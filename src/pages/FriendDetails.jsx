import { useParams } from "react-router";
import { useLoaderData } from "react-router";

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

  return (
    <section className="">
      <div className="cssContainer">
        <h1 className="">hi, from friend details</h1>
        <h2 className="text-red-500">{name}</h2>
        <p className="text-amber-400-500">{bio} </p>
      </div>
    </section>
  );
}
