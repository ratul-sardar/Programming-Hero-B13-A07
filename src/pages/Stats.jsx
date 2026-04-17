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
          <div className="w-full flex items-center justify-center gap-2">
            <div className="flex gap-1 items-center">
              <div className="rounded-full w-2 h-2 bg-[#244D3F] text-xs"></div>
              <p className="text-xs">Called</p>
            </div>

            <div className="flex gap-1 items-center">
              <div className="rounded-full w-2 h-2 bg-[#37A163] text-xs"></div>
              <p className="text-xs">Video call</p>
            </div>

            <div className="flex gap-1 items-center">
              <div className="rounded-full w-2 h-2 bg-[#7E35E1] text-xs"></div>
              <p className="text-xs">Texted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
