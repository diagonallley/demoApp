const axios = require("axios");

let ProfileUrl = "";
let authorizati = "";

// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     const headerDate =
//       res.headers && res.headers.date ? res.headers.date : "no response date";
//     console.log("Status Code:", res.status);
//     console.log("Date in Response header:", headerDate);

//     const users = res.data;

//     for (user of users) {
//       console.log(`Got user with id: ${user.id}, name: ${user.name}`);
//     }
//   })
//   .catch((err) => {
//     console.log("Error: ", err.message);
//   });

let ExecutePostRequest = async function (url, postObj) {
    try{
        let data = await axios.post(url, postObj);
        //axios.defaults.headers.common['Authorization'] = authorization;
        console.log(data.data);
    }
    catch(err){
        console.log(err.message)
    }
 


};

let posturl = "https://jsonplaceholder.typicode.com/users";

postObj = {
  userId: 1,
  id: 4,
  title: "eum et est occaecati",
  body: "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iurequis sunt voluptatem rerum illo velit",
};


ExecutePostRequest(posturl, postObj);