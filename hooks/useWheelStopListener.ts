export const useWheelStopListener = () => {
    return (element: HTMLElement, callback: Function, timeout: number) => {
        let handle: number|null = null;
        var onScroll = function() {
            if (handle) {
                clearTimeout(handle);
            }
            handle = setTimeout(callback, timeout || 200); // default 200 ms
        };
        element.addEventListener('wheel', onScroll);
        return function() {
            element.removeEventListener('wheel', onScroll);
        };
    }
}