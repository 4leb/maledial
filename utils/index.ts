export function getLocalStorageItem(key: string, defaultValue: string) {
    return  typeof window !== "undefined" && window.localStorage.getItem(key) || defaultValue;
}

export function setLocalStorageItem(key: string, value: string) {
    if (typeof window !== "undefined") {
        window.localStorage.setItem(key, value);
    }
}
