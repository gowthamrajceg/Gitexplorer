const client_id = "Iv1.74f61ef73d6054b2";
const client_secret = "01ac1f4946e1726281107327a0ed2b874d02ca5d";

const user = document.querySelector("#user_n");
const butt = document.querySelector("#submit");
const get_user = document.querySelector(".username");
const repo = document.querySelector(".Repository");
const url = document.querySelector(".link");

const fetch_user = async(userr) => {
  const api_call = await fetch(`https://api.github.com/users/${userr}?client_id=${client_id}&client_secret=${client_secret}`);
  const data = await api_call.json();
  return {data};
};

const show = () =>
{
  fetch_user(user.value).then((res)=>{
    get_user.innerHTML = `Name : ${res.data.name}`;
    repo.innerHTML = `Repositories : ${res.data.public_repos}`;
    url.innerHTML = `Link : ${res.data.html_url}`;
    console.log(res);
alert("found");
  })
};

butt.addEventListener("click" , () => {
  show();
});
