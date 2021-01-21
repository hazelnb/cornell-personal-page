const pug = require('pug');
const fs  = require('fs');

render_pug  = function (file) {
    if (file.match(/\.pug$/)) {
        html = pug.renderFile("src/pug/"+file, {});
        fs.writeFile("out/"+file.replace(".pug", ".html"), html, function (err) {});
    }
}

render_pug_files = function (err, files) {
    files.forEach(render_pug);
}


fs.readdir("src/pug", render_pug_files);
