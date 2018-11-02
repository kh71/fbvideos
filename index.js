'use strict';

const got = require('got');

const msg = 'Either the video is deleted or it\'s not shared publicly!';

const getDown = link => {
	return got(link).then(res => {
		let sd, hd = '';
		try {
			sd = res.split('sd_src:"')[1].split('",hd_tag')[0];
		} catch (e) {
			sd = false;
		}

		try {
			hd = res.split('hd_src:"')[1].split('",sd_src:"')[0];
		} catch (e) {
			hd = false;
		}

		return {
			sd: sd,
			hd: hd
		}

		if (hd || sd) {
			return {
				sd: sd,
				hd: hd
			}
		}
		return false;
	}).catch(err => {
		if (err) {
			err.message = msg;
		}
		return err.message;
	});


	return false;
};

const lowResolution = link => {
	return got(link).then(res => {
		const link = res.body.split('sd_src:"')[1].split('",hd_tag')[0];
		return {
			url: link
		};
	}).catch(err => {
		if (err) {
			err.message = msg;
		}
		return err.message;
	});
};

const highResolution = link => {
	return got(link).then(res => {
		const link = res.body.split('hd_src:"')[1].split('",sd_src:"')[0];
		return {
			url: link
		};
	}).catch(err => {
		if (err) {
			err.message = msg;
		}
		return err.message;
	});
};

exports.low = lowResolution;
exports.high = highResolution;
