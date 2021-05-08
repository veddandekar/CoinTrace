# CoinTrack

A simple and efficient crypto portfolio that targets the shortcomings of WazirX's official app.

## Motivation

Wazirx is the largest exchange in India. However, as an app, Wazirx lacks the most trivial feature
expected from an investment app - Portfolio tracking. Currently, their app has no way to measure
profits and loss incurred from investements in a cryptocurrency. Users have to manually measure
and track of their investements. Using excel and sheets to manually track my investments quickly
became a cumbersome task that I decided to address using CoinTrack.

## To-Dos

The current code was written in a rush for immediate use. As such, no attention was given to
proper and efficient code. There is thus plenty of room for improvements and contributions are
always welcome for the same.
Following is a list of major tasks currently at hand.

- Enable PWA caching: Base template was supposed to work as PWA with caching out of the box. Does
  not seem to be working though. ¯\\_(ツ)__/¯
- Utilize graphs: Because who wants to look at tables anyways. A definite place where graphs can be
  used is in the accordion details.
- Avoid CORS-proxy: Wazirx provide a "public" API to fetch the price of their cryptos. However, the API
  does not have CORS enabled and as such, serves no request from an external server. Currently, a cors
  proxy is being utilized to work around this issue. Also filed an issue with Wazirx for this issue.
  No reply as of yet. ¯\\_(ツ)__/¯
- Use names instead of codes for cryptos: Might have to create and utlize a local file with mappings.
- Support different currencies: Currently CoinTrack targets only Rupees as that was my requirement.
  However, with a little effort, it should be possible to set a user-level currency and display all
  prices after converting to the same.
- Improve UI: Maybe icons, better branding and some improvements to the current text input fields.
- Code cleanup: Remove all unused files, packages and code blocks left from the base template.
- Break code into components: Rushed code was written in entire files and can likely be broken into
  smaller components.
- Improve README: Add features, images, links and acknowledgements.

## License

[MIT](./LICENSE)
