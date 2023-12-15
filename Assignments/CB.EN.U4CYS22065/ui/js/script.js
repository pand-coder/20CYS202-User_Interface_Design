class Node {
  constructor(id, songName) {
    this.id = id;
    this.songName = songName;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(id, songName) {
    const newNode = new Node(id, songName);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  getNode(index) {
    let current = this.head;
    while (current) {
      if (current.id == index) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  getSize() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
}

const music = new Audio('15.mp3');

const songs = new LinkedList();
songs.addNode(1, "On My Way");
songs.addNode(2, "Fairy Tail");
songs.addNode(3, "Cartoon - On & On");
songs.addNode(4, "Warriyo - Mortals");
songs.addNode(5, "Attention");
songs.addNode(6, "Suzume");
songs.addNode(7, "Agar Tum Sath Ho");
songs.addNode(8, "Suna Hai");
songs.addNode(9, "Dilbar");
songs.addNode(10, "Duniya");
songs.addNode(11, "Lagdi Lahore Di");
songs.addNode(12, "Putt Jatt Da");
songs.addNode(13, "Baarishein");
songs.addNode(14, "Vaaste");
songs.addNode(15, "Dugga Elo");

// add other songs to the linked list

const updateSongItems = (nodeList) => {
  Array.from(nodeList).forEach((element, i) => {
    const node = songs.getNode(i + 1);
    if (node) {
      element.getElementsByTagName('img')[0].src = `img/${node.id}.jpg`;
      element.getElementsByTagName('h5')[0].innerHTML = node.songName;
    }
  });
};

const songItems = document.getElementsByClassName('songItem');
updateSongItems(songItems);

const songitems = document.getElementsByClassName('songitem');
updateSongItems(songitems);

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

  masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0)
  
   {
      music.play();
      masterPlay.classList.remove('bi-play-fill');
      masterPlay.classList.add('bi-pause-fill');
      wave.classList.add('active2');
    } else {
      music.pause();
      masterPlay.classList.add('bi-play-fill');
      masterPlay.classList.remove('bi-pause-fill');
      wave.classList.remove('active2');
    }
  });
  
  const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
      element.classList.add('bi-play-circle-fill');
      element.classList.remove('bi-pause-circle-fill');
    });
  };
  
  const makeAllBackgrounds = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
      element.style.background = "rgb(105, 105, 170, 0)";
    });
    Array.from(document.getElementsByClassName('songitem')).forEach((element) => {
      element.style.background = "rgb(105, 105, 170, 0)";
    });
  };
  
  let index = 0;
  let poster_master_play = document.getElementById('poster_master_play');
  let title = document.getElementById('title');
  const playListPlays = document.getElementsByClassName('playListPlay');
  
  Array.from(playListPlays).forEach((element) => {
    element.addEventListener('click', (e) => {
      index = e.target.id;
      makeAllPlays();
      e.target.classList.remove('bi-play-circle-fill');
      e.target.classList.add('bi-pause-circle-fill');
      const node = songs.getNode(index);
      if (node) {
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        title.innerHTML = node.songName;
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended', () => {
          masterPlay.classList.add('bi-play-fill');
          masterPlay.classList.remove('bi-pause-fill');
          wave.classList.remove('active2');
        });
        makeAllBackgrounds();
        const songItem = document.getElementsByClassName('songItem')[index - 1];
        if (songItem) {
          songItem.style.background = "rgb(105, 105, 170, .1)";
        }
        const songitem = document.getElementsByClassName('songitem')[index - 1];
        if (songitem) {
          songitem.style.background = "rgb(105, 105, 170, .1)";
        }
      }
    });
  });
  
  let currentStart = document.getElementById('currentStart');
  let currentEnd = document.getElementById('currentEnd');
  let seek = document.getElementById('seek');
  let bar2 = document.getElementById('bar2');
  let dot = document.getElementsByClassName('dot')[0];
  
  music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
  
    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    if (sec < 10) {
      sec = `0${sec}`;
    }
    currentEnd.innerText = `${min}:${sec}`;
  
    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);
    if (sec1 < 10) {
      sec1 = `0${sec1}`;
    }
    currentStart.innerText = `${min1}:${sec1}`;
  
    let progressbar = parseInt((music.currentTime / music.duration) * 100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
  });
  
  seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
  });
  
  music.addEventListener('ended', () => {
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
    repeatSong();
  });
  
  let vol_icon = document.getElementById('vol_icon');
  let vol = document.getElementById('vol');
  let vol_dot = document.getElementById('vol_dot');
  let vol_bar = document.getElementsByClassName('vol_bar')[0];
  
  vol.addEventListener('change', () => {
    if (vol.value == 0) {
      vol_icon.classList.remove('bi-volume-down-fill');
      vol_icon.classList.add('bi-volume-mute-fill');
      vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
      vol_icon.classList.add('bi-volume-down-fill');
      vol_icon.classList.remove('bi-volume-mute-fill');
      vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
      vol_icon.classList.remove('bi-volume-down-fill');
      vol_icon.classList.remove('bi-volume-mute-fill');
      vol_icon.classList.add('bi-volume-up-fill');
    }
  
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
  });
  
  let back = document.getElementById('back');
  let next = document.getElementById('next');
  
  back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
      index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    const node = songs.getNode(index);
    if (node) {
      title.innerHTML = node.songName;
    }
    makeAllPlays();
    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
    Array.from(document.getElementsByClassName('songitem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
  });
  
  next.addEventListener('click', () => {
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
      index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    const node = songs.getNode(index);
    if (node) {
      title.innerHTML = node.songName;
    }
    makeAllPlays();
    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
    Array.from(document.getElementsByClassName('songitem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
  });
  
  let left_scroll = document.getElementById('left_scroll');
  let right_scroll = document.getElementById('right_scroll');
  let pop_song = document.getElementsByClassName('pop_song')[0];
  
  left_scroll.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
  });
  
  right_scroll.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
  });
  
  let left_scrolls = document.getElementById('left_scrolls');
  let right_scrolls = document.getElementById('right_scrolls');
  let all = document.getElementsByClassName('al_song')[0];
  
  left_scrolls.addEventListener('click', () => {
    all.scrollLeft -= 330;
  });
  
  right_scrolls.addEventListener('click', () => {
    all.scrollLeft += 330;
  });

// Random & Repeat
let random = document.getElementById('random');
let repeat = document.getElementById('repeat');
let isRepeat = false;

random.addEventListener('click', () => {
  const size = songs.getSize();
  const randomIndex = Math.floor(Math.random() * size) + 1;
  const node = songs.getNode(randomIndex);
  if (node) {
    music.src = `audio/${randomIndex}.mp3`;
    poster_master_play.src = `img/${randomIndex}.jpg`;
    music.play();
    title.innerHTML = node.songName;
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    makeAllBackgrounds();
    const songItem = document.getElementsByClassName('songItem')[randomIndex - 1];
    if (songItem) {
      songItem.style.background = "rgb(105, 105, 170, .1)";
    }
}
});


repeat.addEventListener('click', () => {
  if (isRepeat) {
    repeat.classList.remove('active');
    isRepeat = false;
  } else {
    repeat.classList.add('active');
    isRepeat = true;
  }
});

const repeatSong = () => {
  if (isRepeat) {
    const node = songs.getNode(index);
    if (node) {
      music.src = `audio/${index}.mp3`;
      poster_master_play.src = `img/${index}.jpg`;
      music.play();
      title.innerHTML = node.songName;
      masterPlay.classList.remove('bi-play-fill');
      masterPlay.classList.add('bi-pause-fill');
      wave.classList.add('active2');
      makeAllBackgrounds();
      const songItem = document.getElementsByClassName('songItem')[index - 1];
      if (songItem) {
        songItem.style.background = "rgb(105, 105, 170, .1)";
      }
    }
  } else {
    nextSong();
  }
};

const nextSong = () => {
  index -= 0;
  index += 1;
  if (index > Array.from(document.getElementsByClassName('songItem')).length) {
    index = 1;
  }
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
  music.play();
  const node = songs.getNode(index);
  if (node) {
    title.innerHTML = node.songName;
  }
  makeAllPlays();
  document.getElementById(`${index}`).classList.remove('bi-play-fill');
  document.getElementById(`${index}`).classList.add('bi-pause-fill');
  makeAllBackgrounds();
  Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
  Array.from(document.getElementsByClassName('songitem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
};

function clearSearch() {
  searchBar.value = '';
  filterSongs('');
}

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', () => {
  const searchTerm = searchBar.value.toLowerCase();
  filterSongs(searchTerm);
});

function filterSongs(searchTerm) {
  const songItems = document.getElementsByClassName('songItem');
  for (let i = 0; i < songItems.length; i++) {
      const songName = songItems[i].getElementsByTagName('h5')[0].innerText.toLowerCase();
      if (songName.includes(searchTerm)) {
          songItems[i].style.display = 'block';
      } else {
          songItems[i].style.display = 'none';
      }
  }
  for (let i = 0; i < songitems.length; i++) {
    const songName = songitems[i].getElementsByTagName('h5')[0].innerText.toLowerCase();
    if (songName.includes(searchTerm)) {
        songitems[i].style.display = 'block';
    } else {
        songitems[i].style.display = 'none';
    }

}
}