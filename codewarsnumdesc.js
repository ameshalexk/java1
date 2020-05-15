function descendingOrder(n){
    let sorted = (""+n).split("");

    let bob = sorted.sort ( (a,b) => {
        if (a<b) return 1;
        else if (b<a) return -1;
        else return 0;
    }  );

    let semifinal = bob.join('');
    let final = parseInt(semifinal);
    return console.log(final);

  }

  descendingOrder(0);
  descendingOrder(1);
  descendingOrder(123456789);
  descendingOrder(145263);
  descendingOrder(21445);
