export const escape = (carpark: number[][]): string[] => {
  if (carpark.length === 1) {
    return [];
  }

  let currentPosition = 0;
  let startingLevel = 0;

  for (let i = 0; i < carpark.length; i++) {
    if (carpark[i]!.includes(2)) {
      startingLevel = i;
      currentPosition = findIndexByElement(carpark[i]!, 2);
      break;
    }
  }

  const directions: string[] = [];

  for (let i = startingLevel; i < carpark.length; ) {
    const level = carpark[i]!;
    const staircase = findIndexByElement(level, 1);

    if (staircase === -1) {
      const steps = Math.abs(currentPosition - (level.length - 1));

      if (steps > 0) {
        const direction = getDirection(currentPosition, level.length);
        directions.push(direction + steps);
      }

      break;
    }

    const direction = getDirection(currentPosition, staircase);
    const steps = Math.abs(staircase - currentPosition);
    directions.push(direction + steps);

    let descendNrOfFloors = 1;

    while (true) {
      const nextFloor = findIndexByElement(carpark[i + descendNrOfFloors]!, 1);

      if (nextFloor === -1 || staircase !== nextFloor) {
        break;
      }

      descendNrOfFloors++;
    }

    i += descendNrOfFloors;
    directions.push('D' + descendNrOfFloors);
    currentPosition = staircase;
  }

  return directions;
};

export const findIndexByElement = <T>(arr: T[], el: T) =>
  arr.findIndex((o) => o === el);

export const getDirection = (high: number, low: number): string =>
  high > low ? 'L' : 'R';
