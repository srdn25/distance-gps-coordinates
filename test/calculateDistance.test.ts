import { calculateDistance } from '../index';

describe('calculateDistance should work correct', () => {
  it('Should calc correct distance 841 meters', () => {
    const pointA = {
      lat: 50.433473965019736,
      lon: 30.554786036648164,
    };
    const pointB = {
      lat: 50.44045095121283,
      lon: 30.550207505749846,
    }

    const distance = calculateDistance(pointA, pointB);

    expect(distance).toBe(841);
  });

  it('Should calc correct distance 5 meters', () => {
    const pointA = {
      lat: 50.43380284947423,
      lon: 30.55783570824366,
    };
    const pointB = {
      lat: 50.43376184582221,
      lon: 30.55785,
    }
    const distance = calculateDistance(pointA, pointB);

    expect(distance).toBe(5);
  });

  it('Should calc correct distance 300 kilometers', () => {
    const pointA = {
      lat: 50.433473965019736,
      lon: 30.554786036648164,
    };
    const pointB = {
      lat: 50.906750415150874,
      lon: 34.76124470171605,
    }
    const distance = calculateDistance(pointA, pointB);

    expect(distance).toBe(301036);
  });
});
