var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function returnMinifiedBanner(ipAddress) {
    
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log(this.responseText);
        console.log("-------------------")
        console.log("Minified Banner complete")
        console.log("-------------------")
    }
    });

    xhr.open("GET", "https://api.shodan.io/shodan/host/" + ipAddress + "?key=CqF3WCuJSXGLO8qxK3fnpUwmiOBzICiC&minify=true");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "0e9fa03a-970b-4a73-8c69-24e9393e0cf6");

    xhr.send(data);
}

function honeyPotScore(ipAddress){
   
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log(this.responseText);
        console.log("-------------------")
        console.log("Honey pot score complete")
        console.log("-------------------")
    }
    });

    xhr.open("GET", "https://api.shodan.io/labs/honeyscore/" + ipAddress+ "?key=CqF3WCuJSXGLO8qxK3fnpUwmiOBzICiC");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "fcd5947b-dc3b-4c48-bf25-976e6005c9a1");

    xhr.send(data);

  
}

function returnIpAndDomain(domain) {
   
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log(this.responseText);

        console.log("-------------------")
        console.log("Ip and Domain complete")
        console.log("-------------------")
    }
    });

    xhr.open("GET", "https://api.shodan.io/dns/resolve?hostnames=" + domain + "&key=CqF3WCuJSXGLO8qxK3fnpUwmiOBzICiC");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "cc48c7af-8380-4540-851d-30c420d27198");

    xhr.send(data);

}

returnMinifiedBanner("151.101.0.81");
honeyPotScore("151.101.0.81");
returnIpAndDomain("bbc.co.uk");

