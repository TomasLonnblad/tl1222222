import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard/carousel");
  return <>Coming Soon</>;
}
