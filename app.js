    
    //DOM initialization
    let btn = document.querySelector(".searchbtn");
    let srchbtn = document.querySelector("#srchbtn");

    btn.addEventListener("click", ()=>{
        if(srchbtn.value){
                fetch(`https://gateway.marvel.com:443/v1/public/characters/100?${apikey}`)
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                console.log(data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }else{
        throw("Please Input something to search")
    }
})

    window.addEventListener("load", ()=>{
        gsap.fromTo(".container #iron-man-img",{height: 0, width: 0}, {duration: 1, height: "10rem", width: "10rem"});
        gsap.fromTo(".container #falcon-img",{left: "-50%"}, {duration: 1, left: "0%"});
        gsap.timeline().fromTo(".container #spider-man-img", {top: "-100%"}, {duration: 1, top:"-5%", ease: "back.out(1.7)"})
        .fromTo("#srchbtn", {width: 0}, {duration: 1.3,width: 240, ease: "back.out(1.7)"});
    })

    srchbtn.addEventListener("focus", ()=>{
        console.log("hello")
    })
