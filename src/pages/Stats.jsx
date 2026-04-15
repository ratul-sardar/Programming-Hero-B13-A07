import StatusPieChart from "../components/ui/StatusPieChart/StatusPieChart";

export default function Stats() {
  return (
    <section className="">
      <div className="cssContainer max-w-277.5 ">
        <h1 className="">Friendship Analytics</h1>

        <div className="w-full p-8 rounded-xl bg-white shadow-brand/20 shadow-md flex flex-col item-center justify-center gap-6">
          <p className="text-xl text-brand font-medium text-left">
            By Interaction Type
          </p>
          <StatusPieChart />
        </div>
      </div>
    </section>
  );
}
