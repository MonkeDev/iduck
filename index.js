const fetch = require('node-fetch');
class iDuck {
    constructor(t) {
        this.t = t;
    }

    search(query, options) {
        if(!query) throw new Error('No query found / What do you want to search?');
        const no_redirect = options && options.no_redirect == true ? `&no_redirect=1` : '',
            no_html = options && options.no_html == true ? `&no_redirect=1` : '',
            params = `?q=${query}&format=json&pretty=1${no_redirect}${no_html}`;
        return fetch(`https://api.duckduckgo.com/${params}&t=${this.t}`)
            .then(res => res.json())
    }
}

module.exports = iDuck;