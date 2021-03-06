/* Write a TCP time server!

  Your server should listen to TCP connections on the port provided by the
  first argument to your program. For each connection you must write the
  current date & 24 hour time in the format:

     "YYYY-MM-DD hh:mm"

  followed by a newline character. Month, day, hour and minute must be
  zero-filled to 2 integers. For example:

     "2013-07-06 17:42"

  After sending the string, close the connection.
 */

net = require('net')
date = new Date()
date_customFormat = ''

date_customFormat = date.getFullYear()+'-'+zerofill(date.getMonth()+1)+'-'+ zerofill(date.getDate())+' '+ zerofill(date.getHours()) +':' + zerofill(date.getMinutes()) +'\n'
function listener (socket) {

  socket.end(date_customFormat)
}

var server = net.createServer(listener)
server.listen(process.argv[2])



function zerofill (i){
  if( i < 10) return '0'+i
  return i
}
