export default function ProfileCard({
  avatar,
  title,
  sinceContact,
  tags,
  status,
  bio,
  email,
}) {
  return (
    <div className="bg-white text-gray-400 text-center flex flex-col items-center justify-center gap-3 p-6 rounded-lg shadow-brand/20 shadow-md ">
      {/* Avatar*/}
      <div className="w-20 h-20 rounded-full overflow-hidden">
        {avatar && <img src={avatar} alt="card avatar" className="w-full" />}
      </div>

      {/* Card Details*/}
      <div className="space-y-2">
        {/* Card Title*/}
        <div className="space-x-2">
          {title && (
            <h3 className="text-xl text-black font-semibold">{title}</h3>
          )}

          {sinceContact && <p className="text-xs ">{sinceContact}d ago</p>}
        </div>

        {/* Card Tags*/}
        <div className="space-x-2">
          {tags.map((tag) => (
            <div className="badge badge-soft badge-success rounded-full">
              {tag}
            </div>
          ))}
        </div>

        {/* Status*/}
        <div className="space-x-2">
          {status && (
            <div
              className={`rounded-full text-white badge ${status === "on-track" ? "badge-success" : status === "almost due" ? "badge-warning" : " badge-error"}  `}
            >
              {status}
            </div>
          )}
        </div>

        {/* Bio*/}
        {bio && <p className="text-[1rem] ">{bio}</p>}

        {/* Email*/}
        {email && <p className="text-sm">{email}</p>}
      </div>
    </div>
  );
}
