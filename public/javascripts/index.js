$(document).ready(function() {
    var socket = io.connect('http://192.168.1.238:8080');
    socket.on('usersCounter', (data) => {
        let users = (data.counter > 1) ? data.counter + " USERS ONLINE" : data.counter + " USER ONLINE";
        $("#users").text(users);
    });
});