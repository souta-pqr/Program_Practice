function useNumber(num: number) {
    console.log(num);
}

function doWhatever1(obj: any) {
    const str: string = obj;
    useNumber(obj);
}