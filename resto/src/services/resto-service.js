export default class RestoService{
    // getMenuItems(){
    //     return [];
    // }

    getMenuItems = async () => {
        const res = await fetch('/menu');

        if(!res.ok) {
            throw new Error(`Could not fetch src/db.json`+
            `, received ${res.status}`);
        }
        return await res.json();
    }
}