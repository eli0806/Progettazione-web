

function isPrime(n){
    if(n<2) return false;
    const limite=Math.sqrt(n);
    for(let i=2;i<=limite;i++){
        if(n%i===0){
            return false;
        }
    }
    return true;

}

function createRow(col, fnum){
    const row=document.createElement("tr");
    for(let i=0;i<col;i++){
        const value=fnum+i;
        const cella=document.createElement("td");
        if(isPrime(value)){
            cella.classList.add("prime");
        }
        cella.textContent=value;
        row.appendChild(cella);
    }
    return row;
}

function createTable(R,C){
    const Table=document.createElement("Table");
    const body=document.createElement("tbody");
    for(let i=0;i<R;i++){
        body.appendChild(createRow(C,i*C+1));
    }
    Table.appendChild(body);
    const b=document.querySelector("body");
    b.appendChild(Table);
    return Table;
  
}


let R=prompt("Quante righe?", "5");
let C=prompt("Quante colonne?", "4");

if(R !==null && C!==null){
    const rows=Number(R);
    const col=Number(C);
    if(Number.isInteger(rows) && rows>0 && Number.isInteger(col) && col>0){
        createTable(rows,col);
    }else{
        alert("Il numero inserito deve essere un intero positivo! Reinserire");
    }
}




