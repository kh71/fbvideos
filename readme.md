<h1 align="center">
<br>
<img src="https://raw.githubusercontent.com/rishigiridotcom/rishigiri.com/835ef5231dc96ae7c751b1a35acc664986726b4b/github/fbvideos.png" width="250px">
<br>
<a href="https://travis-ci.org/CodeDotJS/fbvideos"><img src="https://travis-ci.org/CodeDotJS/fbvideos.svg?branch=master"></a> <img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg">
<br>
</h1>

> :link: Easily extract downloadable link of publicly available videos on facebook.

## Install

```
$ npm install --save fbvideos
```

## Usage

```js
const fbvid = require('fbvideos');

const video = 'https://www.facebook.com/9gag/videos/10155721204506840/';

fbvid.getDown(video).then(vid => {
	console.log(vid)
	// => {
	//   sd: 'https://z-p3-video.fpnh5-2.fna.fbcdn.net/v/...80e9a6ca6bf93aff3f361031580cd0e7&oe=5BAE6793',
	//   hd: 'https://z-p3-scontent.fpnh5-2.fna.fbcdn.net/v/...fe7c4ac5a6035beadf717e&oe=5C52EA14'
	// }
});

fbvid.low(video).then(vid => {
  console.log(vid)
  // => { url: 'https://video.fpat1-1.fna.fbcdn.net/...mp4?934&oe=5972F363' }

});

fbvid.high(video).then(vid => {
  console.log(vid);
  // => { url: 'https://video.fpat1-1.fna.fbcdn.net/...mp4?934&OE=2kf2lf4g' }
});
```

## API

#### __`fbvid.getDown(link)`__
- `Returns a` object sd and hd resolution facebook video.`

#### __`fbvid.low(link)`__

- `Returns a` __`url`__ `for` __`low`__ `resolution facebook video.`

__`link`__

`Type :` `string`

#### __`fbvid.high(link)`__

- `Returns a` __`url`__ `for` __`high`__ `resolution facebook video.`

__`link`__

`Type :` `string`


## Related


- __[`facebookid`](https://github.com/CodeDotJS/facebookid)__ `:` `An api to find user id of any facebook user`
- __[`acuter`](https://github.com/CodeDotJS/acuter)__ `:` `A simple wrapper for twitter media`

## License

MIT &copy; [Rishi Giri](http://rishigiri.ml)

