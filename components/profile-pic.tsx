export const ProfilePic = () => {
  return (
    <div className={"grid"}>
      <div
        style={{
          backgroundImage: "url('/pfp.webp')",
          backgroundSize: "cover",
          gridArea: "1/1",
        }}
        className="size-48 rounded-full sm:size-80 md:size-96 lg:size-[450px]"
      ></div>
      <div
        style={{ gridArea: "1/1" }}
        className="rounded-full bg-gradient-to-r sm:from-black/30 sm:to-black/0"
      ></div>
    </div>
  );
};
