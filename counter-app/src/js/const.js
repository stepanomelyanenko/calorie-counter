const Gender = {
    MALE: 'male',
    FEMALE: 'female'
}

const WeightChangeCoefficient = {
    LOSS: 0.85,
    GAIN: 1.15,
}

const ActivityCoefficient = {
    min: 1.2,
    low: 1.375,
    medium: 1.55,
    high: 1.725,
    max: 1.9,
}

const initialParams = {
    gender: Gender.MALE,
    weight: 0,
    height: 0,
    age: 0,
    activity: 'min',
}

const calculateResult = (gender, weight, height, age, activity) => {
    const weightKeepingResult= gender === 'male'
        ? (10 * weight) + (6.25 * height) - (5 * age) + 5
        : (10 * weight) + (6.25 * height) - (5 * age) - 161;

    const calorieAllowance = weightKeepingResult * ActivityCoefficient[activity];

    return {
        maintenance: Math.round(calorieAllowance),
        loss: Math.round(calorieAllowance * WeightChangeCoefficient.LOSS),
        gain: Math.round(calorieAllowance * WeightChangeCoefficient.GAIN),
    }
}

export {initialParams, calculateResult};
