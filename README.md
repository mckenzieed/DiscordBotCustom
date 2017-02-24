# discord-guildrank-bot [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> 

## Version
1.2.0

Most recent Update: Added in !parses (characterName) (bossName) (difficulty) [serverName] [serverRegion]. Tells you the dps and hps (if healing) for your most recent kill
of your boss argument. It also tells you how well you did versus others in your bracket.

## Overview
This is a [Discord](https://discordapp.com/) bot that will do a few things. The main thing it will do is fetch your guilds rank from wowprogress.com.

## Installation

Clone this repository, and run:
```sh
$ npm install
```

## Usage

```js
$ npm run bot
```
Type "!rank" without the quotes in discord after adding this bot as a user.

List of commands:

| Command Name  | Arguments | Usage |
| ------------- | ------------| ----- | 
| Rank          | Guildname, Realm, Region | Returns realm rank for specified guild. In order, Guildname is default 'Months Behind', Realm is 'Proudmoore' and Region is 'US' |
| parses        | (characterName) (bossName) (difficulty) [serverName] [serverRegion] | Get DPS, HPS, and parse of most recent boss kill |
| More to come  | | |

## License

Apache-2.0 © [Ethan McKenzie]()


[npm-image]: https://badge.fury.io/js/discord-guildrank-bot.svg
[npm-url]: https://npmjs.org/package/discord-guildrank-bot
[travis-image]: https://travis-ci.org/mckenzieed/discord-guildrank-bot.svg?branch=master
[travis-url]: https://travis-ci.org/mckenzieed/discord-guildrank-bot
[daviddm-image]: https://david-dm.org/mckenzieed/discord-guildrank-bot.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/mckenzieed/discord-guildrank-bot
[coveralls-image]: https://coveralls.io/repos/mckenzieed/discord-guildrank-bot/badge.svg
[coveralls-url]: https://coveralls.io/r/mckenzieed/discord-guildrank-bot
