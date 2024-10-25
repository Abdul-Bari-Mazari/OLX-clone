interface DetailImageProps {
  image: string;
}

export default function DetailImage({ image }: DetailImageProps) {
  return (
    <>
      <div className="bg-black border border-gray-400 flex items-center justify-center w-full h-full lg:w-[850px] lg:h-[480px] rounded">
        <img
          src={image}
          alt=""
          className="object-cover h-full w-1/2 bg-white"
        />
      </div>
    </>
  );
}
