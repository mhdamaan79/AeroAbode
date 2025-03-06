const ComingSoon = () => {
  return (
    <div>
      <CutoutTextLoader
        height="450px"
        background="white"
        imgUrl="https://media.giphy.com/media/ZQlsGcoN9Z5tagVteb/giphy.gif?cid=ecf05e479f4xosqucwzjw10m5eyphlzazkcxju836gaqup97&ep=v1_gifs_related&rid=giphy.gif&ct=g"
      />
    </div>
  );
};

const CutoutTextLoader = ({ height, background, imgUrl }) => {
  return (
    <div className="relative" style={{ height }}>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        style={{ background }}
        className="absolute inset-0 animate-pulse z-10"
      />
      <span
        className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontSize: "clamp(3rem, 12vw, 10rem)",
          lineHeight: height,
        }}
      >
        Coming Soon...
      </span>
    </div>
  );
};

export default ComingSoon;
