let startTime = Date.now();
let scrollCount = 0;

window.addEventListener("scroll", () => {
  scrollCount++;
});

function endSession() {
  let timeSpent = (Date.now() - startTime) / 1000;

  let data = {
    time: timeSpent,
    scrolls: scrollCount
  };

  fetch("http://127.0.0.1:5000/attention", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(result => {
    document.getElementById("result").innerText =
      "Attention Level: " + result.level;
  });
}
