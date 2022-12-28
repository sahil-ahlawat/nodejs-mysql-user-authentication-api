const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
const __basedir = "public/uploads";

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir);
  },
  filename: (req, file, cb) => {
    // console.log(file.originalname);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    let fullname = "";
    if(file.mimetype){
         fullname = file.fieldname + '-' + uniqueSuffix+"."+file.mimetype.split("/")[1];
    }
    else{
         fullname = file.fieldname + '-' + uniqueSuffix;
    }
    cb(null, fullname);
  }
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;