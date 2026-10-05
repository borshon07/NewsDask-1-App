import Image from "next/image";

const date = new Date().toLocaleDateString("bn-BD", {
  dateStyle: "full",
});
console.log(date);

const header = () => {
  return (
    <div>
      <div className=" flex items-center justify-center gap-2 bg-gray-100 p-4">
        <Image
          className=" h-12 w-12"
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
        />

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-red-500">Global News Desk</h1>

          <p className="text-lg font-semibold">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default header;
