# JS Advanced – Exam: 23.02.2020

Exam problem for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/javascript-advanced).

# 1.Problem 2. Parser

Use the provided **Parser class** to solve this problem.

### Your Task

Using **Mocha** and **Chai** write **JS Unit Tests** to test the entire functionality of the **Parser**** class**. Make sure instances of it have all the required functionality and validation. You may use the following code as a template:

| describe( **&quot;**** Tests **** …&quot; **,** function**() {    describe(**&quot; ****TODO**  **…&quot;** , **function** () {
         **it** ( **&quot;**** TODO … ****&quot;** , **function** () {            _//_ **TODO:** …        });     });
     _//_ **TODO:** …}); |
| --- |

### Functionality

**solution.js** defines a **class** that contains information about a **parser class**. An **instance** of the class should support the following operations:

- **Instantiation** with **one**** parameter **- a string representing the** data to be parsed, **and an** additional properties **called &quot;** log**&quot;(**empty array by default**) and a &quot;**addToLog**&quot; (**function with default value of the counter 0)**.
- Getter **data** - **Returns** the data array
- Function **print()** - Receives no parameters. Adds an entry in the log array and prints the data in a given format.
- Function **addEntries(entries)** receives **one** parameter: a **string** ( **entries** ) **.** It should parse the entries string and add every entry to the data array as an object. For more information see the examples below.  It should add to the log array the &quot;addEntries&quot; string in the proper format. The function should return the &quot;Entries added!&quot;.
- Function **removeEntry(key)**  **- receives one parameter:** a **string** ( **key** ). If there is an object in the data array with the property equal to the key, you should add a property &quot;deleted: true&quot; to it. Otherwise an error should be thrown, with the following message: &quot;There is no such entry!&quot;  . If the entry is set to deleted properly, you should add the &quot;removeEntry&quot; string in the proper format and return the following message: &quot;Removed correctly!&quot; .
- Function **addToLog(command)** - receives **one** parameter - You should add to the log array the command message and increase the counter.

### Examples

| Sample Code Usage |
| --- |
| let parser = new Parser(&#39;[ {&quot;Nancy&quot;:&quot;architect&quot;},{&quot;John&quot;:&quot;developer&quot;},{&quot;Kate&quot;: &quot;HR&quot;} ]&#39;);console.log(parser.addEntries(&quot;Steven:tech-support Edd:administrator&quot;));console.log(parser.data);console.log(parser.removeEntry(&quot;Kate&quot;));console.log(parser.data);console.log(&quot;\_&quot;.repeat(50));console.log();console.log(parser.print()); |
| Corresponding Output |
| **Entries added!**** [**** **  **{ Nancy: &#39;architect&#39; },****   **** { John: &#39;developer&#39; }, **** **  **{ Kate: &#39;HR&#39; },****   **** { Steven: &#39;tech-support&#39; }, **** **  **{ Edd: &#39;administrator&#39; }****] ****Removed correctly!**** [**** **  **{ Nancy: &#39;architect&#39; },****   **** { John: &#39;developer&#39; }, **** **  **{ Steven: &#39;tech-support&#39; },****   **** { Edd: &#39;administrator&#39; }****]****\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ ****id|name|position**** 0|Nancy|architect ****1|John|developer**** 2|Steven|tech-support ****3|Edd|administrator** |

### Submission

Submit your tests inside a **describe()** statement, as shown above.