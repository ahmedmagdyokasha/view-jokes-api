const appendJoke = document.querySelector(".btn-joke");
const jokeElement = document.querySelector(".jokes");

//
appendJoke.addEventListener("click", async () => {
  let jokeData = await getJoke("Programming", "Dank", "dds");
  console.log(jokeData);
  let joke = "";
  if ((jokeData[0].value.type = "twoparts"))
    joke = jokeData[0].value.joke = jokeData[0].value.setup;
  let html = `<article class="joke">
    <div class="joke__data">
      <h3 class="joke__name">${jokeData[0].value.joke}</h3>
      <h5 class="joke__row"><span> category: </span>${jokeData[0].value.category}</h4>
      <h5 class="joke__row"><span> Language: </span>${jokeData[0].value.lang}</h5>
      <h5 class="joke__row"><span> Type :</span>${jokeData[0].value.type}</h5>
    </div>
  </article>`;
  jokeElement.insertAdjacentHTML("beforeend", html);
});
const getJSON = async function (url, errMSG = "something went wrong") {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`${errMSG} (the status is ${response.status})`);
  }
  return await res.json();
};

const getJoke = async function (cat1, cat2, cat3) {
  try {
    //  const data = await getJSON(url) *3
    // run All in parallel
    const data = await Promise.allSettled([
      getJSON(`https://v2.jokeapi.dev/joke/${cat1}`),
      getJSON(`https://v2.jokeapi.dev/joke/${cat2}`),
      getJSON(`https://v2.jokeapi.dev/joke/${cat3}`),
    ]);
    // console.log("promise output", data);
    // console.log(data.map((d) => console.log(d.value)));
    return data;
  } catch (err) {
    console.error(err);
  }
};
let data = getJoke("Christmas", "Programming", "jcshv").then((res) => {});
// let gesonData = getJSON(`https://v2.jokeapi.dev/joke/Programming`);
// console.log(gesonData);
//////////////////////////
