class Computer {
  constructor(ramMemory, cpuGHz, hddMemory) {
    this.ramMemory = ramMemory;
    this.cpuGHz = cpuGHz;
    this.hddMemory = hddMemory;
    this.taskManager = [];
    this.installedPrograms = [];
  }

  installAProgram(name, requiredSpace) {
    if (this.hddMemory - requiredSpace < 0) {
      throw new Error("There is not enough space on the hard drive");
    }

    let program = { name, requiredSpace };
    this.hddMemory -= requiredSpace;
    this.installedPrograms.push(program);
    return program;
  }

  uninstallAProgram(name) {
    let program = this.installedPrograms.find((x) => x.name === name);

    if (program) {
      this.installedPrograms.splice(this.installedPrograms.indexOf(program), 1);
      this.hddMemory += program.requiredSpace;
      return this.installedPrograms;
    }

    throw new Error("Control panel is not responding");
  }

  openAProgram(name) {
    let program = this.installedPrograms.find((x) => x.name === name);

    if (!program) {
      throw new Error(`The ${name} is not recognized`);
    }

    if (this.taskManager.some((x) => x.name === name)) {
      throw new Error(`The ${name} is already open`);
    }

    let ramUsage = (program.requiredSpace / this.ramMemory) * 1.5;
    let cpuUsage = (program.requiredSpace / this.cpuGHz / 500) * 1.5;

    let totalRam = this.taskManager.reduce((res, x) => res + x.ramUsage, 0);
    let totalCPU = this.taskManager.reduce((res, x) => res + x.cpuUsage, 0);

    if (totalRam + ramUsage >= 100) {
      throw new Error(`${name} caused out of memory exception`);
    }

    if (totalCPU + cpuUsage >= 100) {
      throw new Error(`${name} caused out of cpu exception`);
    }

    let programStats = { name, ramUsage, cpuUsage };
    this.taskManager.push(programStats);
    return programStats;
  }

  taskManagerView() {
    if (this.taskManager.length === 0) {
      return "All running smooth so far";
    }

    return this.taskManager
      .map(
        (x) =>
          `Name - ${x.name} | Usage - CPU: ${x.cpuUsage.toFixed(
            0
          )}%, RAM: ${x.ramUsage.toFixed(0)}%`
      )
      .join("\n");
  }
}

// let computer = new Computer(4096, 7.5, 250000);

// computer.installAProgram("Word", 7300);
// computer.installAProgram("Excel", 10240);
// computer.installAProgram("PowerPoint", 12288);
// computer.uninstallAProgram("Word");
// computer.installAProgram("Solitare", 1500);

// computer.openAProgram("Excel");
// computer.openAProgram("Solitare");

// console.log(computer.installedPrograms);
// console.log("-".repeat(50)); // Separator
// console.log(computer.taskManager);

// let computer = new Computer(4096, 7.5, 250000);

// computer.installAProgram("Word", 7300);
// computer.installAProgram("Excel", 10240);
// computer.installAProgram("PowerPoint", 12288);
// computer.installAProgram("Solitare", 1500);

// computer.openAProgram("Word");
// computer.openAProgram("Excel");
// computer.openAProgram("PowerPoint");
// computer.openAProgram("Solitare");

// console.log(computer.taskManagerView());
