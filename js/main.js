import { initializeSearch } from "./modules/search.js";
import { initializeNavigation } from "./modules/navigation.js";

document.addEventListener("DOMContentLoaded", () => {
  initializeSearch();
  initializeNavigation();
});
