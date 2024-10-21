const nomeRegistro = document.getElementById('nome')
const senhaRegistro = document.getElementById('senha-registro')
const senhaRegistroVerificador = document.getElementById('repetir-senha')

function func() {
    const emailLogin = document.getElementById('email-login').value;
    const senhaLogin = document.getElementById('senha-login').value;
    console.log(emailLogin);
     if (emailLogin === 'admin@admin.com')
        if (senhaLogin === 'senha') {
            alert('Você logou, mito');
            window.location.href = 'index.html';
        } else {
            alert("credenciais erradas");
        }
}

function func2() {
    console.log("penis");
    const nomeRegistro = document.getElementById('nome').value;
    const senhaRegistro = document.getElementById('senha-registro').value;
    const senhaRegistroVerificador = document.getElementById('repetir-senha').value;

    if (nomeRegistro.length < 3) {
        alert("nome muito curto")
        return;
    }

    if (senhaRegistro !== senhaRegistroVerificador) {
        alert("As senhas devem ser iguais");
    }

    alert("Registrado com sucesso");
    window.location.href = 'index.html';
    //voltar pro main lembrar pinto mijo xixi coco
}
