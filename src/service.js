export function getData() {
    let data = fetch(`/v1/cryptocurrency/listings/latest`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-CMC_PRO_API_KEY': '641eab5b-37d7-49d2-aeb5-7af5165398fe'
        }
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error(`${res.status}`);
            } else {
                return res.json();
            }
        }).then(data => {
            return data;
        })
    return data;
}