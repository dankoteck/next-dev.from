import { getServerSession } from "next-auth";
import NextImage from "next/image";
import Header from "~/components/Header";

export default async function Home() {
  const session = await getServerSession();

  return (
    <main className="">
      <Header />

      <div className="flex flex-col gap-8 text-center items-center">
        <NextImage
          alt="Avatar"
          src={session?.user?.image ?? ""}
          width={80}
          height={80}
        />
        <h1 className="text-red-500">{session?.user?.name}</h1>
      </div>
    </main>
  );
}
