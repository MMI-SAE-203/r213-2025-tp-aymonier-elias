import { allMaison, allMaisonsFavori, allMaisonsSorted, bySurface, oneId, parAgent, surfaceORprice } from "./backend.mjs";

// try {
//     const records = await allMaison("o99a446r9uro601");
//     console.log(JSON.stringify(records, null, 2));
// } catch (e) {
//     console.error(e)
// }

// try {
//     const records = await oneId("o99a446r9uro601");
//     console.log(JSON.stringify(records, null, 2));
// } catch (e) {
//     console.error(e)
// }

// try {
//     const records = await allMaisonsFavori();
//     console.log(JSON.stringify(records, null, 2));
// } catch (e) {
//     console.error(e)
// }

// try {
//     const records = await allMaisonsSorted();
//     console.log(JSON.stringify(records, null, 2));
// } catch (e) {
//     console.error(e)
// }

// try {
//     const records = await bySurface(100);
//     console.log(JSON.stringify(records, null, 2));
// } catch (e) {
//     console.error(e)
// }

// try {
//     const records = await surfaceORprice(100,500);
//     console.log(JSON.stringify(records, null, 2));
// } catch (e) {
//     console.error(e)
// }

// try {
//     const records = await surfaceORprice(100,500);
//     console.log(JSON.stringify(records, null, 2));
// } catch (e) {
//     console.error(e)
// }

try {
    const records = await parAgent('45l68mq70byusyg');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e)
}