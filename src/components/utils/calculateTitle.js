const calculateTitle = (overall, speed, acc) => {
  if (overall >= 4.9) {
    return {
      scoreTitle: "Keyboard God",
      description: "WIP",
      titleColor: "secondary.dark",
    };
  } else if (overall < 4.9 && overall >= 4.5) {
    if (speed > acc) {
      return {
        scoreTitle: "Fast & Furious",
        description: "WIP",
        titleColor: "info.dark",
      };
    } else if (acc > speed) {
      return {
        scoreTitle: "Keyboard sniper",
        description: "WIP",
        titleColor: "info.dark",
      };
    } else {
      return {
        scoreTitle: "Sir Typealot",
        description: "WIP",
        titleColor: "info.dark",
      };
    }
  } else if (overall < 4.5 && overall >= 4) {
    if (speed > acc) {
      return {
        scoreTitle: "Speedy Gonzalez",
        description: "WIP",
        titleColor: "info.light",
      };
    } else if (acc > speed) {
      return {
        scoreTitle: "Maestro",
        description: "WIP",
        titleColor: "info.light",
      };
    } else {
      return {
        scoreTitle: "Pro",
        description: "WIP",
        titleColor: "info.light",
      };
    }
  } else if (overall < 4 && overall >= 3.5) {
    if (speed > acc) {
      return {
        scoreTitle: "Copywriter",
        description: "WIP",
        titleColor: "success.dark",
      };
    } else if (acc > speed) {
      return {
        scoreTitle: "Journalist",
        description: "WIP",
        titleColor: "success.dark",
      };
    } else {
      return {
        scoreTitle: "Writer",
        description: "WIP",
        titleColor: "success.dark",
      };
    }
  } else if (overall < 3.5 && overall >= 3) {
    if (speed > acc) {
      return {
        scoreTitle: "Fast learner",
        description: "WIP",
        titleColor: "success.light",
      };
    } else if (acc > speed) {
      return {
        scoreTitle: "Apprentice",
        description: "WIP",
        titleColor: "success.light",
      };
    } else {
      return {
        scoreTitle: "Work in progress",
        description: "WIP",
        titleColor: "success.light",
      };
    }
  } else if (overall < 3 && overall >= 2) {
    if (speed > acc) {
      return {
        scoreTitle: "Mickey Mouse",
        description: "WIP",
        titleColor: "warning.dark",
      };
    } else if (acc > speed) {
      return {
        scoreTitle: "Johnny Two Fingers",
        description: "WIP",
        titleColor: "warning.dark",
      };
    } else {
      return {
        scoreTitle: "Slippin' Jimmy",
        description: "WIP",
        titleColor: "warning.dark",
      };
    }
  } else if (overall < 2 && overall >= 1) {
    if (speed > acc) {
      return {
        scoreTitle: "Drunk and reckless",
        description: "WIP",
        titleColor: "error.main",
      };
    } else if (acc > speed) {
      return {
        scoreTitle: "Drunk and gentle",
        description: "WIP",
        titleColor: "error.main",
      };
    } else {
      return {
        scoreTitle: "Drunk",
        description: "WIP",
        titleColor: "error.main",
      };
    }
  } else {
    return {
      scoreTitle: "Please remove your cat from the keyboard",
      description: "WIP",
      titleColor: "error.dark",
    };
  }
};

export default calculateTitle;
