export const ProfilePic = () => {
  return (
    <div className="grid">
      <div
        style={{
          backgroundImage: "url('/pfp.png')",
          backgroundSize: "cover",
          gridArea: "1/1",
        }}
        className="size-48 rounded-full sm:size-80 md:size-96"
      ></div>
      <div
        style={{ gridArea: "1/1" }}
        className="rounded-full bg-gradient-to-r from-black/30 to-black/0"
      ></div>
    </div>
  );
};
