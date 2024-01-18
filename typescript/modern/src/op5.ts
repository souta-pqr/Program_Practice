type GetTimeFunc1 = () => Date;

function useTime1 (getTimeFunc: GetTimeFunc1 | undefined) {
    const timeOrUndefined = getTimeFunc?.().toString();
}