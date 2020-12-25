const fetch = require("node-fetch")

async function callAPI(prams) {
  const res = await fetch(`https://thatcopy.pw/catapi/${prams}`)
  if (res.status !== 200) throw Error("Error calling the api")
  if (res.status === 400) throw Error("Bad ID")
  return await res.json()
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