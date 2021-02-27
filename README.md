# iDuck
A NodeJS Wrapper to interfere with the DuckDuckGo Instant Answer API.

## Example
```js
const iDuck = require('iduck'),
duckduckgo = new iDuck('<t param>');
    duckduckgo.search('test', { no_html: true })
        .then(console.log);
```

## Docs
* [DuckDuckGo Instant Answer API Docs](https://api.duckduckgo.com/api)
### Docs Syntax
* | -> OR OPERATOR
* (Optional | Required)
* Everything else may seem self-explanatory | if you got questions then join the [Discord](https://discord.gg/tqeyYrS43A)

```js
// Method
iduck#search()
// Options
{
    no_redirect: true | false (Optional),
    no_html: true | false (Optional)
}
// Other Params
{
    q: string (Required),
    format: 'json',
    pretty: 1,
    t: this.t
}
```
