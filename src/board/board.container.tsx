import { useState, useEffect } from "react";
import BoardUI from "./board.presenter";

export default function BoardPage(){

    const [num, setNum] = useState(1);

    let number = num;
    
    const handleClickPlus = () => {
        setNum(num + 1)
    }

    const handleClickMinus = () =>{
        if(number){
            setNum(number - 1)
            if(number = 0){
                return;
            }
        }
    }

    const fnFileChage = (e) => {
        // console.log(e.currentTarget.files);
        let filelist = "";
        for(let i=0; i < e.currentTarget.files.length; i++){
            if(i == 0){
                filelist += e.currentTarget.files[i].name;                
            }else{
                filelist += ", " + e.currentTarget.files[i].name;                
            }
        }
        // console.log("test =",test)
        //filelist;

        document.getElementById("fileDiv").innerText = filelist;
        // $(".fileDiv").innerText = "test"
    }

    return(
        <BoardUI num={num} handleClickPlus={handleClickPlus} handleClickMinus={handleClickMinus} fnFileChage={fnFileChage}></BoardUI>
    )
}