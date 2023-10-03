function handle(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    response.write('<!DOCTYPE "html">');
    response.write('<html>');
    response.write('<head><title>Http Module</title></head>');
    response.write('<body>');
    response.write('<h1>Hello from http module Diogo Marcel</h1>')
    response.write('</body>');
    response.write('</html>');

    response.end();
}

exports.fn = handle;