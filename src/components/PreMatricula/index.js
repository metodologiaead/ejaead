import React, { useState } from "react";
import MaskedInput from 'react-text-mask'
import { Container, InputBox, InputBoxInput, Label, InputSubmit } from './styled'


const PreMatricula = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhonenumber,] = useState("");
    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro,] = useState("");
    const [numero, setNumero] = useState("");
    const [identidade, setIdentidade] = useState("");
    const [cpf, setCpf] = useState("");
    const [escolaridade, setEscolaridade] = useState("");
    const [curso, setCurso] = useState("");
    const [sexo, setSexo] = useState("");
    const [mae, setMae] = useState("");
    const [pai, setPai] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [naturalidade, setNaturalidade] = useState("");
    const [ufnaturalidade, setUfnaturalidade] = useState("");
    const [pais, setPais] = useState("");
    const [nacionalidade, setNacionalidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");

    const handleSubmit = (evt) => {

        evt.preventDefault();
        var xhr = new XMLHttpRequest();
        var url = 'https://api.hsforms.com/submissions/v3/integration/submit/7458896/eb339c66-9139-4caf-890d-4adcc0589f1d'
        var data = {
            "fields": [
                {
                    "name": "email",
                    "value": email
                },
                {
                    "name": "firstname",
                    "value": name
                },
                { 
                    "name": "phone",
                    "value": phone
                },
                { 
                    "name": "cep",
                    "value": cep
                },
                { 
                    "name": "logradouro",
                    "value": logradouro
                },
                { 
                    "name": "numero",
                    "value": numero
                },
                { 
                    "name": "identidade",
                    "value": identidade
                },
                { 
                    "name": "escolaridade",
                    "value": escolaridade
                },
                { 
                    "name": "curso",
                    "value": curso
                },
                { 
                    "name": "sexo",
                    "value": sexo
                },
                { 
                    "name": "mae",
                    "value": mae
                },
                { 
                    "name": "pai",
                    "value": pai
                },
                { 
                    "name": "nascimento",
                    "value": nascimento
                },
                { 
                    "name": "naturalidade",
                    "value": naturalidade
                },
                { 
                    "name": "ufnaturalidade",
                    "value": ufnaturalidade
                },
                { 
                    "name": "pais",
                    "value": pais
                },
                { 
                    "name": "nacionalidade",
                    "value": nacionalidade
                },
                { 
                    "name": "bairro",
                    "value": bairro
                },
                { 
                    "name": "cidade",
                    "value": cidade
                },
                { 
                    "name": "uf",
                    "value": uf
                },
            ],
            "context": {
                "pageUri": "https://ejaead.metodologiaead.com.br",
                "pageName": "Landing Page Eja EAD"
            },
        }
        console.log(data)
        var final_data = JSON.stringify(data)

        xhr.open('POST', url);
        // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert(xhr.responseText); // Returns a 200 response if the submission is successful.
            } else if (xhr.readyState === 4 && xhr.status === 403) {
                alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.     
            } else if (xhr.readyState === 4 && xhr.status === 404) {
                alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found    
            }
        }
        // Sends the request 
        xhr.send(final_data)

        
    }

    const showData = (result) => {
        for(const campo in result) {
            if (document.querySelector('#'+campo)) {
                document.querySelector('#'+campo).value = result[campo]
            }
        }
    }

    function findAddress(ev) {
        const { value } = ev.target
        if (value?.length !== 9) {
            return;
        }

        fetch(`https://viacep.com.br/ws/${value}/json/`)
        .then((res) => res.json())
        .then((data) => showData(data))
    }

    return (
        <Container>
            <div className="content">
        
        <form onSubmit={handleSubmit}>
            <InputBox>
                <InputBoxInput 
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
                required
                />
                <Label>Nome Completo</Label>
            </InputBox>
            <InputBox>
                <MaskedInput mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                type="tel"
                value={phone}
                onChange={e => setPhonenumber(e.target.value)}
                required
                render={(ref, props) => (
                    <InputBoxInput ref={ref} {...props} />
                  )}
                />
                <Label>Telefone</Label>
            </InputBox>
            <div className="identidadeCPF">
                <InputBox>
                    <InputBoxInput 
                    type="text" 
                    value={identidade}
                    onChange={e => setIdentidade(e.target.value)}
                    required
                    />
                    <Label>Identidade (Nº e Órgão Expedidor)</Label>
                </InputBox>
                <InputBox>
                <MaskedInput mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/,]}
                type="text"
                value={cpf}
                onChange={e => setCpf(e.target.value)}
                required
                onBlur={findAddress}
                render={(ref, props) => (
                    <InputBoxInput ref={ref} {...props} />
                  )}
                />
                <Label>CPF</Label>
            </InputBox>
            </div>
            <div className="EscolaridadeCursoSexo">
                <InputBox>
                    <InputBoxInput 
                    type="text" 
                    value={escolaridade}
                    onChange={e => setEscolaridade(e.target.value)}
                    required
                    />
                    <Label>Nível de Escolaridade</Label>
                </InputBox>
                <InputBox>
                    <InputBoxInput 
                    type="text" 
                    value={curso}
                    onChange={e => setCurso(e.target.value)}
                    required
                    />
                    <Label>Curso</Label>
                </InputBox>
                <InputBox>
                    <InputBoxInput 
                    type="text"
                    value={sexo}
                    onChange={e => setSexo(e.target.value)}
                    required
                    />
                    <Label>Sexo</Label>
                </InputBox>
            </div>
            <div className="maePai">
                <InputBox>
                    <InputBoxInput 
                    type="text" 
                    value={mae}
                    onChange={e => setMae(e.target.value)}
                    required
                    />
                    <Label>Nome da Mãe</Label>
                </InputBox>
                <InputBox>
                    <InputBoxInput 
                    type="text" 
                    value={pai}
                    onChange={e => setPai(e.target.value)}
                    required
                    />
                    <Label>Nome do Pai</Label>
                </InputBox>
            </div>
            <p>data de nascimento</p>
            <div className="nascimentoNaturalidadeUf">
                <InputBox>
                    <InputBoxInput 
                    type="date" 
                    value={nascimento}
                    onChange={e => setNascimento(e.target.value)}
                    required
                    />
                </InputBox>
                <InputBox>
                    <InputBoxInput 
                    type="text" 
                    value={naturalidade}
                    onChange={e => setNaturalidade(e.target.value)}
                    required
                    />
                    <Label>Naturalidade</Label>
                </InputBox>
                <InputBox>
                    <InputBoxInput 
                    type="text" 
                    value={ufnaturalidade}
                    onChange={e => setUfnaturalidade(e.target.value)}
                    required
                    />
                    <Label>UF</Label>
                </InputBox>
            </div>
            <div className="paisNacionalidade">
                <InputBox>
                    <InputBoxInput 
                    type="text" 
                    value={pais}
                    onChange={e => setPais(e.target.value)}
                    required
                    />
                    <Label>País</Label>
                </InputBox>
                <InputBox>
                    <InputBoxInput 
                    type="text" 
                    value={nacionalidade}
                    onChange={e => setNacionalidade(e.target.value)}
                    required
                    />
                    <Label>Nacionalidade</Label>
                </InputBox>
            </div>
            <p>Endereço Completo</p>
            <div className="cepLogradouroNumero">
                <InputBox>
                    <MaskedInput mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/,]}
                    type="text"
                    value={cep}
                    onChange={e => setCep(e.target.value)}
                    required
                    onBlur={findAddress}
                    render={(ref, props) => (
                        <InputBoxInput ref={ref} {...props} />
                    )}
                    />
                    <Label>Cep</Label>
                </InputBox>
                <InputBox>
                    <InputBoxInput 
                    id="logradouro"
                    type="text" 
                    value={logradouro}
                    onChange={e => setLogradouro(e.target.value)}
                    required
                    />
                    <Label>Logradouro</Label>
                </InputBox>
                <InputBox>
                    <InputBoxInput
                    type="text" 
                    value={numero}
                    onChange={e => setNumero(e.target.value)}
                    required
                    />
                    <Label>Número</Label>
                </InputBox>
            </div>
            <div className="ufBairroCidade">
                <InputBox>
                    <InputBoxInput 
                    id="bairro"
                    type="text" 
                    value={bairro}
                    onChange={e => setBairro(e.target.value)}
                    required
                    />
                    <Label>Bairro</Label>
                </InputBox>
                <InputBox>
                    <InputBoxInput
                    id="localidade"
                    type="text" 
                    value={cidade}
                    onChange={e => setCidade(e.target.value)}
                    required
                    />
                    <Label>Cidade</Label>
                </InputBox>
                <InputBox>
                    <InputBoxInput 
                    id="uf"
                    type="text" 
                    value={uf}
                    onChange={e => setUf(e.target.value)}
                    required
                    />
                    <Label>UF</Label>
                </InputBox>
            </div>
            <InputBox>
                <InputBoxInput 
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                />
                <Label>Email</Label>
            </InputBox>
            <InputSubmit 
            type="submit" 
            value="Enviar"
            />
        </form>
        </div>
        </Container>
    );
}

export default PreMatricula