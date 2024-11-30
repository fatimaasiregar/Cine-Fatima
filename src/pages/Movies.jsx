import React, { useState } from "react";
import { Info, ThumbsUp } from "lucide-react";

const Movies = () => {
  const [sortType, setSortType] = useState("title");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [filterRating, setFilterRating] = useState(""); 
  const [filterGenre, setFilterGenre] = useState("");

  const movies = [
      {
        id: 1,
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        poster: "public/Inception.jpeg",
        rating: 8.8,
        description: "Seorang pencuri yang dapat masuk ke dalam mimpi orang lain diberi tugas terakhir yang berbahaya untuk menanamkan ide pada bawah sadar targetnya."
      },
      {
        id: 2,
        title: "Interstellar",
        year: 2014,
        genre: "Petualangan",
        poster: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        rating: 8.6,
        description: "Sekelompok penjelajah angkasa mencari planet baru untuk menyelamatkan umat manusia dari kehancuran bumi."
      },
      {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        genre: "Aksi",
        poster: "public/the dark knight.jpeg",
        rating: 9.0,
        description: "Batman berhadapan dengan Joker yang licik, seorang kriminal yang ingin mengacaukan Gotham City."
      },
      {
        id: 4,
        title: "The Matrix",
        year: 1999,
        genre: "Sci-Fi",
        poster: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
        rating: 8.7,
        description: "Seorang hacker menemukan kebenaran mengejutkan tentang dunia tempat ia tinggal dan bergabung dalam pemberontakan melawan penguasa tiran."
      },
      {
        id: 5,
        title: "Parasite",
        year: 2019,
        genre: "Thriller",
        poster: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",
        rating: 8.6,
        description: "Keluarga miskin menyusup ke kehidupan keluarga kaya, namun rencana mereka membawa konsekuensi yang tak terduga."
      },
      {
        id: 6,
        title: "Avengers: Endgame",
        year: 2019,
        genre: "Aksi",
        poster: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
        rating: 8.4,
        description: "Para Avengers bersatu untuk mengalahkan Thanos dan memulihkan keseimbangan alam semesta."
      },
      {
        id: 7,
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        poster: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
        rating: 9.3,
        description: "Seorang pria dipenjara atas tuduhan pembunuhan berjuang untuk kebebasan dan harapan di penjara Shawshank."
      },
      {
        id: 8,
        title: "Forrest Gump",
        year: 1994,
        genre: "Drama",
        poster: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
        rating: 8.8,
        description: "Perjalanan hidup luar biasa seorang pria sederhana dengan hati yang tulus dan pengaruh besar."
      },
      {
        id: 9,
        title: "Joker",
        year: 2019,
        genre: "Drama",
        poster: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg",
        rating: 8.4,
        description: "Kisah tragis seorang pria yang terpinggirkan oleh masyarakat, berubah menjadi musuh terbesar Gotham."
      },
      {
        id: 10,
        title: "Fight Club",
        year: 1999,
        genre: "Drama",
        poster: "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
        rating: 8.8,
        description: "Seorang pria terjebak dalam hidup monoton menemukan pelarian melalui klub pertarungan bawah tanah."
      },
      {
        id: 11,
        title: "Pulp Fiction",
        year: 1994,
        genre: "Kriminal",
        poster: "public/Pulp Fiction.jpeg",
        rating: 8.9,
        description: "Beberapa cerita terjalin tentang dunia kriminal yang penuh aksi dan kejutan di Los Angeles."
      },
      {
        id: 12,
        title: "The Godfather",
        year: 1972,
        genre: "Kriminal",
        poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
        rating: 9.2,
        description: "Kisah epik tentang keluarga mafia Corleone yang berjuang mempertahankan kekuasaannya di dunia bawah tanah."
      },
      {
        id: 13,
        title: "The Lord of the Rings",
        year: 2001,
        genre: "Fantasi",
        poster: "public/The Lord of the Rings.jpeg",
        rating: 8.8,
        description: "Sekelompok pahlawan bersatu untuk membawa cincin kuat ke Mordor dan menghancurkannya demi menyelamatkan dunia."
      },
      {
        id: 14,
        title: "The Return of the King",
        year: 2003,
        genre: "Fantasi",
        poster: "public/The Return of the King.jpeg",
        rating: 9.0,
        description: "Pertempuran epik terakhir melawan kejahatan besar untuk menyelamatkan Middle-earth."
      },
      {
        id: 15,
        title: "Star Wars",
        year: 1977,
        genre: "Sci-Fi",
        poster: "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg",
        rating: 8.6,
        description: "Seorang petani muda memulai perjalanan heroik untuk melawan Kekaisaran dan menyelamatkan galaksi."
      },
      {
        id: 16,
        title: "The Lion King",
        year: 1994,
        genre: "Animasi",
        poster: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg",
        rating: 8.5,
        description: "Kisah epik seekor singa muda yang mencari tempatnya sebagai raja di hutan belantara."
      },
      {
        id: 17,
        title: "Toy Story",
        year: 1995,
        genre: "Animasi",
        poster: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
        rating: 8.3,
        description: "Mainan hidup mengungkap persahabatan dan petualangan dalam kehidupan sehari-hari mereka."
      },
      {
        id: 18,
        title: "Finding Nemo",
        year: 2003,
        genre: "Animasi",
        poster: "https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg",
        rating: 8.1,
        description: "Seekor ikan badut melakukan perjalanan menakjubkan untuk menemukan anaknya yang hilang."
      },
      {
        id: 19,
        title: "The Avengers",
        year: 2012,
        genre: "Aksi",
        poster: "public/Avengers.jpeg",
        rating: 8.0,
        description: "Tim superhero berkumpul untuk melindungi bumi dari invasi alien yang menghancurkan."
      },
      {
        id: 20,
        title: "Black Panther",
        year: 2018,
        genre: "Aksi",
        poster: "public/black panther.jpeg",
        rating: 7.3,
        description: "Raja Wakanda harus melindungi negerinya dari ancaman yang datang dari dalam dan luar negeri."
      },
      {
        id: 21,
        title: "Gladiator",
        year: 2000,
        genre: "Drama",
        poster: "public/Gladiator.jpeg",
        rating: 8.5,
        description: "Seorang jenderal Roma yang dikhianati mencari pembalasan sebagai gladiator di arena Colosseum."
      },
      {
        id: 22,
        title: "Braveheart",
        year: 1995,
        genre: "Sejarah",
        poster: "public/Braveheart.jpeg",
        rating: 8.3,
        description: "William Wallace memimpin pemberontakan rakyat Skotlandia melawan tirani Inggris."
      },
      {
        id: 23,
        title: "The Silence of theLambs",
        year: 1991,
        genre: "Thriller",
        poster: "public/The Silence of theLambs.jpeg",
        rating: 8.6,
        description: "Seorang agen FBI bekerja sama dengan seorang pembunuh berantai yang jenius untuk menangkap seorang pembunuh lain."
      },
      {
        id: 24,
        title: "The Green Mile",
        year: 1999,
        genre: "Drama",
        poster: "public/The Green Mile.jpeg",
        rating: 8.6,
        description: "Seorang penjaga penjara menjalin hubungan dengan narapidana yang memiliki kekuatan penyembuhan luar biasa."
      },
      {
        id: 25,
        title: "Schindler's List",
        year: 1993,
        genre: "Drama",
        poster: "public/Schindler's List.jpeg",
        rating: 9.0,
        description: "Kisah nyata tentang seorang pengusaha Jerman yang menyelamatkan lebih dari seribu orang Yahudi dari holocaust."
      },
      {
        id: 26,
        title: "Avatar",
        year: 2009,
        genre: "Sci-Fi",
        poster: "public/avatar.jpeg",
        rating: 7.8,
        description: "Seorang mantan marinir yang lumpuh menjelajahi dunia Pandora menggunakan tubuh avatar untuk berinteraksi dengan penduduk asli."
      },
      {
        id: 27,
        title: "The Prestige",
        year: 2006,
        genre: "Drama",
        poster: "https://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg",
        rating: 8.5,
        description: "Dua pesulap saling bersaing untuk menciptakan trik sulap terbaik, yang berujung pada obsesi dan pengkhianatan."
      },
      {
        id: 29,
        title: "The Revenant",
        year: 2015,
        genre: "Petualangan",
        poster: "public/The Revenant.jpeg",
        rating: 8.0,
        description: "Seorang pemburu bertahan hidup di alam liar dan mencari balas dendam setelah dikhianati oleh rekan-rekannya."
      },
      {
        id: 30,
        title: "Whiplash",
        year: 2014,
        genre: "Drama",
        poster: "public/Whiplash.jpeg",
        rating: 8.5,
        description: "Seorang drummer muda berjuang untuk mendapatkan pengakuan di dunia musik jazz, di bawah bimbingan seorang guru yang keras."
      },
      {
        id: 31,
        title: "The Social Network",
        year: 2010,
        genre: "Drama",
        poster: "public/The Social Network.jpeg",
        rating: 8.0,
        description: "Kisah nyata tentang penciptaan Facebook dan perjalanan kontroversial Mark Zuckerberg dalam membangun kerajaan teknologi."
      },
      {
        id: 32,
        title: "No Country for Old Men",
        year: 2007,
        genre: "Kriminal",
        poster: "public/No Country for Old Men.jpeg",
        rating: 8.1,
        description: "Seorang pria menemukan uang hasil kejahatan dan menjadi buronan dari seorang pembunuh profesional dan seorang sheriff."
      },
      {
        id: 33,
        title: "The Wolf of Wall Street",
        year: 2013,
        genre: "Drama",
        poster: "public/The Wolf of Wall Street.jpeg",
        rating: 8.2,
        description: "Kisah nyata seorang pialang saham yang ambisius yang menjatuhkan dirinya ke dalam dunia penipuan dan penyalahgunaan."
      },
      {
        id: 34,
        title: "La La Land",
        year: 2016,
        genre: "Drama",
        poster: "public/La La Land.jpeg",
        rating: 8.0,
        description: "Seorang musisi jazz dan seorang aktris yang bercita-cita tinggi menjalin hubungan di tengah perjuangan karier mereka."
      },
      {
        id: 35,
        title: "The Truman Show",
        year: 1998,
        genre: "Drama",
        poster: "public/The Truman Show.jpeg",
        rating: 8.1,
        description: "Seorang pria menemukan bahwa seluruh hidupnya adalah sebuah pertunjukan realitas yang disiarkan kepada dunia tanpa sepengetahuannya."
      },
      {
        id: 36,
        title: "Shutter Island",
        year: 2010,
        genre: "Thriller",
        poster: "public/Shutter Island.jpeg",
        rating: 8.1,
        description: "Seorang detektif penyelidik sebuah rumah sakit jiwa yang misterius di pulau terpencil dan mulai mempertanyakan realitas."
      },
      {
        id: 37,
        title: "The Big Lebowski",
        year: 1998,
        genre: "Komedi",
        poster: "public/The Big Lebowski.jpeg",
        rating: 8.1,
        description: "Seorang pria santai yang dikenal sebagai 'The Dude' terjebak dalam situasi penuh kekacauan setelah kesalahan identitas."
      },
      {
        id: 39,
        title: "The Departed",
        year: 2006,
        genre: "Kriminal",
        poster: "public/The Departed.jpeg",
        rating: 8.5,
        description: "Dua orang, satu sebagai polisi dan satu sebagai mafia, berusaha saling mengungkap identitas masing-masing di tengah-tengah dunia kriminal Boston."
      },
      {
        id: 40,
        title: "The Dark Knight Rises",
        year: 2012,
        genre: "Aksi",
        poster: "public/The Dark Knight Rises.jpeg",
        rating: 8.4,
        description: "Batman kembali untuk melawan ancaman baru yang lebih besar, Bane, yang berencana menghancurkan Gotham City."
      },
      {
        id: 41,
        title: "The Martian",
        year: 2015,
        genre: "Sci-Fi",
        poster: "public/The Martian.jpeg",
        rating: 8.0,
        description: "Seorang astronot yang terdampar di Mars berusaha bertahan hidup dengan keterbatasan sumber daya sambil mencoba menghubungi Bumi."
      },
      {
        id: 42,
        title: "12 Angry Men",
        year: 1957,
        genre: "Drama",
        poster: "public/12 Angry Men.jpeg",
        rating: 9.0,
        description: "Sebelas juri lainnya berusaha memutuskan nasib seorang pemuda yang dituduh membunuh ayahnya dalam sebuah persidangan yang penuh ketegangan."
      },
      {
        id: 43,
        title: "The Goodfellas",
        year: 1990,
        genre: "Kriminal",
        poster: "public/The Goodfellas.jpeg",
        rating: 8.7,
        description: "Kisah nyata tentang kehidupan seorang gangster dan hubungannya dengan dunia kriminal yang berbahaya."
      },
      {
        id: 44,
        title: "The Godfather: Part II",
        year: 1974,
        genre: "Kriminal",
        poster: "public/The Godfather.jpeg",
        rating: 9.0,
        description: "Melanjutkan kisah keluarga mafia Corleone, menyoroti perjuangan Michael Corleone untuk mempertahankan kekuasaannya."
      },
      {
        id: 45,
        title: "Citizen Kane",
        year: 1941,
        genre: "Drama",
        poster: "public/Citizen Kane.jpeg",
        rating: 8.3,
        description: "Kisah hidup seorang magnat media yang misterius, ditelusuri oleh seorang jurnalis untuk memahami arti dari kata terakhirnya."
      },
      {
        id: 46,
        title: "Inglourious Basterds",
        year: 2009,
        genre: "Perang",
        poster: "https://upload.wikimedia.org/wikipedia/en/c/c3/Inglourious_Basterds_poster.jpg",
        rating: 8.3,
        description: "Sekelompok tentara Amerika yang berperang melawan Nazi di Prancis selama Perang Dunia II, dipimpin oleh seorang komandan yang kejam."
      },
      {
        id: 47,
        title: "Django Unchained",
        year: 2012,
        genre: "Western",
        poster: "public/Django Unchained.jpeg",
        rating: 8.4,
        description: "Seorang mantan budak bekerja sama dengan seorang pemburu hadiah untuk menyelamatkan istrinya dari seorang pemilik perkebunan yang kejam."
      },
      {
        id: 48,
        title: "Blade Runner 2049",
        year: 2017,
        genre: "Sci-Fi",
        poster: "public/Blade Runner 2049.jpeg",
        rating: 8.0,
        description: "Seorang polisi yang juga seorang replikant menyelidiki misteri yang dapat mengubah masa depan umat manusia."
      },
      {
        id: 49,
        title: "The Shining",
        year: 1980,
        genre: "Horror",
        poster: "public/The Shining.jpeg",
        rating: 8.4,
        description: "Seorang pria yang bekerja sebagai penjaga musim dingin di sebuah hotel terpencil mulai kehilangan kewarasannya akibat pengaruh supranatural."
      },
      {
        id: 50,
        title: "A Clockwork Orange",
        year: 1971,
        genre: "Drama",
        poster: "public/A Clockwork Orange.jpeg",
        rating: 8.3,
        description: "Seorang pemuda yang terlibat dalam kekerasan ekstrem mencoba untuk keluar dari dunia kejahatan setelah menjalani eksperimen sosial yang brutal."
  }
];


  const sortedMovies = [...movies].sort((a, b) => {
    if (sortType === "title") return a.title.localeCompare(b.title);
    if (sortType === "year") return b.year - a.year;
    if (sortType === "rating") return b.rating - a.rating;
    return 0;
  });

  const filteredMovies = sortedMovies.filter((movie) => {
    const ratingMatch = filterRating ? movie.rating >= parseFloat(filterRating) : true;
    const genreMatch = filterGenre ? movie.genre === filterGenre : true;
    return ratingMatch && genreMatch;
  });
  const [isPopupVisible, setIsPopupVisible] = useState(false); 
  const openPopup = (movie) => setSelectedMovie(movie);
  const closePopup = () => setSelectedMovie(null);

  return (
    <div className="movies-container">
      <h1 className="movies-title">Movies</h1>

      <div className="sort-options">
        <label htmlFor="sort" className="sort-label">Sort by:</label>
        <select
          id="sort"
          className="sort-select"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="year">Year</option>
          <option value="rating">Rating</option>
        </select>

        {/* Filter by Rating */}
        <label htmlFor="filterRating" className="sort-label">Filter by Rating:</label>
        <select
          id="filterRating"
          className="sort-select"
          value={filterRating}
          onChange={(e) => setFilterRating(e.target.value)}
        >
          <option value="">All Ratings</option>
          <option value="9">9+</option>
          <option value="8.5">8.5+</option>
          <option value="8">8+</option>
          <option value="7">7+</option>
        </select>

        {/* Filter by Genre */}
        <label htmlFor="filterGenre" className="sort-label">Filter by Genre:</label>
        <select
          id="filterGenre"
          className="sort-select"
          value={filterGenre}
          onChange={(e) => setFilterGenre(e.target.value)}
        >
          <option value="">All Genres</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Aksi">Aksi</option>
          <option value="Kriminal">Kriminal</option>
          <option value="Fantasi">Fantasi</option>
          <option value="Animasi">Animasi</option>
          <option value="Thriller">Thriller</option>
          <option value="Petualangan">Petualangan</option>
          <option value="Komedi">Komedi</option>
          <option value="Sejarah">Sejarah</option>
          <option value="Horror">Horror</option>
          <option value="Western">Western</option>
          <option value="Perang">Perang</option>
        </select>
      </div>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h3 className="movie-name">{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} className="movie-poster" />
            <div className="movie-details">
              <p className="movie-info">{movie.year} | {movie.genre}</p>
              <p className="movie-rating">⭐ {movie.rating}</p>
            </div>
            <div className="movie-actions">
              <button className="movie-button" onClick={() => openPopup(movie)}>
                <Info  />
              </button>
              <button className="movie-button">
                <ThumbsUp />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      

      {selectedMovie && (
  <div className="movie-popup-overlay">
    <div className="movie-popup-container">
      <h2>{selectedMovie.title}</h2>
      <p><strong>Release Year:</strong> {selectedMovie.releaseYear}</p>
      <p><strong>Genre:</strong> {selectedMovie.genre}</p>
      <p><strong>Rating:</strong> {selectedMovie.rating}</p>
      <p><strong>Description:</strong> {selectedMovie.description}</p>
      <button onClick={closePopup}>Close</button>
      <img src={selectedMovie.poster} alt={selectedMovie.title} className="popup-poster" />
    </div>
  </div>
)}

    </div>
  );
};

export default Movies;
