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

export async function getOffre(id) {
    try {
        let data = await pb.collection('maison').getOne(id);
        data.imgURL = pb.files.getURL(data, data.images);
        return data;
    } catch (e) {
        console.error(e)
    }
}

export async function bySurface(surfMin) {
    let records = await pb.collection('Maison').getFullList({ filter: `surface > '${surfMin}'` })
    records = records.map((maison) => {
        maison.imgURL = pb.files.getURL(maison, maison.images);
        return maison;
    })
    return records;
}

export async function addOffre(house) {
    try {
        await pb.collection('maison').create(house);
        return {
            success: true,
            message: 'Offre ajoutée avec succès'
        };
    } catch (error) {
        console.log('Une erreur est survenue en ajoutant la maison', error);
        return {
            success: false,
            message: 'Une erreur est survenue en ajoutant la maison'
        };
    }
}