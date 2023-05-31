const ActivityCoefficient = {
    min: 1.2,
    low: 1.375,
    medium: 1.55,
    high: 1.725,
    max: 1.9,
}

const WeightChangeCoefficient = {
    loss: 0.85,
    gain: 1.15,
}

const calculateResult = (gender, weight, height, age, activity) => {
    const weightKeepingResult= gender === 'male'
        ? (10 * weight) + (6.25 * height) - (5 * age) + 5
        : (10 * weight) + (6.25 * height) - (5 * age) - 161;

    const calorieAllowance = weightKeepingResult * ActivityCoefficient[activity];

    return {
        maintenance: Math.round(calorieAllowance),
        loss: Math.round(calorieAllowance * WeightChangeCoefficient.loss),
        gain: Math.round(calorieAllowance * WeightChangeCoefficient.gain),
    }
}

export {calculateResult};

