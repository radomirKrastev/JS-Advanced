class Hotel {
  _availableRooms;
  name;
  capacity;
  bookings;
  currentBookingNumber;

  constructor(name, capacity) {
    this.bookings = [];
    this.currentBookingNumber = 1;
    this.name = name;
    this.capacity = capacity;
    this._availableRooms = {
      single: Math.floor(0.5 * this.capacity),
      double: Math.floor(0.3 * this.capacity),
      maisonette: Math.floor(0.2 * this.capacity)
    };
  }

  get roomPricing() {
    return {
      single: 50,
      double: 90,
      maisonette: 135
    };
  }

  get servicesPricing() {
    return {
      food: 10,
      drink: 15,
      housekeeping: 25
    };
  }

  rentARoom(clientName, roomType, nights) {
    if (
      !this._availableRooms.hasOwnProperty(roomType) ||
      this._availableRooms[roomType] === 0
    ) {
      let message = `No ${roomType} rooms available!`;
      return this._addAvailableRooms(message);
    }
    let order = {
      bookingNumber: this.currentBookingNumber,
      clientName,
      roomType,
      nights
    };

    this.bookings.push(order);
    this._availableRooms[roomType]--;

    return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this
      .currentBookingNumber++}.`;
  }

  _addAvailableRooms(string) {
    let types = Object.getOwnPropertyNames(this._availableRooms);

    for (let type of types) {
      let rooms = this._availableRooms[type];
      if (rooms > 0) {
        string += ` Available ${type} rooms: ${rooms}.`;
      }
    }

    return string;
  }

  roomService(currentBookingNumber, serviceType) {
    let order = this._getOrder(currentBookingNumber);

    if (typeof order === "undefined" || typeof order === "null") {
      return `The booking ${currentBookingNumber} is invalid.`;
    }

    if (
      !Object.getOwnPropertyNames(this.servicesPricing).includes(serviceType)
    ) {
      return `We do not offer ${serviceType} service.`;
    }

    if (!order.hasOwnProperty("services")) {
      order.services = [];
    }

    order.services.push(serviceType);
    return `Mr./Mrs. ${order.clientName}, Your order for ${serviceType} service has been successful.`;
  }

  checkOut(currentBookingNumber) {
    let order = this._getOrder(currentBookingNumber);

    if (typeof order === "undefined" || typeof order === "null") {
      return `The booking ${currentBookingNumber} is invalid.`;
    }

    let servicesCosts = 0;
    if (order.hasOwnProperty("services")) {
      servicesCosts += order.services.reduce((result, service) => {
        return (result += this.servicesPricing[service]);
      }, 0);
    }
    let nights = order.nights;
    let roomCosts = nights * this.roomPricing[order.roomType];

    let message = `We hope you enjoyed your time here, Mr./Mrs. ${
      order.clientName
    }. The total amount of money you have to pay is ${roomCosts +
      servicesCosts} BGN.`;

    if (servicesCosts > 0) {
      message += ` You have used additional room services, costing ${servicesCosts} BGN.`;
    }

    let a = this;
    this._availableRooms[order.roomType]++;
    return message;
  }

  report() {
    let report = `${this.name.toUpperCase()} DATABASE:\n--------------------`;

    if (this.bookings.length === 0) {
      return (report += `\nThere are currently no bookings.`);
    }

    for (let i = 0; i < this.bookings.length; i++) {
      if (i > 0) {
        report += `\n----------`;
      }

      report += "\n";
      report += `bookingNumber - ${this.bookings[i].bookingNumber}\nclientName - ${this.bookings[i].clientName}\nroomType - ${this.bookings[i].roomType}\nnights - ${this.bookings[i].nights}`;

      if (this.bookings[i].hasOwnProperty("services")) {
        report += `\nservices: ${this.bookings[i].services.join(", ")}`;
      }
    }

    return report;
  }

  _getOrder(currentBookingNumber) {
    return this.bookings.find((x) => x.bookingNumber === currentBookingNumber);
  }
}
