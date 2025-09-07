export default function ProfilePhoto() {
  return (
    <div className="card-wrapper w-[180px] h-[180px]  relative">
      {/* Image ABOVE the rotating ring */}
      <img
        src="/profileImg.jpg"
        alt="round"
        className="w-full h-full rounded-full object-cover object-top relative z-10"
      />
    </div>
  );
}
