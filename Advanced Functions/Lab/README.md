# 1.Lab: Advanced Functions

Problems for in-class lab for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/js-advanced). 

1. 1.Add

Write a program that keeps a number **inside its context** and **returns** new function that **adds** a **given** number to the previous one.

### Input

Check the **examples**** below** to see how your code will be executed

### Output

Your function should **return** the final result .

### Examples

| Sample Input | Output |
| --- | --- |
| let add5 = solution(5);console.log(add5(2));console.log(add5(3)); | 78 |
| let add7 = solution(7);console.log(add7(2));console.log(add7(3)); | 910 |

1. 2.Currency Format

Write a higher-order function that fixes some of the parameters of another function. Your program will receive a function that **takes 4 parameters** and **returns a formatted string** (a monetary value with currency symbol).

Your task is to **return another function** that only **takes one parameter** and **returns** the **same formatted string**.

You will receive the following function:

| currencyFormatter |
| --- |
| function currencyFormatter(separator, symbol, symbolFirst, value) {    let result = Math.trunc(value) + separator;    result += value.toFixed(2).substr(-2,2);    if (symbolFirst) return symbol + &#39; &#39; + result;    else return result + &#39; &#39; + symbol;} |

Set the following parameters to fixed values:

separator: &quot;,&quot;

symbol: &quot;$&quot;

symbolFirst: true

The final parameter **value** is the one that the returned function will receive.

### Input

You will receive a **function** parameter

### Output

You need to **return a function** that takes one parameter - **value**

### Examples

| Sample Input |
| --- |
| let dollarFormatter = result(currencyFormatter);console.log(dollarFormatter(5345));   _// $ 5345,00_console.log(dollarFormatter(3.1429)); _// $ 3,14_console.log(dollarFormatter(2.709));  _// $ 2,71_ |

1. 3.Filter Employees

Write a program that filters the employees of your company. You should  print the result in a specific format. You will receive **2** parameters ( **data** , **criteria** ). You should **parse** the input, find all employees that fullfil the citeria and print them.

### Input

You will receive a **string** with all the employees, and a **criteria** by witch you should sort the employees. If the criteria is **&quot;all&quot;** print all the employees in the given format.

### Output

The output should be the **printed** on the console.

For more information check the examples.

### Examples

| Sample Input | Output |
| --- | --- |
| `[{    &quot;id&quot;: &quot;1&quot;,    &quot;first\_name&quot;: &quot;Ardine&quot;,    &quot;last\_name&quot;: &quot;Bassam&quot;,    &quot;email&quot;: &quot;abassam0@cnn.com&quot;,    &quot;gender&quot;: &quot;Female&quot;  }, {    &quot;id&quot;: &quot;2&quot;,    &quot;first\_name&quot;: &quot;Kizzee&quot;,    &quot;last\_name&quot;: &quot;Jost&quot;,    &quot;email&quot;: &quot;kjost1@forbes.com&quot;,    &quot;gender&quot;: &quot;Female&quot;  },  {    &quot;id&quot;: &quot;3&quot;,    &quot;first\_name&quot;: &quot;Evanne&quot;,    &quot;last\_name&quot;: &quot;Maldin&quot;,    &quot;email&quot;: &quot;emaldin2@hostgator.com&quot;,    &quot;gender&quot;: &quot;Male&quot;  }]`, &#39;gender-Female&#39; | 0. Ardine Bassam - abassam0@cnn.com1. Kizzee Jost - kjost1@forbes.com |
| `[{    &quot;id&quot;: &quot;1&quot;,    &quot;first\_name&quot;: &quot;Kaylee&quot;,    &quot;last\_name&quot;: &quot;Johnson&quot;,    &quot;email&quot;: &quot;k0@cnn.com&quot;,    &quot;gender&quot;: &quot;Female&quot;  }, {    &quot;id&quot;: &quot;2&quot;,    &quot;first\_name&quot;: &quot;Kizzee&quot;,    &quot;last\_name&quot;: &quot;Johnson&quot;,    &quot;email&quot;: &quot;kjost1@forbes.com&quot;,    &quot;gender&quot;: &quot;Female&quot;  }, {    &quot;id&quot;: &quot;3&quot;,    &quot;first\_name&quot;: &quot;Evanne&quot;,    &quot;last\_name&quot;: &quot;Maldin&quot;,    &quot;email&quot;: &quot;emaldin2@hostgator.com&quot;,    &quot;gender&quot;: &quot;Male&quot;  }, {    &quot;id&quot;: &quot;4&quot;,    &quot;first\_name&quot;: &quot;Evanne&quot;,    &quot;last\_name&quot;: &quot;Johnson&quot;,    &quot;email&quot;: &quot;ev2@hostgator.com&quot;,    &quot;gender&quot;: &quot;Male&quot;  }]`, &#39;last\_name-Johnson&#39;  | 0. Kaylee Johnson - k0@cnn.com1. Kizzee Johnson - kjost1@forbes.com2. Evanne Johnson - ev2@hostgator.com |

1. 4.Command Processor

Write a program that keeps a string **inside its context** and can execute different **commands** that modify or print the string on the console.

**append(string)** - append the given **string** at the end of the internal string

**removeStart(n)** - **remove** the **first**** n **characters from the string,** n** is an integer

**removeEnd(n)** - **remove** the **last n** characters from the string, **n** is an integer

**print** - **print** the stored string on the **console**

### Input

Check the examples below to see how your code will be executed

### Output

Whenever you receive the command **print** , the output should be the **printed** on the console.

### Examples

| Sample Input | Output |
| --- | --- |
| let firstZeroTest = solution(); firstZeroTest.append(&#39;hello&#39;);firstZeroTest.append(&#39;again&#39;);firstZeroTest.removeStart(3);firstZeroTest.removeEnd(4); | loa |
| let secondZeroTest = solution(); secondZeroTest.append(&#39;123&#39;);secondZeroTest.append(&#39;45&#39;);secondZeroTest.removeStart(2);secondZeroTest.removeEnd(1);secondZeroTest.print(); | 34 |