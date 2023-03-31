const addBookmarkToLocal = (time)=>{
    const previousTime = JSON.parse(localStorage.getItem("read_time"));
    if(previousTime){
        const sum = previousTime + time;
        localStorage.setItem("read_time", sum)
    } else {
        localStorage.setItem("read_time", time);
    }
}