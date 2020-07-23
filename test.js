let str = `{
    "_id" : NumberLong(1334),
    "maxProcessingTime" : NumberLong(15),
    "productBaseId" : NumberLong(0),
    "templates" : {
        "back" : "simplified-short-sleeve-back",
        "front" : "simplified-short-sleeve-front",
        "left" : "simplified-short-sleeve-left",
        "right" : "simplified-short-sleeve-right"
    }
}`;

let outputJson = '';
const arr = str.split('\n');
let hasArray = false;

for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    // Empty line or comment line
    if (item === '' || /^\/.+\/$/.test(item)) {
        continue;
    }

    if (item === '}') {
        // End of object, not end of array
        if (i < arr.length - 1) {
            item += ',';
            hasArray = true
        }
    } else {
        item = item.replace(/(.+)NumberLong\((\d+)\)(.+)/, '$1$2$3');
    }

    outputJson += item + '\n';
}

if (hasArray) {
    outputJson = '[' + outputJson + ']'
}