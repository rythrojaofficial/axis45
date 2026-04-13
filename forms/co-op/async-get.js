import { getMembers } from "./get-co-op.js";
import { getTasks } from "./getTasks.js";

let membersArray = await getMembers();
export const allActiveMembersNames = membersArray.allActive.map(obj => obj['Co-Op Member']);
let tasksArray = await getTasks();
export const allActiveTaskNames = tasksArray.map(obj=> obj["Task Name"]);