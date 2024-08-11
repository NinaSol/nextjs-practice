import type {Restaurant} from "@/api";

import api from "@/api";

import RestaurantCard from "../card";

/* agregar flechita de goBack */

export default async function RestaurantPage({params: {id}}: {params: {id: string}}) {
  const restaurant: Restaurant = await api.fetch(id);

  return <RestaurantCard restaurant={restaurant} />;
}
