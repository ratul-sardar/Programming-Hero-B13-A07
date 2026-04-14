import { NavLink } from "react-router";
import { useLoaderData } from "react-router";

export default function Home() {
  const friendData = useLoaderData();
  console.log(friendData);

  return (
    <section className="">
      <div className="cssContainer">
        {/* Top Panel*/}
        <header className="text-center">
          <h1 className="text-4xl">hi, from Home page</h1>
        </header>
        {/* Bottom Panel*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Cards*/}

          {friendData.map((friend) => (
            <div className="bg-white rounded-xl border border-gray-400 p-6 space-y-4">
              <h3 className="font-semi-bold text-center">{friend.name}</h3>
              <NavLink to={`/friend/${friend.id}`} className="btn">
                click to see details.
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
