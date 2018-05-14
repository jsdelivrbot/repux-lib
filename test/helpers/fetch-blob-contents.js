/* global XMLHttpRequest */
export function fetchBlobContents(blobUrl) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText);
            }
        };

        xhr.open('GET', blobUrl, false);
        xhr.send();
    });
}
