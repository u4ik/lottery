import React, { useState, useEffect } from 'react';
const Generator = () => {
    //! Assigning Random Generated #'s To States --------------------------------------------------------------------------->
    const [firstNum, setFirstNum] = useState('1');
    const [secondNum, setSecondNum] = useState('2');
    const [thirdNum, setThirdNum] = useState('3');
    const [fourthNum, setFourthNum] = useState('4');
    const [fifthNum, setFifthNum] = useState('5');
    const [mBallNum, setMBallNum] = useState('6');
    //! Next Jackpot (NOT IN USE)
    const [nextJackpot, setNextJackpot] = useState('');
    //! Ball Is Selected
    const [ballSelected, setBallSelected] = useState(false);
    //! Selecting Number Via. Click----------------------------------------------------------------------------------------->
    const [selectFirstNum, setSelectFirstNum] = useState(false);
    const [selectSecondNum, setSelectSecondNum] = useState(false);
    const [selectThirdNum, setSelectThirdNum] = useState(false);
    const [selectFourthNum, setSelectFourthNum] = useState(false);
    const [selectFifthNum, setSelectFifthNum] = useState(false);
    const [selectMBallNum, setSelectMBallNum] = useState(false);
    //! All Winning #'s Stored In This Array-------------------------------------------------------------------------------->
    const [winningNumArr, setWinningNumArr] = useState([]);
    //! Displays Content and Random #'s Once User Clicks The 'Generate Button!'--------------------------------------------->
    const [generatorToggle, setGeneratorToggle] = useState(false);
    //!Occurrence Array Built For Each Selected Ball----------------------------------------------------------------------->
    const [occ1Array, setOcc1Array] = useState([]);
    const [occ2Array, setOcc2Array] = useState([]);
    const [occ3Array, setOcc3Array] = useState([]);
    const [occ4Array, setOcc4Array] = useState([]);
    const [occ5Array, setOcc5Array] = useState([]);
    const [occ6Array, setOcc6Array] = useState([]);
    //! Select Ball On Click Drop Shadow------------------------------------------------------------------------------------>
    const [ballSelectHighLight1, setBallSelectHighlight1] = useState('drop-shadow(5px 5px 4px black)');
    const [ballSelectHighLight2, setBallSelectHighlight2] = useState('drop-shadow(5px 5px 4px black)');
    const [ballSelectHighLight3, setBallSelectHighlight3] = useState('drop-shadow(5px 5px 4px black)');
    const [ballSelectHighLight4, setBallSelectHighlight4] = useState('drop-shadow(5px 5px 4px black)');
    const [ballSelectHighLight5, setBallSelectHighlight5] = useState('drop-shadow(5px 5px 4px black)');
    const [ballSelectHighLight6, setBallSelectHighlight6] = useState('drop-shadow(5px 5px 4px black)');
    //! Random # Array------------------------------------------------------------------------------------------------------>
    var numArr = [firstNum, secondNum, thirdNum, fourthNum, fifthNum, mBallNum];
    //! Occurrence # Array-------------------------------------------------------------------------------------------------->
    let occ1Count = 0;
    let occ2Count = 0;
    let occ3Count = 0;
    let occ4Count = 0;
    let occ5Count = 0;
    let occ6Count = 0;
    //! Formatted Arrays---------------------------------------------------------------------------------------------------->
    let formattedRandomNumDash = numArr[0] + '-' + numArr[1] + '-' + numArr[2] + '-' + numArr[3] + '-' + numArr[4] + '-' + numArr[5];
    let formattedRandomNumSpace = numArr[0] + ' ' + numArr[1] + ' ' + numArr[2] + ' ' + numArr[3] + ' ' + numArr[4] + ' ' + numArr[5];
    //! Global Font...for now----------------------------------------------------------------------------------------------->
    let fontSize = '8rem';
    //! CSS Styles---------------------------------------------------------------------------------------------------------->
    const lottoNum1 = {
        filter: ballSelectHighLight1,
    };
    const lottoNum2 = {
        filter: ballSelectHighLight2,
    };
    const lottoNum3 = {
        filter: ballSelectHighLight3,
    };
    const lottoNum4 = {
        filter: ballSelectHighLight4,
    };
    const lottoNum5 = {
        filter: ballSelectHighLight5,
    };
    const lottoNumMBall = {
        filter: ballSelectHighLight6,
        background: 'radial-gradient(circle at bottom right, yellow 15%, darkgrey 100%)'
    };
    const dash = {
        fontSize: '1em',
        color: 'white',
        filter: 'drop-shadow(2px 2px 1px black)',
        // padding: '5.5%',
        // marginTop: '5%',
        display: 'none'
    };
    const numHasWonStyle = {
        color: 'white',
        fontSize: '1.5rem'
    };
    const winningDatesText = {
        color: 'white',
        fontSize: '2rem',
        userSelect: 'none'
    }
    const occurrenceTextStyle = {
        color: 'white',
        fontSize: '2em',
        textShadow: '1.5px 1.5px 1px black',
        userSelect:'none'
    };
    const oddsTextStyle = {
        color: 'white',
        fontSize: '2rem',
        textShadow: '2px 2px 1px black',
        userSelect: 'none',
        
    };
    const ballDescTextStyle = {
        color: 'white',
        // fontSize: '2rem',
        textShadow: '2px 2px 2px black',
        fontWeight: '700',
        // marginTop: '-45%',
        // marginBlockStart:'0 !important',
        // marginBlockEnd:'0 !important'
        // margin:'none !important'
    };
    const oddTextStyle = {
        fontSize: '2rem',
        color: 'red',
        fontWeight: 'bold',
        textShadow: '2px 2px 2px black',

    };
    const evenTextStyle = {
        fontSize: '2rem',
        color: 'limegreen',
        fontWeight: 'bold',
        textShadow: '2px 2px 2px black',
    };
    //! Random # Generator Within Bounds------------------------------------------------------------------------------------>
    const randomNumber = (min, max) => {
        let randNum = Math.floor(Math.random() * (max - min) + min);
        if (randNum < 10) {
            let newNumWithZero = '0' + randNum.toString();
            //let newVar = parseInt(newNumWithZero, 10)
            //console.log(typeof newNumWithZero)
            return newNumWithZero;
        } else {
            return randNum
        }
    };
    //! Random # Set Generator---------------------------------------------------------------------------------------------->
    const changeRandom = () => {
        setFirstNum(randomNumber(1, 71).toString());
        setSecondNum(randomNumber(1, 71).toString());
        setThirdNum(randomNumber(1, 71).toString());
        setFourthNum(randomNumber(1, 71).toString());
        setFifthNum(randomNumber(1, 71).toString());
        setMBallNum(randomNumber(1, 26).toString());
    };
    //! Occurrence Function------------------------------------------------------------------------------------------------->
    const occurrence = (winning) => {
        if (selectFirstNum) {
            if (firstNum == winning.winning_numbers.slice(0, 2)) {
                if (occ1Count >= 0) {
                    let newNum = occ1Array.length;
                    newNum++;
                    occ1Array.push(newNum);
                    occ1Count = occ1Array.length
                };
            };
        };
        if (selectSecondNum) {
            if (secondNum == winning.winning_numbers.slice(3, 5)) {
                if (occ2Count >= 0) {
                    let newNum = occ2Array.length;
                    newNum++;
                    occ2Count++;
                    occ2Array.push(newNum);
                    occ2Count = occ2Array.length;
                };
            };
        };
        if (selectThirdNum) {
            if (thirdNum == winning.winning_numbers.slice(6, 8)) {
                if (occ3Count >= 0) {
                    if (occ3Array.length >= 0) {
                        let newNum = occ3Array.length;
                        newNum++;
                        occ3Array.push(newNum);
                        occ3Count = occ3Array.length
                    };
                };
            };
        };
        if (selectFourthNum) {
            if (fourthNum == winning.winning_numbers.slice(9, 11)) {
                if (occ4Count >= 0) {
                    if (occ4Array.length >= 0) {
                        let newNum = occ4Array.length;
                        newNum++;
                        occ4Array.push(newNum);
                        occ4Count = occ4Array.length
                    };
                };
            };
        };
        if (selectFifthNum) {
            if (fifthNum == winning.winning_numbers.slice(12, 14)) {
                if (occ5Count >= 0) {
                    if (occ5Array.length >= 0) {
                        let newNum = occ5Array.length;
                        newNum++;
                        occ5Array.push(newNum);
                        occ5Count = occ5Array.length
                    };
                };
            };
        };
        if (selectMBallNum) {
            if (mBallNum == winning.mega_ball) {
                if (occ6Count >= 0) {
                    if (occ6Array.length >= 0) {
                        let newNum = occ6Array.length;
                        newNum++;
                        occ6Array.push(newNum);
                        occ6Count = occ6Array.length
                    };
                };
            };
        };
    };
    //! Executing the Occurrence Function If A Ball Is Selected
    if (selectFirstNum === true || selectSecondNum === true || selectThirdNum === true || selectFourthNum === true || selectFifthNum === true || selectMBallNum === true) {
        winningNumArr.map((winning => {
            occurrence(winning);
        }))
    };
    //! Winning Results .map Function--------------------------------------------------------------------------------------->
    const mapNLog = () => {
        return winningNumArr.map((winning, index) => {
            //! If All Random #'s Match
            if (formattedRandomNumSpace.replace(/\s/g, '') === (winning.winning_numbers.replace(/\s/g, '') + winning.mega_ball.replace(/\s/g, '')).replace(/\s/g, '')) {
                console.log(`This combination won on : ${winning.draw_date.slice(0, 10)}!!`)
            };
            return (
                //! Returning All Occurrences And Display Date For The Selected Number
                <div key={index} >

                    {
                        selectFirstNum ?
                            <div> {firstNum == winning.winning_numbers.slice(0, 2) ?

                                <ul >
                                    <li style={numHasWonStyle} > The number : {firstNum},
                            has won at the first position on: {winning.draw_date.slice(0, 10)} </li>
                                </ul > : null
                            } </div> : null
                    } {
                        selectSecondNum ?
                            <div > {
                                secondNum == winning.winning_numbers.slice(3, 5) ?
                                    <ul >
                                        <li style={numHasWonStyle} > The number : {secondNum},
                                has won at the second position on: {winning.draw_date.slice(0, 10)} </li>
                                    </ul > : null
                            } </div> : null
                    } {
                        selectThirdNum ?
                            <div> {
                                thirdNum == winning.winning_numbers.slice(6, 8) ?
                                    <ul >
                                        <li style={numHasWonStyle} > The number : {thirdNum},
                                has won at the third position on: {winning.draw_date.slice(0, 10)} </li>
                                    </ul > : null
                            }
                            </div> : null
                    } {
                        selectFourthNum ?
                            <div> {
                                fourthNum == winning.winning_numbers.slice(9, 11) ?
                                    <ul >
                                        <li style={numHasWonStyle} > The number : {fourthNum},
                                has won at the fourth position on: {winning.draw_date.slice(0, 10)} </li>
                                    </ul > : null
                            } </div> : null
                    } {
                        selectFifthNum ?
                            <div> {
                                fifthNum == winning.winning_numbers.slice(12, 14) ?
                                    <ul>
                                        <li style={numHasWonStyle} > The number : {fifthNum},
                                has won at the fifth position on: {winning.draw_date.slice(0, 10)} </li>
                                    </ul > : null
                            } </div> : null
                    } {
                        selectMBallNum ?
                            <div > {
                                mBallNum == winning.mega_ball ?
                                    <ul>
                                        <li style={numHasWonStyle} > The number : {mBallNum},
                                has won at this position on: {winning.draw_date.slice(0, 10)} </li>
                                    </ul > : null
                            } </div> : null
                    } </div>
            )
        });
    };
    const fetchNextJackpot = async () => {
        const results = await fetch('https://api.collectapi.com/chancegame/usaMegaMillions', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `apikey ${process.env.REACT_APP_API}`
            }
        });
        const jsonResults = await results.json();
        console.log(jsonResults);
        setNextJackpot(jsonResults);
    }

    //! Fetch Winning Results Function-------------------------------------------------------------------------------------->
    const fetchWinningNum = async () => {
        let response = await fetch('https://data.ny.gov/resource/5xaw-6ayf.json')
        let data = await response.json();
        // console.log(data)
        setWinningNumArr(data);
    };
    //! useEffect to Fetch Winning Num On Page Load------------------------------------------------------------------------->
    useEffect(() => {
        fetchWinningNum();
        // fetchNextJackpot();
    }, []);
    //! Ball Click Select Functions
    const selectFirstBall = () => {
        setSelectFirstNum(true);
        setSelectSecondNum(false);
        setSelectThirdNum(false);
        setSelectFourthNum(false);
        setSelectFifthNum(false);
        setSelectMBallNum(false);

        setBallSelectHighlight1('drop-shadow(0px 7px 4px #1a17ce)');
        setBallSelectHighlight2('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight3('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight4('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight5('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight6('drop-shadow(5px 5px 4px black)');

        setOcc1Array([]);
        setOcc2Array([]);
        setOcc3Array([]);
        setOcc4Array([]);
        setOcc5Array([]);
        setOcc6Array([]);

        setBallSelected(true);
    };
    const selectSecondBall = () => {
        setSelectFirstNum(false);
        setSelectSecondNum(true);
        setSelectThirdNum(false);
        setSelectFourthNum(false);
        setSelectFifthNum(false);
        setSelectMBallNum(false);

        setBallSelectHighlight1('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight2('drop-shadow(0px 7px 4px #1a17ce)');
        setBallSelectHighlight3('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight4('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight5('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight6('drop-shadow(5px 5px 4px black)');


        setOcc1Array([]);
        setOcc2Array([]);
        setOcc3Array([]);
        setOcc4Array([]);
        setOcc5Array([]);
        setOcc6Array([]);
        setBallSelected(true);
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
        setBallSelectHighlight3('drop-shadow(0px 7px 4px #1a17ce)');
        setBallSelectHighlight4('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight5('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight6('drop-shadow(5px 5px 4px black)');

        setOcc1Array([]);
        setOcc2Array([]);
        setOcc3Array([]);
        setOcc4Array([]);
        setOcc5Array([]);
        setOcc6Array([]);
        setBallSelected(true);
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
        setBallSelectHighlight4('drop-shadow(0px 7px 4px #1a17ce)');
        setBallSelectHighlight5('drop-shadow(5px 5px 4px black)');
        setBallSelectHighlight6('drop-shadow(5px 5px 4px black)');

        setOcc1Array([]);
        setOcc2Array([]);
        setOcc3Array([]);
        setOcc4Array([]);
        setOcc5Array([]);
        setOcc6Array([]);
        setBallSelected(true);
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
        setBallSelectHighlight5('drop-shadow(0px 7px 4px #1a17ce)');
        setBallSelectHighlight6('drop-shadow(5px 5px 4px black)');

        setOcc1Array([]);
        setOcc2Array([]);
        setOcc3Array([]);
        setOcc4Array([]);
        setOcc5Array([]);
        setOcc6Array([]);
        setBallSelected(true);
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
        setBallSelectHighlight6('drop-shadow(0px 7px 4px #1a17ce)');

        setOcc1Array([]);
        setOcc2Array([]);
        setOcc3Array([]);
        setOcc4Array([]);
        setOcc5Array([]);
        setOcc6Array([]);

        setBallSelected(true);

    }
    return (
        <div style={{ margin: '0 auto', paddingTop: '' }}>

            { /* //! iFrame Current Jackpot-----------------------------------------------------------------------------------> */}
            <div style={{ top: '6vh', left: '6vw', border: '0px solid rgb(201, 0, 1)', borderRadius: '20px', overflow: 'hidden', margin: '0px auto', maxWidth: '800px', maxHeight: '600px', marginBottom: '15%', filter: 'drop-shadow(1px 1px 1px black)', position: 'fixed', transform: 'scale(.6)', zIndex: 2 }} >
                {/* <iframe title = 'Draw Counter'scrolling = "no"src = "https://lottery.com/"style = {{ border: '0px none', marginLeft: '-360px', height: '400px', marginBottom: '', marginTop: '-290px', width: '770px' }} >
                </iframe>  */}
            </div >
            <div>
                {/* <p style={oddsTextStyle} >{nextJackpot.result ? "Next Jackpot: "+nextJackpot.result['next-jackpot'].amount : null}</p> */}
                {!generatorToggle ?
                    <>
                        <p style={oddsTextStyle} > Odds: 1 in 302, 575, 350. </p>
                        <p style={{ fontSize: '1em', color: 'white', userSelect: 'none' }} > Good Luck!</p>
                    </>
                    : null}

                {generatorToggle === true && !selectFirstNum && !selectSecondNum && !selectThirdNum && !selectFourthNum && !selectFifthNum && !selectMBallNum ?
                    <p style={{ fontSize: '1em', color: 'white',userSelect:'none' }} > Click a ball to view its past winning history.</p>
                    : null}
            </div>
            { /* //! Occurrence Count Display----------------------------------------------------------------------------------> */}
            {generatorToggle ?
                <div style={{ minHeight: ballSelected ? '25vh' : '', display: 'flex', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }} >
                    {selectFirstNum ?
                        <p style={occurrenceTextStyle} > {`Ball #1: ` + `${occ1Array.length == 0 ? `${firstNum} has not won in this position.` : occ1Array.length == 1 ? `${firstNum} has had only ${occ1Array.length} winning occurrence in this position.` : `${firstNum} has had ${occ1Array.length} winning occurrences in this position.`}`}</p>
                        : null}

                    {selectSecondNum ?
                        <p style={occurrenceTextStyle}>{`Ball #2: ` + `${occ2Array.length == 0 ? `${secondNum} has not won in this position.` : occ2Array.length == 1 ? `${secondNum} has had only ${occ2Array.length} winning occurrence in this position.` : `${secondNum} has had ${occ2Array.length} winning occurrences in this position.`}`}</p>
                        : null}
                    {selectThirdNum ?
                        <p style={occurrenceTextStyle}>{`Ball #3: ` + `${occ3Array.length == 0 ? `${thirdNum} has not won in this position.` : occ3Array.length == 1 ? `${thirdNum} has had only ${occ3Array.length} winning occurrence in this position.` : `${thirdNum} has had ${occ3Array.length} winning occurrences in this position.`}`}</p>
                        : null}
                    {selectFourthNum ?
                        <p style={occurrenceTextStyle}>{`Ball #4: ` + `${occ4Array.length == 0 ? `${fourthNum} has not won in this position.` : occ4Array.length == 1 ? `${fourthNum} has had only ${occ4Array.length} winning occurrence in this position.` : `${fourthNum} has had ${occ4Array.length} winning occurrences in this position.`}`}</p>
                        : null}
                    {selectFifthNum ?
                        <p style={occurrenceTextStyle}>{`Ball #5: ` + `${occ5Array.length == 0 ? `${fifthNum} has not won in this position.` : occ5Array.length == 1 ? `${fifthNum} has had only ${occ5Array.length} winning occurrence in this position.` : `${fifthNum} has had ${occ5Array.length} winning occurrences in this position.`}`}</p>
                        : null}
                    {selectMBallNum ?
                        <p style={occurrenceTextStyle}>{`MBall #6: ` + `${occ6Array.length == 0 ? `${mBallNum} has not won in this position.` : occ6Array.length == 1 ? `${mBallNum} has had only ${occ6Array.length} winning occurrence in this position.` : `${mBallNum} has had ${occ6Array.length} winning occurrences in this position.`}`}</p>
                        : null}
                </div>
                : null}
            {/* //! Current Random # Set Displayed----------------------------------------------------------------------------> */}
            {/* {generatorToggle ? <p style={occurrenceTextStyle}>{formattedRandomNumDash}</p> : null} */}
            {/* All Balls Being Displayed w/ OnClicks */}
            {generatorToggle ?
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', transform: '', marginTop: '', width: '100vw' }} className='ballWrapper'>
                    {/* //! Lotto Balls-------------------------------------------------------------------------------------------------> */}
                    {/* //! First Ball-------------------------------------------------------------------------------------------------> */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '1%' }}>
                        <div style={lottoNum1} className='balls' onClick={() => {

                            selectFirstBall();

                        }}>
                            <p className='ballText' >{firstNum}</p>
                        </div>
                        <p style={ballDescTextStyle} className='ballDesc'>Ball #1</p>
                        {firstNum % 2 == 0 ? <p style={evenTextStyle} className='evenTextStyle'>Even</p> : <p style={oddTextStyle} className='oddTextStyle'>Odd</p>}
                    </div>
                    <p style={dash}>-</p>
                    {/* //! Second Ball-------------------------------------------------------------------------------------------------> */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '1%' }}>
                        <div style={lottoNum2} className='balls' onClick={() => {
                            selectSecondBall();
                        }}>
                            <p className='ballText' >{secondNum}</p>
                        </div>
                        <p style={ballDescTextStyle} className='ballDesc'>Ball #2</p>
                        {secondNum % 2 == 0 ? <p style={evenTextStyle} className='evenTextStyle'>Even</p> : <p style={oddTextStyle} className='oddTextStyle'>Odd</p>}

                    </div>
                    <p style={dash}>-</p>
                    {/* //! Third Ball-------------------------------------------------------------------------------------------------> */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '1%' }}>
                        <div style={lottoNum3} className='balls' onClick={() => {
                            selectThirdBall();
                        }}>
                            <p className='ballText' >{thirdNum}</p>
                        </div>
                        <p style={ballDescTextStyle} className='ballDesc'>Ball #3</p>
                        {thirdNum % 2 == 0 ? <p style={evenTextStyle} className='evenTextStyle'>Even</p> : <p style={oddTextStyle} className='oddTextStyle'>Odd</p>}

                    </div>
                    <p style={dash}>-</p>
                    {/* //! Fourth Ball-------------------------------------------------------------------------------------------------> */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '1%' }}>
                        <div style={lottoNum4} className='balls' onClick={() => {
                            selectFourthBall();
                        }}>
                            <p className='ballText'  >{fourthNum}</p>
                        </div>
                        <p style={ballDescTextStyle} className='ballDesc'>Ball #4</p>
                        {fourthNum % 2 == 0 ? <p style={evenTextStyle} className='evenTextStyle'>Even</p> : <p style={oddTextStyle} className='oddTextStyle'>Odd</p>}

                    </div>
                    <p style={dash}>-</p>
                    {/* //! Fifth Ball-------------------------------------------------------------------------------------------------> */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '1%' }}>
                        <div style={lottoNum5} className='balls' onClick={() => {
                            selectFifthBall();
                        }}>
                            <p className='ballText'  >{fifthNum}</p>
                        </div>
                        <p style={ballDescTextStyle} className='ballDesc'>Ball #5</p>
                        {fifthNum % 2 == 0 ? <p style={evenTextStyle} className='evenTextStyle'>Even</p> : <p style={oddTextStyle} className='oddTextStyle'>Odd</p>}

                    </div>
                    <p style={dash}>-</p>
                    {/* //! Mega Ball-------------------------------------------------------------------------------------------------> */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '1%' }}>
                        <div style={lottoNumMBall} className='balls' onClick={() => {
                            selectMBall();
                        }}>
                            <p className='ballText' >{mBallNum}</p>
                        </div>
                        <p style={ballDescTextStyle} className='ballDesc'>Ball #6</p>
                        {mBallNum % 2 == 0 ? <p style={evenTextStyle} className='evenTextStyle'>Even</p> : <p style={oddTextStyle} className='oddTextStyle'>Odd</p>}

                    </div>
                </div>
                : null}
            {/* //! Generate Button---------------------------------------------------------------------------------------------> */}
            <button style={{}}
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
                    changeRandom();
                }}>Generate!</button>
            {/* //! .map Winning Results + Occurrence Function For The Selected Ball----------------------------------------------> */}
            {occ1Array.length > 0 || occ2Array.length > 0 || occ3Array.length > 0 || occ4Array.length > 0 || occ5Array.length > 0 || occ6Array.length > 0 ? <p style={winningDatesText}>Winning Dates:</p> : null}
            <div style={{ marginLeft: '5%', marginRight: '5%' }}>
                {mapNLog()}
            </div>
            {/* //! iFrame Past Winning # Set-------------------------------------------------------------------------------------------------> */}
            <div style={{ border: '0px solid rgb(201, 0, 1)', borderRadius: '10%', overflow: 'hidden', margin: '0px auto', maxWidth: '580px', maxHeight: '600px', marginBottom: '2%' }}>
                {/* <iframe title="Last Winning #'s" scrolling="no" src="https://www.lottery.net/mega-millions/numbers" style={{ border: '0px none', marginLeft: '-570px', height: '469px', marginBottom: '', marginTop: '-340px', width: '1500px' }}>
                </iframe> */}
            </div>
        </div>

    )
};

export default Generator;