# 1.Exercise: Advanced Functions

Problems for exercises and homework for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/js-advanced).

1. 1.Sort Array

Write a function that **sorts an array** with **numeric** values in **ascending** or **descending** order, depending on an **argument** that is passed to it.

You will receive a **numeric array** and a **string** as arguments to the first function in your code.

- If the second argument is **asc** , the array should be sorted in **ascending order** (smallest values first).
- If it is **desc** , the array should be sorted in **descending order** (largest first).

### Input

You will receive a **numeric array** and a **string** as input parameters.

### Output

The output should be the **sorted array**.

### Examples

| Input | Output |
| --- | --- |
| [14, 7, 17, 6, 8], &#39;asc&#39; | [6, 7, 8, 14, 17] |
| [14, 7, 17, 6, 8], &#39;desc&#39; | [17, 14, 8, 7, 6] |

1. 2.Argument Info

Write a function that displays **information** about the **arguments** which are passed to it ( **type** and **value** ) and a **summary** about the number of each type in the following format:

&quot;{argument type}: {argument value}&quot;

Print **each** argument description on a **new line**. At the end print a **tally** with counts for each type in **descending order** , each on a **new line** in the following format:

**&quot;{type} = {count}**&quot;

If two types have the **same count** , use **order of appearance**.

Do **NOT** print anything for types that do not appear in the list of arguments.

### Input

You will receive a series of arguments **passed** to your function.

### Output

Print on the **console** the **type** and **value** of each argument passed into your function.

### Example

| Input |
| --- |
| &#39;cat&#39;, 42, function () { console.log(&#39;Hello world!&#39;); } |
| Output |
| string: catnumber: 42function: function () { console.log(&#39;Hello world!&#39;); }string = 1number = 1function = 1 |

1. 3.Functional Sum

Write a function that **adds** a number passed to it to an **internal sum** and returns **itself** with its internal sum set to the **new value** , so it can be **chained** in a functional manner.

### Input

Your function needs to take one **numeric**** argument**.

### Output

Your function needs to **return** itself with an updated context.

### Example

| Input | Output |
| --- | --- |
| add(1) | 1 |
| add(1)(6)(-3) | 4 |

1. 4.Personal BMI

A wellness clinic has contacted you with an offer - they want you to write a program that composes **patient charts** and performs some preliminary evaluation of their condition. The data comes in the form of **several arguments** , describing a person - their **name** , **age** , **weight** in kilograms and **height** in centimeters. Your program must compose this information into an **object** and **return** it for further processing.

The patient chart object must contain the following properties:

- **name**
- **personalInfo** , which is an object holding their **age** , **weight** and **height** as properties
- **BMI** - body mass index. You can find information about how to calculate it here: [https://en.wikipedia.org/wiki/Body\_mass\_index](https://en.wikipedia.org/wiki/Body_mass_index)
- **status**

The status is one of the following:

- **underweight** , for BMI less than 18.5;
- **normal** , for BMI less than 25;
- **overweight** , for BMI less than 30;
- **obese** , for BMI 30 or more;

Once the BMI and status are calculated, you can make a recommendation. If the patient is obese, add an additional property called recommendation and set it to &quot; **admission required**&quot;.

### Input

Your function needs to take four arguments - **name** , **age** , **weight** and **height**

### Output

Your function needs to **return** an **object with properties** as described earlier. All numeric values should be **rounded** to the nearest whole number. All fields should be named **exactly as described** (their order is not important).
Look at the sample output for more information.

| Input | Output |
| --- | --- |
| &quot;Peter&quot;, 29, 75, 182 | { name: &#39;Peter&#39;,  personalInfo: {    age: 29,    weight: 75,    height: 182  }  BMI: 23  status: &#39;normal&#39; } |
| &quot;Honey Boo Boo&quot;, 9, 57, 137 | { name: &#39;Honey Boo Boo&#39;, personalInfo: { age: 9, weight: 57, height: 137 }, BMI: 30, status: &#39;obese&#39;, recommendation: &#39;admission required&#39; } |

1. 5.Vector Math

Write several functions for peрforming **calculations** with **vectors** in 2D space ![](data:image/*;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAAgCAIAAACuO9DoAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOwwAADsIB3nSZJQAAA1dJREFUaEPtmj122zAMgKmexc6Q5xMkJ2iyZ+0mj/HSLWO3LvJYb10zZYl0A5/AL0Oku7j8lSgKJMCX0JRTe4sDguBHAASQFMfjkV0+CQh8S6DzolIQuJBN5Qco2W57e7vtUm3/hfWiZBePT6vNck5w+V0XRU6DmnVRFOsG8wr+gqGftrph7KZqUcHUAtKQOZhSl5JriAkbw9ArPNdR1qnRhfQr2/LaYNunr9lnkEMWPtkMfFZhnUPcTOHCVhHIikNlPtI8uQrGynEhPChZvjQzVm39jPLAKLJ9SQolmzOzqr3n67BB+yCyOjWbZ4ynaPlNprcDB9vb6wQX4QH3vN+OIhsIQAG20CWrrRnW99UCJSeES4tpxUHQibzA4tKlFjfhDaYQPYIvEJKe/QxcyGK4FhyRBbXG3HwCsojL1qU56witeXXJr4Tm2r9JboQGL3jijiIULLKexeCyk2XfiN6gf0o+mLvAuwwW06CRQ3fb/N7sRf3w8/soarv3g6wkr5dYN5fk9+0bN4qx1dUCVb+8FgXQ4WX9Y8Oq9s/4GOjqQUDp2T+/WtMSSWHCJqjUkO22v3YC4MO9cwR1tOn3EaaeSHRx/8CR7Hc7Vv19xC/Ca5XSw/ZvbS/SvT7vWfkUpdWQ9QFsXgRwks+cCKB/m8XVSva/cQSm+rSew7txWhHOcQ7LlWqyOubdXbQnk3OBnAJFfPCJlQpNNpzSD7ZZ30kvoMiGvUBvqoUkhPjr0mThdKZSb9ZcoP0HjQc+Wrw7VLWou+0wRteBAmpTrUdAKOtg2obp2X3EqP8VD15ZZp8vYfVs36bJ6uuT5mFDBUcZmgTrWbcQFj9zU8fl91A7nqzo6ptbqAPUxao9iXMN9pSlaIeib6hSGJDjIj2YW+TLzsUyVLpwlvmst1eA2qyxxRMqxoOwk/gaZoixx75ppyDy6nBNUc1tIldGGk6HUtBicuOBTyvMYX2SZzDr+sxxFylrm2DF88CH5rOJ/DBWLd2HQprdsY1H1s7cQUND+s7DZ605LZYhQyTk9WAKFC1Myju66fc/I7LDYShhOiUceIN1KRQKbnCSG/G329ggzSFPjlW6cXZhhF8byfXtKSLdkK8mGVNjkc9eiBnt5ZOAAPrfRwn2/D9U/gMvhCAhJfuDUQAAAABJRU5ErkJggg==)
and collect them all in a **single object** (namespace), so they don&#39;t pollute the global scope. Implement the following functions:

-

# 
**add(vec1, vec2)** - Addition of two vectors - ![](data:image/*;base64,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)
-

# 
**multiply(vec1, scalar)** - Scalar multiplication - ![](data:image/*;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAABGCAIAAAAoxW3zAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOwwAADsQBiC4+owAACQ1JREFUeF7tnTtaWzsQx+27FpwiHysgK4A0qWjpTImbdClvdxtThi4tVZqYFYQV5EsRsxeuXuepx/xHR+dBPK4SmCONZn4azcg6Yv36+rqSj1hgSRb4Z0nKiC5iAW0BgVI4WJwFBMrFuUQUEiiFgcks8HL/4cP9C93dWgod2kgiUcoCT7frq1/748+7s1SLEilL2VvaASxw+fW4X+02RLyUSAmYkieio8ED75ETlN4eXr9eRsYtUJ4gEHMOWeWVm90qvYILlHN66OT6xnJKgfLkwJhvwCpK3qy+EVWOUk+gnM9H0nPEAlJ9nwgayB4hIjOJudQ+pXz+egsc9xeGpov9MTbWSkSVxXN/VnMrIP2/Vjj0kTlsKZA4xktyySfSKdcJnKV4Fig5jh1BVuFgwpfFoolkjdNLubrqw4+XXPqtfCvqOqYTcZhlOYGSZa4iwsqntfsO2+qfHSq12/UvKmSL9Ksb8eMll0hv+hjddLttJgcpLlAW8zfUkEUgGPzqXxlwysXHvl7tpZpNZMN1WsGjmm3pHDZhLoESYqmMUILI2tkXW+XNUusgVdTk5axVZkFqmR5v3KYCZRne6FZoDwElMt0NKlGRlRWR69IsWc83Ey1e8wfVFShRLw6To5FU7UNCw/SwT3dL5ywumz2DNJiOX1YfAmUJJ1NtQLTBqyLVG/H7QE6ZncEiOvf3FWj1BUraRkMlEK/Y6vVg9oVYUYWpnL8hmVPrtDpFdoO8LSRCaYGS6VW+OBAmqx2gkRfw2BY5zKVuoD9l0CnHmG0CJZ8y1hOJnMrt5RkJV8l2Paxg8aJmOx00lToaWJNf2oA1lum8pxIw5+rtUbJet6adBcpBO6ssJGYXTuX5oS9tWlT6Vur6n1NCJIm0RgK4DLQCr8yw4AhQtqd9goh6vSpLTWgml+2B2ZrjLpglRkCpUe2FFX+ZNJJg8NHMkbkqECy6dTtxxqNtLCT3rOSxSNlVJWIHTrduYqIWZaAA50eMNrNFOcGM6MRfJcH5n6184QcZeJBQellOOIlJZBb+5GofLSGnb4ZtCrKQ0XvzCMMPVD+BqLi4ZYEYA24NAkosE8CkujqPPM+RmpACYejvgUQO7cI21Z7A/k/QtmaTS+UyHaWSUGIRJwfJkXJKP4kZIUGAnVowk+gjiEcdWNvxBWGlU1BCjWDgelFyCligzYrxfFEwUHa/gTT1iNlnN6EztHE03qiGtIyGygSU0ETPCZNDxsV6dl7lIPvh42lSczuh6/+PkZXjanEkoSinGgxBWU3x/jtCgdHDbu+1qZoyP2EbNFQ1xRuB1eOYFpQtGijBPhcuhpok9Dbj2d1PNTp/Xfav2Xj580uTe/4ueV+RegN9vdk9N+wctg9X+ieri/cbxttxup2rB/8U/q8/sZu8Nu91ffD8+IO86ku3zflAt4cxxnYSomfvzs044w6zZoi/Ynv8/az3ZpPYADLqtU19s07n6pjLT+6VqOuPSZo7nnq5/1e1c7H/1tzYdXb3TZ9jiLfirPD8+zi9061tmPNuejWX2GMUSiQIOpnEuF7ub1RAVEgGLzMiImyo3R5fOqinblywoZKcmqvV5Vfe0kdf87BEb78RnWJQvvx4RANlYvV++k8jebH/3L1fy8HMW7xd1Hu4kpXzjbCVrWYMSrcwc9ZXTwe74AaW17zG9d2GJkXcbdZrITPb5fM/SKVTESiRxZscXIy9p+/m+kb+4q0Xa1d/aTIFTNIFyxSglsgwlNDivVqlM7ZIxuniZ24FYLYG7FbP8+4GuUEbcoxU35CZphEKQ+kqRyqWVSV+WNVwIzbNDC3qjAHXKzm12QMOhNE1LOpmLLVUwe2dkGAQShfjtp9i9/9WBnL7gMkdl/amlN4fWm1NmKOAb/tAPba+fep45ezjtb2yKfnBKyqpvilbFvh9tXZSvg9CCWw/WhWrivh7lxj7yypUVNFMXyz8eH38/F5vuFdpxdNtkxlq9tTHTxW1Pg+9PqyOxPDyKqoC5m9sA2xHlenvL2olBCWjEHHb4MEt+rO7Ly71U9Wy+mx254fu9p4JnF/6f77CW/DsBHu4agXLp1u9I+/tNfUcYweS2Fwf1ZFuUo7aB9g4cvEkIgN2FxODv0/w94zRr83tk+lTQs1X3q1vB9MH/oMH/LNO4c/5zbc2DXoohrdtz5eunDD35ZToV9+hAxlcWxbzfc4puLiL5j/mC89uYpaawMM+utKxTJJLGJa6Sd6xmOox+NiUf0qIy2QdEoYekSxKUdHG+MHJPgGZ0h2HjMxIIMqB2sVaglFx/XgxCJ17qFzg6FpmuBp+oNa0MCweVO7JHAPoXYYYTWVzQjesdNGh+FxyicQupwxbiDZG9Vw/Ug6IMPhMCCitHy5CJNvMDMbYoiyTBNOg4ZO9q3R7qc4xVf4kwZns5ZQDkHRjNy0MXcjZzu9kLUXYzlYhyABkkBDBY5izKT711gTzlr76wDv3QQ7NVaSsNV2SSwuRMWszjDLQ95v5yQgeqQqVrKZbUONkcpic59qWWSmZunMGlX1R/X/c7+jAuqVzFpfo5ZS9ch0dC3kZATpUkYtZAA8S3explDAZyCmzQ3FFN80aY2JqKwqUE8wmuFppC+p/54Wx6IjaRFqhnFqn1TxWyLErFYFyAijhi6Mb95VfuX0imVyGNkgQ3uApWXtCoJwEShRL58B976/StHRsZ4T4/ZQxIk3D/vZl0CahjWQaOFrC70ygnAjKCst0AlZXtkGxroPhXDVJpB0+wGWgFTJVRAJpwP4C5WRQ1ilcKlOM+9l3sJGlqwzLHJmeKhmqrW7drr+RTz2RSaQUOlMS2YlJEUbim+X+MjjGxnope8BRPNihRMpSfuC0czwG/8JxArNAVAzleBwlxpWNDBHqVKCEzDSBkA0uqQj61u+nhI0Yv7Zl4CljeRywgH4BxLz9oV8V2T2rDC14k4jfkrt5hHpXFVBhiSIC5Zxe0e8HmLsVLJHxu2Dsy1DuPSVF8M3qiw6s5hUl9XZw7626OYdUpG84popgcQukN4B63TWl75u9nxI14FpX4PIRCyzJArJ8L8kboouxgEApICzOAgLl4lwiCgmUwsDiLPA/UbUPVa+YnxAAAAAASUVORK5CYII=)
-

# 
**length(vec1)** - Vector length - ![](data:image/*;base64,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)
-

# 
**dot(vec1, vec2)** - Dot product of two vectors - ![](data:image/*;base64,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)
-

# 
**cross(vec1, vec2)** - Cross product of two vectors - ![](data:image/*;base64,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)

The math-savvy may notice that the given cross product formula results in a scalar, instead of a vector - we&#39;re only measuring the length of the resulting vector, since cross product is not possible in 2D, it will exist purely in the z-dimension. If you don&#39;t know what this all means, ignore this paragraph, it&#39;s irrelevant to the solution.

### Input

Each separate function in your namespace will be tested with individual values. It must expect **one or two**** arguments **, as described above, and** return **a value. Vectors will be 2D** arrays **with format** [x, y]**.

### Output

Your program needs to **return** an object, containing **all functions** described above. Each individual function must **return** a value, as required. Don&#39;t round any values.

| Input | Output | Explanation |
| --- | --- | --- |
| solution.add([1, 1], [1, 0]); | [2, 1] | [1 + 1, 1 + 0] = [2, 1] |
| solution.multiply([3.5, -2], 2); | [7, -4] | [3.5 \* 2, (-2) \* 2] = [7, -4] |
| solution.length([3, -4]); | 5 | sqrt(3 \* 3 + (-4) \* (-4)) = 5 |
| solution.dot([1, 0], [0, -1]); | 0 | 1 \* 0 + 0 \* (-1) = 0 |
| solution.cross([3, 7], [1, 0]); | -7 | 3 \* 0 – 7 \* 1 = -7 |

1. 6.Breakfast Robot

_It&#39;s finally the future! Robots take care of everything and man has been freed from the mundane tasks of living. There is still worked to be done though, since those robots need to be programmed first - we may have robot chefs, but we do not yet have robot software developers._

Your task is to write the management software for a breakfast chef robot - it needs to **take orders** , keep track of available **ingredients** and output an **error** if something&#39;s wrong. The cooking instructions have already been installed, so your module needs to **plug into** the system and only take care of **orders** and **ingredients**. And since this is the future and food is printed with nano-particle beams, all ingredients are microelements - **protein** , **carbohydrates** , **fat** and **flavours**. The library of recipes includes the following meals:

- **Apple** - made with **1 carb** and **2 flavour**
- **Lemonade** - made with **10 carb** and **20 flavour**
- **Burger** - made with **5 carb** , **7 fat** and **3 flavour**
- **Eggs** - made with **5 protein** , **1 fat** and **1 flavour**
- **Turkey** - made with **10 protein** , **10 carb** , **10 fat** and **10 flavour**

The robot receives instructions either to **restock** the supply, **cook** a meal or **report** statistics. The input consists of one of the following commands:

- **restock \&lt;microelement\&gt; \&lt;quantity\&gt;** - increases the stored quantity of the given microelement
- **prepare \&lt;recipe\&gt; \&lt;quantity\&gt;** - uses the available ingredients to prepare the given meal
- **report** - returns information about the stored microelements, in the order described below, including zero elements

The robot is equipped with a quantum field storage, so it can hold an **unlimited quantity** of ingredients, but there is no guarantee there will be enough available to prepare a recipe, in which case an **error message** should be returned. Their availability is checked in the **order** in which they **appear** in the recipe, so the error should reflect the first requirement that was not met.

Submit a **closure** that returns the management function. The management function takes one parameter.

### Input

Instructions are passed as a **string argument** to your management function. It will be called **several times** per session, so internal state must be **preserved** throughout the entire session.

### Output

The **return** value of each operation is one of the following strings:

- **Success** - when restocking or completing cooking without errors
- **Error: not enough \&lt;ingredient\&gt; in stock** - when the robot couldn&#39;t muster enough microelements
- **protein={qty} carbohydrate={qty} fat={qty} flavour={qty}** - when a report is requested, in a single string

### Constraints

- Recipes and ingredients in commands will always have valid names.

### Examples

| Execution |
| --- |
| let manager = solution();manager(&quot;restock flavour 50&quot;);  _// Success_manager(&quot;prepare lemonade 4&quot;);  _// Error: not enough carbohydrate in stock_ |

| Input | Output |
| --- | --- |
| restock carbohydrate 10restock flavour 10prepare apple 1restock fat 10prepare burger 1report | SuccessSuccessSuccessSuccessSuccess **protein=0** carbohydrate **=4** fat **=3** flavour **=5** |

| Input | Output |
| --- | --- |
| prepare turkey 1restock protein 10prepare turkey 1restock carbohydrate 10prepare turkey 1restock fat 10prepare turkey 1restock flavour 10prepare turkey 1report | Error: not enough protein in stockSuccessError: not enough carbohydrate in stockSuccessError: not enough fat in stockSuccessError: not enough flavour in stockSuccessSuccess **protein=0** carbohydrate **=0** fat **=0** flavour **=0** |

1. 7.\*\*Monkey Patcher

Your employer placed you in charge of an old forum management project. The client requests new functionality, but the legacy code has high coupling, so you don&#39;t want to change anything, for fear of breaking everything else. You know which values need to be accessed and modified, so it&#39;s time to monkey patch!

Write a program to extend a forum post record with voting functionality. It needs to have the options to **upvote** , **downvote** and tally the **total**** score**(positive minus negative votes). Furthermore, to prevent abuse, if a post has more than 50**total ****votes** , the numbers must be obfuscated – the stored values remains the same, but the **reported** amounts of upvotes and downvotes have a number **added** to them. This number is 25% of the **greater number** of votes (positive or negative), rounded up. The actual numbers should **not be modified** , just the reported amounts.

Every post also has a **rating** , depending on its score. If **positive** votes are the overwhelming majority (\&gt;66%), the rating is **hot**. If there is no majority, but the balance is non-negative and **either** votes are more than 100, its rating is **controversial**. If the balance is negative, the rating becomes **unpopular**. If the post has less than 10 **total** votes, or no other rating is met, it&#39;s rating is **new** regardless of balance. These calculations are performed on the actual numbers.

Your function will be invoked with **call(object, arguments)**, so treat it as though it is internal for the object. A forum post, to which the function will be attached, has the following structure:

| JavaScript |
| --- |
| {  id: \&lt;id\&gt;,  author: \&lt;author name\&gt;,  content: \&lt;text\&gt;,  upvotes: \&lt;number\&gt;,  downvotes: \&lt;number\&gt;} |

The arguments will be one of the following strings:

- **upvote** – increase the positive votes by one
- **downvote** – increase the negative votes by one
- **score** – report positive and negative votes, balance and rating, in an array; obfuscation rules apply

### Input

Input will be passed as arguments to your function through a **call()** invocation.

### Output

Output from the report command should be **returned** as a result of the function in the form of an **array** of three **numbers** and a **string** , as described above.

### Examples

| Sample execution |
| --- |
| let post = {    id: &#39;3&#39;,    author: &#39;emil&#39;,    content: &#39;wazaaaaa&#39;,    upvotes: 100,    downvotes: 100};solution.call(post, &#39;upvote&#39;);solution.call(post, &#39;downvote&#39;);let score = solution.call(post, &#39;score&#39;); _// [127, 127, 0, &#39;controversial&#39;]_solution.call(post, &#39;downvote&#39;); …        _//_ _(executed 50 times)_score = solution.call(post, &#39;score&#39;);     _// [139, 189, -50, &#39;unpopular&#39;]_ |
| Explanation |
| The post begins at 100/100, we add one upvote and one downvote, bringing it to 101/101. The reported score is inflated by 25% of the greater value, rounded up (26). The balance is 0, and at least one of the numbers is greater than 100, so we return an array with rating &#39;controversial&#39;.We downvote 50 times, bringing the score to 101/151, the reported values are inflated by 151\*0.25=38 (rounded up) and since the balance is negative with return an array with rating &#39;unpopular&#39;. |