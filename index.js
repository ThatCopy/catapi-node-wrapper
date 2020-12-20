const fetch = require("node-fetch")

async function callAPI(prams) {
  const res = await fetch(`https://thatcopy.pw/catapi/${prams}`)
  if (res.status !== 200) throw Error("Error calling the api")
  const txt = await res.text()
  if(txt === "An error occurred") throw Error("Invalid ID")
  const json = JSON.parse(txt)
  return json
}

async function random() { return callAPI("rest") }

async function id(id) {
  if(!id) throw Error("No id provided")
  return callAPI(`restId/${id}`)
}

module.exports = {
  random,
  id
}