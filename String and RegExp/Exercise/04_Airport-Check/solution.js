function solve() {
  let text = document.querySelector("#string").value.split(/\s*,\s*/g);
  let message = text[0];
  let print = text[1].replace('"', "");

  class Data {
    message;
    constructor(message) {
      this.message = message;
    }
    getPassenger() {
      let pattern = new RegExp(
        "(?<=\\s)([A-Z][A-Za-z]*-([A-Z][A-Za-z]*)(.-[A-Z][A-Za-z]*)?)",
        "m"
      );

      return pattern.exec(message)[0].replace(/-/g, " ");
    }

    getAirport() {
      let pattern = new RegExp("(?<=\\s)[A-Z]{3}/[A-Z]{3}(?=\\s)", "m");
      return pattern.exec(message)[0].split("/");
    }

    getFlight() {
      let pattern = new RegExp("(?<=\\s)[A-Z]{1,3}[0-9]{1,5}(?=\\s)", "m");
      return pattern.exec(message)[0];
    }

    getCompany() {
      let pattern = new RegExp(
        "(?<=-\\s)[A-Z][A-Za-z]*\\*[A-Z][A-Za-z]*(?=\\s)",
        "m"
      );
      return pattern.exec(message)[0].replace("*", " ");
    }
  }

  class Printer {
    ticketInfo;
    constructor(ticketInfo) {
      this.ticketInfo = ticketInfo;
    }

    name() {
      return `Mr/Ms, ${ticketInfo.getPassenger()}, have a nice flight!`;
    }

    flight() {
      return `Your flight number ${ticketInfo.getFlight()} is from ${
        ticketInfo.getAirport()[0]
      } to ${ticketInfo.getAirport()[1]}.`;
    }

    company() {
      return `Have a nice flight with ${ticketInfo.getCompany()}.`;
    }

    all() {
      return `Mr/Ms, ${ticketInfo.getPassenger()}, your flight number ${ticketInfo.getFlight()} is from ${
        ticketInfo.getAirport()[0]
      } to ${
        ticketInfo.getAirport()[1]
      }. Have a nice flight with ${ticketInfo.getCompany()}.`;
    }
  }

  let ticketInfo = new Data(message);
  let printer = new Printer(ticketInfo);
  let result = document.querySelector("#result");
  result.innerHTML = printer[print]();
}
