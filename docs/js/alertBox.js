window.alert = (message,timeout)=>{
    let alertbox = document.createElement('div');
    let alertok = document.createElement('button');
    alertok.innerText = `OK`;
    alertbox.setAttribute('style',`
        positon : fixed;
        top : 40vh;
        left : 50vw;
        padding : 10px;
        border-radius : 10%;
        box-shadow : 0 10px 5px 0 #00000022;
        display : flex;
        flex-direction : column;
        border : 2px solid #333;
    `);
    alertok.setAttribute('style',`
        border : 1px solid #333;
        background : white;
        border-radius : 5px;
        padding : 5px; 
    `);
    alertbox.appendChild(`<span style="padding:10px">${message}</span>`);
    alertbox.appendChild(alertok);
    alertok.addEventListener('click',()=>{
        alertbox.remove;
    });
    document.body.appendChild(alertbox);
}