import type {Restaurant} from "@/api";

import Link from "next/link";

export default async function RestaurantCard({restaurant}: {restaurant: Restaurant}) {
  return (
    <article key={restaurant.id}>
      <img
        alt={restaurant.name}
        className="mb-3 h-[300px] w-full object-cover"
        src={restaurant.image}
      />
      <h2 className="inline-flex gap-2 text-lg font-bold">
        <Link href={`/${restaurant.id}`}>{restaurant.name}</Link>
        <small className="inline-flex gap-1">
          <span>⭐</span>
          <span>{restaurant.score}</span>
          <span className="font-normal opacity-75">({restaurant.ratings})</span>
        </small>
      </h2>
      <p className="opacity-90">{restaurant.description}</p>
    </article>
  );
}
