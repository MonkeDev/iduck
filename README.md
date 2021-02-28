# iDuck
A NodeJS Wrapper to interfere with the DuckDuckGo Instant Answer API.

## Example
```js
const iDuck = require('iduck'),
duckduckgo = new iDuck('<t param>');
    duckduckgo.search('test', { no_html: true })
        .then(console.log)
        .catch(console.error);
```

## Docs
* [DuckDuckGo Instant Answer API Docs](https://api.duckduckgo.com/api)
If you got questions then join our [Discord Server](https://discord.gg/tqeyYrS43A)
Expect more methods in the future, suggestions are open too :)

* `search()` method
```js
// Example
iDuck#search(query: string, {})
    .then(res => console.log(res.Abstract))
    .catch(console.error);
// Options
{
    no_redirect: true | false,
    no_html: true | false,
    skip_disambig: true | false
}
```
