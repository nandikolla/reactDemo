// const ShowComment = ({ commentData }) => {
//   return (
//     <div>
//       {commentData.length > 0 &&
//         commentData.map((comment) => (
//           <div>
//             <span>{comment.message}</span>
//             <span>{comment.author}</span>
//             {comment.comments.length > 0 && (
//               <ShowComment commentData={comment.comments} />
//             )}
//           </div>
//         ))}
//     </div>
//   );
// };
// export default ShowComment;

// //"use strict";
// const timer = (j) => {
//   setTimeout(() => {
//     console.log(j);
//   }, 100);
// };

// let timer1 = function (j) {
//   setTimeout(() => {
//     console.log(j);
//   }, 100);
// };

// for (var j = 0; j <= 2; j++) {
//   timer1(j);
// }

//var words = ["bella", "label", "roller"];

// var words = ["cool", "lock", "cook"];

// var commonChars = function (words) {
//   let filtered = words[0].split("");
//   console.log(filtered);
//   for (let i = 1; i < filtered.length; i++) {
//     filtered = compare(filtered, words[i].split(""));
//     console.log(filtered);
//   }
// };

// function compare(commonArr, newArr) {
//   console.log("compare function called", commonArr, newArr);
//   let filtered = [];
//   for (let i = 0; i < commonArr.length; i++) {
//     for (let j = 0; j < newArr.length; j++) {
//       //console.log(commonArr[i], newArr[j]);
//       if (commonArr[i] == newArr[j]) {
//         filtered.push(commonArr[i]);
//         newArr[j] = "";
//         console.log("compare function called", filtered, commonArr, newArr);
//       }
//     }
//   }
//   console.log("----filtered---", filtered);
//   return filtered;
// }

// commonChars(words);

/** 
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
Example 2:

Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.
Example 3:

Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".
 

Constraints:

2 <= s.length <= 1000
s[i] is either 'L' or 'R'.
s is a balanced string.

*/
/**

const mockData = [
  {
    name: "student1",
    science: [34, 43],
    math: [23, 45, 36],
  },
  {
    name: "student2",
    science: [34, 43],
    math: [23],
  },
  {
    name: "student3",
    science: [34, 43],
    math: [42, 36],
  },
  {
    name: "student7",
    science: [34, 43],
    math: [48, 39],
  },
  {
    name: "student4",
    science: [34, 43],
    math: [15, 29],
  },
  {
    name: "student6",
    science: [34, 43],
    math: [15, 29, 45, 38],
  },
  {
    name: "student5",
    science: [34, 43],
    math: [48, 39],
  },
];

var highestAverage = 0;
var students = [];

const calculate = (mockData) => {
  mockData.forEach((student) => {
    student = getAverage(student);
  });
  console.log("---", highestAverage, students);
};

const getAverage = (student) => {
  if (student.math?.length >= 2) {
    let sum = student.math.reduce((acc, grade) => acc + grade, 0);
    if (sum / student.math.length > highestAverage) {
      highestAverage = sum / student.math.length;
      students = [student.name];
    } else if (sum / student.math.length === highestAverage) {
      students.push(student.name);
    }

    return student;
  } else {
    return student;
  }
};

calculate(mockData);

const express = require("express");
const app = express();
const router = express.Router();

app.get("/items", (req, res) => {
  res.send("hello world");
});

app.post("/item", (req, res) => {
  req.body;
});

router.get("/", (req, res) => {});

app.use("/user", router);

app.listen(3000, () => {
  console.log("server started");
});*/

// const fs = require("fs");

// fs.readFile(
// "C:\\Users\divya\OneDrive\Documents\React.js\namaste-react\src\",
//   "UTF8",
//   (err, data) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(data);
//   }
// );

function x() {
  let a = 1;
  setTimeout(function () {
    console.log(a);
  }, 1000);

  a = 100;
}
x();
