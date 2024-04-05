const animes = [
    { 
        title: "Dragon Ball", 
        image: "img/dragonball.jpg", 
        description: "Dragon Ball sigue las aventuras de Son Goku desde su infancia hasta la adultez mientras entrena en artes marciales y explora el mundo en busca de las siete esferas del dragón, que pueden convocar a un dragón mágico que concede un deseo.",
        rating: "9.0",
        genre: "Acción, Aventura, Comedia"
    },
    { 
        title: "Naruto", 
        image: "img/naruto.jpg", 
        description: "Naruto sigue las aventuras de Naruto Uzumaki, un joven ninja que busca reconocimiento y sueña con convertirse en el Hokage, el líder de su aldea. En el camino, Naruto y sus amigos enfrentan desafíos y enemigos poderosos.",
        rating: "8.6",
        genre: "Acción, Aventura, Fantasía"
    },
    { 
        title: "Jujutsu Kaisen", 
        image: "img/jujutsu_kaisen.jpg", 
        description: "Jujutsu Kaisen sigue a Yuji Itadori, un estudiante de secundaria con habilidades físicas excepcionales que se ve envuelto en el mundo de la maldición y la hechicería después de comer un dedo maldito para proteger a sus amigos.",
        rating: "9.1",
        genre: "Acción, Terror, Sobrenatural"
    },
    { 
        title: "Shingeki no Kyojin", 
        image: "img/shingeki_no_kyojin.jpg", 
        description: "Shingeki no Kyojin, también conocido como Attack on Titan, se desarrolla en un mundo donde la humanidad está al borde de la extinción debido a gigantes humanoides llamados Titanes. La historia sigue a Eren Yeager y sus amigos en su lucha contra los Titanes.",
        rating: "9.2",
        genre: "Acción, Drama, Fantasía"
    },
    { 
        title: "My Hero Academia", 
        image: "img/my_hero_academia.jpg", 
        description: "My Hero Academia se desarrolla en un mundo donde casi todos tienen superpoderes llamados 'Quirks'. La historia sigue a Izuku Midoriya, un chico sin poderes que sueña con convertirse en un héroe como su ídolo, All Might.",
        rating: "8.7",
        genre: "Acción, Aventura, Comedia"
    }
];

function renderAnimes() {
    const container = document.querySelector('.container');

    animes.forEach(anime => {
        const card = document.createElement('div');
        card.classList.add('anime-card');

        const image = document.createElement('img');
        image.src = anime.image;

        const title = document.createElement('h3');
        title.textContent = anime.title;

        const description = document.createElement('p');
        description.textContent = anime.description;

        const rating = document.createElement('p');
        rating.textContent = `Rating: ${anime.rating}`;

        const genre = document.createElement('p');
        genre.textContent = `Genre: ${anime.genre}`;

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(rating);
        card.appendChild(genre);
        container.appendChild(card);
    });
}

window.onload = renderAnimes;
