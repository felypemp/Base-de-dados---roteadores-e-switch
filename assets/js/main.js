/*========== VARIÁVEIS ==========*/

const Edd = document.getElementById('edd');
const Cisco = document.querySelector('#cisco')
const Raisecom = document.querySelector('#raisecom')
const Dm4100 = document.querySelector('#datacom4100')
const Dm4270 = document.querySelector('#datacom4270')
const Dm4770 = document.querySelector('#datacom4770')
const Qfx = document.querySelector('#qfx')

/*========== FUNÇÕES PARA ABRIR E FECHAR O MODAL ==========*/

const abrirModal = () => {
    document.getElementById('modal').classList.add('ativo')
}

const fecharModal = () => {
    document.getElementById('modal').classList.remove('ativo');
    document.getElementById('tbCisco').classList.add('esconder');
    document.getElementById('tbEdd').classList.add('esconder');
    document.getElementById('tbRaisecom').classList.add('esconder');
    document.getElementById('tbDm4100').classList.add('esconder');
    document.getElementById('tbDm4270').classList.add('esconder');
    document.getElementById('tbDm4770').classList.add('esconder');
    document.getElementById('tbQfx').classList.add('esconder');
}


/*========== FUNÇÃO PARA ABRIR O MODAL PARA CADA EQUIPAMENTO ==========*/

const atualizarTabela = (tabela) => {
    abrirModal();
    if(tabela == 'tbEdd'){
        document.getElementById('tbEdd').classList.remove('esconder');
    } else if (tabela == 'tbCisco') {
        document.getElementById('tbCisco').classList.remove('esconder');
    } else if (tabela == 'tbRaisecom'){
        document.getElementById('tbRaisecom').classList.remove('esconder');
    } else if (tabela == 'tbDm4100'){
        document.getElementById('tbDm4100').classList.remove('esconder');
    } else if (tabela == 'tbDm4270'){
        document.getElementById('tbDm4270').classList.remove('esconder');
    } else if (tabela == 'tbDm4770'){
        document.getElementById('tbDm4770').classList.remove('esconder');
    } else if (tabela == 'tbQfx'){
        document.getElementById('tbQfx').classList.remove('esconder');
    }
}

/*========== EVENTOS ==========*/

Edd.addEventListener('click', () => {
    atualizarTabela('tbEdd');
    
});

Cisco.addEventListener('click', () => {
    atualizarTabela('tbCisco')
})

Raisecom.addEventListener('click', () => {
    atualizarTabela('tbRaisecom')
})

Dm4100.addEventListener('click', () => {
    atualizarTabela('tbDm4100')
})

Dm4270.addEventListener('click', () => {
    atualizarTabela('tbDm4270')
})

Dm4770.addEventListener('click', () => {
    atualizarTabela('tbDm4770')
})

Qfx.addEventListener('click', () => {
    atualizarTabela('tbQfx')
})

document.getElementById('modalFechar')
    .addEventListener('click', fecharModal)