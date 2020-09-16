if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(regis => {
        console.log("SW Registed");
        console.log(regis);
    }).catch(err => {
        console.log("SW Registration fail");
    })
}