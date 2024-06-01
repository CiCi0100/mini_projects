// 705.484.450-52 070.987.720-03
class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas) {
            alert('Formulário enviado.');
            this.formulario.submit();
        }
    }

    senhasSaoValidas() {
        let valid = true;
        
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
        }

        return valid;
    }

    camposSaoValidos() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            const label = campo.previousElementSibling.innerText;

            if(!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
                valid=false;
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            }
            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuaario(campo)) valid=false;
            }
        }
        return valid;
    }

    criaErro(campo, msg) {
        const dic = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentelement('afterend', div);
    }
}

const valida = ValidaFormulario();