import { writable } from "svelte/store";
import type { Visit, LoggedInUser } from "./services/visit-types";
import type { MarkerSpec } from "./services/markers";;


export const loggedInUser = writable<LoggedInUser>();
export const latestVisit = writable<Visit>();
export const markerSelected = writable<MarkerSpec>();