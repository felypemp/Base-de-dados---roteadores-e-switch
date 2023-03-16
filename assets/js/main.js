/*========== VARIÁVEIS ==========*/

const Edd = document.getElementById('edd');
const Cisco = document.querySelector('#cisco')

/*========== FUNÇÕES PARA ABRIR E FECHAR O MODAL ==========*/

const abrirModal = () => {
    document.getElementById('modal').classList.add('ativo')
}

const fecharModal = () => {
    document.getElementById('modal').classList.remove('ativo');
}


/*========== EVENTOS ==========*/

Edd.addEventListener('click', () => {
    abrirModal();
    document.getElementById('tbEdd').classList.remove('esconder');
    document.getElementById('tbCisco').classList.add('esconder');
});

Cisco.addEventListener('click', () => {
    abrirModal();
    document.getElementById('tbCisco').classList.remove('esconder');
    document.getElementById('tbEdd').classList.add('esconder');
})

document.getElementById('modalFechar')
    .addEventListener('click', fecharModal)