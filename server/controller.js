const root = require('./model');

function controller(req, res) {
  if (req.params[0].length === 0) {
    return res.send({
      dir: [],
      fileInfo: [{ files: ['root'], type: [root['type']] }],
    });
  }

  const path = req.params[0].split('/').filter((x) => x);

  if (path[0] !== 'root') return res.status(400).send('BAD REQUEST');

  let tempModel = root;
  let dirStruct = [];

  for (let i = 0; i < path.length; i++) {
    if (i === path.length - 1) {
      console.log('first');

      if (tempModel['type'] === 'file') {
        dirStruct.push(path[path.length - 1]);
        return res.send({
          dir: dirStruct,
          fileInfo: [{ files: `Welcome to my ${path[i]}` }],
        });
      }
      const files = Object.keys(tempModel['children']);
      const type = files.map((child) => {
        return tempModel['children'][child]['type'];
      });

      var fileInfoArray = files.map((value, index) => {
        return { files: value, type: type[index] };
      });
      dirStruct.push(path[path.length - 1]);

      return res.send({
        dir: dirStruct,
        fileInfo: fileInfoArray,
      });
    }

    try {
      if (path[i + 1] in tempModel['children']) {
        dirStruct.push(path[i]);
        console.log('second');
        let newPath = path[i + 1];
        tempModel = tempModel['children'][newPath];
      } else {
        console.log('third');
        return res.status(400).send('BAD REQUEST');
      }
    } catch (error) {
      return res.status(400).send('BAD REQUEST');
    }
  }
}

module.exports = controller;

// d_root
// d_home
// d_myname
// f_filea f_fileb d_projects
//                 d_mysupersecretproject
//                 f_mysupersecretfile
