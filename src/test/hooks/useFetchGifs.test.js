const { renderHook } = require("@testing-library/react-hooks");
const { useFetchGifs } = require("../../components/hooks/UseFetchGifs");

describe('useFetchGifs', ()=> {
    test('should return empty data', async ()=> {
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('dogs'));
        const { data, loading } = result.current;
        await waitForNextUpdate();
        // console.log(data, loading)
        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
        
    });

    test('should return array imgs', async ()=> {
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('dogs'));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        // console.log(data, loading)
        expect(data.length).toBe(5);
        expect(loading).not.toBeTruthy();
    });
});