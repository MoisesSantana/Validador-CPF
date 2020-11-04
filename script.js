function calcular(){
    var CPF = document.querySelector('#CPF').value
    var result = document.querySelector('#result')
    if((CPF.length != 14) || (CPF[3] != '.') || (CPF[7] != '.') || (CPF[11] != '-')){
        alert('[ERRO] - Não esqueça de usar pontos "." e traço "-" como no exemplo')
    }else{
        var CPFAR = []
        for(var i=0; i<CPF.length; i++) {
            if((i == 3) || (i == 7) || (i == 11)){
                i++
            } else {
                i = i
            }
            CPFAR.push(CPF[i])
        }
        var dezADois = [10, 9, 8, 7, 6, 5, 4, 3, 2]
        var multiCPF = []
        var somaMult = 0
        for(var i=0; i< dezADois.length; i++) {
            multiCPF[i] = CPFAR[i] * dezADois[i]
            somaMult += multiCPF[i]
        }
        var teste = somaMult%11
        if(teste < 2){
            if(CPFAR[9] != 0){
                result.style.fontStyle = 'none'
                result.style.color = 'red'
                result.style.fontWeight = 'bolder'
                result.innerHTML = `O CPF: ${CPF} é inválido`
            }else{
                dezADois.push(1)
                for(var i=0; i<dezADois.length; i++) {
                    dezADois[i] += 1
                }
            }
        }else {
            if(CPFAR[9] != 11-teste){
                result.style.fontStyle = 'none'
                result.style.color = 'red'
                result.style.fontWeight = 'bolder'
                result.innerHTML = `O CPF: ${CPF} é inválido`
            }else {
                dezADois.push(1)
                for(var i=0; i<dezADois.length; i++) {
                    dezADois[i] += 1
                }
            }
        }
        somaMult = 0
        multiCPF = []
        for(var i=0; i<dezADois.length;i++){
            multiCPF[i] = CPFAR[i] * dezADois[i]
            somaMult += multiCPF[i]
        }
        teste = somaMult%11
        if(teste < 2){
            if(CPFAR[10] != 0){
                result.style.fontStyle = 'none'
                result.style.color = 'red'
                result.style.fontWeight = 'bolder'
                result.innerHTML = `O CPF: ${CPF} é inválido`
            }else{
                result.style.fontStyle = 'none'
                result.style.color = 'blue'
                result.style.fontWeight = 'bolder'
                result.innerHTML = `O CPF: ${CPF} é válido`
            }
        }else {
            if(CPFAR[10] != 11-teste){
                result.style.fontStyle = 'none'
                result.style.color = 'red'
                result.style.fontWeight = 'bolder'
                result.innerHTML = `O CPF: ${CPF} é inválido`
            }else {
                result.style.fontStyle = 'none'
                result.style.color = 'blue'
                result.style.fontWeight = 'bolder'
                result.innerHTML = `O CPF: ${CPF} é válido`
            }
        }
    } 
}