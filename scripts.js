function count() {
  let start = document.querySelector("input#start");
  let end = document.querySelector("input#end");
  let step = document.querySelector("input#step");
  let count = document.querySelector("div#count");

  if (start.value == "" || end.value == "" || step.value == "") {
    count.innerHTML = `<center>Impossible to count</center>`;
    alert(`Ops...It looks like you forgot to fill in some field(s).`);
  } else {
    count.innerHTML = `<center>Counting</center> <br>`;
    let startValue = Number(start.value);
    let endValue = Number(end.value);
    let stepValue = Number(step.value);

    if (stepValue == 0) {
      alert(
        "You know you can't count with STEP = 0. Don't try to fool the system xD. System will consider STEP = 1 for you"
      );
      stepValue = 1;
    }

    if (startValue < endValue) {
      for (
        let counting = startValue;
        counting <= endValue;
        counting += stepValue
      ) {
        count.innerHTML += `${counting} 👉 `;
      }
    } else {
      for (
        let counting = startValue;
        counting >= endValue;
        counting -= stepValue
      ) {
        count.innerHTML += `${counting} 👉 `;
      }
    }

    count.innerHTML += ` 🏁`;
  }
}
