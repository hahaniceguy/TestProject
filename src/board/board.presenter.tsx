import {Wrapper, UploadButton} from './board.style'

export default function BoardUI({num, handleClickPlus, handleClickMinus, fnFileChage}){
    return(
        <Wrapper>
            <UploadButton type="file" id="inputFile" onChange={fnFileChage} multiple></UploadButton>
            <div id="fileDiv"></div>
            <button onClick={handleClickPlus} style={{width:"50px"}}>+1</button>
            <button onClick={handleClickMinus} style={{width:"50px"}}>-1</button>
        </Wrapper>
    )    
}