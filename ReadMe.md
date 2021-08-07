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
|||