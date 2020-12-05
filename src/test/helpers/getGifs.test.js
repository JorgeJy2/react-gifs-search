
import { getGifs } from '../../components/helpers/GetGifs';

describe('get gifs fetch', ()=> {
    test('should have 10 items ', async()=> {
        const gifs = await getGifs('dogs');  
        expect(gifs.length).toBe(5);
    });

    test('should have 0  items ', async()=> {
        const gifs = await getGifs();
        expect(gifs.length).toBe(5);
    });
});