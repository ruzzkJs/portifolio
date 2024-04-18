function igstalk(nomedeuser) {
    fetch("https://tools.betabotz.eu.org/tools/stalk-ig?q=" + nomedeuser)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
