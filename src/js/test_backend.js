import { getOffre } from "./backend.mjs";

try {
    const records = await getOffre("6mbi430qatt1wx2");
    console.log(records);
} catch (e) {
    console.error(e);
}