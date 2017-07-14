//El Worker no funciona en Chrome, lo intenté en Internet Explorer y funcionó como debe ser.

var worker;
function startWorker() {
    worker = new Worker("js/worker.js");
    worker.onmessage = function(event) {
        document.getElementById("output").innerHTML += '<li>' + event.data + '</li>';
    };
}
function stopWorker() {
    worker.terminate();
}