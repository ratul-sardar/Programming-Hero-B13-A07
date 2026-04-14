import { useLoaderData } from "react-router";

export default function Home() {
  const friendData = useLoaderData();
  console.log(friendData);

  return (
    <section className="">
      <div className="cssContainer">
        <h1 className="">hi, from home page</h1>
      </div>
    </section>
  );
}
