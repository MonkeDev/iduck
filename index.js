const fetch = require('node-fetch');
class iDuck {
    constructor(t) {
        this.t = t;
    }

    search(query, options) {
        if(!query) throw new Error('No query found / What do you want to search?');
        const no_redirect = options && options.no_redirect == true ? `&no_redirect=1` : '',
            no_html = options && options.no_html == true ? `&no_html=1` : '',
            skip_disambig = options && options.skip_disambig == true ? `&skip_disambig=1` : '',
            params = `?q=${query}${no_redirect}${no_html}${skip_disambig}`;
        return fetch(`https://api.duckduckgo.com${params}&format=json&pretty=1&t=${this.t}`)
            .then(res => res.json())
    }
}

module.exports = iDuck;