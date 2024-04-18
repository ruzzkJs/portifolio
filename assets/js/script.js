function igstalk(nomedeuser) {
    return fetch("https://tools.betabotz.eu.org/tools/stalk-ig?q=" + nomedeuser)
      .then(res => res.json())
      .catch(error => console.error('Error:', error));
  }
  
  window.addEventListener("DOMContentLoaded", async () => { // Use async keyword
    const cardedTwo = document.querySelector('.carded-two'); // Fix selector
  
    if (!cardedTwo) {
      console.error("Element with class 'carded-two' not found.");
      return;
    }
  
    const title = document.createElement("h1");
    const subtitle = document.createElement("p");
  
    try {
      const data = await igstalk(nomedeuser); // Await the fetched data
  
      title.innerHTML = data.result.user_info.full_name + " Meu Instagram ";
      const propriedade = "followers";
      subtitle.innerHTML = data.result.user_info[propriedade] + " Seguidores";
  
      cardedTwo.appendChild(title, subtitle);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  });
  