import readline from 'readline';

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let verificar = [];

class RecintosZoo{
    constructor(){

    }

    analisaRecintos(animal, quantidade) {
        let caracteristicas = [];
        let erro = 0;
        
        //Verificando  se o animal é valido
        for (let i = 0; i < animais.length; i++){
            if(animal.toLowerCase() === animais[i].especie.toLowerCase()){
                caracteristicas = [animais[i].especie, animais[i].tamanho, animais[i].bioma, animais[i].carnivoro];
                break;
            } else {
                erro++;
            }
        }
        if (erro >= animais.length){
            return { erro: "Animal inválido", recintosViaveis: null };
        } //fim da vericação se animal é valido

        //Verificando se a quantidade é valida
        if (quantidade <= 0){
            return {erro: "Quantidade inválida", recintosViaveis: null};
        }

           for (let j = 0; j < recintos.length; j++){
            
            let index = recintos[j].numero - 1;
            let tamanho = -1;
            let resultado = true;

        //Verificando recintos dispniveis
        if (caracteristicas[2][index] === recintos[j].numero) {               
            //Verificando se exixte animais no recinto
             if (recintos[j].especie === "vazio") {

            tamanho = 0;
            tamanho = recintos[j].tamanho - (caracteristicas[1] * quantidade);

            if(recintos[j].especie === "vazio" && caracteristicas[0] === "macaco" && quantidade < 2){
                continue;
            }
            

} else {// Há animais no recinto
   
    //Verfificando se o animal existentee  e o animal do usuário são carnivoros 
    if (recintos[j].carnivoro === true || caracteristicas[3] === true) {
        
        // Verificando se os dois animai ssão carnivoros
        if (recintos[j].carnivoro === true && caracteristicas[3] === true) {
           
            //Verficando se são carnivoros da mesma especie
            if (recintos[j].especie === caracteristicas[0]) {
                 tamanho = 0;
                tamanho =recintos[j].tamanho - (caracteristicas[1] * quantidade);
                tamanho = tamanho - (recintos[j].quantidadeanimaisexistentes * recintos[j].tamanhoanimal); 
            
            } else { // Animais carnivorors de especies diferentes
                tamanho = 0;
                tamanho =recintos[j].tamanho - ((caracteristicas[1] * quantidade));
                tamanho = tamanho - (recintos[j].quantidadeanimaisexistentes * recintos[j].tamanhoanimal); 
                tamanho = tamanho - 1;
            }
        } else {
            resultado = false;
        }
    }// nenhum dos animais é carnivoro
    //Verificando se o animal é um hipopotamo e se ele está no rio com outra especie
    if (caracteristicas[0] === "hipopotamo" && recintos[j].bioma === "savana_rio" && recintos[j].especie != "hipopotamo") {
        tamanho = 0;
        tamanho =recintos[j].tamanho - ((caracteristicas[1] * quantidade));
        tamanho = tamanho - (recintos[j].quantidadeanimaisexistentes * recintos[j].tamanhoanimal); 
        tamanho = tamanho - 1;  

    } else if (caracteristicas[0] === "hipopotamo" && recintos[j].especie === "hipopotamo") {
        //verificando se o hipopotamos está com a mesma especie
         tamanho = 0; 
        tamanho =recintos[j].tamanho - (caracteristicas[1] * quantidade);
        tamanho = tamanho - (recintos[j].quantidadeanimaisexistentes * recintos[j].tamanhoanimal); 

        
        //Verificando se são da mesma especie
    }else if (recintos[j].especie === caracteristicas[0] && resultado === true) {
        tamanho = 0;
        tamanho = recintos[j].tamanho - (caracteristicas[1] * quantidade);
        tamanho = tamanho - (recintos[j].quantidadeanimaisexistentes * recintos[j].tamanhoanimal); 

    } else if (resultado){
        //Calculando disponibilidade do recinto com especies diferentes
        tamanho = 0;
        tamanho = recintos[j].tamanho - ((caracteristicas[1] * quantidade));
        tamanho = tamanho - (recintos[j].quantidadeanimaisexistentes * recintos[j].tamanhoanimal); 
        tamanho = tamanho - 1;           
}
} 

if (tamanho >= 0) {
    let lista = 'Recinto ' +caracteristicas[2][index]+ ' (espaço livre: '  +tamanho+  ' total: ' +recintos[j].tamanho+ ')';
    verificar.push(lista);
}
        }
 }//fim for
if(verificar.length === 0){
    return {erro: "Não há recinto viável", recintosViaveis: null};// recinto nã disponivel
} else {
    return {erro: null, recintosViaveis: verificar};
}
          


    }//fim do método
}//fim da clasee

// Criando os recintos
let recintos = [
    {bioma: "savana", tamanho: 10, tamanhoanimal: 1, quantidadeanimaisexistentes: 3, carnivoro: false, especie: "macaco",numero: 1},
    {bioma: "floresta", tamanho: 5, tamanhoanimal: 0, quantidadeanimaisexistentes: 0, carnivoro: false, especie: "vazio", numero: 2},
    {bioma: "savana_rio", tamanho: 7, tamanhoanimal: 2, quantidadeanimaisexistentes: 1, carnivoro:  false, especie: "gazela", numero: 3},
    {bioma:"rio", tamanho: 8, tamanhoanimal: 0, quantidadeanimaisexistentes: 0, carnivoro: false, especie: "vazio", numero: 4},
    {bioma:"savana", tamanho: 9, tamanhoanimal: 3, quantidadeanimaisexistentes: 1, carnivoro: true, especie: "leão", numero: 5},
];

//Criando animais
let animais = [
    {especie: "leão", tamanho: 3, bioma: [1, 0, 3, 0, 5], carnivoro: true},
    {especie:"leopardo", tamanho: 2, bioma: [1, 0, 3, 0, 5], carnivoro: true},
    {especie:"crocodilo", tamanho: 3, bioma: [0, 0, 0, 4, 0], carnivoro: true},
    {especie:"macaco", tamanho:1, bioma: [1, 2, 3, 0, 5], carnivoro: false},
    {especie:"gazela", tamanho: 2, bioma: [1, 0, 3, 0, 5], carnivoro: false},
    {especie:"hipopotamo", tamanho: 4, bioma: [1, 0, 3, 4, 5], carnivoro: false},
];


entrada.question('Digite o tipo de animal: ', (tipo) => {
    entrada.question('Digite a quantidade de animais: ', (quant) => {
        let imprimi = [];
     
            imprimi = new RecintosZoo().analisaRecintos(tipo, quant);

                console.log(imprimi);
        entrada.close();
    });
});

export {RecintosZoo as RecintosZoo};