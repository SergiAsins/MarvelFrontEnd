//app.js:
const marvel = {
  render: () => {
    //arrow function
    const urlAPI =
      "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=acbca3e0a11d5b865eec8d155d8be4a1&hash=7594105fb05b5bd9a0adb056671f6ba8";
    const container = document.querySelector("#marvel-row");
    let contentHTML = "";

    fetch(urlAPI)
      .then((res) => res.json())
      .then((json) => {
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          contentHTML += `
                <div class="col-md-4">
                    <a href="${urlHero}" target="_blank">
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                    </a>
                <h3 class="title">${hero.name}</h3>
                </div `;
        }
        container.innerHTML = contentHTML;
      });
  },
};

marvel.render();
