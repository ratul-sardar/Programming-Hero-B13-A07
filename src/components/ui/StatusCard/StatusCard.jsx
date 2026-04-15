export default function StatusCard({ title, body }) {
  return (
    <div className="w-full bg-white text-brand text-center border border-base-200 shadow-brand/20 shadow-md space-y-3 p-8 rounded-xl">
      <h4 className="text-[2rem] font-semibold">{title}</h4>
      <p className="text-[1.125rem] font-normal ">{body}</p>
    </div>
  );
}
