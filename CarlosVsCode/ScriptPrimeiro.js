let custoCeleste = 399.99
let descontoSocioCeleste = custoCeleste * 20 / 100
let precoComDescontoCeleste = custoCeleste - descontoSocioCeleste
function comprarCamisaCeleste(){        
alert("O custo da camisa é de: R$" + precoComDescontoCeleste.toFixed(2))

}
let custoClassica = 339.99
let descontoSocioClassica = custoClassica * 20 / 100
let precoComDescontoClassica = custoClassica - descontoSocioClassica
function comprarCamisaClassica(){
 alert("O custo da camisa clássica é de:R$" + precoComDescontoClassica.toFixed(2))
}