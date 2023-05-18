function updateTime() {
  // Seoul
  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let seoulTime = moment().tz("Asia/Seoul");

  seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
  seoulTimeElement.innerHTML = seoulTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  // Sydney

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  // Samoa
  let samoaElement = document.querySelector("#samoa");
  let samoaDateElement = samoaElement.querySelector(".date");
  let samoaTimeElement = samoaElement.querySelector(".time");
  let samoaTime = moment().tz("Pacific/Samoa");

  samoaDateElement.innerHTML = samoaTime.format("MMMM Do YYYY");
  samoaTimeElement.innerHTML = samoaTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
