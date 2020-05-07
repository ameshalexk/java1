function soundmaker(sound, times) {

    function makesound() {
        console.log(`${sound}`);
    }

    for(let i = 0; i < times; i++) {
        makesound();
    }
}

soundmaker("woof", 5);