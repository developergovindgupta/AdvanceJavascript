# AdvanceJavascript.js

### a collection of javascript prototype extensions that make your javascript coding very easy and hanndy. 
### support both node.js and web browser


# How to use...

[download: AdvanceJavascript.js](https://raw.githubusercontent.com/developergovindgupta/AdvanceJavascript/main/AdvanceJavascript/AdvanceJavascript.js)

[download: AdvanceJavascript.min.js](https://raw.githubusercontent.com/developergovindgupta/AdvanceJavascript/main/AdvanceJavascript/AdvanceJavascript.min.js)

[download: Source Code GitHub](https://github.com/developergovindgupta/AdvanceJavascript)

[npm install advance-javascript](https://www.npmjs.com/package/advance-javascript)

## How to Install
copy following code and run on CLI

    npm install multi-range-slider-vue

 
  
## Include in your main.js/script.js/index.html page
### it automaically initiated and extends JavaScript 

### NODE-JS : 

    require("advance-javascript");

### HTML
    import "advance-javascript";

    or

    <script src="./js/AdvanceJavascript.js"></script>

    or

    <script src="./js/AdvanceJavascript.min.js"></script>

### after it you can use Advance Javascript Extension methods

#

# Extension Methods 
## Extends String/Number/Date/Array/Set/Object 


## String Prototype Extensions

|String.methods|Description|
|-|-|
|.trimAll() | Remove all extra spaces, new line and tabs from string and return single line text having single space between words.  |
|.toCamelCase() | Convert sentence to camel case. eg. <br />"this is normal string".toCamelCase() <br /> ->  "thisIsNormalString"|
|.toKebabCase() | Convert sentence to kebab case. eg. <br />"this is normal string".toKebabCase() <br /> ->  "this-is-normal-string"|
|.toPascalCase()| Convert sentence to pascal case. eg.<br /> "this is normal string".toPascalCase() <br /> ->  "ThisIsNormalString"|
|.toSnakeCase() | Convert sentence to snake case. eg. <br />"this is normal string".toSnakeCase() <br /> ->  "this_is_normal_string"|
|.left(n) | Extract number of characters from left. eg.<br /> "this is normal string".left(6) <br /> ->  "this i"|
|.right(n) | Extract number of characters from right. eg.<br /> "this is normal string".right(4) <br /> ->  "ring" |
|.mid(m,n) | Extract number of characters (n) from given index (m). eg.<br /> "this is normal string".mid(8,6) <br /> ->  "normal"|
|.reverse() | Reverses the string. eg.<br /> "this is normal string".reverse() <br /> ->  "gnirts lamron si siht"|
|.sort() | Sort string letters in assending order. eg. <br /> "this is normal string".sort() <br /> ->  "   aghiiilmnnorrssstt"|
|.sort(fn) | Sort string letters according to compare function (fn) passed. . eg.<br />  "this is normal string".sort((a, b) => (a < b ? 1 : -1)) <br /> ->  "ttsssrronnmliiihga   "|
|.sortAsc() | Sort string letters in assending order. eg.<br />  "this is normal string".sortAsc() <br /> -> "   aghiiilmnnorrssstt"|
|.sortDesc() | Sort string letters in descending order. eg.<br />  "this is normal string".sortDesc() <br /> ->  "ttsssrronnmliiihga   "|
|.distinct() | Extract unique/distinct characters from string and return string. eg.<br /> "this is normal string".distinct() <br /> ->  "this normalg"|
|.toNumber()| Convert string number to numeric value or NaN. eg.<br /> "123.45".toNumber() <br /> ->  123.45|
|.toNumber()| Convert string number to numeric value or NaN. eg.<br /> "a123.45".toNumber() <br /> ->  NaN|
|.toNumber(NaN_Value)| Convert string number to numeric value. on fail return NaN_Value. eg.<br /> "a123.45".toNumber(0) <br /> ->  0|
|.toNumber(itself)| Convert string number to numeric value. on fail return original string itself. eg.<br /> "a123.45".toNumber(itself) <br /> ->  "a123.45"|
|.parseInt()| Convert string to integer value and round up the fraction value. eg.<br /> "123.45".parseInt() <br /> ->  123|
|.parseInt()| Convert string to integer value and round up the fraction value. eg.<br /> "a123.45".parseInt() <br /> ->  NaN|
|.parseInt(redix)| Convert string to integer value on the basis of basevalue/redix. eg.<br /> "AF2F".parseInt(16) <br /> ->  44847|
|.parseInt(redix,NaN_Value)| Convert string to integer value on the basis of basevalue/redix. eg.<br /> "AF2F".parseInt(10,0) <br /> ->  0|
|.parseInt(redix,itself)| Convert string to integer value on the basis of basevalue/redix. eg.<br /> "AF2F".parseInt(8,itself) <br /> ->  "AF2F"|
|.parseFloat()| Convert string number to numeric value or NaN. eg.<br /> "123.45".parseFloat() <br /> ->  123.45|
|.parseFloat()| Convert string number to numeric value or NaN. eg.<br /> "a123.45".parseFloat() <br /> ->  NaN|
|.parseFloat(NaN_Value)| Convert string number to numeric value. on fail return NaN_Value. eg.<br /> "a123.45".parseFloat(0) <br /> ->  0|
|.parseFloat(itself)| Convert string number to numeric value. on fail return original string itself. eg.<br /> "a123.45".parseFloat(itself) <br /> ->  "a123.45"|
|.toInt()| Convert string to integer value and round up the fraction value. eg.<br /> "123.45".toInt() <br /> ->  123|
|.toInt()| Convert string to integer value and round up the fraction value. eg.<br /> "a123.45".toInt() <br /> ->  NaN|
|.toInt(redix)| Convert string to integer value on the basis of basevalue/redix. eg.<br /> "AF2F".toInt(16) <br /> ->  44847|
|.toInt(redix,NaN_Value)| Convert string to integer value on the basis of basevalue/redix. eg.<br /> "AF2F".toInt(10,0) <br /> ->  0|
|.toInt(redix,itself)| Convert string to integer value on the basis of basevalue/redix. eg.<br /> "AF2F".toInt(8,itself) <br /> ->  "AF2F"|
|.toFloat()| Convert string number to numeric value or NaN. eg.<br /> "123.45".toFloat() <br /> ->  123.45|
|.toFloat()| Convert string number to numeric value or NaN. eg.<br /> "a123.45".toFloat() <br /> ->  NaN|
|.toFloat(NaN_Value)| Convert string number to numeric value. on fail return NaN_Value. eg.<br /> "a123.45".toFloat(0) <br /> ->  0|
|.toFloat(itself)| Convert string number to numeric value. on fail return original string itself. eg.<br /> "a123.45".toFloat(itself) <br /> ->  "a123.45"|
|.isNaN()| Check wheter string can be convert to numeric or not. return true/false. eg.<br /> "1234.56".isNaN() <br /> ->  false|
|.isNaN()| Check wheter string can be convert to numeric or not. return true/false. eg. <br />"a1234.56".isNaN() <br /> ->  true|
|.isNaN(NaN_Value)| Convert string to numeric value. eg.<br /> "1234.56".isNaN(0) <br /> ->  1234.56|
|.isNaN(NaN_Value)| Convert string to numeric value. eg.<br /> "a1234.56".isNaN(0) <br /> ->  0|
|.isNaN(itself)| Convert string to numeric value. eg.<br /> "a1234.56".isNaN(itself) <br /> ->  "a1234.56"|
|.toArray()| Convert strint to characters array. eg. <br />"abcd".toArray() <br /> ->  ["a", "b", "c", "d"]|
|.toCodeArray()| Convert string to array of character ascii/unicode code. eg. <br />"abcde".toCodeArray() <br /> ->  [97, 98, 99, 100, 101]|
|.toCharCodeArray()| Convert string to array of object {char:'char',code:number}. eg. <br />"abcde".toCharCodeArray() <br /> -> [{char: "a", code: 97},{char: "b", code: 98},{char: "c", code: 99},{char: "d", code: 100},{char: "e", code: 101}]|
|.toCharCode()|Convert string to object {char:code,char:code} eg.<br/>"abcd".toCharCode() <br /> ->  { a : 97, b : 98, c : 99, d : 100 }|
|.frequency()|Calculate frequency of charactes in string and return object having character as key and frequency as value. eg. <br />"this is a sample string".frequency() <br /> -> {" ": 4, a: 2, e: 1, g: 1, h: 1, i: 3, l: 1, m: 1, n: 1, p: 1, r: 1, s: 4, t: 2} <br />"thisIsASampleString".frequency()<br /> -> {A: 1,I: 1,S: 2,a: 1,e: 1,g: 1,h: 1,i: 2,l: 1,m: 1,n: 1,p: 1,r: 1,s: 2,t: 2}|
|.frequency(isInSensitive)|Optional if true then it matches without case check(ignore case) eg. <br/>"thisIsASampleString".frequency(true)<br> -> {a: 2,e: 1,g: 1,h: 1,i: 3,l: 1,m: 1,n: 1,p: 1,r: 1,s: 4,t: 2}|
|.frequency(char)|Optional Character if passed then return only that char frequency. eg <br/>"thisIsASampleString".frequency('i') <br/> ->  2|
|.frequency(char,isInSensitive)|return frequency of char with ignore case. eg. <br/>"thisIsASampleString".frequency('i', true) <br/> -> 3|
|.toDateTime()|Convert any valid string date to Date data type. If unable to convert the given string to date return date value of "1-JAN-1900" date data type. eg. <br/>"1-jan-2021".toDateTime() <br/>-> Fri Jan 01 2021 00:00:00 GMT+0530 (India Standard Time)<br/>"1-Mar".toDateTime()<br/>-> Mon Mar 01 2021 00:00:00 GMT+0530 (India Standard Time)<br/>"Mar,2022".toDateTime()<br/>-> Tue Mar 01 2022 00:00:00 GMT+0530 (India Standard Time)<br/>"2021".toDateTime()<br/>-> Fri Jan 01 2021 05:30:00 GMT+0530 (India Standard Time)<br/>"1/5/2021".toDateTime()<br/>-> Sat May 01 2021 00:00:00 GMT+0530 (India Standard Time)<br/>"01/05/2021 5:55 AM".toDateTime()<br/>-> Sat May 01 2021 05:55:00 GMT+0530 (India Standard Time)<br/>"01/08/2021 5:15:16 PM".toDateTime()<br/>-> Sun Aug 01 2021 17:15:16 GMT+0530 (India Standard Time)<br/>"12:15:16 AM".toDateTime()<br/>-> Thu Aug 05 2021 00:15:16 GMT+0530 (India Standard Time)<br/>//current date with given time<br/>"invalid date string".toDateTime()<br/>-> Mon Jan 01 1900 00:00:00 GMT+0521 (India Standard Time)|
|.toDate()|Convert String to only Date value exclude time value. eg. <br/>"05-Aug-2021 05:25:15 AM".toDate()<br/>-> Thu Aug 05 2021 00:00:00 GMT+0530 (India Standard Time)|
|**.isString**|[Boolean Property] return **true** if variable value is string else **undefined**. eg.<br/> "abcd".isString <br> -> true <br>let a="string";<br>a.isString<br>->true<br>let b=34;<br>b.isString;<br>-> undefined|


## Date Prototype Extensions 

|Date.methods|Description|
|-|-|
|.format( *strFormat* )|Convert Date to String in given format string.<br> Format String Description:<br><table><tr><th>specifier</th><th>description</th></tr><tr><td>d</td><td>one or two digit date value</td></tr><tr><td>dd</td><td>two digit date value leading zero if one digit date</td></tr><tr><td>ddd</td><td>three char week day name</td></tr><tr><td>dddd</td><td>full week day name</td></tr><tr><td>M</td><td>one or two digit month value</td></tr><tr><td>MM</td><td>two digit month value. leading zero if one digit month</td></tr><tr><td>MMM</td><td>three char month name</td></tr><tr><td>MMMM</td><td>full month name</td></tr><tr><td>yy</td><td>two digit year value</td></tr><tr><td>yyyy</td><td>four digit year value</td></tr><tr><td>h</td><td>one or two digit hour value</td></tr><tr><td>hh</td><td>two digit hour value. leading zero if one digit hour</td></tr><tr><td>H</td><td>one or two digit hour value in 24 hour format</td></tr><tr><td>HH</td><td>two digit hour value in 24 hour format</td></tr><tr><td>m</td><td>one or two digit minute value</td></tr><tr><td>mm</td><td>two digit minute value</td></tr><tr><td>s</td><td>one or two digit second value</td></tr><tr><td>ss</td><td>two digit second value</td></tr><tr><td>fff</td><td>miliseconds value</td></tr><tr><td>tt</td><td>AM/PM value</td></tr></table><table><tr><th>Examples : let date = "8-April-2021 11:35:48 PM".toDateTime()</th></tr><tr><td>date</td></tr><tr><td>-> Thu Apr 08 2021 23:35:48 GMT+0530 (India Standard Time)</td></tr><tr><td>date.format("ddd dd-MMM-yyyy hh:mm:ss:fff tt")</td></tr><tr><td>-> "Thu 08-Apr-2021 11:35:48:000 PM"</td></tr><tr><td>date.format("dddd dd/MMM/yyyy")</td></tr><tr><td>-> "Thursday 08/Apr/2021"</td></tr><tr><td>date.format("HH:mm:ss:fff")</td></tr><tr><td>-> "23:35:48:000"</td></tr><tr><td>date.format("dd/MM/yy")</td></tr><tr><td>-> "08/04/21"</td></tr><tr><td>date.format("d/M/y")</td></tr><tr><td>-> "8/4/21"</td></tr></table>|
|.addDays(*num*)|This is Date extension method that adds number of days in Date value<br>'1 jan 2022'.toDateTime().addDays(10)<br>-> Tue Jan 11 2022 00:00:00 GMT+0530 (India Standard Time)<br>'1 jan 2022'.toDateTime().addDays(-10)<br>-> Wed Dec 22 2021 00:00:00 GMT+0530 (India Standard Time)|
|.addMonths(*num*)| This is Date extension method that adds number of months in Date value<br>'1 jan 2022'.toDateTime().addMonths(10)<br>-> Tue Nov 01 2022 00:00:00 GMT+0530 (India Standard Time)<br>'1 jan 2022'.toDateTime().addMonths(-10)<br>-> Mon Mar 01 2021 00:00:00 GMT+0530 (India Standard Time) |
|.addYears(*num*) | This is Date extension method that adds number of years in Date value<br>'1 jan 2022'.toDateTime().addYears(10)<br>-> Thu Jan 01 2032 00:00:00 GMT+0530 (India Standard Time) <br> '1 jan 2022'.toDateTime().addYears(-10) <br> -> Sun Jan 01 2012 00:00:00 GMT+0530 (India Standard Time)|
|.addHours(*num*) | This is Date extension method that adds number of hours in Date value <br> '1 jan 2022 08:12:18 AM'.toDateTime().addHours(10) <br> -> Sat Jan 01 2022 18:12:18 GMT+0530 (India Standard Time) <br>'1 jan 2022 08:12:18 AM'.toDateTime().addHours(-10) <br>-> Fri Dec 31 2021 22:12:18 GMT+0530 (India Standard Time) |
|.addMinutes(*num*)|This is Date extension method that adds number of minutes in Date value<br>'1 jan 2022 08:12:18 AM'.toDateTime().addMinutes(10)<br>-> Sat Jan 01 2022 08:22:18 GMT+0530 (India Standard Time)<br>'1 jan 2022 08:12:18 AM'.toDateTime().addMinutes(-10)<br>-> Sat Jan 01 2022 08:02:18 GMT+0530 (India Standard Time) |
|.addSeconds(*num*)| This is Date extension method that adds number of seconds in Date value<br>'1 jan 2022 08:12:18 AM'.toDateTime().addSeconds(10)<br>-> Sat Jan 01 2022 08:12:28 GMT+0530 (India Standard Time)<br>'1 jan 2022 08:12:18 AM'.toDateTime().addSeconds(-10)<br>->  Sat Jan 01 2022 08:12:08 GMT+0530 (India Standard Time)|
|.dateDiff(*date*)| This is Date extension method that subtract given date and return difference in days<br> let a = '1 jan 2022'.toDateTime()<br>let b = '1 jan 2020'.toDateTime()<br>a.dateDiff(b)<br>->  -731 <br>let a = '1 jan 2022 10:20 AM'.toDateTime() <br>let b = '1 jan 2025 10:20 PM'.toDateTime()<br>a.dateDiff(b) <br>-> 1096.5|
|.isDate|[boolean property] return **true** if a variable holds date value else **undefined**|
