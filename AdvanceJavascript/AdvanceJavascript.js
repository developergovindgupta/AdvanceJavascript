var global = typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {};
(function (_window) {
	!String.prototype.trimAll &&
		/**
		 * This is a string extension method remove all extra spaces, new line and tab characters from string sentence.
		 * @returns {string}  String having single space between words of string.
		 * ---
		 * @example
		 * " this         is     sample         string".trimAll()
		 * OUTPUT :  "this is sample string"
		 */
		(String.prototype.trimAll = function trimAll() {
			let str = this;
			str = str.trim().replace(/\t/g, ' ').replace(/\r/g, ' ').replace(/\n/g, ' ');
			while (str.indexOf('  ') >= 0) {
				str = str.replace(/  /g, ' ');
			}
			return str;
		});

	!String.prototype.toCamelCase &&
		/**
		 * This is a string extension method convert string to camel case. Input string may be space separated or pascal/kebab/snake case
		 * @returns {string} String converted to camel case
		 * ---
		 * @example
		 * > "this is sample string".toCamelCase()
		 * //OUTPUT : "thisIsSampleString"
		 * > "this-is-sample-string".toCamelCase()
		 * //OUTPUT : "thisIsSampleString"
		 * > "ThisIsSampleString".toCamelCase()
		 * //OUTPUT : "thisIsSampleString"
		 * > "this_is_sample_string".toCamelCase()
		 * //OUTPUT : "thisIsSampleString"
		 */
		(String.prototype.toCamelCase = function toCamelCase() {
			let str = this.trimAll();
			let str2 = '';
			let isSpace = false;
			if (str.indexOf(' ') > 0 || str.indexOf('-') > 0 || str.indexOf('_') > 0) {
				str = str.toLowerCase();
				for (let i = 0, j = str.length; i < j; i++) {
					if (str[i] === ' ' || str[i] === '-' || str[i] === '_') {
						isSpace = true;
					} else if (isSpace) {
						str2 += str[i].toUpperCase();
						isSpace = false;
					} else {
						str2 += str[i];
					}
				}
			} else {
				str2 = str[0].toLowerCase() + str.substring(1);
			}
			return str2;
		});

	!String.prototype.toKebabCase &&
		/**
		 * This is string extension method that convert string to kebab case
		 * @returns {string} string converted in kebab case
		 */
		(String.prototype.toKebabCase = function toKebabCase() {
			let str = this.trimAll();
			let str2 = '';
			let isSpace = false;
			if (str.indexOf(' ') > 0 || str.indexOf('-') > 0 || str.indexOf('_') > 0) {
				str = str.toLowerCase();
				for (let i = 0, j = str.length; i < j; i++) {
					if (str[i] === ' ' || str[i] === '-' || str[i] === '_') {
						isSpace = true;
					} else if (isSpace) {
						str2 += '-' + str[i];
						isSpace = false;
					} else {
						str2 += str[i];
					}
				}
			} else {
				for (let i = 0, j = str.length; i < j; i++) {
					if (str[i] === str[i].toUpperCase() && i > 0) {
						str2 += '-' + str[i].toLowerCase();
					} else {
						str2 += str[i].toLowerCase();
					}
				}
			}
			return str2;
		});
	!String.prototype.toPascalCase &&
		(String.prototype.toPascalCase = function () {
			let str = this.trimAll();
			let str2 = '';
			let isSpace = false;
			if (str.indexOf(' ') > 0 || str.indexOf('-') > 0 || str.indexOf('_') > 0) {
				str = str.toLowerCase();
				for (let i = 0, j = str.length; i < j; i++) {
					if (str[i] === ' ' || str[i] === '-' || str[i] === '_') {
						isSpace = true;
					} else if (isSpace || i === 0) {
						str2 += str[i].toUpperCase();
						isSpace = false;
					} else {
						str2 += str[i];
					}
				}
			} else {
				str2 = str[0].toUpperCase() + str.substring(1);
			}
			return str2;
		});
	!String.prototype.toSnakeCase &&
		(String.prototype.toSnakeCase = function () {
			let str = this.trimAll();
			let str2 = '';
			let isSpace = false;
			if (str.indexOf(' ') > 0 || str.indexOf('-') > 0 || str.indexOf('_') > 0) {
				str = str.toLowerCase();
				for (let i = 0, j = str.length; i < j; i++) {
					if (str[i] === ' ' || str[i] === '-' || str[i] === '_') {
						isSpace = true;
					} else if (isSpace) {
						str2 += '_' + str[i];
						isSpace = false;
					} else {
						str2 += str[i];
					}
				}
			} else {
				for (let i = 0, j = str.length; i < j; i++) {
					if (str[i] === str[i].toUpperCase() && i > 0) {
						str2 += '_' + str[i].toLowerCase();
					} else {
						str2 += str[i].toLowerCase();
					}
				}
			}
			return str2;
		});
	!String.prototype.left &&
		(String.prototype.left = function (n) {
			n = n || 1;
			return this.substr(0, n);
		});
	!String.prototype.right &&
		(String.prototype.right = function (n) {
			n = n || 1;
			return this.substring(this.length - n);
		});
	!String.prototype.mid &&
		(String.prototype.mid = function (m, n) {
			m = m || Math.floor(this.length / 2);
			n = n || 1;
			return this.substr(m, n);
		});
	!String.prototype.reverse &&
		(String.prototype.reverse = function () {
			return this.split('').reverse().join('');
		});
	!String.prototype.sort &&
		(String.prototype.sort = function (compareFn) {
			return this.split('')
				.sort(compareFn || ((a, b) => (a > b ? 1 : -1)))
				.join('');
		});
	!String.prototype.sortAsc &&
		(String.prototype.sortAsc = function (compareFn) {
			return this.split('')
				.sort(compareFn || ((a, b) => (a > b ? 1 : -1)))
				.join('');
		});
	!String.prototype.sortDesc &&
		(String.prototype.sortDesc = function (compareFn) {
			return this.split('')
				.sort(compareFn || ((a, b) => (a < b ? 1 : -1)))
				.join('');
		});
	!String.prototype.distinct &&
		(String.prototype.distinct = function (compareFn) {
			return Array.from(new Set(this.split(''))).join('');
		});
	!String.prototype.toNumber &&
		(String.prototype.toNumber = function (nanValue) {
			let num = parseFloat(this.replace(/,/g, '').trimAll());
			if (isNaN(num)) {
				if (nanValue === _window.itself) {
					return this;
				}
				return (num = nanValue ?? num);
			}
			return num;
		});
	!String.prototype.parseInt &&
		(String.prototype.parseInt = function (baseValue, nanValue) {
			let num = parseInt(this.replace(/,/g, '').trimAll(), baseValue);
			if (isNaN(num)) {
				if (nanValue === _window.itself) {
					return this;
				}
				return (num = nanValue ?? num);
			}
			return num;
		});
	!String.prototype.parseFloat && (String.prototype.parseFloat = String.prototype.toNumber);
	!String.prototype.toInt && (String.prototype.toInt = String.prototype.parseInt);
	!String.prototype.toFloat && (String.prototype.toFloat = String.prototype.toNumber);
	!String.prototype.isNaN &&
		(String.prototype.isNaN = function (nanValue) {
			let num = this.toNumber();
			if (isNaN(num)) {
				if (nanValue === _window.itself) {
					return this;
				}
				return nanValue ?? true;
			} else {
				return typeof nanValue === 'undefined' ? false : this.toNumber(nanValue);
			}
		});

	!String.prototype.toArray &&
		(String.prototype.toArray = function () {
			return this.split('');
		});
	!String.prototype.toCodeArray &&
		(String.prototype.toCodeArray = function () {
			let arr = [];
			for (let i = 0, j = this.length; i < j; i++) {
				arr.push(this.charCodeAt(i));
			}
			return arr;
		});
	!String.prototype.toCharCodeArray &&
		(String.prototype.toCharCodeArray = function () {
			let arr = [];
			for (let i = 0, j = this.length; i < j; i++) {
				arr.push({ char: this[i], code: this.charCodeAt(i) });
			}
			return arr;
		});
	!String.prototype.toCharCode &&
		(String.prototype.toCharCode = function () {
			let obj = {};
			for (let i = 0, j = this.length; i < j; i++) {
				!obj[this[i]] && (obj[this[i]] = this.charCodeAt(i));
			}
			return obj;
		});
	!String.prototype.frequency &&
		(String.prototype.frequency = function (char, insensitive) {
			if (typeof char === 'boolean') {
				insensitive = char;
				char = '';
			}
			let str = this;
			if (insensitive) {
				str = this.toLowerCase();
				char && (char = char.toLowerCase());
			}
			if (char) {
				let count = 0;
				for (let i = 0, j = str.length; i < j; i++) {
					if (str[i] === char) {
						count++;
					}
				}
				return count;
			} else {
				let obj = {};
				for (let i = 0, j = str.length; i < j; i++) {
					obj[str[i]] = (obj[str[i]] || 0) + 1;
				}
				return obj;
			}
		});
	!String.prototype.toDateTime &&
		(String.prototype.toDateTime = function () {
			let mmm = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 };
			let d = new Date();
			let dt = { dd: 1, mm: 1, yy: 1900, h: 0, m: 0, s: 0 };
			let strDate = this.replace(/[,-./ ]/g, ' ').trimAll();
			let _date = '';
			let _time = '';
			if (strDate.indexOf(':') > 0) {
				if (strDate.indexOf(':') > 3) {
					_date = strDate.substring(0, strDate.indexOf(':') - 2).trimAll();
					_time = strDate.substring(strDate.indexOf(':') - 2).trimAll();
				} else {
					dt.dd = d.getDate();
					dt.mm = d.getMonth();
					dt.yy = d.getFullYear();
					if (new Date(1900, 1, 1).getDay() != 0) {
						dt.mm++;
					}
					_time = strDate.trimAll();
				}
			} else {
				_date = strDate.trimAll();
			}

			if (/^[0-3][0-9][ ](jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|january|february|march|april|may|june|july|august|september|october|november|december)[ ][1-2][0-9][0-9][0-9]$/i.test(_date)) {
				//"01-Jan-2019"
				dt.dd = parseInt(_date.substr(0, 2));
				dt.mm = mmm[_date.substr(3, 3).toLowerCase()];
				dt.yy = parseInt(_date.right(4));
			} else if (/^[0-9][ ](jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|january|february|march|april|may|june|july|august|september|october|november|december)[ ][1-2][0-9][0-9][0-9]$/i.test(_date)) {
				//"1-Jan-2019"
				dt.dd = parseInt(_date.substr(0, 1));
				dt.mm = mmm[_date.substr(2, 3).toLowerCase()];
				dt.yy = parseInt(_date.right(4));
			} else if (/^[0-3][0-9](jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|january|february|march|april|may|june|july|august|september|october|november|december)[1-2][0-9][0-9][0-9]$/i.test(_date)) {
				//"01Jan2019"
				dt.dd = parseInt(_date.substr(0, 2));
				dt.mm = mmm[_date.substr(2, 3).toLowerCase()];
				dt.yy = parseInt(_date.right(4));
			} else if (/^[0-9](jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|january|february|march|april|may|june|july|august|september|october|november|december)[1-2][0-9][0-9][0-9]$/i.test(_date)) {
				//"1Jan2019"
				dt.dd = parseInt(_date.substr(0, 1));
				dt.mm = mmm[_date.substr(1, 3).toLowerCase()];
				dt.yy = parseInt(_date.right(4));
			} else if (/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|january|february|march|april|may|june|july|august|september|october|november|december)[ ][1-2][0-9][0-9][0-9]$/i.test(_date)) {
				//"Jan-2019"
				dt.dd = 1;
				dt.mm = mmm[_date.substr(0, 3).toLowerCase()];
				dt.yy = parseInt(_date.right(4));
			} else if (/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|january|february|march|april|may|june|july|august|september|october|november|december)[1-2][0-9][0-9][0-9]$/i.test(_date)) {
				//"Jan2019"
				dt.dd = 1;
				dt.mm = mmm[_date.substr(0, 3).toLowerCase()];
				dt.yy = parseInt(_date.right(4));
			} else if (/^[0-3][0-9][ ](jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|january|february|march|april|may|june|july|august|september|october|november|december)[ ][0-9][0-9]$/i.test(_date)) {
				//"01-Jan-19"
				dt.dd = parseInt(_date.substr(0, 2));
				dt.mm = mmm[_date.substr(3, 3).toLowerCase()];
				dt.yy = parseInt(_date.right(2));
			} else if (/^[0-9][ ](jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|january|february|march|april|may|june|july|august|september|october|november|december)[ ][0-9][0-9]$/i.test(_date)) {
				//"1-Jan-19"
				dt.dd = parseInt(_date.substr(0, 1));
				dt.mm = mmm[_date.substr(2, 3).toLowerCase()];
				dt.yy = parseInt(_date.right(2));
			} else if (/^[0-3][0-9](jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|january|february|march|april|may|june|july|august|september|october|november|december)[0-9][0-9]$/i.test(_date)) {
				//"01Jan19"
				dt.dd = parseInt(_date.substr(0, 2));
				dt.mm = mmm[_date.substr(2, 3).toLowerCase()];
				dt.yy = parseInt(_date.right(2));
			} else if (/^[0-9](jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|january|february|march|april|may|june|july|august|september|october|november|december)[0-9][0-9]$/i.test(_date)) {
				//"1Jan19"
				dt.dd = parseInt(_date.substr(0, 1));
				dt.mm = mmm[_date.substr(1, 3).toLowerCase()];
				dt.yy = parseInt(_date.right(2));
			} else if (/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|january|february|march|april|may|june|july|august|september|october|november|december)[ ][0-9][0-9]$/i.test(_date)) {
				//"Jan-19"
				dt.dd = 1;
				dt.mm = mmm[_date.substr(0, 3).toLowerCase()];
				dt.yy = parseInt(_date.right(2));
			} else if (/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|january|february|march|april|may|june|july|august|september|october|november|december)[0-9][0-9]$/i.test(_date)) {
				//"Jan19"
				dt.dd = 1;
				dt.mm = mmm[_date.substr(0, 3).toLowerCase()];
				dt.yy = parseInt(_date.right(2));
			} else if (/^[0-3][0-9][ ](jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|january|february|march|april|may|june|july|august|september|october|november|december)$/i.test(_date)) {
				//"05,jan"

				dt.dd = parseInt(_date.substr(0, 2));
				dt.mm = mmm[_date.substr(3, 3).toLowerCase()];
				dt.yy = d.getFullYear();
			} else if (/^[0-9][ ](jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|january|february|march|april|may|june|july|august|september|october|november|december)$/i.test(_date)) {
				//"5,jan"
				dt.dd = parseInt(_date.substr(0, 1));
				dt.mm = mmm[_date.substr(2, 3).toLowerCase()];
				dt.yy = d.getFullYear();
			} else if (/^[0-3][0-9](jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|january|february|march|april|may|june|july|august|september|october|november|december)$/i.test(_date)) {
				//"05jan"
				dt.dd = parseInt(_date.substr(0, 2));
				dt.mm = mmm[_date.substr(2, 3).toLowerCase()];
				dt.yy = d.getFullYear();
			} else if (/^[0-9](jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|january|february|march|april|may|june|july|august|september|october|november|december)$/i.test(_date)) {
				//"5jan"
				dt.dd = parseInt(_date.substr(0, 1));
				dt.mm = mmm[_date.substr(1, 3).toLowerCase()];
				dt.yy = d.getFullYear();
			} else if (/^[0-3][0-9][ ][0-1][0-9][ ][1-2][0-9][0-9][0-9]$/i.test(_date)) {
				//"05-08-2019"
				dt.dd = parseInt(_date.substr(0, 2));
				dt.mm = parseInt(_date.substr(3, 2));
				dt.yy = parseInt(_date.right(4));
			} else if (/^[0-9][ ][0-1][0-9][ ][1-2][0-9][0-9][0-9]$/i.test(_date)) {
				//"5-08-2019"
				dt.dd = parseInt(_date.substr(0, 1));
				dt.mm = parseInt(_date.substr(2, 2));
				dt.yy = parseInt(_date.right(4));
			} else if (/^[0-9][ ][0-9][ ][1-2][0-9][0-9][0-9]$/i.test(_date)) {
				//"5-8-2019"
				dt.dd = parseInt(_date.substr(0, 1));
				dt.mm = parseInt(_date.substr(2, 1));
				dt.yy = parseInt(_date.right(4));
			} else if (/^[0-3][0-9][ ][0-9][ ][1-2][0-9][0-9][0-9]$/i.test(_date)) {
				//"15-8-2019"
				dt.dd = parseInt(_date.substr(0, 2));
				dt.mm = parseInt(_date.substr(3, 1));
				dt.yy = parseInt(_date.right(4));
			} else if (/^[0-1][0-9][ ][1-2][0-9][0-9][0-9]$/i.test(_date)) {
				//"11-2019"
				dt.dd = 1;
				dt.mm = parseInt(_date.substr(0, 2));
				dt.yy = parseInt(_date.right(4));
			} else if (/^[0-9][ ][1-2][0-9][0-9][0-9]$/i.test(_date)) {
				//"8-2019"
				dt.dd = 1;
				dt.mm = parseInt(_date.substr(0, 1));
				dt.yy = parseInt(_date.right(4));
			} else if (/^[0-3][0-9][ ][0-1][0-9][ ][0-9][0-9]$/i.test(_date)) {
				//"05-08-19"
				dt.dd = parseInt(_date.substr(0, 2));
				dt.mm = parseInt(_date.substr(3, 2));
				dt.yy = parseInt(_date.right(2));
			} else if (/^[0-9][ ][0-1][0-9][ ][0-9][0-9]$/i.test(_date)) {
				//"5-08-19"
				dt.dd = parseInt(_date.substr(0, 1));
				dt.mm = parseInt(_date.substr(2, 2));
				dt.yy = parseInt(_date.right(2));
			} else if (/^[0-9][ ][0-9][ ][0-9][0-9]$/i.test(_date)) {
				//"5-8-19"
				dt.dd = parseInt(_date.substr(0, 1));
				dt.mm = parseInt(_date.substr(2, 1));
				dt.yy = parseInt(_date.right(2));
			} else if (/^[0-3][0-9][ ][0-9][ ][0-9][0-9]$/i.test(_date)) {
				//"15-8-19"
				dt.dd = parseInt(_date.substr(0, 2));
				dt.mm = parseInt(_date.substr(3, 1));
				dt.yy = parseInt(_date.right(2));
			} else if (/^[0-1][0-9][ ][0-9][0-9]$/i.test(_date)) {
				//"08-19"
				dt.dd = 1;
				dt.mm = parseInt(_date.substr(0, 2));
				dt.yy = parseInt(_date.right(2));
			} else if (/^[0-9][ ][0-9][0-9]$/i.test(_date)) {
				//"8-19"
				dt.dd = 1;
				dt.mm = parseInt(_date.substr(0, 1));
				dt.yy = parseInt(_date.right(2));
			} else {
				d = new Date(this);
				if (!isNaN(d)) {
					dt.dd = d.getDate();
					dt.mm = d.getMonth();
					dt.yy = d.getFullYear();
					if (new Date(1900, 1, 1).getDay() != 0) {
						dt.mm++;
					}
					dt.h = d.getHours();
					dt.m = d.getMinutes();
					dt.s = d.getSeconds();
				}
			}

			if (/^[0-1][0-9]:[0-5][0-9]:[0-5][0-9][ ]{0,1}(am|pm)$/i.test(_time)) {
				//"08:30:24 PM"
				dt.h = parseInt(_time.substr(0, 2));
				dt.m = parseInt(_time.substr(3, 2));
				dt.s = parseInt(_time.substr(6, 2));
				if (_time.right(2).toLowerCase() === 'pm') {
					if (dt.h < 12) {
						dt.h += 12;
					}
				} else {
					if (dt.h == 12) {
						dt.h = 0;
					}
				}
			} else if (/^[0-9]:[0-5][0-9]:[0-5][0-9][ ]{0,1}(am|pm)$/i.test(_time)) {
				//"8:30:24 PM"
				dt.h = parseInt(_time.substr(0, 1));
				dt.m = parseInt(_time.substr(2, 2));
				dt.s = parseInt(_time.substr(5, 2));
				if (_time.right(2).toLowerCase() === 'pm') {
					if (dt.h < 12) {
						dt.h += 12;
					}
				} else {
					if (dt.h == 12) {
						dt.h = 0;
					}
				}
			} else if (/^[0-1][0-9]:[0-5][0-9][ ]{0,1}(am|pm)$/i.test(_time)) {
				//"08:30 PM"
				dt.h = parseInt(_time.substr(0, 2));
				dt.m = parseInt(_time.substr(3, 2));

				if (_time.right(2).toLowerCase() === 'pm') {
					if (dt.h < 12) {
						dt.h += 12;
					}
				} else {
					if (dt.h == 12) {
						dt.h = 0;
					}
				}
			} else if (/^[0-9]:[0-5][0-9][ ]{0,1}(am|pm)$/i.test(_time)) {
				//"8:30 PM"
				dt.h = parseInt(_time.substr(0, 1));
				dt.m = parseInt(_time.substr(2, 2));

				if (_time.right(2).toLowerCase() === 'pm') {
					if (dt.h < 12) {
						dt.h += 12;
					}
				} else {
					if (dt.h == 12) {
						dt.h = 0;
					}
				}
			} else if (/^[0-2][0-9]:[0-5][0-9]:[0-5][0-9]$/i.test(_time)) {
				//"08:30:25"
				dt.h = parseInt(_time.substr(0, 2));
				dt.m = parseInt(_time.substr(3, 2));
				dt.s = parseInt(_time.substr(6, 2));
			} else if (/^[0-9]:[0-5][0-9]:[0-5][0-9]$/i.test(_time)) {
				//"8:30:25"
				dt.h = parseInt(_time.substr(0, 1));
				dt.m = parseInt(_time.substr(2, 2));
				dt.s = parseInt(_time.substr(5, 2));
			} else if (/^[0-2][0-9]:[0-5][0-9]$/i.test(_time)) {
				//"08:30"
				dt.h = parseInt(_time.substr(0, 2));
				dt.m = parseInt(_time.substr(3, 2));
			} else if (/^[0-9]:[0-5][0-9]$/i.test(_time)) {
				//"8:30"
				dt.h = parseInt(_time.substr(0, 1));
				dt.m = parseInt(_time.substr(2, 2));
			}

			if (new Date(1900, 1, 1).getDay() != 0) {
				dt.mm--;
			}
			if (dt.yy < 50) {
				dt.yy += 2000;
			} else if (dt.yy < 100) {
				dt.yy += 1900;
			}
			d = new Date(dt.yy, dt.mm, dt.dd, dt.h, dt.m, dt.s);

			if (isNaN(d)) {
				d = new Date('1jan1900');
			}

			return d;
		});
	!String.prototype.toDate &&
		(String.prototype.toDate = function () {
			return this.toDateTime().format('dd/MMM/yyyy').toDateTime();
		});

	!Number.prototype.isNaN &&
		(Number.prototype.isNaN = function (nanValue) {
			if (isNaN(this)) {
				if (nanValue === _window.itself) {
					return this;
				}
				return nanValue ?? true;
			} else {
				return false;
			}
		});
	!Number.prototype.toChar &&
		(Number.prototype.toChar = function () {
			return String.fromCharCode(this);
		});
	!Number.prototype.format &&
		(Number.prototype.format = function (strFormat) {
			if (strFormat && typeof strFormat === 'string' && /^([0#,])+([.]){0,1}([0])*$/.test(strFormat)) {
				let str = this.toString();
				if (str.indexOf('e') > 0) {
					return str;
				}
				let nSign = '';
				if (str[0] === '-') {
					nSign = '-';
					str = str.substring(1);
				}

				if (/,[#0][#0],/.test(strFormat)) {
					let prefix = '##,';
					if (strFormat.indexOf(',') === 0) {
						prefix = prefix + '##';
						strFormat = prefix + strFormat;
					} else if (strFormat.indexOf(',') === 1) {
						prefix = prefix + '#';
						strFormat = prefix + strFormat;
					} else if (strFormat.indexOf(',') === 2) {
						strFormat = prefix + strFormat;
					}
					for (let i = 0, j = str.length / 2; i < j; i++) {
						strFormat = '##,' + strFormat;
					}
				}

				let m = '';
				let n = '';
				if (str.indexOf('.') > 0) {
					m = str.substring(0, str.indexOf('.'));
					n = str.substring(str.indexOf('.') + 1);
				} else {
					m = str;
				}

				let mm = '';
				let nn = '';
				if (strFormat.indexOf('.') > 0) {
					mm = strFormat.substring(0, strFormat.indexOf('.'));
					nn = strFormat.substring(strFormat.indexOf('.') + 1);
				} else {
					mm = strFormat;
				}
				if (nn.indexOf('.') > 0) {
					nn = nn.substring(0, nn.indexOf('.'));
				}
				let mmm = '';
				let nnn = '';
				let x = m.length - 1;
				for (let i = mm.length - 1; i >= 0; i--) {
					if (m[x]) {
						if (mm[i] === ',') {
							mmm = mm[i] + mmm;
						} else {
							mmm = m[x] + mmm;
							x--;
						}
					} else if ((mm[i] === '0' && mm.substring(i).indexOf('#') < 0) || (mm[i] === ',' && mm.substring(i).indexOf('#') < 0)) {
						mmm = mm[i] + mmm;
					}
				}
				mmm = m.substring(0, x + 1) + mmm;

				for (let i = 0; i < nn.length; i++) {
					if (i < n.length) {
						nnn += n[i];
					} else {
						nnn += nn[i];
					}
				}
				if (n.length > nnn.length && parseInt(n[nn.length]) >= 5) {
					nnn = (parseInt(nnn) + 1).toString();
				}

				return nSign + mmm + (nnn ? '.' : '') + nnn;
			} else {
				return this.toLocaleString();
			}
		});
	!Number.prototype.toNumber &&
		(Number.prototype.toNumber = function () {
			return this;
		});
	!Number.prototype.toDate &&
		(Number.prototype.toDate = function () {
			return new Date(this);
		});
	!Date.prototype.format &&
		(Date.prototype.format = function (strFormat) {
			if (strFormat) {
				let MMM = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
				let MMMM = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
				let ddd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
				let dddd = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
				let d = this.getDay();
				let dd = this.getDate();
				let MM = this.getMonth();
				let yyyy = this.getFullYear();
				let hh = this.getHours();
				let mm = this.getMinutes();
				let ss = this.getSeconds();
				let ff = this.getMilliseconds();
				let tt = hh >= 12 ? 'PM' : 'AM';
				let h = hh % 12;
				let yy = parseInt(yyyy.toString().right(2));
				if (hh == 12) {
					h = 12;
				}

				let _date = new Date('1Jan1900');
				if (_date.getMonth() != 0) {
					MM--;
				}
				if (_date.getDay() == 0) {
					if (d == 0) {
						d = 6;
					} else {
						d--;
					}
				}
				strFormat = strFormat.replace(/dddd/g, 'DDDD');
				strFormat = strFormat.replace(/ddd/g, 'DDD');
				strFormat = strFormat.replace(/dd/g, dd.format('00'));
				strFormat = strFormat.replace(/d/g, dd);
				strFormat = strFormat.replace(/MMMM/g, 'XXXX');
				strFormat = strFormat.replace(/MMM/g, 'XXX');
				strFormat = strFormat.replace(/MM/g, 'XX');
				strFormat = strFormat.replace(/M/g, 'X');
				strFormat = strFormat.replace(/yyyy/g, yyyy.format('0000'));
				strFormat = strFormat.replace(/yyy/g, yyyy.format('0000'));
				strFormat = strFormat.replace(/yy/g, yy.format('00'));
				strFormat = strFormat.replace(/y/g, yy);
				strFormat = strFormat.replace(/HH/g, hh.format('00'));
				strFormat = strFormat.replace(/H/g, hh);
				strFormat = strFormat.replace(/hh/g, h.format('00'));
				strFormat = strFormat.replace(/h/g, h);
				strFormat = strFormat.replace(/mm/g, mm.format('00'));
				strFormat = strFormat.replace(/m/g, mm);
				strFormat = strFormat.replace(/ss/g, ss.format('00'));
				strFormat = strFormat.replace(/s/g, ss);
				strFormat = strFormat.replace(/fff/g, ff.format('000'));
				strFormat = strFormat.replace(/ff/g, ff.format('000'));
				strFormat = strFormat.replace(/f/g, ff.format('000'));
				strFormat = strFormat.replace(/tt/g, tt);
				strFormat = strFormat.replace(/t/g, tt.toLowerCase());
				strFormat = strFormat.replace(/DDDD/g, dddd[d]);
				strFormat = strFormat.replace(/DDD/g, ddd[d]);
				strFormat = strFormat.replace(/XXXX/g, MMMM[MM]);
				strFormat = strFormat.replace(/XXX/g, MMM[MM]);
				strFormat = strFormat.replace(/XX/g, (MM + 1).format('00'));
				strFormat = strFormat.replace(/X/g, MM + 1);
				return strFormat;
			} else {
				return this.toString();
			}
		});
	!Date.prototype.addDays &&
		(Date.prototype.addDays = function (num) {
			let d = new Date(this);
			if (num) {
				d.setDate(this.getDate() + num);
			}
			return d;
		});
	!Date.prototype.addMonths &&
		(Date.prototype.addMonths = function (num) {
			let d = new Date(this);
			if (num) {
				d.setMonth(this.getMonth() + num);
			}
			return d;
		});
	!Date.prototype.addYears &&
		(Date.prototype.addYears = function (num) {
			let d = new Date(this);
			if (num) {
				d.setFullYear(this.getFullYear() + num);
			}
			return d;
		});
	!Date.prototype.addHours &&
		(Date.prototype.addHours = function (num) {
			let d = new Date(this);
			if (num) {
				d.setHours(this.getHours() + num);
			}
			return d;
		});
	!Date.prototype.addMinutes &&
		(Date.prototype.addMinutes = function (num) {
			let d = new Date(this);
			if (num) {
				d.setMinutes(this.getMinutes() + num);
			}
			return d;
		});
	!Date.prototype.addSeconds &&
		(Date.prototype.addSeconds = function (num) {
			let d = new Date(this);
			if (num) {
				d.setSeconds(this.getSeconds() + num);
			}
			return d;
		});
	!Date.prototype.diff &&
		(Date.prototype.diff = function (date) {
			date = date || new Date();
			if (date.isDate) {
				let diff = date - this;
				return diff / 86400000;
			}
			return 0;
		});
	!Array.prototype.toSet &&
		(Array.prototype.toSet = function () {
			return new Set(this);
		});
	!Array.prototype.contains &&
		(Array.prototype.contains = function (val) {
			for (let i = 0, j = this.length; i < j; i++) {
				if (this[i] === val) {
					return true;
				} else if (!this[i].equals) {
					continue;
				} else if (this[i].equals(val)) {
					return true;
				}
			}
			return false;
		});
	!Array.prototype.distinct &&
		(Array.prototype.distinct = function () {
			let arr = [];
			for (let i = 0, j = this.length; i < j; i++) {
				if (!arr.contains(this[i])) {
					arr.push(this[i]);
				}
			}
			return arr;
		});
	!Set.prototype.toArray &&
		(Set.prototype.toArray = function () {
			return Array.from(this);
		});
	!Object.prototype.clone &&
		(Object.prototype.clone = function () {
			return JSON.parse(JSON.stringify(this));
		});
	!Object.prototype.equals &&
		(Object.prototype.equals = function (obj2) {
			let obj1 = this;
			if (obj1 === obj2) {
				return true;
			} else {
				if (!obj2) {
					return false;
				}
				if (!obj2.equals) {
					return false;
				}
				obj1 = obj1.clone();
				obj2 = obj2.clone && obj2.clone();
				if (obj1.isArray && obj2.isArray) {
					if (obj1.length === obj2.length) {
						for (let i = 0, j = obj1.length; i < j; i++) {
							if (obj1[i] === obj2[i]) {
								continue;
							} else if (!obj1[i].equals) {
								return false;
							} else if (!obj1[i].equals(obj2[i])) {
								return false;
							}
						}
						return true;
					} else {
						return false;
					}
				} else if (!obj1.isArray && !obj2.isArray) {
					let keys1 = Object.keys(obj1);
					let keys2 = Object.keys(obj2);
					if (keys1.length && keys1.length === keys2.length) {
						for (let key of keys1) {
							if (obj1[key] !== undefined && obj2[key] === undefined) {
								return false;
							} else if (obj1[key] === obj2[key]) {
								continue;
							} else if (!obj1[key].equals) {
								return false;
							} else if (!obj1[key].equals(obj2[key])) {
								return false;
							}
						}
						return true;
					} else {
						return false;
					}
				} else {
					return false;
				}
			}
		});

	!String.prototype.isString && (String.prototype.isString = true);
	!Date.prototype.isDate && (Date.prototype.isDate = true);
	!Array.prototype.isArray && (Array.prototype.isArray = true);
	Object.defineProperty(String.prototype, 'isNumber', {
		get: function () {
			let regExp = /(^[\d,]*\d[.]{0,1}\d*$|^[.]\d+$)/;
			return regExp.test(this);
		},
	});
	_window.itself = { description: 'itself : keyword is reserved by AdvanceJavascript' };
	console.info('AdvanceJavascript is initiated and now your javascript is become advanced. use advance javascript feature and write code very handy.');
})(global);
