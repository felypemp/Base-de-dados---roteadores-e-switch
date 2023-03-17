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
}


/*========== FUNÇÃO ==========*/



/*========== EVENTOS ==========*/

Edd.addEventListener('click', () => {
    abrirModal();
    document.getElementById('tbEdd').classList.remove('esconder');
    document.getElementById('tbCisco').classList.add('esconder');
    document.getElementById('tbRaisecom').classList.add('esconder');
    document.getElementById('tbDm4100').classList.add('esconder');
    document.getElementById('tbDm4770').classList.add('esconder');
    document.getElementById('tbQfx').classList.add('esconder');
});

Cisco.addEventListener('click', () => {
    abrirModal();
    document.getElementById('tbCisco').classList.remove('esconder');
    document.getElementById('tbEdd').classList.add('esconder');
    document.getElementById('tbRaisecom').classList.add('esconder');
    document.getElementById('tbDm4100').classList.add('esconder');
    document.getElementById('tbDm4270').classList.add('esconder');
    document.getElementById('tbDm4770').classList.add('esconder');
    document.getElementById('tbQfx').classList.add('esconder');
})

Raisecom.addEventListener('click', () => {
    abrirModal();
    document.getElementById('tbCisco').classList.add('esconder');
    document.getElementById('tbEdd').classList.add('esconder');
    document.getElementById('tbRaisecom').classList.remove('esconder');
    document.getElementById('tbDm4100').classList.add('esconder');
    document.getElementById('tbDm4270').classList.add('esconder');
    document.getElementById('tbDm4770').classList.add('esconder');
    document.getElementById('tbQfx').classList.add('esconder');
})

Dm4100.addEventListener('click', () => {
    abrirModal();
    document.getElementById('tbCisco').classList.add('esconder');
    document.getElementById('tbEdd').classList.add('esconder');
    document.getElementById('tbRaisecom').classList.add('esconder');
    document.getElementById('tbDm4100').classList.remove('esconder');
    document.getElementById('tbDm4270').classList.add('esconder');
    document.getElementById('tbDm4770').classList.add('esconder');
    document.getElementById('tbQfx').classList.add('esconder');
})

Dm4270.addEventListener('click', () => {
    abrirModal();
    document.getElementById('tbCisco').classList.add('esconder');
    document.getElementById('tbEdd').classList.add('esconder');
    document.getElementById('tbRaisecom').classList.add('esconder');
    document.getElementById('tbDm4100').classList.add('esconder');
    document.getElementById('tbDm4270').classList.remove('esconder');
    document.getElementById('tbDm4770').classList.add('esconder');
    document.getElementById('tbQfx').classList.add('esconder');
})

Dm4770.addEventListener('click', () => {
    abrirModal();
    document.getElementById('tbCisco').classList.add('esconder');
    document.getElementById('tbEdd').classList.add('esconder');
    document.getElementById('tbRaisecom').classList.add('esconder');
    document.getElementById('tbDm4100').classList.add('esconder');
    document.getElementById('tbDm4270').classList.add('esconder');
    document.getElementById('tbDm4770').classList.remove('esconder');
    document.getElementById('tbQfx').classList.add('esconder');
})

Qfx.addEventListener('click', () => {
    abrirModal();
    document.getElementById('tbCisco').classList.add('esconder');
    document.getElementById('tbEdd').classList.add('esconder');
    document.getElementById('tbRaisecom').classList.add('esconder');
    document.getElementById('tbDm4100').classList.add('esconder');
    document.getElementById('tbDm4270').classList.add('esconder');
    document.getElementById('tbDm4770').classList.add('esconder');
    document.getElementById('tbQfx').classList.remove('esconder');
})



document.getElementById('modalFechar')
    .addEventListener('click', fecharModal)