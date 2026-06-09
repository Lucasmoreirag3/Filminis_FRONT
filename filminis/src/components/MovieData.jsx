const initialMovies = [
  {
    id: 1,
    titulo: 'Crepúsculo',
    ano: 2008,
    genero: 'Romance',
    sinopse: "Bella Swan sempre foi uma garota um pouco diferente, que nunca se importou em se ajustar aos padrões. Quando ela se muda para uma cidade pacata, conhece o misterioso Edward Cullen, um jovem que esconde um segredo sombrio: ele é um vampiro.",
    poster: 'https://br.web.img2.acsta.net/medias/nmedia/18/87/02/32/19871201.jpg',
    diretor: 'Catherine Hardwicke',
    elenco: 'Kristen Stewart, Robert Pattinson, Taylor Lautner',
    produtora: 'Summit Entertainment',
    pais: 'Estados Unidos',
    linguagem: 'Inglês',
    trailer: 'https://www.youtube.com/embed/QNoqLM7T7L4'
  },
  {
    id: 2,
    titulo: 'A Princesa Mononoke',
    ano: 1997,
    genero: 'Animação',
    sinopse: "Ao proteger sua vila de um deus javali enfurecido que virou demônio, o jovem guerreiro Ashitaka é atingido por uma maldição mortal. Para encontrar a cura, ele precisa viajar para as florestas do oeste e acaba se envolvendo em uma guerra entre os deuses da floresta e os humanos.",
    poster: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2025/03/Poster-Princesa-Mononoke-IMAX-scaled.jpeg?resize=1080%2C1525&ssl=1',
    diretor: 'Hayao Miyazaki',
    elenco: 'Yoji Matsuda, Yuriko Ishida, Yuko Tanaka',
    produtora: 'Studio Ghibli',
    pais: 'Japão',
    linguagem: 'Japonês',
    trailer: 'https://www.youtube.com/embed/4OiMOHRDs14'
  },
  {
    id: 3,
    titulo: 'Nosferatu',
    ano: 2024,
    genero: 'Terror',
    sinopse: "Wisborg, Alemanha, 1838. Encarregado por seu superior com a tarefa urgente de fechar um negócio imobiliário, o jovem corretor Thomas Hutter viaja até o castelo de um misterioso conde na Transilvânia, desencadeando um terror ancestral.",
    poster: 'https://m.media-amazon.com/images/I/715BLU5YPZL.jpg',
    diretor: 'Robert Eggers',
    elenco: 'Bill Skarsgård, Lily-Rose Depp, Nicholas Hoult',
    produtora: 'Focus Features',
    pais: 'Estados Unidos',
    linguagem: 'Inglês',
    trailer: 'https://www.youtube.com/embed/moIrYMjS0nI'
  },
  {
    id: 4,
    titulo: 'Hellboy',
    ano: 2019,
    genero: 'Ação',
    sinopse: "Hellboy é um ser sobrenatural, filho de um anjo caído, que veio ao nosso mundo em 1944 através de um ritual místico. Criado pelas forças aliadas, ele agora trabalha defendendo a humanidade contra monstros e bruxas ancestrais.",
    poster: 'https://m.media-amazon.com/images/I/61qYCCIFiCL._AC_UF894,1000_QL80_.jpg',
    diretor: 'Neil Marshall',
    elenco: 'David Harbour, Milla Jovovich, Ian McShane',
    produtora: 'Lionsgate',
    pais: 'Estados Unidos',
    linguagem: 'Inglês',
    trailer: 'https://www.youtube.com/embed/ZsBO4b3tyZg'
  },
  {
    id: 5,
    titulo: 'The Batman',
    ano: 2022,
    genero: 'Ação',
    sinopse: "Dois anos patrulhando as noites transformaram Bruce Wayne em um animal noturno. Mas conforme ele continua seu caminho como o cavaleiro das trevas de Gotham, um assassino sádico começa a deixar um rastro de pistas enigmáticas destinadas ao herói.",
    poster: 'https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_.jpg',
    diretor: 'Matt Reeves',
    elenco: 'Robert Pattinson, Zoë Kravitz, Paul Dano',
    produtora: 'Warner Bros. Pictures',
    pais: 'Estados Unidos',
    linguagem: 'Inglês',
    trailer: 'https://www.youtube.com/embed/mqqft2x_Aa4'
  },
  {
    id: 6,
    titulo: 'Superman',
    ano: 2025,
    genero: 'Super-herói',
    sinopse: "Ambientado em um novo universo de heróis. Com alguns anos de experiência combatendo o crime, o Superman embarca em uma jornada pessoal para entender sua herança kryptoniana e conciliar seu passado com sua criação humana como Clark Kent.",
    poster: 'https://ingresso-a.akamaihd.net/b2b/production/uploads/articles-content/8923869c-f8a6-4258-ba74-4170bf7fb202.jpg',
    diretor: 'James Gunn',
    elenco: 'David Corenswet, Rachel Brosnahan, Nicholas Hoult',
    produtora: 'DC Studios',
    pais: 'Estados Unidos',
    linguagem: 'Inglês',
    trailer: 'https://www.youtube.com/embed/uhUht6vAsMY'
  },
  {
    id: 7,
    titulo: 'Pecadores',
    ano: 2025,
    genero: 'Terror',
    sinopse: "Anos 1930. Dois irmãos gêmeos retornam para sua cidade natal no Mississippi na tentativa de recomeçar suas vidas após fugirem de problemas com a máfia. No entanto, eles descobrem que um mal ainda maior e sobrenatural está à espreita na floresta.",
    poster: 'https://ingresso-a.akamaihd.net/prd/img/movie/pecadores/7f6c9699-002e-43a8-adb3-49d2055014fd.webp',
    diretor: 'Ryan Coogler',
    elenco: 'Michael B. Jordan, Hailee Steinfeld, Jack O\'Connell',
    produtora: 'Warner Bros.',
    pais: 'Estados Unidos',
    linguagem: 'Inglês',
    trailer: 'https://www.youtube.com/embed/vJ3i983GZs0'
  },
  {
    id: 8,
    titulo: 'Frankenstein',
    ano: 2025,
    genero: 'Drama',
    sinopse: "O diretor vencedor do Oscar, Guillermo del Toro, adapta a clássica história de Mary Shelley sobre Victor Frankenstein, um cientista brilhante, mas egoísta, que dá vida a uma criatura em um experimento monstruoso que acaba levando à ruína tanto do criador quanto de sua trágica criação.",
    poster: 'https://m.media-amazon.com/images/M/MV5BNDg2NTZlNWQtZDlkNy00ZDNhLWEzODYtMmM0MzBmNTk1NjkzXkEyXkFqcGc@._V1_.jpg',
    diretor: 'Guillermo del Toro',
    elenco: 'Oscar Isaac, Jacob Elordi, Mia Goth, Christoph Waltz',
    produtora: 'Double Dare You Productions',
    pais: 'Estados Unidos',
    linguagem: 'Inglês',
    trailer: 'https://www.youtube.com/embed/luctypZjHIQ'
  },
  {
    id: 9,
    titulo: 'Adrenalina',
    ano: 2006,
    genero: 'Ação',
    sinopse: "Envenenado por uma mistura potente e mortal de drogas sintéticas chamada 'O Cocktail de Pequim', um assassino profissional precisa manter seus níveis de adrenalina perigosamente altos correndo, brigando e quebrando tudo enquanto busca vingança.",
    poster: 'https://br.web.img3.acsta.net/medias/nmedia/18/86/97/09/19870658.jpg',
    diretor: 'Mark Neveldine, Brian Taylor',
    elenco: 'Jason Statham, Amy Smart, Jose Pablo Cantillo',
    produtora: 'Lionsgate',
    pais: 'Estados Unidos',
    linguagem: 'Inglês',
    trailer: 'https://www.youtube.com/embed/wpur7SJvkwc'
  },
  {
    id: 10,
    titulo: 'Moulin Rouge',
    ano: 2001,
    genero: 'Musical',
    sinopse: "No ano de 1899, Christian, um jovem escritor inglês, vai a Paris para seguir a revolução boêmia. Ele acaba se apaixonando perdidamente por Satine, a estrela mais brilhante do famoso clube noturno Moulin Rouge, em uma história cheia de música e drama.",
    poster: 'https://uauposters.com.br/media/catalog/product/3/4/346820211103-uau-posters-moulin-rouge-filmes.jpg',
    diretor: 'Baz Luhrmann',
    elenco: 'Nicole Kidman, Ewan McGregor, John Leguizamo',
    produtora: '20th Century Fox',
    pais: 'Austrália, EUA',
    linguagem: 'Inglês',
    trailer: 'https://www.youtube.com/embed/2PpgPxjzbkA'
  },
  {
    id: 11,
    titulo: 'Vingadores: Ultimato',
    ano: 2019,
    genero: 'Ação',
    sinopse: "Após os eventos devastadores de Guerra Infinita, o universo está em ruínas. Com a ajuda dos aliados que restaram, os Vingadores precisam se reunir mais uma vez para tentar reverter as ações de Thanos e restaurar a ordem no universo.",
    poster: 'https://ingresso-a.akamaihd.net/prd/img/movie/vingadores-ultimato-relancamento/2f841b02-cb92-4168-8e1e-36ad3313662a.webp',
    diretor: 'Anthony Russo, Joe Russo',
    elenco: 'Robert Downey Jr., Chris Evans, Mark Ruffalo',
    produtora: 'Marvel Studios',
    pais: 'Estados Unidos',
    linguagem: 'Inglês',
    trailer: 'https://www.youtube.com/embed/TcMBFSGVi1c'
  },
  {
    id: 12,
    titulo: 'Interestelar',
    ano: 2014,
    genero: 'Ficção Científica',
    sinopse: "As reservas naturais da Terra estão chegando ao fim. Um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, liderados por Cooper, que precisa deixar seus filhos sem saber se um dia irá voltar.",
    poster: 'https://br.web.img3.acsta.net/pictures/14/10/31/20/39/476171.jpg',
    diretor: 'Christopher Nolan',
    elenco: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain',
    produtora: 'Syncopy, Legendary Pictures',
    pais: 'EUA, Reino Unido',
    linguagem: 'Inglês',
    trailer: 'https://www.youtube.com/embed/zSWdZVtXT7E'
  },
  {
    id: 13,
    titulo: 'John Wick',
    ano: 2014,
    genero: 'Ação',
    sinopse: "Após a morte prematura de sua amada esposa, John Wick, um lendário ex-assassino profissional, recebe um último presente dela: um filhote de cachorro. Quando criminosos invadem sua casa e tiram dele sua única lembrança, ele sai da aposentadoria em busca de vingança.",
    poster: 'https://m.media-amazon.com/images/I/71i6JuSZUGL.jpg',
    diretor: 'Chad Stahelski',
    elenco: 'Keanu Reeves, Michael Nyqvist, Alfie Allen',
    produtora: 'Summit Entertainment',
    pais: 'Estados Unidos',
    linguagem: 'Inglês',
    trailer: 'https://www.youtube.com/embed/C0BMx-qxsP4'
  },
  {
    id: 14,
    titulo: 'O Castelo Animado',
    ano: 2004,
    genero: 'Animação',
    sinopse: "Quando uma bruxa egoísta transforma a jovem Sophie em uma senhora idosa, sua única chance de quebrar o feitiço reside em um jovem mago indulgente e seus companheiros que vivem em um castelo ambulante que anda pelas perigosas montanhas.",
    poster: 'https://i.pinimg.com/474x/ec/f5/96/ecf596b4b836dba11873a07b12381088.jpg',
    diretor: 'Hayao Miyazaki',
    elenco: 'Chieko Baisho, Takuya Kimura, Akihiro Miwa',
    produtora: 'Studio Ghibli',
    pais: 'Japão',
    linguagem: 'Japonês',
    trailer: 'https://www.youtube.com/embed/iwROgK94zcM'
  },
  {
    id: 15,
    titulo: 'Homem-Aranha: Sem Volta Para Casa',
    ano: 2021,
    genero: 'Ação',
    sinopse: "Pela primeira vez na história cinematográfica do Homem-Aranha, a identidade secreta de Peter Parker é revelada. Desesperado, ele recorre ao Doutor Estranho para fazer o mundo esquecer seu segredo, mas o feitiço dá errado e rasga os limites do multiverso.",
    poster: 'https://cinecriticas.com.br/wp-content/uploads/2021/12/Cine1-12.jpg',
    diretor: 'Jon Watts',
    elenco: 'Tom Holland, Zendaya, Benedict Cumberbatch',
    produtora: 'Marvel Studios, Sony Pictures',
    pais: 'Estados Unidos',
    linguagem: 'Inglês',
    trailer: 'https://www.youtube.com/embed/JfVOs4VSpmA'
  },
  {
    id: 16,
    titulo: 'Barbie',
    ano: 2023,
    genero: 'Comédia',
    sinopse: "A boneca Barbie vive uma vida impecável e feliz no mundo matriarcal da Barbielândia. No entanto, quando ela começa a passar por crises existenciais e notar imperfeições em si mesma, decide partir em uma jornada de descobertas no mundo real.",
    poster: 'https://uauposters.com.br/media/catalog/product/cache/1/thumbnail/800x930/9df78eab33525d08d6e5fb8d27136e95/4/5/454520230615-uau-posters-barbie-2023-filmes-1.jpg',
    diretor: 'Greta Gerwig',
    elenco: 'Margot Robbie, Ryan Gosling, America Ferrera',
    produtora: 'Warner Bros. Pictures',
    pais: 'Estados Unidos',
    linguagem: 'Inglês',
    trailer: 'https://www.youtube.com/embed/pBk4NYhWNMM'
  },
  {
    id: 17,
    titulo: 'Deadpool',
    ano: 2016,
    genero: 'Ação',
    sinopse: "Esta é a história de origem do ex-operativo das Forças Especiais que se tornou o mercenário Wade Wilson. Após ser submetido a um experimento desonesto que o deixa com poderes de cura acelerada, ele adota o alter ego Deadpool para caçar o homem que destruiu sua vida.",
    poster: 'https://m.media-amazon.com/images/I/71SBA4bdx8L._AC_UF894,1000_QL80_.jpg',
    diretor: 'Tim Miller',
    elenco: 'Ryan Reynolds, Morena Baccarin, Ed Skrein',
    produtora: '20th Century Fox',
    pais: 'Estados Unidos',
    linguagem: 'Inglês',
    trailer: 'https://www.youtube.com/embed/ONHBaC-pfsk'
  },
  {
    id: 18,
    titulo: 'Duna',
    ano: 2021,
    genero: 'Ficção Científica',
    sinopse: "Uma jornada heroica mítica e emocionalmente carregada. 'Duna' conta a história de Paul Atreides, um jovem brilhante e talentoso nascido com um grande destino, que deve viajar para o planeta mais perigoso do universo para garantir o futuro de sua família.",
    poster: 'https://i.redd.it/3fl2s0q1ug661.jpg',
    diretor: 'Denis Villeneuve',
    elenco: 'Timothée Chalamet, Rebecca Ferguson, Oscar Isaac',
    produtora: 'Legendary Pictures',
    pais: 'Estados Unidos',
    linguagem: 'Inglês',
    trailer: 'https://www.youtube.com/embed/8g18jFHCLXk'
  },
  {
    id: 19,
    titulo: 'Matrix',
    ano: 1999,
    genero: 'Ação',
    sinopse: "Thomas A. Anderson vive duas vidas. De dia ele é um programador de computador comum e à noite ele é um hacker conhecido como Neo. Ele logo é contatado por Morpheus, que o faz despertar para a chocante verdade sobre a realidade artificial em que vive.",
    poster: 'https://www.europanet.com.br/image_gen/resizeimg.php?cod_produto=107571',
    diretor: 'Lilly Wachowski, Lana Wachowski',
    elenco: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
    produtora: 'Warner Bros.',
    pais: 'Estados Unidos',
    linguagem: 'Inglês',
    trailer: 'https://www.youtube.com/embed/vKQi3bBA1y8'
  },
  {
    id: 20,
    titulo: 'KPop Demon Hunters',
    ano: 2025,
    genero: 'Animação',
    sinopse: "Um grupo feminino de K-Pop de renome mundial equilibra suas vidas perfeitas sob os holofotes do show business com suas identidades secretas e cheias de ação como perigosas caçadoras de demônios nas sombras da noite.",
    poster: 'https://m.media-amazon.com/images/I/81Mtr7elTnL.jpg',
    diretor: 'Maggie Kang, Chris Appelhans',
    elenco: 'Não Divulgado',
    produtora: 'Sony Pictures Animation',
    pais: 'EUA, Coreia do Sul',
    linguagem: 'Inglês, Coreano',
    trailer: 'https://www.youtube.com/embed/hqE679u_Duk'
  }
];

export const getMovies = () => {
  const movies = localStorage.getItem('luxfilms_db_v6');
  if (!movies) {
    localStorage.setItem('luxfilms_db_v6', JSON.stringify(initialMovies));
    return initialMovies;
  }
  return JSON.parse(movies) || initialMovies;
};

export const addMovieToDB = (newMovie) => {
  const currentMovies = getMovies() || [];
  newMovie.id = currentMovies.length > 0 ? Math.max(...currentMovies.map(m => m.id)) + 1 : 1;
  currentMovies.push(newMovie);
  localStorage.setItem('luxfilms_db_v6', JSON.stringify(currentMovies));
};

export const deleteMovieFromDB = (id) => {
  const currentMovies = getMovies() || [];
  const filteredMovies = currentMovies.filter(m => m.id !== parseInt(id));
  localStorage.setItem('luxfilms_db_v6', JSON.stringify(filteredMovies));
};

export const updateMovieInDB = (id, updatedMovie) => {
  const currentMovies = getMovies() || [];
  const index = currentMovies.findIndex(m => m.id === parseInt(id));
  if (index !== -1) {
    currentMovies[index] = { ...currentMovies[index], ...updatedMovie, id: parseInt(id) };
    localStorage.setItem('luxfilms_db_v6', JSON.stringify(currentMovies));
  }
};


export const getPendingMovies = () => {
  const pending = localStorage.getItem('luxfilms_pending_db');
  return pending ? JSON.parse(pending) : [];
};

// Salva um filme na fila de espera
export const addPendingMovie = (newMovie) => {
  const pending = getPendingMovies();
  newMovie.id = Date.now(); // Cria um ID único temporário
  pending.push(newMovie);
  localStorage.setItem('luxfilms_pending_db', JSON.stringify(pending));
};

// Aprova o filme (tira da fila e joga no catálogo oficial)
export const approveMovie = (pendingId) => {
  const pending = getPendingMovies();
  const movieToApprove = pending.find(m => m.id === pendingId);
  
  if (movieToApprove) {
    // 1. Remove da lista de pendentes
    const updatedPending = pending.filter(m => m.id !== pendingId);
    localStorage.setItem('luxfilms_pending_db', JSON.stringify(updatedPending));
    
    // 2. Adiciona no banco oficial
    addMovieToDB(movieToApprove);
  }
};

// Rejeita o filme (apaga da fila de espera)
export const rejectMovie = (pendingId) => {
  const pending = getPendingMovies();
  const updatedPending = pending.filter(m => m.id !== pendingId);
  localStorage.setItem('luxfilms_pending_db', JSON.stringify(updatedPending));
};