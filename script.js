(function(){
    const randInt = (max) => {
        let x = ((Math.floor(Math.random() * max))+1); // returns random int between 1 and max
        return x;
    }

    const randomNumberFill = () => {
        document.getElementById('message').innerHTML = (`<textarea>${randInt(100000)}</textarea>`);
    }

    document.getElementById('aBtn').addEventListener('click', randomNumberFill);
})();