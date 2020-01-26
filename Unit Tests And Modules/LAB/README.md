# 1.Lab: Unit Testing and Modules

Problems for exercises and homework for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/js-advanced). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/1531/Lab-Unit-Testing-and-Modules](https://judge.softuni.bg/Contests/1531/Lab-Unit-Testing-and-Modules).

# 2.Error Handling

1. 1.Sub Sum

Write a function to sum a **range** of **numeric elements** from an array.

The function takes **three parameters** - the first is an **array** , the second is the **start**** index **and the third is the** end ****index**. Both indexes are **inclusive**. Have in mind that the array elements **may not be** of **type Number** and **cast everything**. Implement the following **error handling** :

- If the **first element** is not an array, **return**** NaN**
- If the **start index** is less than zero, consider its value to be a **zero**
- If the **end index** is outside the bounds of the array, assume it points to the **last index of the array**

### Input / Output

Your function must take **three**** parameters **. As output,** return the sum**.

### Examples

| Input | Output |
| --- | --- |
| [10, 20, 30, 40, 50, 60], 3, 300 | 150 |
| [1.1, 2.2, 3.3, 4.4, 5.5], -3, 1 | 3.3 |
| [10, &#39;twenty&#39;, 30, 40], 0, 2 | NaN |
| [], 1, 2 | 0 |
| &#39;text&#39;, 0, 2 | NaN |

1. 2.Playing Cards

Create a JS **factory function** that returns a **Card**** object **to hold a card&#39;s** face **and** suit **, both set through the** constructor **.** Throw ****an**** error **if the card is** initialized **with** invalid ****face** or **suit** or if an attempt is made to change the **face** or **suit** of an **existing instance to an invalid** value.

- Valid card faces are: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
- Valid card suits are: S (♠), H (♥), D (♦), C (♣)

Both face and suit are expected as an **uppercase**** string **. The class also needs to have a** toString() **method that** prints **the card&#39;s face and suit** as a **** string**. Use the following UTF code literals to represent the suits:

- \u2660 – Spades (♠)
- \u2665 – Hearts (♥)
- \u2666 – Diamonds (♦)
- \u2663 – Clubs (♣)

### Input / Output

The factory function takes **two string parameters**. The **toString()** method of the returned object must **return a string**.

### Examples

| Input | Output |
| --- | --- |
| &#39;A&#39;, &#39;S&#39; | A♠ |
| &#39;10&#39;, &#39;H&#39; | 10♥ |
| &#39;1&#39;, &#39;C&#39; | Error |

1. 3.Deck of Cards

Write a function that takes **a deck of cards** as an **array of strings** and **prints** them as a **sequence** of cards ( **space separated** ). Use the solution from the **previous task** to generate the cards.

Print &quot;**Invalid card: [card]**&quot; when an **invalid card** definition is passed as input.

### Input / Output

The function takes an **array of strings** as parameter. **Print** the list of cards as **string** , **separated by space**.

| deckOfCards.js |
| --- |
| function printDeckOfCards(cards) {  function createCard {     _// Use the solution from the previous task_   }    _// TODO_} |

### Examples

| Sample Input | Sample Output |
| --- | --- |
| [&#39;AS&#39;, &#39;10D&#39;, &#39;KH&#39;, &#39;2C&#39;] | A♠ 10♦ K♥ 2♣ |
| [&#39;5S&#39;, &#39;3D&#39;, &#39;QD&#39;, &#39;1C&#39;] | Invalid card: 1C |

# 3.Unit Testing

You are required to **submit only**  **the**  **unit tests** for the **object**** / ****function** you are testing.

1. 4.Sum of Numbers

Write tests to check the functionality of the following code:

| sumNumbers.js |
| --- |
| **function** _sum_(arr) {
     **let** sum = 0;
     **for** (num **of** arr)
        sum += Number(num);
     **return** sum;
} |

Your tests will be supplied with a function named **&#39;**** sum() ****&#39;**. It should meet the following requirements:

- Take an **array of numbers** as argument
- **Return** the **sum** of the values of **all elements** inside the array

1. 5.Check for Symmetry

Write tests to check the functionality of the following code:

| checkForSymmetry.js |
| --- |
| **function** _isSymmetric_(arr) {
     **if** (!Array.isArray(arr))
         **return false** ; **// Non-arrays are non-symmetric**
 _   _ **let** reversed = arr.slice(0).reverse(); **// Clone and reverse**
 _   _ **let** equal = (JSON.stringify(arr) == JSON.stringify(reversed));
     **return** equal;} |

Your tests will be supplied with a function named **&#39;**** isSymmetric() ****&#39;**. It should meet the following requirements:

- Take an **array** as argument
- **Return false** for any input that isn&#39;t of the **correct type**
- **Return true** if the input array is **symmetric**
- Otherwise, **return false**

1. 6.RGB to Hex

Write tests to check the functionality of the following code:

| rgb-to-hex.js |
| --- |
| **function** _rgbToHexColor_(red, green, blue) {
     **if** (!Number.isInteger(red) || (red \&lt; 0) || (red \&gt; 255))
         **return** undefined; **// Red value is invalid**
 _   _ **if** (!Number.isInteger(green) || (green \&lt; 0) || (green \&gt; 255))
         **return** undefined; **// Green value is invalid**
 _   _ **if** (!Number.isInteger(blue) || (blue \&lt; 0) || (blue \&gt; 255))
         **return** undefined; **// Blue value is invalid**
 _   _ **return**  **&quot;#&quot;** +
        ( **&quot;0&quot;** + red.toString(16).toUpperCase()).slice(-2) +
        ( **&quot;0&quot;** + green.toString(16).toUpperCase()).slice(-2) +
        ( **&quot;0&quot;** + blue.toString(16).toUpperCase()).slice(-2);
} |

Your tests will be supplied with a function named **&#39;**** rgbToHexColor() ****&#39;** , which takes **three arguments**. It should meet the following requirements:

- Take three **integer**** numbers **, representing the red, green and blue values of an RGB color, each** within range [0…255]**
- **Return** the same color in hexadecimal format as a **string** (e.g. &#39;#FF9EAA&#39;)
- **Return undefined** if **any** of the input parameters are of **invalid type** or **not** in the **expected**  **range**

1. 7.Add / Subtract

Write tests to check the functionality of the following code:

| addSubtract.js |
| --- |
| **function** _createCalculator_() {
     **let** value = 0;
     **return** {
        add: **function** (num) { value += Number(num); },
        subtract: **function** (num) { value -= Number(num); },
        get: **function** () { **return** value; }
    }
} |

Your tests will be supplied with a function named **&#39;**** createCalculator() ****&#39;**. It should meet the following requirements:

- **Return**** a ****module** ( **bject** ), containing the functions **add()**, **subtract()** and **get()** as **properties**
- Keep an **internal sum** which **can&#39;t be modified** from the outside
- The functions **add()** and **subtract()** take a parameter that can be **parsed as a number** (either a number or a string containing a number) that is added or subtracted from the **internal sum**
- The function **get()**  **returns** the value of the **internal sum**