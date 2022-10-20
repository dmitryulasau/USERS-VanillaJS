const users = [
  {
    user: "Chandler Bing",
    post: [
      "Hi, I'm Chandler. I make jokes when I'm uncomfortable.",
      "I'm not great at the advice. Can I interest you in a sarcastic comment?",
      "If I were a guy and…did I just say 'if I were a guy?'",
    ],
    avatar:
      "https://res.cloudinary.com/dulasau/image/upload/v1661875818/noAvatar_wdsdee.png",
  },
  {
    user: "Joey Tribbiani",
    post: [
      "I look a woman up and down and say, 'Hey, how you doin'?",
      "Joey doesn't share food! 🍕",
    ],
    avatar:
      "https://res.cloudinary.com/dulasau/image/upload/v1661875818/noAvatar_wdsdee.png",
  },
  {
    user: "Ross Geller",
    post: ["Pivot. Pivot. Piv-ot. Piv-ot. PIVOT!"],
    avatar:
      "https://res.cloudinary.com/dulasau/image/upload/v1661875818/noAvatar_wdsdee.png",
  },
];

userTable();

// STYLE
const style = document.createElement("style");

style.innerHTML = `

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

.container {
  width: 600px;
  height: 100vh;
  margin: auto;
  padding: 0 20px;
  background-image: linear-gradient(120deg, #A88BEB, #F8CEEC);
}

.box {
  margin: auto;
  background-color: #c2255c;
  width: 30%;
  height: 15%;
  margin-bottom: 40px;
}

h1 {
  text-align: center;
  color: #fff0f6;
  padding: 10px;
}

.user-ul {
  
  margin: auto;
  
  
  padding: 10px;
}

.user-list {
  
  margin: auto;
  margin-bottom: 10px;
  min-width: 360px;
  height: 80px;
  border-radius: 8px;
  list-style: none;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  font-weight: 700;
  background-color: #f8f0fc;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  img {
    width: 60px;
    border-radius: 50%;
    border: 2px solid #862e9c;
  }

  .btn {
    border: none;
    padding: 6px 18px;
    border-radius : 8px;
    cursor: pointer;
    min-width: 130px;
    font-weight: 700;
    background-color: #f783ac;
    transition: all 0.3s ease;
    
  }

  .btn:hover {
    background-color: #a61e4d;
    
  }

  .btn:active {
    transform: translate(-1px, 2px);
  }

  .post {
    min-width: 400px;
    background-color: #edf2ff;
    display: none;
    border-radius: 8px;
    margin-bottom: 20px;
    
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  .show {
    display: block;
  }

  .userpost {
    flex-direction: column;
    display: flex;
    align-items: center;
  }

  .postlist {
    list-style: none;
    padding: 8px;
    
    border-bottom: 1px solid #ced4da;
  }

  .postlist:last-child {
    border-bottom: none;
  }

  .author {
    font-size: 12px;
    color: #495057;
    margin-bottom: 8px;
  }
`;

document.head.appendChild(style);

// USER TABLE
function userTable() {
  const container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  const box = document.createElement("div");
  box.classList.add("box");
  container.appendChild(box);

  const h1 = document.createElement("h1");
  h1.innerText = "USERS";
  box.appendChild(h1);

  const ul = document.createElement("ul");
  ul.classList.add("user-ul");
  container.appendChild(ul);

  users.forEach((user) => {
    const divUserPost = document.createElement("div");
    divUserPost.classList.add("userpost");
    ul.appendChild(divUserPost);

    const li = document.createElement("li");
    li.classList.add("user-list");
    divUserPost.appendChild(li);

    const avatar = document.createElement("div");
    avatar.innerHTML = `<img src=${user.avatar}>`;
    li.appendChild(avatar);

    const userName = document.createElement("div");
    userName.innerText = user.user;
    li.appendChild(userName);

    const showPosts = document.createElement("button");
    showPosts.classList.add("btn");
    showPosts.setAttribute("id", "btn");
    showPosts.innerText = "POSTS";
    li.appendChild(showPosts);

    // POSTS
    const postDiv = document.createElement("div");
    postDiv.setAttribute("id", "post");
    postDiv.classList.add("post");

    divUserPost.appendChild(postDiv);

    const ulPost = document.createElement("ul");
    postDiv.appendChild(ulPost);

    const posts = user.post;
    posts.forEach((post) => {
      const li = document.createElement("li");
      li.classList.add("postlist");
      ulPost.appendChild(li);

      const authorPost = document.createElement("div");
      authorPost.classList.add("author");
      authorPost.innerHTML = `<b>@${user.user}</b> - posted ${Math.floor(
        Math.random() * 101
      )} days ago`;
      li.appendChild(authorPost);

      const text = document.createElement("div");
      text.classList.add("text");
      text.innerText = post;
      li.appendChild(text);
    });
  });
}

const buttonShow = document.getElementsByClassName("btn");
const postBox = document.getElementsByClassName("post");

for (let i = 0; i < postBox.length; i++) {
  buttonShow[i].addEventListener("click", function handleClick() {
    if (postBox[i].style.display == "none") {
      postBox[i].classList.toggle("show");
    } else {
      postBox[i].classList.toggle("show");
    }
  });
}
