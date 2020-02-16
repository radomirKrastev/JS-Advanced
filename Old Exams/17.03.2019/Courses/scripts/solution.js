function solve() {
  let coursesMap = {
    "JS Fundamentals": 170,
    "JS Advanced": 180,
    "JS Applications": 190,
    "JS Web": 490,
    bonus: "HTML and CSS"
  };

  function checkCourses(selectedCourses, courses) {
    for (let i = 0; i < courses.length; i++) {
      if (!selectedCourses.includes(courses[i])) {
        return false;
      }
    }

    return true;
  }

  function discount(selectedCourses, totalPrice, mode) {
    if (checkCourses(selectedCourses, ["JS Advanced", "JS Fundamentals"])) {
      totalPrice -= coursesMap["JS Advanced"] * 0.1;
    }

    if (
      checkCourses(selectedCourses, [
        "JS Advanced",
        "JS Fundamentals",
        "JS Applications"
      ])
    ) {
      totalPrice -=
        (coursesMap["JS Advanced"] +
          coursesMap["JS Fundamentals"] +
          coursesMap["JS Applications"]) *
        0.06;
    }

    if (selectedCourses.length === 4) {
      console.log("????");
      selectedCourses.push(coursesMap.bonus);
    }

    if (mode === "online") {
      totalPrice -= totalPrice * 0.06;
    }

    return totalPrice;
  }

  function addCourse(coursesList, course) {
    let li = document.createElement("li");
    li.textContent = course.replace(" ", "-");
    coursesList.appendChild(li);
  }

  function calculatePrice(selectedCourses, educationForm) {
    let price = selectedCourses.reduce(function(sum, course) {
      return (sum += coursesMap[course]);
    }, 0);
    return (price = discount(selectedCourses, price, educationForm));
  }

  function printChosenCourses(selectedCourses) {
    let chosenCourses = document.querySelector("#myCourses .courseBody ul");
    chosenCourses.innerHTML = "";
    selectedCourses.forEach((x) => addCourse(chosenCourses, x));
  }

  function printPrice(price) {
    let result = document.querySelector("#myCourses .courseFoot p");
    result.textContent = `Cost: ${Math.round(price).toFixed(2)} BGN`;
  }

  function calculate() {
    let selectedCourses = Array.from(
      document.querySelectorAll("input[type='checkbox']:checked")
    ).map((x) => x.nextElementSibling.textContent.split(" - ")[0]);

    let mode = document.querySelector("input[type='radio']:checked").value;
    let price = calculatePrice(selectedCourses, mode);
    printPrice(price);
    printChosenCourses(selectedCourses);
  }

  let button = document.querySelector("button[value='signMeUp']");
  button.addEventListener("click", calculate);
}

solve();
