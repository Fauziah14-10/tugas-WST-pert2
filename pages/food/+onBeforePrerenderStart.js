import { menus } from "../../data/menus.js";

export function onBeforePrerenderStart() {
  return menus.map((menu) => `/food/${menu.slug}`);
}
