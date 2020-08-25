

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'end_user',
  host: '52.86.239.14',
  database: 'bullish',
  password: 'insaan',
  port: 5432,

});
const getTickers = () => {
    return new Promise(function(resolve, reject) {
      pool.query("select sum, hhour, ticker from hourly_occurrance_view where ticker='TSLA' order by dday, hhour limit 100;",
     (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }

  module.exports = {
      getTickers
  }