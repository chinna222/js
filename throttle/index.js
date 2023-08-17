const click = ()=>{
    console.log("clicked")
}

const throttle = (fn,count)=>{
    let counter = 0
    return function (...args){
        counter = counter + 1
        if(counter!==count) return
        counter = 0
        fn.apply(this,args)
    }
}

// throttle function based on no. of clicks
const throttledClick = throttle(click,4)

document.getElementById("btn").addEventListener("click",throttledClick)