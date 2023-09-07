require('dotenv').config()
console.log(process.env.WEATHER_KEY)

module.exports.check = async (req, res) => {
  res.json({msg: 'hello'})
}