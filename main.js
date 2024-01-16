function Profile(x){
  return `
  <h1>Account Data</h1>
  
  `
}

function Geo(x){
  return `
  <h1>Map</h1>
  
  `
}

function Landing(){
return(`
<div class="container">
      <!-- Side infos -->
      <div class="side-info">
        <span>discover</span>
        <h1>live music in NYC</h1>
        <p>
          Find the latest, live performances in your city!
        </p>
        <hr />
        <center>
        <img src="https://is2-ssl.mzstatic.com/image/thumb/Purple112/v4/61/72/98/61729802-4c9f-4c99-e775-ae7a252275d3/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg" width="30%" height="30%" style="border-radius:10px; filter:drop-shadow(10px 5px 4px gray");"></img></center>
        <br>
        
        <center>
  <input type="text" placeholder="username"><br></input><br><input type="text" placeholder="password"><br></input><br>

        <a onclick="login('pedro','ok')">Sign In</a>
        <a href="#">join the list</a>
        <!--<a href="#">download</a>-->
      </div>
      </center>
      <!-- Swiper slider -->
      <div class="swiper">
        <div class="swiper-wrapper">
          <!-- Content 1 -->
          <div class="swiper-slide slide-one">
            <div>
              <h2>Wind and Brass</h2>
              <p>
                Discover and tune into live, smooth jazz!
              </p>
              <a href="#">Tune In</a>
            </div>
          </div>
          <!-- Content 2 -->
          <div class="swiper-slide slide-two">
            <div>
              <h2>Saxophone</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                nemo eveniet delectus obcaecati dolorem at, cumque deleniti sint
                laborum adipisci quis aut consequuntur eum?
              </p>
              <a href="#">View Detail</a>
            </div>
          </div>
          <!-- Content 3 -->
          <div class="swiper-slide slide-three">
            <div>
              <h2>Genre</h2>
              <p>
                Description
              </p>
              <a href="#">View Detail</a>
            </div>
          </div>
          <!-- Content 4 -->
          <div class="swiper-slide slide-four">
            <div>
              <h2>Genre</h2>
              <p>
                Description
              </p>
              <a href="#">View Detail</a>
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
</div>
}`
       )
}





function Default(){
  return Landing();
}

let state = {
    isLoggedIn: false
    
  }

function logout(){
  render(Default())
}

function Home(x){
  return `<h1>Welcome Home ${x}! </h1><br>
  <div id="root">
  </div>
  <nav>
  <ul>
  <li><button onclick="load(Geo())">Map</button>
  </li>
  <li><button onclick="load(Profile())">Profile</button>
  </li>
  <li><button onclick="logout()">Logout</button>
  </li>
  </ul>
  </nav>
  `
}




 function login(x,y){
  //fetch...
  let db= {
    user:'pedro',
    pass:'ok'
  }
  
  if(x == db.user && y == db.pass ){
    state.isLoggedIn = !state.isLoggedIn
    render(Home(x))
  }
   else{alert('Wrong')}
}
  

const render = (x)=>{
  document.getElementById("root").innerHTML = x;
}

const load = (x)=>{
  document.getElementById("loaded").innerHTML = x;
}

function App(){

  
  
  if(state.isLoggedIn){
    render(Home())
  }
  else{render(Landing())}
  
  
 
  
}

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    thresholdDelta: 70,
  },
  loop: true,
  autoplay: {
    delay: 6000*Math.random(),
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1560: {
      slidesPerView: 3,
    },
  },
});
window.onload = App()


