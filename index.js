//Ex1

const showTime = (time) => {
    console.log(time)
}

const getTime = () => {
    console.log("Start")
    const now = new Date()
    const time = now.toLocaleTimeString()
    showTime(time)
    console.log("End")
}

//Ex2

const showTime2 = () => {
    setTimeout(() => {
        const now = new Date()
        const time = now.toLocaleTimeString()
        console.log(time)
    }, 3 * 1000);
}

const getTime2 = () => {
    console.log("Start")
    showTime2()
    console.log("End")
}

//Ex3
const setTime3 = (callback) => {
    const now = new Date()
    const time = now.toLocaleTimeString()
    callback(time)
}
const showTime3 = (currentTime) => {
    setTimeout(() => {
        console.log(currentTime)
    }, 3 * 1000);
}

const getTime3 = () => {
    console.log("Start")
    setTime3(showTime3)
    console.log("End")
}

//Ex4

const setRandomNumber = (callback) => {
    let randomNumber1 = Math.floor(Math.random() * 101);
    let randomNumber2 = Math.floor(Math.random() * 101);
    let randomNumber3 = Math.floor(Math.random() * 101);
    callback(randomNumber1, randomNumber2, randomNumber3)
}

const randomNumberAfterDelay = (num1, num2, num3) => {
    setTimeout(() => {
        console.log(num1)
    }, 3 * 1000);
    setTimeout(() => {
        console.log(num2)
    }, 5 * 1000);
    setTimeout(() => {
        console.log(num3)
    }, 7 * 1000);
}

const getRandomNumber = () => {
    console.log("Start")
    setRandomNumber(randomNumberAfterDelay)
    console.log("End")
}

//Ex5
let stopbutton = document.getElementById("stop-number")
let textAreaId = document.getElementById("textarea-ex5-id").value
let changingNumber = document.getElementById("show-number-ex5")
let intervalId = 0
const ex5 = () => {
    intervalId = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * textAreaId);
        changingNumber.innerHTML = randomNumber
    }, 1000 * 1);
}
const stop = () => {
    clearInterval(intervalId)
}

//Ex6
let stopbutton1 = document.getElementById("stop-color")
let changingColorDiv = document.getElementById("changing-color-div")
let intervalId1 = 0
const ex6 = () => {
    intervalId1 = setInterval(() => {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let randomColor = "rgb(" + x + "," + y + "," + z + ")";
        changingColorDiv.style.backgroundColor = randomColor
    }, 1 * 1000);
}

const stop1 = () => {
    clearInterval(intervalId1)
}

//Ex7

const getAlertFunction = () => {
    document.body.style.backgroundColor = "green";
    setTimeout(alert, 50, "Done");
}

//Ex8
const setRandomNumberEx8 = (callback) => {
    let randomNumber = Math.floor(Math.random() * 101);
    callback(randomNumber)
}
const getRandomNumberAfterDelay = (givenNumber) => {
    setTimeout(() => {
        console.log(givenNumber)
    }, 5 * 1000);
}

const ex8 = () => {
    setRandomNumberEx8(getRandomNumberAfterDelay)
}

//Ex9
const setRandomNumberEx9 = (limit, callback) => {

    let randomNumber = Math.floor(Math.random() * limit);
    callback(randomNumber)
}
const getRandomNumberAfterDelay9 = (givenNumber) => {
    setTimeout(() => {
        console.log(givenNumber)
    }, 1 * 1000);
}

const ex9 = () => {
    let userNumberInput = document.getElementById("limit-number").value
    setRandomNumberEx9(userNumberInput, getRandomNumberAfterDelay9)
}


//Ex10


const getEvenRandomNumberAfterDelay10 = (min, max, callback) => {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    callback(randomNumber)
}
const setEvenRamdomNumber10 = (chosenNumber) => {
    setTimeout(() => {
        console.log(chosenNumber)
    }, 1 * 1000);

}

const ex10 = () => {
    let minNumber10 = Number(document.getElementById("min-number-10").value)
    let maxNumber10 = Number(document.getElementById("max-number-10").value)
    getEvenRandomNumberAfterDelay10(minNumber10, maxNumber10, setEvenRamdomNumber10)
}



//Ex11


const getEvenRandomNumberAfterDelay = (min, max, callback) => {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    callback(randomNumber)
}
const setEvenRamdomNumber = (chosenNumber) => {
    setTimeout(() => {
        if (chosenNumber % 2 === 0) {
            console.log(chosenNumber)
        } else {
            chosenNumber++
            console.log(chosenNumber)
        }
    }, 5 * 1000);

}

const ex11 = () => {
    let minNumber = Number(document.getElementById("min-number").value)
    let maxNumber = Number(document.getElementById("max-number").value)
    getEvenRandomNumberAfterDelay(minNumber, maxNumber, setEvenRamdomNumber)
}


//Ex12


const getUserFromServer = (userInfo) => {
    setTimeout(() => {
        console.log(userInfo)
    }, 4000);
}

const showUser = () => {
    const user = { firstName: "Moishe", lastName: "Ufnik" }
    getUserFromServer(user)
}

//Ex13

const showGrades = () => {
    const grades = [100, 98, 75, 80, 100, 87];
    getGradesFromServer(grades)
}
const getGradesFromServer = (gradesInfo) => {
    setTimeout(() => {
        console.log(gradesInfo)
    }, 1000);
}

//Ex14
let clockPlace = document.getElementById("clock-holder")
const runClock = () => {
    setInterval(() => {
        const now = new Date()
        const time = now.toLocaleTimeString()
        clockPlace.innerHTML = time
    }, 1000);
    setInterval(() => {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let randomColor = "rgb(" + x + "," + y + "," + z + ")";
        let randomSize = Math.floor(Math.random() * (30 - 20 + 1) + 20)
        clockPlace.style.color = randomColor
        clockPlace.style.fontSize = randomSize + 'px'
    }, 1000);

}

//Ex15

const run7Boom = () => {
    let minNum = Number(document.getElementById("min-number-ex-15").value)
    let maxNum = Number(document.getElementById("max-number-ex-15").value)
    let myPromise = generate7BoomAfterDelayAsync(minNum, maxNum)
    setTimeout(() => {
        myPromise
            .then(() => {
                alert("7 BOOM!💥")
            })
            .catch(() => {
                alert("Missed The Boom!")
            })
    }, 1000);

}

const generate7BoomAfterDelayAsync = (min, max) => {
    const myPromise = new Promise((resolve, reject) => {
        let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
        if (randomNumber % 10 === 7 || randomNumber % 7 === 0) {
            resolve()
        } else {
            reject()
        }
        console.log(randomNumber)
    })
    return myPromise
}

//Ex16

const runPrimeNumber = () => {
    let minNum = Number(document.getElementById("min-number-ex-16").value)
    let maxNum = Number(document.getElementById("max-number-ex-16").value)
    let promise = generate7BoomAfterDelayAsync(minNum, maxNum)
    promise.then(() => {
            alert("You Got a Prime Number !!")
        })
        .catch(() => {
            alert("Not So Special Number...")
        })
}

const generatePrimeNumberAfterDelayAsync = (min, max) => {
    const myPromise = new Promise((resolve, reject) => {
        let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
        for (let i = 2; i < randomNumber; i++)
            if (randomNumber % i === 0) {
                resolve()
            } else {
                reject()
            }
    })
    console.log(randomNumber)
    return myPromise
}