import { menus } from "../../../data/menus.js";

export function data(pageContext) {
  const food = menus.find((menu) => menu.slug === pageContext.routeParams.slug);

  if (!food) {
    throw new Error("Makanan tidak ditemukan");
  }

  return { food };
}
