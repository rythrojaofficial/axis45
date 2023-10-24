document.body.onload = addFooter;

function addFooter(){
    
    const footer = document.createElement('div');
    const footLine1 = document.createElement('p');
    const footLine2 = document.createElement('p');

    footer.className = 'footer';
    footLine1.id = 'foot-line-one';
    footLine2.id = 'foot-line-two'; 

    footLine1.innerText = '7701 230th St SW';
    footLine2.innerText = 'Edmonds, WA 98026';
    
    document.body.appendChild(footer);
    footer.appendChild(footLine1);
    footer.appendChild(footLine2);

}



