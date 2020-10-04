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

    const [generatorToggle, setGeneratorToggle] = useState(true);

    const [countCheck, setCountCheck] = useState(0);

    const [occ1Array, setOcc1Array] = useState([]);
    // const [occ1Test, setOcc1Test] = useState([])

    const [occ2Array, setOcc2Array] = useState([]);
    const [occ3Array, setOcc3Array] = useState([]);
    const [occ4Array, setOcc4Array] = useState([]);
    const [occ5Array, setOcc5Array] = useState([]);
    const [occ6Array, setOcc6Array] = useState([]);


    const [ballSelectHighLight1, setBallSelectHighlight1] = useState('drop-shadow(5px 5px 4px black)');
    const [ballSelectHighLight2, setBallSelectHighlight2] = useState('drop-shadow(5px 5px 4px black)');
    const [ballSelectHighLight3, setBallSelectHighlight3] = useState('drop-shadow(5px 5px 4px black)');
    const [ballSelectHighLight4, setBallSelectHighlight4] = useState('drop-shadow(5px 5px 4px black)');
    const [ballSelectHighLight5, setBallSelectHighlight5] = useState('drop-shadow(5px 5px 4px black)');
    const [ballSelectHighLight6, setBallSelectHighlight6] = useState('drop-shadow(5px 5px 4px black)');
    //Random # Array------------------------------------------------------------------------------------------------->
    var numArr = [firstNum, secondNum, thirdNum, fourthNum, fifthNum, mBallNum];
    //Occurrence # Array------------------------------------------------------------------------------------------------->
    // let occ1Count = 0;
    // let occ2Count = 0;
    // let occ3Count = 0;
    // let occ4Count = 0;
    // let occ5Count = 0;
    // let occ6Count = 0;
    //Formatted Arrays------------------------------------------------------------------------------------------------->
    let formattedRandomNumDash = numArr[0] + '-' + numArr[1] + '-' + numArr[2] + '-' + numArr[3] + '-' + numArr[4] + '-' + numArr[5];
    let formattedRandomNumSpace = numArr[0] + ' ' + numArr[1] + ' ' + numArr[2] + ' ' + numArr[3] + ' ' + numArr[4] + ' ' + numArr[5];
    //Global Font...for now------------------------------------------------------------------------------------------------->
    let fontSize = '8rem';
    //CSS Styles------------------------------------------------------------------------------------------------->
    const lottoNum1 = {
        fontSize: fontSize,
        fontWeight: '550',
        // backgroundColor: 'white',
        background: 'radial-gradient(circle at top left, white 10%,darkgrey 100%)',
        borderRadius: '50%',
        padding: '4%',
        minWidth: '200px',
        minHeight: '200px',
        filter: ballSelectHighLight1,
        userSelect: 'none'
    };
    const lottoNum2 = {
        fontSize: fontSize,
        fontWeight: '550',
        // backgroundColor: 'white',
        background: 'radial-gradient(circle at top left, white 10%,darkgrey 100%)',
        borderRadius: '50%',
        padding: '4%',
        minWidth: '200px',
        minHeight: '200px',
        filter: ballSelectHighLight2,
        userSelect: 'none'
    };
    const lottoNum3 = {
        fontSize: fontSize,
        fontWeight: '550',
        // backgroundColor: 'white',
        background: 'radial-gradient(circle at top left, white 10%,darkgrey 100%)',
        borderRadius: '50%',
        padding: '4%',
        minWidth: '200px',
        minHeight: '200px',
        filter: ballSelectHighLight3,
        userSelect: 'none'
    };
    const lottoNum4 = {
        fontSize: fontSize,
        fontWeight: '550',
        // backgroundColor: 'white',
        background: 'radial-gradient(circle at top left, white 10%,darkgrey 100%)',
        borderRadius: '50%',
        padding: '4%',
        minWidth: '200px',
        minHeight: '200px',
        filter: ballSelectHighLight4,
        userSelect: 'none'
    };
    const lottoNum5 = {
        fontSize: fontSize,
        fontWeight: '550',
        // backgroundColor: 'white',
        background: 'radial-gradient(circle at top left, white 10%,darkgrey 100%)',
        borderRadius: '50%',
        padding: '4%',
        minWidth: '200px',
        minHeight: '200px',
        filter: ballSelectHighLight5,
        userSelect: 'none'
    };
    const lottoNumMBall = {
        fontSize: fontSize,
        fontWeight: '550',
        // backgroundColor: 'yellow',
        background: 'radial-gradient(circle at top left, white 5%,yellow 100%)',
        borderRadius: '50%',
        padding: '4%',
        minWidth: '200px',
        minHeight: '200px',
        filter: ballSelectHighLight6,
        userSelect: 'none'
    };
    const dash = {
        fontSize: fontSize,
        color: 'white',
        filter: 'drop-shadow(2px 2px 1px black)',
        padding: '5.5%',
        marginTop: '4%'
    };
    const firstNumHisWinStyle = {
        color: 'white',
        fontSize: '1.5rem'
    };
    const occurrenceTextStyle = {
        color: 'white',
        fontSize: '4rem',
        textShadow: '3.5px 3.5px 1px black'
    };
    const oddsTextStyle = {
        color: 'white',
        fontSize: '2rem',
        textShadow: '2px 2px 1px black'
    };
    const ballDescTextStyle = {
        color: 'white',
        fontSize: '2rem',
        textShadow: '2px 2px 2px black',
        fontWeight: '700',
        marginTop: '-45%'
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
    function occurrence(winning) {

        if (firstNum == winning.winning_numbers.slice(0, 2)) {



            if (occ1Array.length >= 0) {

                let newNum = occ1Array.length;

                // setOcc1Test(newNum);

                // console.log(newNum)

                newNum++;
                occ1Array.push(newNum);
                // console.log(occ1Array);
                // setOcc1Count(occ1Array.length)
                
                // console.log(occ1Count)

            };
        };
        // if (secondNum == winning.winning_numbers.slice(3, 5)) {
        //     if (occ2Count >= 1) {
        //         if (occ2Array.length >= 0) {
        //             let newNum = occ2Count;
        //             occ2Count++;
        //             occ2Array.push(newNum);
        //             console.log(occ2Array)
        //         };
        //     };
        // };
        // if (thirdNum == winning.winning_numbers.slice(6, 8)) {
        //     if (occ3Count >= 1) {
        //         if (occ3Array.length >= 0) {
        //             let newNum = occ3Count;
        //             occ3Count++;
        //             occ3Array.push(newNum);
        //         };
        //     };
        // };
        // if (fourthNum == winning.winning_numbers.slice(9, 11)) {
        //     if (occ4Count >= 1) {
        //         if (occ4Array.length >= 0) {
        //             let newNum = occ4Count;
        //             occ4Count++;
        //             occ4Array.push(newNum);
        //         };
        //     };
        // };
        // if (fifthNum == winning.winning_numbers.slice(12, 14)) {
        //     if (occ5Count >= 1) {
        //         if (occ5Array.length >= 0) {
        //             let newNum = occ5Count;
        //             occ5Count++;
        //             occ5Array.push(newNum);
        //             console.log(occ5Array);
        //         };
        //     };
        // };
    };

    //Winning Results .map Function------------------------------------------------------------------------------------------------->
    function mapNLog() {
        return winningNumArr.map((winning, index) => {
            if (formattedRandomNumSpace.replace(/\s/g, '') === (winning.winning_numbers.replace(/\s/g, '') + winning.mega_ball.replace(/\s/g, '')).replace(/\s/g, '')) {
                console.log(`This combination won on : ${winning.draw_date.slice(0, 10)}!!`)
            };
            //Executing the Occurrence Function If A Ball Is Selected
            if (selectFirstNum === true || selectSecondNum === true || selectThirdNum === true || selectFourthNum === true || selectFifthNum === true || selectMBallNum === true) {
                occurrence(winning);
            };
            return (
                //Returning All Occurrences And Display Date For The Selected Number
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
    const fetchWinningNum = async () => {
        let response = await fetch('https://data.ny.gov/resource/5xaw-6ayf.json')
        let data = await response.json();

        setWinningNumArr(data);
        data.map((winning, index) => {
            occurrence(winning)
        });
    };

    //useEffect to Fetch Winning Num------------------------------------------------------------------------------------------------->
    useEffect(() => {
        fetchWinningNum();
    }, []);
    //Ball Click Select Functions
    const selectFirstBall = () => {
        setSelectFirstNum(true);
        setSelectSecondNum(false);
        setSelectThirdNum(false);
        setSelectFourthNum(false);
        setSelectMBallNum(false);

        setBallSelectHighlight1('drop-shadow(0px 15px 4px #EE1D25)');
        setBallSelectHighlight2('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight3('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight4('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight5('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight6('drop-shadow(5px 5px 4px black)');


        // setOcc2Array([]);
        // setOcc3Array([]);
        // setOcc4Array([]);
        // setOcc5Array([]);
        // setOcc6Array([]);
    };
    const selectSecondBall = () => {
        setSelectFirstNum(false);
        setSelectSecondNum(true);
        setSelectThirdNum(false);
        setSelectFourthNum(false);
        setSelectFifthNum(false);
        setSelectMBallNum(false);

        setBallSelectHighlight1('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight2('drop-shadow(0px 15px 4px #EE1D25)');
        setBallSelectHighlight3('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight4('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight5('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight6('drop-shadow(5px 5px 4px black)');

        setOcc1Array([]);

        setOcc3Array([]);
        setOcc4Array([]);
        setOcc5Array([]);
        setOcc6Array([]);
    }
    const selectThirdBall = () => {
        setSelectFirstNum(false);
        setSelectSecondNum(false);
        setSelectThirdNum(true);
        setSelectFourthNum(false);
        setSelectFifthNum(false);
        setSelectMBallNum(false);

        setBallSelectHighlight1('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight2('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight3('drop-shadow(0px 15px 4px #EE1D25)');
        setBallSelectHighlight4('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight5('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight6('drop-shadow(5px 5px 4px black)');

        setOcc1Array([]);
        setOcc2Array([]);

        setOcc4Array([]);
        setOcc5Array([]);
        setOcc6Array([]);
    }
    const selectFourthBall = () => {
        setSelectFirstNum(false);
        setSelectSecondNum(false);
        setSelectThirdNum(false);
        setSelectFourthNum(true);
        setSelectFifthNum(false);
        setSelectMBallNum(false);

        setBallSelectHighlight1('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight2('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight3('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight4('drop-shadow(0px 15px 4px #EE1D25)');
        setBallSelectHighlight5('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight6('drop-shadow(5px 5px 4px black)');

        setOcc1Array([]);
        setOcc2Array([]);
        setOcc3Array([]);

        setOcc5Array([]);
        setOcc6Array([]);
    }
    const selectFifthBall = () => {
        setSelectFirstNum(false);
        setSelectSecondNum(false);
        setSelectThirdNum(false);
        setSelectFourthNum(false);
        setSelectFifthNum(true);
        setSelectMBallNum(false);

        setBallSelectHighlight1('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight2('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight3('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight4('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight5('drop-shadow(0px 15px 4px #EE1D25)');
        setBallSelectHighlight6('drop-shadow(5px 5px 4px black)');

        setOcc1Array([]);
        setOcc2Array([]);
        setOcc3Array([]);
        setOcc4Array([]);

        setOcc6Array([]);
    }
    const selectMBall = () => {
        setSelectFirstNum(false);
        setSelectSecondNum(false);
        setSelectThirdNum(false);
        setSelectFourthNum(false);
        setSelectFifthNum(false);
        setSelectMBallNum(true);

        setBallSelectHighlight1('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight2('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight3('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight4('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight5('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight6('drop-shadow(0px 15px 4px #EE1D25)');


        setOcc1Array([]);
        setOcc2Array([]);
        setOcc3Array([]);
        setOcc4Array([]);

        setOcc6Array([]);
    }
    return (
        <div style={{ margin: '0 auto', paddingTop: '5vh' }}>
            {/* //iFrame Current Jackpot-------------------------------------------------------------------------------------------------> */}
            <div style={{ top: '6vh', left: '6vw', border: '0px solid rgb(201, 0, 1)', borderRadius: '20px', overflow: 'hidden', margin: '0px auto', maxWidth: '300px', maxHeight: '600px', marginBottom: '15%', filter: 'drop-shadow(1px 1px 1px black)', position: 'fixed', transform: 'scale(.6)' }}>
                {/* <iframe title='Draw Counter' scrolling="no" src="https://lottery.com/" style={{ border: '0px none', marginLeft: '-55px', height: '400px', marginBottom: '', marginTop: '-290px', width: '420px' }}>
                </iframe> */}
            </div>
            <p style={oddsTextStyle}> Odds : 1 in 302,575,350.</p>
            {/* //Occurrence Count-------------------------------------------------------------------------------------------------> */}
            {generatorToggle ?
                <div>
                    {selectFirstNum ?
                        <p style={occurrenceTextStyle}>{`Ball #1: ` + `${occ1Array.length == 1 ? `${firstNum} has only ${occ1Array.length} occurrence.` : `${firstNum} has had ${occ1Array.length} occurrences.`}`}</p>
                        : null}
           
                    {selectSecondNum ?
                        <p style={occurrenceTextStyle}>{occ1Array.length}</p>
                        : null}
                    {selectThirdNum ?
                        <p style={occurrenceTextStyle}>{occ3Array.length}</p>
                        : null}
                    {selectFourthNum ?
                        <p style={occurrenceTextStyle}>{occ4Array.length}</p>
                        : null}
                    {selectFifthNum ?
                        <p style={occurrenceTextStyle}>{occ5Array.length}</p>
                        : null}
                </div>
                : null}
            {/* //Current Random # Set Displayed-------------------------------------------------------------------------------------------------> */}
            {generatorToggle ? <p style={occurrenceTextStyle}>{formattedRandomNumDash}</p> : null}
            {/* All Balls Being Displayed w/ OnClicks */}
            {generatorToggle ?
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: '', transform: 'scale(.6)', marginTop: '-15%' }}>
                    {/* //Lotto Balls-------------------------------------------------------------------------------------------------> */}
                    {/* //First Ball-------------------------------------------------------------------------------------------------> */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p style={lottoNum1} onClick={() => {
                            selectFirstBall();
                        }}>{firstNum}</p>
                        <p style={ballDescTextStyle}>Ball #1</p>
                    </div>
                    <p style={dash}>-</p>
                    {/* //Second Ball-------------------------------------------------------------------------------------------------> */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p style={lottoNum2} onClick={() => {
                            selectSecondBall();
                        }}>{secondNum}</p>
                        <p style={ballDescTextStyle}>Ball #2</p>
                    </div>
                    <p style={dash}>-</p>
                    {/* //Third Ball-------------------------------------------------------------------------------------------------> */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p style={lottoNum3} onClick={() => {
                            selectThirdBall();
                        }}>{thirdNum}</p>
                        <p style={ballDescTextStyle}>Ball #3</p>
                    </div>
                    <p style={dash}>-</p>
                    {/* //Fourth Ball-------------------------------------------------------------------------------------------------> */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p style={lottoNum4} onClick={() => {
                            selectFourthBall();
                        }} >{fourthNum}</p>
                        <p style={ballDescTextStyle}>Ball #4</p>
                    </div>
                    <p style={dash}>-</p>
                    {/* //Fifth Ball-------------------------------------------------------------------------------------------------> */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p style={lottoNum5} onClick={() => {
                            selectFifthBall();
                        }} >{fifthNum}</p>
                        <p style={ballDescTextStyle}>Ball #5</p>
                    </div>
                    <p style={dash}>-</p>
                    {/* //Mega Ball-------------------------------------------------------------------------------------------------> */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p style={lottoNumMBall} onClick={() => {
                            selectMBall();
                        }}>{mBallNum}</p>
                        <p style={ballDescTextStyle}>MBall #6</p>
                    </div>
                </div>
                : null};
            {/* //Generate Button-------------------------------------------------------------------------------------------------> */}
            <button style={{ fontSize: '2rem', marginBottom: '4%', marginTop: '-10%', backgroundColor: 'rgba(255, 255, 255, .8)', color: 'black', borderRadius: '5%', outline: 'none', border: 'solid black 5px', padding: '2%', textShadow: '.5px .5px .5px blue', fontWeight: '550' }}
                onClick={() => {
                    if (occ1Array.length > 0 || occ2Array.length > 0 || occ3Array.length > 0 || occ4Array.length > 0 || occ5Array.length > 0 || occ6Array.length > 0) {
                        setOcc1Array([]);
                        setOcc2Array([]);
                        setOcc3Array([]);
                        setOcc4Array([]);
                        setOcc5Array([]);
                        setOcc6Array([]);

                    };

                    setGeneratorToggle(true);
                    // fetchWinningNum();
                    changeRandom();

                }}>Generate!</button>
            {/* //.map Winning Results + Occurrence Function For The Selected Ball-------------------------------------------------------------------------------------------------> */}
            {mapNLog()}
            {/* //iFrame Past Winning # Set-------------------------------------------------------------------------------------------------> */}
            {/* <div style={{ border: '0px solid rgb(201, 0, 1)', borderRadius: '10%', overflow: 'hidden', margin: '0px auto', maxWidth: '580px', maxHeight: '600px', marginBottom: '2%' }}>
                <iframe title="Last Winning #'s" scrolling="no" src="https://www.lottery.net/mega-millions/numbers" style={{ border: '0px none', marginLeft: '-570px', height: '469px', marginBottom: '', marginTop: '-340px', width: '1500px' }}>
                </iframe>
            </div> */}
        </div>
    )
};


export default Generator;