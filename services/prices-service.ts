const fetch = require('isomorphic-unfetch');

const currentPrices = async () => {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    return data;
}
export default currentPrices;