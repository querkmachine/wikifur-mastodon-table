# wikifur-mastodon-table

Quick and dirty script to scrape furry Mastodon instances and generate the table on [WikiFur's Mastodon article](https://en.wikifur.com/wiki/Mastodon).

## Usage

1. Clone this repo.
2. In the directory, run `npm install` to install dependencies.
3. Run `npm start`.

All of the instances listed in `instances.json` will have their public-facing APIs called to obtain info on user numbers and registration restrictions. This might take a while.

Eventually a link will pop up for a local server. Open it up, and there'll be a page with the wikicode formatted data it managed to pull down.

## Notes

- There's no caching. Sorry.
- It only works with Mastodon at the moment, not other ActivityPub/fediverse things. Sorry again.
- Instances that cannot be reached for whatever reason (network issues, offline for maintenance, etc.) will be excluded from the final table.
- This uses the v1 instance endpoint of the Mastodon API for now. The v2 equivalent only became available in Mastodon v4, which many instances aren't using yet, and it doesn't expose the same data as the v1 endpoint.

## Contributions

This code is provided without any guarantee of support or security. I wrote it in like half an hour. Feel free to contribute to this repo, or fork the thing wholesale and make a much better version.
