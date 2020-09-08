import React, { useState, useEffect } from 'react';

const Generator = () => {

    const [firstNum, setFirstNum] = useState('');
    const [selectFirstNum, setSelectFirstNum] = useState(false);

    const [secondNum, setSecondNum] = useState('');
    const [selectSecondNum, setSelectSecondNum] = useState(false);

    const [thirdNum, setThirdNum] = useState('');
    const [selectThirdNum, setSelectThirdNum] = useState(false);

    const [fourthNum, setFourthNum] = useState('');
    const [selectFourthNum, setSelectFourthNum] = useState(false);

    const [fifthNum, setFifthNum] = useState('');
    const [selectFifthNum, setSelectFifthNum] = useState(false);

    const [mBallNum, setMBallNum] = useState('');
    const [selectMBallNum, setSelectMBallNum] = useState(false);

    const [winningNumArr, setWinningNumArr] = useState([]);

    const [generatorToggle, setGeneratorToggle] = useState(false);

    const [countCheck, setCountCheck] = useState(0);

    const [countArr, setCountArr] = useState([])

    const [ballSelectHighLight1, setBallSelectHighlight1] = useState('drop-shadow(5px 5px 4px black)')
    const [ballSelectHighLight2, setBallSelectHighlight2] = useState('drop-shadow(5px 5px 4px black)')
    const [ballSelectHighLight3, setBallSelectHighlight3] = useState('drop-shadow(5px 5px 4px black)')
    const [ballSelectHighLight4, setBallSelectHighlight4] = useState('drop-shadow(5px 5px 4px black)')
    const [ballSelectHighLight5, setBallSelectHighlight5] = useState('drop-shadow(5px 5px 4px black)')
    const [ballSelectHighLight6, setBallSelectHighlight6] = useState('drop-shadow(5px 5px 4px black)')
    //Random # Array------------------------------------------------------------------------------------------------->
    var numArr = [firstNum, secondNum, thirdNum, fourthNum, fifthNum, mBallNum];
    //Occurrence # Array------------------------------------------------------------------------------------------------->
    let count = 1;
    //Formatted Arrays------------------------------------------------------------------------------------------------->
    let formattedRandomNumDash = numArr[0] + '-' + numArr[1] + '-' + numArr[2] + '-' + numArr[3] + '-' + numArr[4] + '-' + numArr[5]
    let formattedRandomNumSpace = numArr[0] + ' ' + numArr[1] + ' ' + numArr[2] + ' ' + numArr[3] + ' ' + numArr[4] + ' ' + numArr[5]
    //Global Font...for now------------------------------------------------------------------------------------------------->
    let fontSize = '4rem';
    //CSS Styles------------------------------------------------------------------------------------------------->
    const lottoNum1 = {
        fontSize: fontSize,
        fontWeight: '550',
        // backgroundColor: 'white',
        background: 'radial-gradient(circle at top left, white 10%,darkgrey 100%)',
        borderRadius: '50%',
        padding: '3%',
        minWidth: '100px',
        minHeight: '100px',
        filter: ballSelectHighLight1,
        userSelect: 'none'
    };
    const lottoNum2 = {
        fontSize: fontSize,
        fontWeight: '550',
        // backgroundColor: 'white',
        background: 'radial-gradient(circle at top left, white 10%,darkgrey 100%)',
        borderRadius: '50%',
        padding: '3%',
        minWidth: '100px',
        minHeight: '100px',
        filter: ballSelectHighLight2,
        userSelect: 'none'
    };
    const lottoNum3 = {
        fontSize: fontSize,
        fontWeight: '550',
        // backgroundColor: 'white',
        background: 'radial-gradient(circle at top left, white 10%,darkgrey 100%)',
        borderRadius: '50%',
        padding: '3%',
        minWidth: '100px',
        minHeight: '100px',
        filter: ballSelectHighLight3,
        userSelect: 'none'
    };
    const lottoNum4 = {
        fontSize: fontSize,
        fontWeight: '550',
        // backgroundColor: 'white',
        background: 'radial-gradient(circle at top left, white 10%,darkgrey 100%)',
        borderRadius: '50%',
        padding: '3%',
        minWidth: '100px',
        minHeight: '100px',
        filter: ballSelectHighLight4,
        userSelect: 'none'
    };
    const lottoNum5 = {
        fontSize: fontSize,
        fontWeight: '550',
        // backgroundColor: 'white',
        background: 'radial-gradient(circle at top left, white 10%,darkgrey 100%)',
        borderRadius: '50%',
        padding: '3%',
        minWidth: '100px',
        minHeight: '100px',
        filter: ballSelectHighLight5,
        userSelect: 'none'
    };
    const lottoNumMBall = {
        fontSize: fontSize,
        fontWeight: '550',
        // backgroundColor: 'yellow',
        background: 'radial-gradient(circle at top left, white 5%,yellow 100%)',
        borderRadius: '50%',
        padding: '3%',
        minWidth: '100px',
        minHeight: '100px',
        filter: ballSelectHighLight6,
        userSelect: 'none'
    };
    const dash = {
        fontSize: fontSize,
        color: 'white',
        filter: 'drop-shadow(2px 2px 1px black)',
        padding: '2%'
    };
    const firstNumHisWinStyle = {
        color: 'white',
        fontSize: '1.5rem'
    };
    //Random # Generator Within Bounds------------------------------------------------------------------------------------------------->
    function randomNumber(min, max) {
        let randNum = Math.floor(Math.random() * (max - min) + min);
        if (randNum < 10) {
            let newNumWithZero = '0' + randNum.toString();
            // let newVar = parseInt(newNumWithZero, 10)
            // console.log(typeof newNumWithZero)
            return newNumWithZero;
        }
        else {
            return randNum
        }
    };
    //Random # Set Generator ------------------------------------------------------------------------------------------------->
    function changeRandom() {
        setFirstNum(randomNumber(1, 76).toString());
        setSecondNum(randomNumber(1, 76).toString());
        setThirdNum(randomNumber(1, 76).toString());
        setFourthNum(randomNumber(1, 76).toString());
        setFifthNum(randomNumber(1, 76).toString());
        setMBallNum(randomNumber(1, 26).toString());
    };
    //Winning Results .map Function------------------------------------------------------------------------------------------------->
    function mapNLog() {
        return winningNumArr.map((winning, index) => {
            if (formattedRandomNumSpace.replace(/\s/g, '') == (winning.winning_numbers + winning.mega_ball).replace(/\s/g, '')) {
                console.log(`This combination won on : ${winning.draw_date.slice(0, 10)}!!`)
            }
            // if (firstNum == winning.winning_numbers.slice(0, 2)) {
            //     console.log(`This number: ${firstNum}, has won at the first position on : ${winning.draw_date.slice(0, 10)}`);
            // }
            if (secondNum == winning.winning_numbers.slice(3, 6)) {
                console.log(`This number: ${secondNum}, has won at the second position on : ${winning.draw_date.slice(0, 10)}`);
            }
                if (thirdNum == winning.winning_numbers.slice(6, 9)) {
                console.log(`This number: ${thirdNum}, has won at the third position on : ${winning.draw_date.slice(0, 10)}`);
            }
            if (Math.floor(fourthNum) === Math.floor(winning.winning_numbers.slice(9, 11))) {
                if (count >= 1) {
                    if (countArr.length >= 0) {
                        let newNum = count
                        count++;
                        // console.log(newNum)
                        countArr.push(newNum)
                        // console.log(countArr.length)
                        // console.log(countArr)   
                    }
                }
            }




            // console.log(winning.winning_numbers.slice(11, 12))

            // console.log(winning.winning_numbers.slice(12, 14))

     

            if (fifthNum == winning.winning_numbers.slice(12,14)) {
                // console.log(winning.winning_numbers)
                // console.log(winning.winning_numbers.slice(12, 14));
                // console.log(winning.winning_numbers.slice(12, 14))
                console.log(`This number: ${fifthNum}, has won at the fifth position on : ${winning.draw_date.slice(0, 10)}`);
            }
            




            return (
                <div key={index}>
                    {selectFirstNum ?
                        <div>
                            {firstNum == winning.winning_numbers.slice(0, 2) ?
                                <ul >
                                    <li style={firstNumHisWinStyle} > The number: {firstNum}, has won at the first position on : {winning.draw_date.slice(0, 10)}</li>
                                </ul> : null}
                        </div>
                        : null}
                    {selectSecondNum ?
                        <div>
                            {secondNum == winning.winning_numbers.slice(3, 5) ?
                                <ul >
                                    <li style={firstNumHisWinStyle} >The number: {secondNum}, has won at the second position on : {winning.draw_date.slice(0, 10)}</li>
                                </ul> : null}
                        </div> : null
                    }
                    {selectThirdNum ?
                        <div>
                            {thirdNum == winning.winning_numbers.slice(6, 8) ?
                                <ul >
                                    <li style={firstNumHisWinStyle} >The number: {thirdNum}, has won at the third position on : {winning.draw_date.slice(0, 10)}</li>
                                </ul> : null}
                        </div> : null
                    }
                    {selectFourthNum ?
                        <div>
                            {fourthNum == winning.winning_numbers.slice(9, 11) ?
                                <ul >
                                    <li style={firstNumHisWinStyle} > The number: {fourthNum}, has won at the fourth position on : {winning.draw_date.slice(0, 10)}</li>
                                </ul> : null}
                        </div> : null
                    }
                    {selectFifthNum ?
                        <div>
                            {fifthNum == winning.winning_numbers.slice(12, 14) ?
                                <ul >
                                    <li style={firstNumHisWinStyle} > The number: {winning.winning_numbers.slice(12, 14)}, has won at the fifth position on : {winning.draw_date.slice(0, 10)}</li>
                                </ul> : null}
                        </div> : null
                    }
                </div>
            )
        });
    };
    //Fetch Winning Results Function------------------------------------------------------------------------------------------------->
    function fetchWinningNum() {
        fetch('https://data.ny.gov/resource/5xaw-6ayf.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setWinningNumArr(data);
            });
    };
    //userEffect to Fetch Winning Num------------------------------------------------------------------------------------------------->
    useEffect(() => {
        fetchWinningNum();
    }, []);
    return (
        <div style={{ margin: '0 auto', paddingTop: '5vh' }}>
            {/* //iFrame Current Jackpot-------------------------------------------------------------------------------------------------> */}
            <div style={{ top: '6vh', left: '6vw', border: '0px solid rgb(201, 0, 1)', borderRadius: '20px', overflow: 'hidden', margin: '0px auto', maxWidth: '300px', maxHeight: '600px', marginBottom: '15%', filter: 'drop-shadow(1px 1px 1px black)', position: 'fixed', transform: 'scale(.6)' }}>
                {/* <iframe title='Draw Counter' scrolling="no" src="https://lottery.com/" style={{ border: '0px none', marginLeft: '-55px', height: '400px', marginBottom: '', marginTop: '-290px', width: '420px' }}>
                </iframe> */}
            </div>
            {/* <p style={oddsTextStyle}>1 in 302,575,350</p> */}
            {/* //Occurrence Count-------------------------------------------------------------------------------------------------> */}
            {generatorToggle ? <p style={{ color: 'white', fontSize: '4rem' }}>{countArr.length}</p> : null}
            {/* //Current Random # Set-------------------------------------------------------------------------------------------------> */}
            {generatorToggle ? <p style={{ color: 'white', fontSize: '4rem' }}>{formattedRandomNumDash}</p> : null}
            {generatorToggle ?
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: '', transform: 'scale(.6)', marginTop: '-15%' }}>
                    {/* //Lotto Balls-------------------------------------------------------------------------------------------------> */}
                    {/* //First Ball-------------------------------------------------------------------------------------------------> */}
                    <p style={lottoNum1} onClick={() => {

                        setSelectFirstNum(true);
                        setSelectSecondNum(false);
                        setSelectThirdNum(false);
                        setSelectFourthNum(false);

                        setBallSelectHighlight1('drop-shadow(0px 15px 4px #EE1D25)');
                        setBallSelectHighlight2('drop-shadow(5px 5px 4px black)');
                        setBallSelectHighlight3('drop-shadow(5px 5px 4px black)');
                        setBallSelectHighlight4('drop-shadow(5px 5px 4px black)');
                        setBallSelectHighlight5('drop-shadow(5px 5px 4px black)');
                    }}>{firstNum}</p>
                    <p style={dash}>-</p>
                    {/* //Second Ball-------------------------------------------------------------------------------------------------> */}
                    <p style={lottoNum2} onClick={() => {
                        setSelectFirstNum(false);
                        setSelectSecondNum(true);
                        setSelectThirdNum(false);
                        setSelectFourthNum(false);
                        setSelectFifthNum(false);

                        setBallSelectHighlight1('drop-shadow(5px 5px 4px black)');
                        setBallSelectHighlight2('drop-shadow(0px 15px 4px #EE1D25)');
                        setBallSelectHighlight3('drop-shadow(5px 5px 4px black)');
                        setBallSelectHighlight4('drop-shadow(5px 5px 4px black)');
                        setBallSelectHighlight5('drop-shadow(5px 5px 4px black)');
                    }}>{secondNum}</p>
                    <p style={dash}>-</p>
                    {/* //Third Ball-------------------------------------------------------------------------------------------------> */}
                    <p style={lottoNum3} onClick={() => {

                        setSelectFirstNum(false);
                        setSelectSecondNum(false);
                        setSelectThirdNum(true);
                        setSelectFourthNum(false);
                        setSelectFifthNum(false);

                        setBallSelectHighlight1('drop-shadow(5px 5px 4px black)');
                        setBallSelectHighlight2('drop-shadow(5px 5px 4px black)');
                        setBallSelectHighlight3('drop-shadow(0px 15px 4px #EE1D25)');
                        setBallSelectHighlight4('drop-shadow(5px 5px 4px black)');
                        setBallSelectHighlight5('drop-shadow(5px 5px 4px black)');

                    }}>{thirdNum}</p>
                    <p style={dash}>-</p>
                    {/* //Fourth Ball-------------------------------------------------------------------------------------------------> */}
                    <p style={lottoNum4} onClick={() => {
                        setSelectFirstNum(false);
                        setSelectSecondNum(false);
                        setSelectThirdNum(false);
                        setSelectFourthNum(true);
                        setSelectFifthNum(false);

                        setBallSelectHighlight1('drop-shadow(5px 5px 4px black)');
                        setBallSelectHighlight2('drop-shadow(5px 5px 4px black)');
                        setBallSelectHighlight3('drop-shadow(5px 5px 4px black)');
                        setBallSelectHighlight4('drop-shadow(0px 15px 4px #EE1D25)');
                        setBallSelectHighlight5('drop-shadow(5px 5px 4px black)');

                    }} >{fourthNum}</p>
                    <p style={dash}>-</p>
                    {/* //Fifth Ball-------------------------------------------------------------------------------------------------> */}
                    <p style={lottoNum5} onClick={() => {
                        setSelectFirstNum(false);
                        setSelectSecondNum(false);
                        setSelectThirdNum(false);
                        setSelectFourthNum(false);
                        setSelectFifthNum(true);

                        setBallSelectHighlight1('drop-shadow(5px 5px 4px black)');
                        setBallSelectHighlight2('drop-shadow(5px 5px 4px black)');
                        setBallSelectHighlight3('drop-shadow(5px 5px 4px black)');
                        setBallSelectHighlight4('drop-shadow(5px 5px 4px black)');
                        setBallSelectHighlight5('drop-shadow(0px 15px 4px #EE1D25)');

                    }} >{fifthNum}</p>
                    <p style={dash}>-</p>
                    {/* //Mega Ball-------------------------------------------------------------------------------------------------> */}
                    <p style={lottoNumMBall}>{mBallNum}</p>
                </div>
                : null}
            {/* //Generate Button-------------------------------------------------------------------------------------------------> */}
            <button style={{ fontSize: '2rem', marginBottom: '4%', marginTop: '-10%', backgroundColor: 'rgba(255, 255, 255, .8)', color: 'black', borderRadius: '5%', outline: 'none', border: 'solid black 5px', padding: '2%', textShadow: '.5px .5px .5px blue', fontWeight: '550' }}
                onClick={() => {
                    if (countArr.length > 0) {
                        setCountArr([])
                    }
                    changeRandom();
                    setGeneratorToggle(true);

                    // fetchWinningNum();
                }}>Generate</button>
            {/* //.map Winning Results-------------------------------------------------------------------------------------------------> */}
            {mapNLog()}
            {/* //iFrame Past Winning # Set-------------------------------------------------------------------------------------------------> */}
            <div style={{ border: '0px solid rgb(201, 0, 1)', borderRadius: '10%', overflow: 'hidden', margin: '0px auto', maxWidth: '580px', maxHeight: '600px', marginBottom: '2%' }}>
                <iframe title="Last Winning #'s" scrolling="no" src="https://www.lottery.net/mega-millions/numbers" style={{ border: '0px none', marginLeft: '-570px', height: '469px', marginBottom: '', marginTop: '-340px', width: '1500px' }}>
                </iframe>
            </div>
        </div>
    )
};
export default Generator;


