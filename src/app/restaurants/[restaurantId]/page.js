import { redirect } from "next/navigation";

export default async function Restaurant({ params }) {
  const { restaurantId } = await params;
  if (!restaurantId) {
    redirect("/restaurant");
  }
  redirect(`/restaurant/${restaurantId}/menu`);
  return null;
}
