import Card from "@/components/card";

export default function Home() {
  return (
    <div className="h-screen w-full max-w-4xl mx-auto pt-20 py-20">
      <h1 className="text-4xl font-bold tracking-tighter">Bento Grid are cool, you should try it someone.</h1>
      <p className="text-base text-neutral-500 max-w-xl mt-4">
        Discover innovative solutions that transform the way you work and
        create. Our cutting-edge tools are designed to empower your creativity
        and boost your productivity like never before.
      </p>

      <Card />
    </div>
  );
}

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       <Image
//         src="/images/first.jpg"
//         alt="first image"
//         width={300}
//         height={300}
//         className="rounded-lg m-4 border-2 border-white border-dashed"
//       />
//       <h1>hello</h1>
//       <div
//       className="w-60 bg-blue-400 h-40 m-6 rounded-lg bg-linear-to-b from-sky-100 to-blue-700 font-bold flex items-end p-1"
//       >
//         100xSchool
//       </div>
//     </div>
//   );
// }
