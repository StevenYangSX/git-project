var sizeOf = require('image-size');


function ratio(imgPath, width){
    var dimensions = sizeOf(imgPath);
    return dimensions.width/dimensions.height;
}

function width(imgPath){
    var dimensions = sizeOf(imgPath);
    return dimensions.width;
}

function height(imgPath){
    var dimensions = sizeOf(imgPath);
    return dimensions.height;
}

module.exports = {ratio, width, height};

console.log("hello hahahaha")