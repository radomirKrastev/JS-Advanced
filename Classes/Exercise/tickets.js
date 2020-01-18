function ticketManager(ticketData, sortCriteria) {
    class Ticket {
        destination;
        price;
        status;
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    //let a = ticketData.map(x => x.split("|"));

    let tickets = ticketData.map(x => x.split("|")).reduce(function(result, data ){
        let destination = data[0];
        let price = Number(data[1]);
        let status = data[2];
        result.push(new Ticket(destination, price, status));
        return result;
    }, []);

    if(sortCriteria === "price"){
        return tickets.sort((a, b) => a.price - b.price);
    }

    return tickets.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
}

let t =ticketManager(['Philadelphia|5000.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price');