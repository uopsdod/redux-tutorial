/*
 * action creators
 */

export function getSth() {
    console.log("action.js - getSth() called ");

    return { type: "get", text: "I want to get sth." }
}
  
// export function increment(index) {
//     return { type: "increment", text: "I want to increment sth." }
// }
  
