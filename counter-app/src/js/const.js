const ActivityCoefficient = {
    min: 1.2,
    low: 1.375,
    medium: 1.55,
    high: 1.725,
    max: 1.9,
}

const WeightChangeCoefficient = {
    lose: 0.85,
    gain: 1.15,
}

const calculateWomanWeight = (weight, height, age) => (10 * weight) + (6.25 * height) - (5 * age) - 161;

const calculateManWeight = (weight, height, age) => (10 * weight) + (6.25 * height) - (5 * age) + 5;

export {ActivityCoefficient, WeightChangeCoefficient, calculateWomanWeight, calculateManWeight};

