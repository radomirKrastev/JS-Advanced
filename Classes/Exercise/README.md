# 1.Exercise: Classes

Problems for exercises and homework for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/js-advanced). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/1534/Exercise-Classes](https://judge.softuni.bg/Contests/1534/Exercise-Classes).

1. 1.Data Class

Write a **class** that holds data about an HTTP **Request**. It has the following properties:

- **method** (String)
- **uri** (String)
- **version** (String)
- **message** (String)
- **response** (String)
- **fulfilled** (Boolean)

The first four properties ( **method** , **uri** , **version** , **message** ) are set trough the **constructor** , in the listed order. The **response** property is initialized to **undefined** and the **fulfilled** property is initially set to **false**.

### Constraints

- The constructor of your class will receive **valid parameters**.
- Submit the class definition as is, **without** wrapping it in any function.

### Examples

| Sample Input | Resulting object |
| --- | --- |
| let myData = new Request(&#39;GET&#39;, &#39;http://google.com&#39;, &#39;HTTP/1.1&#39;, &#39;&#39;) | { method: &#39;GET&#39;,  uri: &#39;http://google.com&#39;,  version: &#39;HTTP/1.1&#39;,  message: &#39;&#39;,  response: undefined,  fulfilled: false } |

### Hints

Using ES6 syntax, a class can be defined similar to a function, using the **class** keyword:

 ![](data:image/*;base64,iVBORw0KGgoAAAANSUhEUgAAAR0AAABGCAIAAAB+NtesAAAEUUlEQVR4nO3dz04iWRTH8VOTeYMO5QtMm5qIDwALEtzBahKmI08AoXslmT3F3sDKIvgEGq3dBHYYWOgDNIQKPoFF5hnuLKooHeVfm+Ofdr6fjXDrXupufnXKo6EsY4wAUPXLW28A+IDIFaCPXAH6yBWgj1wB+sgVoI9cAfrIFaCPXAH6yBWgj1wB+sgVoO/XH18yb2dP6jeWiN2a1Y4+6+8pEvju+diKXhuTLrsl56VOpaNftYqnlZ7pFt56J3h75nlmw4x4rdkzV29p6HnD0BhjzPSycTl92ZM9FQ69HzlpK1Ppvdxm8FPZWK+CqnV2KlHdWFOgkiImIumeKcXX7L5vFcfxlEx+dp37vGpwPWdv/yoUcURkPup4V6GIGGMffKvlUtE2/eb5WETs/Ne9yclADsr24Oz7ftktOYHfPB8bO+/WciuXz0edk0FoWcakd3YkX4tXiUhzLCJi0ofvvl7iPVmbumlFGplWuHj9oECtrlezlieV6eMlvUvJDGcrB5dL6lU49OJ6FQ49bxgfTl7fHzZDr9G4f52Um+llMvPp8uhwUhiTyki9wnOtrVf9yWnmYHYUXdKdrll3wb5td3brYfymEv345GTu6rvNuohIumeiurR0cJW7K695JWLsvFtzRGQ+nYRh2GxeLS4K9mie+306scu1aHO5WnnuTlZ93NLluZQ4e/a5F4/ulxvPKkz94EaoaIg8o2+xTN/frds9UytEAQui0dTRtXsU30mOi5b0TKmwfHCVnfzXWi4lo47rB7mSIynbtvN/Lu7eFv6xt9zm8uUi4pQajZKIyHzUuRyJk9vyAxPtbFF6ho4FImv77IW9ys3guB+/61fdbHu+dOJtEEom9ZuISHBcv1ss8K3s6FacrnHNLJ+RMLhdMbhJrlaWMz8QEWfPHoyCR4c/pcLJYiyYfL8/EIZzEZFR5yweXLpcAt/1nwzGH7CYsGpG7Oi6J8Vqf90U/I9YZv33W9yOsruDm6hvEfUYHnYdRESk0mt0C0nfIt1qhfV6KJVD88fk4cxKr9Et/LdpkQwuk/TZ04eNkhN1FuykDxHNSfrvyeT7xoM8bGbk7cEg6mLIkuWB756NrbinH53u0R7sqG6u1c5WnWua7BDZnKuf0Kjj27U3aN6RKySUfr96Jxa1yHRSUVf9NTn7p0VL+Lsw5EPWK+DN8f+BgD5yBegjV4A+cgXoI1eAPnIF6CNXgD5yBegjV4A+cgXoI1eAPnIF6CNXgD5yBegjV4A+cgXoI1eAPnIF6CNXgD5yBegjV4A+cgXoI1eAvo256lctK9ve4jvUASxszFWha3r7F3+/xl6Aj4L7QEAfuQL0kStA3za5Kvz15cLimWnA1rZ5Tk//+OKLuebpM8C2uA8E9JErQN/G+8B+1Sp+b81eYy/AR8HzGgF93AcC+sgVoI9cAfrIFaCPXAH6yBWgj1wB+sgVoI9cAfrIFaCPXAH6yBWg71+nxfg2EmRjuQAAAABJRU5ErkJggg==)

At this point, the **class** can already **be**  **instantiated** , but it won&#39;t hold anything useful, since it doesn&#39;t have a constructor. A **constructor** is a function that **initializes** the object&#39;s **context** and attaches **values** to it. It is defined with the keyword **constructor** inside the body of the class definition and it follows the syntax of regular JS functions - it can take **arguments** and execute **logic**. Any variables we want to be attached to the **instance** must be prefixed with the **this** identifier:

 ![](data:image/*;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAC9CAIAAACcbjf+AAAWVElEQVR4nO2dXWwb15mGvzH2Mtli4XJoJ9mLIrIzFkk7TZ0C0gVRMjYMKcjGgNKKQVL0ojUJWY1bCbmwnSYcxY3TC0OynRUFKQEWAdKGasQidWIxRgwSIjYykE2cOBQtVnKx6G5ihcMaiyL3OXsxPxySM/TQ0uHP+H0QRKMz52dE69U3/Hje+QTGGAEA+LCt3RcAgJuBwADgCAQGAEcgMAA4AoEBwBEIDACOQGAAcAQCA4AjEBgAHIHAAOAIBAYARyAwADgCgQHAkX/axNjyVP/0+BWBSJxcGxnbtWXXVEMxJc+vCOoxY/6IPCTxWmprSMeEwbnoIpsdaPeVgPbDNsnaUh8lJtc2O01jlhKJJYUxxtjqQnxhle9i9ShLiWYWneyLLvK7GNBVOI9gxZiQnCM1kjQIWUZYIyL/IhvS/oqnU8LgitalL7S2HNxl19gYyRfIKkQSEZVzM4msQkSMieHRkaBHvczUxPwKEYmho77CdIbCETGTzAci8pBUTE3MrzAxJI8EbYeXczPTGUUQGPN7vRQa0UYR0cQKERHzD3d8BAWdhDMdrkYp3jep6MemkGUfwdYmExRdrR2yuEB9S2u2jdYYEUxZSmgRTFlKJJa008Zx5TRbSsTjlWMjAK0uGD3rh6unjVBpxEpEMHCnOItg6cJcX3htTP0jL82yRn/C16dmdo8r2jdR9ct2qa80vntinIjIv8jUSGXZaEcpm5jIEjExJI9IRFReLSiKMjGR1f9MiLlycM9qQYyMqBcXHImU5YLddJbDgx6SfOJ8QmsNROJ3FKrSxSuEGAdUNpPksCKd2j0uLrKRAVVpRbXVM7Ysj2k3mSuDAi2yoQHrRju8oaMjQQ/lZuRUMTgkkUcUxdBT+o2dzi3R4WVaDyciaSgeHyIiKudmFnIkBR1OaDDVP0iLDOkNoOIsTT/gi17JnElr36Vjcv9U2bLjelGhPk8PEVHxzHhJH5AS+nPrJM0yma2F+kgprts03o7gSISSqSIRST4xkyvWnN7uUQp6W7GQr5xQlDIRUW4mqTVaDqdiSk7VNWoT6B3semiMLS/SYCzdqAu4ixCYw4ferOf6d2euqEkONSFhTlEQEVF0MT47YCQ5/JOTyvi4QtFhdrhg7hldjM8OVGc4jEYrjDS9fzg+JKlpCNFIWqh9jPS90bmSpSBz5iMkZjJqyoMshhdTcnJF0D4SUJeruQZRjaQNmeqPScvI0QOiJgTWheRmUuJIG1J+EBgw2Or3YB2CHp3YjEdNyrcSKTA3KBA+aAbk7ggGQNvBXkQAONKEwDY2NvhdBwCuBBEMAI5AYABwBAIDgCMQGAAcgcBax/pUf/+Uvh8sHascOyAdEwQBO7C6D9cJTHn7/PxyR86ZPjMeeNFw0Q0cDoyfcS6YYh4W6a6kvTs5ludPvviFIDD24L593xNDx0MikfL2+bNvlASBsQcP/no2JJKSjZ39kHbsuFEqVRqJzD0P7NhBB44d773+uxd+f5mIXviCiIjtffn0cL+6yjXqOfjsj/JvvfE1HXz29HGaf+ytawefPa0NYd6fnz72tPUl/d1yTovrtFyo1/hZ0+/ORQ/PVn72gcPRwVNTzw/we9YC6AScW8du3ry5tV60zLlwssAYY6z0h3MnopkSY+yjpHagNr6qni8kwyeSHzHGWOFV7YCxQlLvWXj1hN6Tlf5wTu9gppAMn1BnLrx6LvM/jLHMOX0I+yh57g/2l2Q5p/V1Wi6kshilvhpf6mKUHDszYeLsUtoXwZS3895Tx9S/8OLTx04/TUR0PVc6+JthUWuMHIxlr1NvLxH1HAz1ExH1Bvdd/htRPxH1Br73+3MHLhMR0b5nL/darGGmR4sz4vFjdl0tL8kS2+u0XaiYp8DhumCVLxI5ue+DibNb6ebNvr3HX3nlOBGR8vb55NvUa6+HLgcmzu6lfUkO8elA6c2s/myB6/OPnc/+L/UGvfn/NLoU8t8L2Aam5fmTv7tueab0N73DY/PWPVT+u6QQEWXPv3itwSVZztnEdWpIAcrXW0oDjsISTJzdSxO76Tc2Nnbu3LmVi+t5AjIlD5Rs7Nzlv6rnvQf+41joX9UWxg48ezqYVzMQe18+PUxqNkLtufeZy8P6r/j1+cd+/4VgDDevUmkkIj0j4j3wc++Hb1zbd+r0cL/lJVnMaXWdtguppGPCu4fNicC6hkbAY9altFVgdxc1gmpKXxBYt+K6z8E6l4HnJ/OnKh80v5uffN65YKTA3CA+aO5CEMEA4AgiGAAcabPAYOIE7gYRDACOQGAAcAQCA4AjEBgAHHGfwIoxYcZkZSzGBFmoaqmwPjUjCCn+Hy4VU/JMrmz+VparWhxOcgej7ClP9deXGLBsBJvAfQKrQZplkajNuV1jI6xRSRdOSENyJNCiUfZ4pAAFJI+DRrAJunk3fT1GhQq17Ji5aub7KWF8hSpVJmwKTDspulnOzUxnSoFAIJ+nyKgnO50pBbTK0aaCElrtCL1kJun1zYximrSamkiskLnKRKW+pkXNTv/w8Ba/XM5Yn+rfPX6lb3JtGd7QO8C5dWzLDZd85qwuwKm1xLVamzWlNGvLczotuqksJeLxhVXtC1tdiCeWFLa6EI+bC2Tqx/p58yUtGPU3jZP6bFXDTfOsLsTjtfNUWJvsq/2nvY1Fc21yob4yqUWjOnOtWxQ4w10RzBbv5PMSEVGPp+9K+QaRzZ/iZopuBnwSKVnyerZrDcVCXhCErF4gUxCosFoOeuzut7zhoEREtN3jLZVvEdFqoRTQ63NKwbB3urBaFst5CkTUUCYFw968bc3OXWPLbKzB5VqNGKofYNHY/Mygwl0iMIc0VXTTgqo7wM1diSiSKqaKgittFqg3clVNeExOB+C+JMd2qa9UvEHUsBKnNfZFN9en+m/72DTJFxCUrF4201wL0whStflEM549Pm8+qQ0pppJ5r2+PR/IFSnolznIum7ccSURqnKlhi9SVjgmC0NQz5kCFNu+m57JD30hU9IX+srznol5xc5H53hWScyRQX+gvL5Yfqi/PSbZFN9X4oIUEPRUh+v2Uz5e84bCYyeS94dGR4C1T1UxzNDPqlYmhoyN7ijPTWUVgzB+RfQU5uSIIWmerJEc5N5PIKmSU5yRveIuipDPSMWEwjwzHneJGgYEtJB0TTklsGW/C7hC8BwMNGZjF03Y2g/vegwHQQUBgAHAEAgOAIxAYAByBwADgCAQGAEcgMAA44j6BdaDhksq5mcrGqS2bFI7JLsD1HzRLsyxCQtby3K6xkdbsE/cER+Tglk8Kx2QX4C6BtcZwScWUnNT2BN5KTcyvMOaPyEOSvpPQPzxMyeSKIPiH42prVqn2ULYWOCbbiLtuEXcFl1kkSuLkWpyxOKvIozRe9DEWZ4v+uVO5dSLVmcLWQtUuxWJsUNHGLvrtlzG596Wh+NGQVz32BEfk0ZDIVubn84FIfNifLxTV1kofe9QN+1Xc5ln0PVJA6nHUCNqGuyKYLRwMl/Yw/7A8JBFJcjNFKeGYdCXuimCbxTO2LDM2HCVGtDJ4p/mPgO9Oqr02H8FAF+A+gbXacFnMZUqbvmiCY9KluNEPxttwqWI87CkUUjKZkjc8OhIk3RxZcVuanjOlUnmGVIuAY7KduFFgwAwck23lLkly3MXAMdlW3PceDIAOAgIDgCMQGAAcgcAA4AgEBgBHIDAAOAKBAcAR9wmsEw2Xztl47Xz03vnP27U8TJxbjes/aO4Iw6Vzdj53bO659i0PE+dW4y6BtcRwufHaefk3JSJijxyYyPquhs5euCoQ0aN/fOUXNB/7yRdqt0f/+MovDhHdyL78/Q+/2iY8+sdn6Km3/muboLVfqvRkjxyYyIZ2knIxdPbCVYF9633ys2OPG6YufQa9XbkYOvvnT3Y8uRD49KkPv6QdVZ1bBUycTnFeqw8VLiusZybuSX6mfVN4/Z5z768z9kHyiHrAqo9Z6f0fnYj+88kjowX2QfLIaKEyRO35o8zNqpmNgeq3J17/oGbOwuv3nJsYzdysH14Nyl62HXdFMFu22nDZ4/vB/g8vvBZ6+DmRLuU//tmBuR76/Ow1YZtw4QcvXCAiImEbfZpWHn9OVEewnz4z9++9RL1zh4hI2bn/a7Un+3bv0W9CdvudN9L5L3/27EuHiIjoUOjJ/Wc/TSuPP0dEX9/3xLGdRPSg+MAnSonIcgaYONuO+5Icm8G54VJ8/Pi+L/9U2CD6/L1rP3yiV21ljxyQ//HKrP7fS7q6iMjoow3Pnp79xzOPfsuEbV8knGY1xPt9xvGOnQ/efgBMnG3HfQJrleHyUOhJyl+9lL1QOPj4ISKih5/YJ1y9fPGSevr6G/eefOOSzUKX5qOh7Ab1/uKb07OfHniASl/dsO64cyDwwJtvafNcmk+8ueMHA6J1Vytg4mw7bvSDtcZwSVqiQktamFrUQz11UZMUCe2s7kZGOqS6kerSJOYkx4Wrgnpv+ZV6bMzcImDidIobBQZ4AxOnY+6SJAfYUmDidIz73oMB0EFAYABwBAIDgCMQGAAcgcAA4AgEBgBHIDAAOOI+gXW34bLNwHC51bj+g+YuM1y2GRgutxp3Caw1FS7LuZnpTCkQCOTzFBn1ZKczpUBEHpKoqtRDpciDqdGyKITeqNXCJCKtZKa+mlpQQqsyQYGIPCRZLtRCYLh0inPrGAyXBspSIh5fWNW+sNWFeGJJYasL8XhiSVFnMo61k6zq0LKxev6F1ep52OpCPK62Wi9kAQyXbcddEcwWDhUuAz6JlCx5Pdu1hmIhLwhCNjGh3o8KAhVWy0HPdo+3pDYy5o/IapVmy8ZKsCIi8mtzesOj6mkpGPbmy/YLWdzDwXDZdu4SgTnEM7Ysj1ExJiTnaGVQoEU21NSm1sodoIngiBykYkpOrggrSZki8pBEHovGYmo6I0bkEUm9CW2YVLBcqB71Rq6qqdZyA/jivixiqytcGki+gKBkc0X1u2JKllNFomJKnsmVSRqS1VLoilK2biwrih4OK0UzJV+glFnIlatarReyAobLtuNGPxhvw2U5NzOdUQRB9Pspny95w2Exk8l7w6MjwVt1qYvqCpdaQsKyUU9yMOYPh5VsVtGKqVeV0iyH6rIpDqPZlgLDpVPcKDC3UkzJWU/LtWQFDJeOwXuwjkcPVoyJ4dGh9quLYLhsAkQwADjiviQHAB0EBAYARyAwADgCgQHAEQgMAI5AYABwxH0Cg+Gy3dzIvnzvyei95y/aPHDf4PNfnox954XYd16oFPW8kX25wTP9t3T11uD6D5phuGw5PaGXvvG+cW/+/oZlATdeO58oHJz4R/Uj9XtCL30TasHqLcNdAmuN4ZIq2xH9w8OUTK4IQv0mQzvD5dGnKDWdKVFA9WoqxljTtIyJ4dGRoEe1dnrDEV8hmSmRN2xslLqdiXNrXJiX5mM/+YJ9633yswgdOXvhqsB++szcr0tqMQpt9W/3Hv1m+GFTf62d9u5Xj/TiFVRX5kKgUvzevFahs1LjQp/QNLB2ofo5bVZvvzHUuXUMhstqlKVEXJZlzXGp/t+h4VJZSsQTiQXjOL6wajqoG671bOzX5OTCNNXyvHn+3JHRgt6o1d38bPTExPmSdlbrWXj9nhNa3c0PkkeMUqDmY3ONTzMW9T5rF7Kc03r1DjCGuiuC2cLBcElERNqGd5JkiYqppGPDJRGRLxj0EJEnGApkkoVi0FMoBSIjatiRgmHvdGG1HPQQUUn0jXhIdWmWbxF5rPyavFyYf1W+3C96iYio9JevH3jou3rjwSOHiEj5qkD0EBFdv3jy6x8uHHuYiKh3/8/oY/LuJOXi764J24SZ7xhlmfZqX2+UbpJ3f91d3MZaiXyByk2jxUIWczLr1Zv/YTlwlwjMIU0bLgO+qvswx4ZLIhJFvd92j5dqbWseUaSCdlwxTRtn6+e0W72eplyYpt945asC3feESHUyuG+3SDcKN2nfvx2qDHzgoe8S/X3jE3p0wVQ/zcCkWzMVDdeuri9E1y3mvJF9z2L1jsB9WcRuMFwSEeWTmk2ymMuUAj7Js8fnrbSlknmvb4+NWKzm5OTCrPzGX8r++ROtbq1JBn/fUBt7vPfRtU/U7N+N7IU3VTF8d+d++vi96+pUn//yZPSX2vHGWol83rpd3spXBXVg3erGQpZzWq9O1AHGUDfupm9JhUvj+RlVcaM+92DprSznZqbLoQjNq07KhkkO1YIZkYOKeiyGjobKMxZ+TT4uTD1zwH6694dvXvuYSNCzDgZa6c2/1lbovP+3v3ppoGBkI7QsRXXqoqaKpzH2X77P/u8zm4UoWzsnWdQHvf+3v3rpuU/bbgx1o8A6H1VgcuuftnaX0QHGUAis5ehhiojE0NFOMCgDfkBgAHDEfUkOADoICAwAjkBgAHAEAgOAIxAYAByBwADgiPv2IhZjQlaqOFDUjYXeKk+KzvrUzO5xsdkKD6alTDsntF2/9Ri7McRwzd4Kq+Hl3Mx0RoxU5rIcbj9ng2uVk3mz4WWTmH090WE2a/2zW3uC7iqcb7zvZrtKgoNfoVLEy1nfGv/IJofbNDbCqhLZHaJM9sVvU2nMoNYTdHfhrgjWMsMlERVzWUWg+Ym8tuvPFCJupSbmV8xVKh0MpzuKSzVzNrJ7+oeHm5/RhnRu/IpAgxNzlZfIeD2JyH+bmwLLF9nUWL8LtHtLabrrPdiu4DKLREmcXIszFmcVeZTGiz7G4mzRP3cqt06kOlPYWqjae1iMDSra2EX/bdaSgiGR+YfjsqYFaUiOBLRTQ/GjoXovRsPhpJpQbj/QjmJKTiqho/F4PB4f9ueTM7lyVaOvkMzbj1btAlU08A4MBCf7WHTR/Ap7xpZlxuKMxdcmlcGYzU5+IusXOZ0STI1zg9bPUOlG3BXBbOFluOwcLA2XYjlPgYipQGbBbvjmjYnrUzO7x/XynNEGHS1e5PS7eSJBbyQieuf98tiYZ0surL3cJQJzyGYrXLaXeotKMWVya5o9nHVsthZmOrV7XFxkIwOq0hoEMKsXmeh2N+Rdi7tuEYnaaLg0U6lR2SosDZeSL1DKaG3lXLbBLeIma2GuFxXq8/QQERXPjDf80a1e5IHDAbqSPaO9vMWYIBsvddsdk5vEjbvpW2y4NCfoq6pRZkrecI05kvT0g8Xwamum1pMcN0rWhktjITEUEjOZLcnUV+4GKwl6I8nhn5xUxscVig6zwwXB+YtsnV7q+lKabhQYcA0d4JjcJHgPBjqY7i+l6b73YAB0EBAYABxps8DwBgy4G0QwADgCgQHAEQgMAI5AYABwpL0CS8e6ehsMALejvQIbmGWLgXfeb+s1AMAR3CICwBEIDACOQGAAcKTtAht4/sfvNGG0AqCraPtu+vSZd37Mlrt8yzQANrQ9ggHgZiAwADjS3ltEzRDe1msAgCNtfmQAAO4Gt4gAcKSJCAYAaBZEMAA4AoEBwBEIDACOQGAAcMS5wGCOBKBpnAsM5kgAmga3iABwBAIDgCMQGAAcaUpgMEcC0BxN7aaHORKA5sAtIgAcgcAA4IjzW0SYIwFoGthVAOAIbhEB4AgEBgBHIDAAOAKBAcARCAwAjkBgAHAEAgOAIxAYAByBwADgCAQGAEcgMAA48v9vceqUbI0T1gAAAABJRU5ErkJggg==)

The description mentions some of the properties need to be set via the constructor - this means the constructor must receive them as parameters. We modify it to take four named parameters that we then assign to the local variables:

 ![](data:image/*;base64,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)

Note the input parameters have the same names as the instance variables - this isn&#39;t necessary, but it&#39;s easier to read. There will be no name collision, because the **this** identifier tells the interpreter to look for a variable in a different context, so **this.method** is not the same as **method**.

Our class is complete and can be submitted in [Judge](https://judge.softuni.bg/Contests/Practice/Index/1534#0).

1. 2.Tickets

Write a program that manages a database of tickets. A ticket has a **destination**** , **a** price **and a** status **. Your program will receive** two arguments **- the first is an** array of strings **for ticket descriptions and the second is a** string **, representing a** sorting criterion**. The ticket descriptions have the following format:

**\&lt;destinationName\&gt;|\&lt;price\&gt;|\&lt;status\&gt;**

Store each ticket and at the end of execution **return** a sorted summary of all tickets, sorted by either **destination** , **price** or **status** , depending on the **second parameter** that your program received. Always sort in ascending order (default behavior for **alphabetical** sort). If two tickets compare the same, use order of appearance. See the examples for more information.

### Input

Your program will receive two parameters - an **array of strings** and a **single string**.

### Output

**Return** a **sorted array** of all the tickets that where registered.

### Examples

| Sample Input | Output Array |
| --- | --- |
| [&#39;Philadelphia|94.20|available&#39;, &#39;New York City|95.99|available&#39;, &#39;New York City|95.99|sold&#39;, &#39;Boston|126.20|departed&#39;],&#39;destination&#39; | [Ticket { destination: &#39;Boston&#39;,    price: 126.20,    status: &#39;departed&#39; },   Ticket { destination: &#39;New York City&#39;,    price: 95.99,    status: &#39;available&#39; },   Ticket { destination: &#39;New York City&#39;,    price: 95.99,    status: &#39;sold&#39; },   Ticket { destination: &#39;Philadelphia&#39;,    price: 94.20,    status: &#39;available&#39; }] |
| [&#39;Philadelphia|94.20|available&#39;, &#39;New York City|95.99|available&#39;, &#39;New York City|95.99|sold&#39;, &#39;Boston|126.20|departed&#39;],&#39;status&#39; | [Ticket { destination: &#39;Philadelphia&#39;,    price: 94.20,    status: &#39;available&#39; },  Ticket { destination: &#39;New York City&#39;,    price: 95.99,    status: &#39;available&#39; },  Ticket { destination: &#39;Boston&#39;,    price: 126.20,    status: &#39;departed&#39; },  Ticket { destination: &#39;New York City&#39;,    price: 95.99,    status: &#39;sold&#39; }] |

1. 3.Unity

Rats are uniting.

Create a class **Rat** , which holds the functionality to unite with other objects of the same type. Make it so that the object holds all the other objects it has connected to.

The class should have a **name** , which is a **string** , and it should be **initialized with it**.

The class should also hold a function **unite(otherRat)**, which unites the **first object** with the **given one**. An object should store all of the objects it has united to. The function should only add the object if it is an object of the class **Rat**. In any other case it should **do nothing**.

The class should also hold a function **getRats()** which returns all the rats it has united to, in a list.

Implement functionality for **toString()** function… which returns a string representation of the object and all of the objects its united with, each on a new line. On the first line put the object&#39;s name and on the next several lines put the united objects&#39; names, each with a padding of &quot; **##**&quot;.

### Example

| unity.js |
| --- |
| **let**  **firstRat** = **new** Rat( **&quot;Peter&quot;** );
**console**.log( **firstRat**.toString()); _// Peter_

**console**.log( **firstRat**.getRats()); _// []_

**firstRat**.unite( **new** Rat( **&quot;George&quot;** ));
**firstRat**.unite( **new** Rat( **&quot;Alex&quot;** ));
**console**.log( **firstRat**.getRats());
_// [Rat { name: &#39;George&#39;, unitedRats: [] },_
_//  Rat { name: &#39;Alex&#39;, unitedRats: [] } ]_

**console**.log( **firstRat**.toString());
_// Peter_
_// ##George_
_// ##Alex_ |

### Hints

Submit your solution as a **class representation only**! No need for IIFEs or wrapping of classes.

1. 4.Length Limit

Create a class **Stringer** , which holds **single string** and a **length** property. The class should be initialized with a **string** , and an **initial length.** The class should always keep the **initial state** of its **given**** string**.

Name the two properties **innerString** and **innerLength**.

There should also be functionality for increasing and decreasing the initial **length** property.
Implement function **increase(length)** and **decrease(length)**, which manipulate the length property with the **given value**.

The length property is **a numeric value** and should not fall below **0**. It should not throw any errors, but if an attempt to decrease it below 0 is done, it should be automatically set to **0**.

You should also implement functionality for **toString()** function, which returns the string, the object was initialized with. If the length of the string is greater than the **length property** , the string should be cut to from right to left, so that it has the **same length** as the **length property** , and you should add **3 dots** after it, if such **truncation** was **done**.

If the length property is **0** , just return **3 dots.**

### Examples

| lengthLimit.js |
| --- |
| **let**  **test** = **new** Stringer( **&quot;Test&quot;** , 5);
**console**.log( **test**.toString()); _// Test_

**test**.decrease(3);
**console**.log( **test**.toString()); _// Te..._

**test**.decrease(5);
**console**.log( **test**.toString()); _// ..._

**test**.increase(4);
**console**.log( **test**.toString()); _// Test_ |

### Hints

Store the initial string in a property, and do not change it. Upon calling the **toString()** function, truncate it to the **desired value** and return it.

Submit your solution as a class representation only! No need for IIFEs or wrapping of classes.

1. 5.\*Extensible Class

Your task here is to deliver a **class** that can be **extended**. Implement an **extend(template)** method that would copy **all** of the properties of **template** to the **instance** (not to all instances, just the one from which the method was called) and if the property is a function, add it to the object&#39;s **prototype** instead.

In addition, the base class needs to have an **ID property** that is **unique** and **autoincremented** sequentally for every new instance.

### Input / Output

The **extend()** function of your **class** will receive a valid object as **input parameter** , and has **no** output.

Structure your code as an **IIFE** that **returns** the class.

### Examples

| Sample Input | Output |
| --- | --- |
| let obj1 = new Extensible();let obj2 = new Extensible();let obj3 = new Extensible();console.log(obj1.id);console.log(obj2.id);console.log(obj3.id); |    012 |

| Extensible object | Resulting object |
| --- | --- |
| obj1: {  \_\_proto\_\_: {    extend: function () {…}  },  id: 0} | myObj: {  \_\_proto\_\_: {    extend: function () {…},    extensionMethod: function () {…}  },  id: 0,  extensionProperty: &#39;someString&#39;}  |
| Template object |
| template: {  extensionMethod: function () {…},  extensionProperty: &#39;someString&#39;} |

### Hints

You may have to keep track of the last assigned ID in a **closure** that is accessible by the constructor. Constructor functions offer direct access to their prototypes - you can view and modify them with **className****.prototype**.

1. 6.Sorted List

Implement a **class** , which **keeps** a list of numbers, sorted in **ascending order**. It must support the following functionality:

- **add(elemenent)** - adds a new element to the collection
- **remove(index)** - removes the element at position **index**
- **get(index)** - returns the value of the element at position **index**
- **size** - number of elements stored in the collection

The **correct order** of the elements must be kept **at all times** , regardless of which operation is called. **Removing** and **retrieving** elements **shouldn&#39;t**** work **if the provided index points** outside the length**of the collection (either throw an error or do nothing). Note the**size **of the collection is** not** a function.

| Sample Input | Output |
| --- | --- |
| let list = new List();list.add(5);list.add(6);list.add(7);console.log(list.get(1)); list.remove(1);console.log(list.get(1)); | 67 |

### Input / Output

All function that expect **input** will receive data as **parameters**. Functions that have **validation** will be tested with both **valid and invalid** data. Any result expected from a function should be **returned** as it&#39;s result.
Your **add** and **remove**** functions **should** return **an** class ****instance** with the required functionality as it&#39;s result.

Submit the class definition as is, **without** wrapping it in any function.

1. 7.Instance Validation

Write a class for a checking account that validates it&#39;s created with valid parameters. A **CheckingAccount** has a **clientId** , **email** , **firstName** , **lastName**. Each parameter must meet specific requirements:

- **clientId** - Must be a string representing a **6-digit number** ; if invalid, throw a **TypeError** with the message &quot; **Client ID must be a 6-digit number**&quot;
- **email** - Must contain at least one **alphanumeric**** character **, followed by the** @ **symbol, followed by** one **or** more **letters or periods; all letters must be** Latin **; if invalid, throw a** TypeError **with message &quot;** Invalid e-mail**&quot;
- **firstName** , **lastName** - Must be at least **3** and at most **20** characters long, containing **only** Latin letters;
  - If the **length** is invalid, throw a **TypeError** with message:

&quot;{ **First** / **Last** } name must be between 3 and 20 characters long&quot;

-
  -  If invalid **characters** are used, throw a **TypeError** with message:

**&quot;{First/Last} name must contain only Latin characters&quot;** (replace **First** / **Last** with the relevant word)

All checks must happen in the **order** in which **they are listed** - if more than one parameter is **invalid** , throw an error for the first encountered. Note that **error messages** must be **exact**.

Submit your solution containing a single class definition.

### Examples

| Sample Input |
| --- |
| let acc = new CheckingAccount(&#39;1314&#39;, &#39;ivan@some.com&#39;, &#39;Ivan&#39;, &#39;Petrov&#39;) |
| Output |
| TypeError: Client ID must be a 6-digit number |

| Sample Input |
| --- |
| let acc = new CheckingAccount(&#39;131455&#39;, &#39;ivan@&#39;, &#39;Ivan&#39;, &#39;Petrov&#39;) |
| Output |
| TypeError: Invalid e-mail |

| Sample Input |
| --- |
| let acc = new CheckingAccount(&#39;131455&#39;, &#39;ivan@some.com&#39;, &#39;I&#39;, &#39;Petrov&#39;) |
| Output |
| TypeError: First name must be between 3 and 20 characters long |
| Sample Input |
| let acc = new CheckingAccount(&#39;131455&#39;, &#39;ivan@some.com&#39;, &#39;Ivan&#39;, &#39;P3trov&#39;) |
| Output |
| TypeError: &quot;First name must contain only Latin characters |

# 2.
# JS Advanced – Retake Exam: 18.11.2018

# 3.8.  \*\*Kitchen

 ![](data:image/*;base64,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)

Write a class **Kitchen** which has the following functionality:

### Constructor

Should have 4 properties:

- budget
- menu
- productsInStock
- actionsHistory

At initialization of the **Kitchen** class, the constructor accepts **only** the **budget!** The rest of the properties must be **empty**!

### Methods:

- **LoadProducts()**
- Accept 1 property **products** ( **array from strings** ).
  - **oo**** Every element **into this array is information about product** in format**:
**&quot;{productName} {productQuantity} {productPrice}&quot;**
  - **oo** They are separated by a **single**** space**
**Example** : [&quot; **Banana**** 10 ****5**&quot;, **&quot;**** Strawberries ****50**** 30 ****&quot;, &quot;**** Honey 5 50 ****&quot;…**]
- This method **appends**** products**into our products in stock (**productsInStock**) under the following circumstances:

- **If the budget allows us to buy the current product** , we add it to **productsInStock** keeping **the name** and **quantity** of **the meal** and we **deduct**** the price of the product **from** our budget. **If the current product already exists into** productsInStock** just add the new quantity
- And finally, **whether or not** we have **added** a product to stock or **not** , we **record** our **action** in the **actionsHistory** :

- --If we **were able to add** the current product:

&quot; **Successfully loaded {productQuantity} {productName}**&quot;

- --If we **not** :

&quot; **There was not enough money to load {productQuantity} {productName}**&quot;

- This method must **return all actions joined by a new line!**

- **AddToMenu()**
- Accept 3 properties **meal** (string) **,**  **needed products** (array from strings) and **price** (number).

- Every element into **needed products** is in format:

**&quot;{productName} {productQuantity}&quot;**

- They are separated by a **single space**!

- This method **appends a new meal** into our **menu and returns** the following message:

**&quot;Great idea! Now with the {meal} we have {the number of all means in the menu} meals in the menu, other ideas?&quot;**

- **If** we **do not have** the **given meal** into our **menu** , we added it **keeping**** all **that we are given as information. Otherwise if we already have this meal print the** message**:

**&quot;**** The ****{meal} is already in our menu, try something different.&quot;**

- **ShowTheMenu()**
- This method just **prints**** all meals **from our** menu ****separated by a new line** in format:

**{meal} - $ {meal price}**

**{meal} - $ {meal price}**

**{meal} - $ {meal price}**

**…**

  At the end **trim the result!**

- If our menu **is empty** , just print the **message** :

&quot; **Our menu is not ready yet, please come later...**&quot;

- **MakeTheOrder()**
- Accept 1 property **meal** (string).
- This method **searches**** the menu **for a** certain meal**.

- If **we do not have** the **given meal** , print the following **message** :

&quot; **There is not {meal} yet in our menu, do you want to order something else?**&quot;

- **Otherwise** if we **have**** this **** meal **in** the **** menu **, we need to check if we have the** needed products **to make it! If we** do not have ****all needed products** for this meal, print the following **message** :

**&quot;For the time being, we cannot complete your order ({meal}), we are very sorry...&quot;**

- If we **have**** this meal in the menu **and also, we** have ****all needed products** to make it, print the following message:

&quot;**Your order ({meal}) will be completed in the next 30 minutes and will cost you {the current price of the meal}.&quot;**

- You also **need to remove all used products** from those in stock and **add the price** of the meal to the **total budget**.

### Submission

Submit only the **Kitchen**** class **as** JavaScript code**.

### Examples

| Sample Input |
| --- |
| let _kitchen_ = new Kitchen (1000);
_console_.log(_kitchen_.loadProducts([&#39;Banana 10 5&#39;, &#39;Banana 20 10&#39;, &#39;Strawberries 50 30&#39;, &#39;Yogurt 10 10&#39;, &#39;Yogurt 500 1500&#39;, &#39;Honey 5 50&#39;])); |
| Output |
| Successfully loaded 10 Banana
Successfully loaded 20 Banana
Successfully loaded 50 Strawberries
Successfully loaded 10 Yogurt
There was not enough money to load 500 Yogurt
Successfully loaded 5 Honey |
| Sample Input |
| _console_.log(_kitchen_.addToMenu(&#39;frozenYogurt&#39;, [&#39;Yogurt 1&#39;, &#39;Honey 1&#39;, &#39;Banana 1&#39;, &#39;Strawberries 10&#39;], 9.99));
_console_.log(_kitchen_.addToMenu(&#39;Pizza&#39;, [&#39;Flour 0.5&#39;, &#39;Oil 0.2&#39;, &#39;Yeast 0.5&#39;, &#39;Salt 0.1&#39;, &#39;Sugar 0.1&#39;, &#39;Tomato sauce 0.5&#39;, &#39;Pepperoni 1&#39;, &#39;Cheese 1.5&#39;], 15.55)); |
| Output |
| Great idea! Now with the frozenYogurt we have 1 meals on the menu, other ideas?
Great idea! Now with the Pizza we have 2 meals on the menu, other ideas? |
| Sample Input |
| _console_.log(_kitchen_.showTheMenu()); |
| Output |
| frozenYogurt - $ 9.99
Pizza - $ 15.55 |