import React, { useState } from "react";
import MaskedInput from 'react-text-mask'
import { InputBox, InputBoxInput, Label, InputSubmit } from './styled'


const PreMatricula = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhonenumber,] = useState("");
    const [token, setToken,] = useState("");

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
                    "name": "token",
                    "value": token
                }
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

    return (
        
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
            <InputBox>
                <InputBoxInput 
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                />
                <Label>Email</Label>
            </InputBox>
            <InputBox>
                <InputBoxInput mask={[/\d/, /\d/, /\d/, /\d/,]}
                type="text" 
                value={token}
                onChange={e => setToken(e.target.value)}
                render={(ref, props) => (
                    <InputBoxInput ref={ref} {...props} />
                  )}
                />
                <Label>Código do Consultor ( opcional )</Label>
            </InputBox>
            <InputSubmit 
            type="submit" 
            value="Enviar"
            />
        </form>
    );
}

export default PreMatricula