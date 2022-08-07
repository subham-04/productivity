const generateHTML = () =>{
    return ` <div class="container">


    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>


    <div class="text"><h1>404</h1><p>Get back to work</p></div>
</div>`;
};
const generateCSS = () => {
    return `<style>@import url('https://fonts.googleapis.com/css2?family=Abel&family=Red+Hat+Display&display=swap');

    :root{
    
        /* For Dark Mode */
        --dark-bg: #303030;
        --green-cube:#16e0bd;
        --light-text:#ffff;
    
        /* For Light Mode */
        --light-bg: #fefefe;
        --purple-cube:#751fff;
        --dark-text:#000000;
    
    }
    
    
    body{
        margin: 0;
        box-sizing: border-box;
        height: 100vh;
        background-color: var(--dark-bg);
    }
    
    .container{
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        color: var(--light-text);
    }
    
    .text{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 6.5rem;
        line-height: 0.5rem;
        font-family: 'Abel', sans-serif;
    }
    p{
        font-size: 2rem;
        text-transform: uppercase;
        font-family: 'Red Hat Display', sans-serif;
    }
    
    .square{
        position: absolute;
        bottom: -8rem;
        background-color: var(--green-cube);
        animation: boxes 7s infinite ease-in-out;
    }
    
    .square:nth-child(1){
        width: 7rem;
        height: 7rem;
        left: 8%;
    }
    .square:nth-child(2){
        width: 6.5rem;
        height: 6.5rem;
        right: 8%;
    
    }
    .square:nth-child(3){
        width: 2.8rem;
        height: 2.8rem;
        right: 18%;
        animation-delay: 5.5s;
    }
    
    .square:nth-child(4){
        width: 3rem;
        height: 3rem;
        left: 28%;
        animation-delay: 6s;
    }
    .square:nth-child(5){
        width: 5rem;
        height: 5rem;
        left: 58%;
        animation-delay: 5s;
    }
    .square:nth-child(6){
        width: 4rem;
        height: 4rem;
        left: 68%;
        animation-delay: 3.4s;
    }
    .square:nth-child(7){
        animation-delay: 1s;
        width: 1.5rem;
        height: 1.5rem;
        left: 50%;
    }
    
    .square:nth-child(8){
        width: 4rem;
        height: 4rem;
        left: 38%;
        animation-delay: 1.5s;
    
    }
    .square:nth-child(9){
        width: 3rem;
        height: 3rem;
        left: 13%;
        animation-delay: 2.3s;
    }
    
    .square:nth-child(10){
        animation-delay: 1s;
        width: 4.5rem;
        height: 4.5rem;
        left: 60%;
    }
    .square:nth-child(11){
        width: 5rem;
        height: 5rem;
        left: 5%;
        animation-delay: 3.5s;
    }
    .square:nth-child(12){
        width: 3.4rem;
        height: 3.4rem;
        left: 68%;
        animation-delay: 1s;
    }
    .square:nth-child(13){
        animation-delay: 2.5s;
        width: 2.5rem;
        height: 2.5rem;
        left: 50%;
    }
    
    .square:nth-child(14){
        width: 4rem;
        height: 4rem;
        left: 50%;
        animation-delay: 5.5s;
    
    }
    .square:nth-child(15){
        width: 3.5rem;
        height: 3.5rem;
        left: 13%;
        animation-delay: 5s;
    }
    
    
    @keyframes boxes {
        0%{bottom: -8rem;}
        100%{
            bottom: 100%;
            transform: rotate(360deg);
            opacity: 0;
        }
    }</style>`;
};


switch (window.location.hostname){

    // 1st
    case "www.youtube.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.facebook.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.netflix.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;

    // 2nd
    case "www.instagram.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.twitter.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.reddit.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    // done




    // unspecified
     // 1st
     case "www.primevideo.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "music.youtube.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.tiktok.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;

    // 2nd
    case "discord.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "web.whatsapp.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.snapchat.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    
    // 1st
    case "slack.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.hotstar.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.sonyliv.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;

    // 2nd
    case "www.zee5.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.voot.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.altbalaji.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;

    // unspecified
     // 1st
     case "ullu.app":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.maxplayer.in":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.hulu.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;

    // 2nd
    case "www.hbomax.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "imdb.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.twitch.tv":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;

     // unspecified
     // 1st
     case "www.linkedin.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.discoveryplus.in":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.robolox.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;

    // 2nd
    case "www.rottentomatoes.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "web.telegram.org":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.amazon.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    
    // 1st
    case "www.flipkart.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "animetv.net":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.xvideos.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;

    // 2nd
    case "www.xxnx.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.xhamster.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.pornhub.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;

    // unspecified
     // 1st
     case "www.stripchat.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.xhamster18.desi":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.onlyfans.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;

    // 2nd
    case "www.redtube.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.xvideos.red":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.xhamster.desi":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    
    // 1st
    case "www.txxx.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.pornhubpremium.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.eporner.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;

    // 2nd
    case "www.omegle.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "meetyou.me":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.chatblink.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;

    // unspecified
     // 1st
     case "www.strangermeetup.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.torproject.org":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.talkwithstranger.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;

    // 2nd
    case "www.cityheaven.net":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.iporntv.net":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.xxnx.tv":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;

    // 1st
    case "www.xv-videos1.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.bongacams.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.xhamster.live":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;

    // 2nd
    case "www.livejasmine.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.youporn.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.rule34.xxx":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;

    // unspecified
     // 1st
     case "www.realsrv.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.xvideos-cdn.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.ixxx.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;

    // 2nd
    case "www.nhentai.net":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.boyfriendtv.com":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
    case "www.18comic.vip":
        document.head.innerHTML=generateCSS();
        document.body.innerHTML=generateHTML();
        break;
}