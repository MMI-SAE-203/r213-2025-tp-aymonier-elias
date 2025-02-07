import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function allMaison() {
    try {
        let data = await pb.collection('Maison').getFullList({ sort: '-created' });
        data = data.map((maison) => {
            maison.imgURL = pb.files.getURL(maison, maison.images);
            return maison;
        })
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des mainsons', error);
        return [];
    }
}
// export async function oneId(id) {
//     const records = await pb.collection('Maison').getFullList({filter: `id = '${id}'`});
//     return records;
// }

// export async function allMaisonsFavori() {
//     const records = await pb.collection('Maison').getFullList({filter: 'favori = true'});
//     return records;
// }

// export async function allMaisonsSorted() {
//     const records = await pb.collection('Maison').getFullList({sort: 'prix'});
//     return records;
// }

// export async function bySurface(surface) {
//     const records = await pb.collection('Maison').getFullList({filter: `surface >= ${surface}`});
//     return records;
// }

// export async function surfaceORprice(surface, prix) {
//     const records = await pb.collection('Maison').getFullList({filter: `surface >= ${surface} || prix <= ${prix}`});
//     return records;
// }

// export async function parAgent(agent) {
//     const records = await pb.collection('Agent').getFullList({filter: `id = '${agent}'`});
//     return records;
// }