const { select, input } = require('@inquirer/prompts');

let meta = {
    value: "Tomar 3L de água por dia",
    checked: false,
};

let metas = [ meta ]



const cadastrarMeta = async () => {
    const metaInput = await input({message: "Digite a meta: "});

    if(meta.length == 0) {
        console.log("A meta não pode ser vázia.");
        return;
    }
    
    metas.push({
      value: metaInput,
      checked: false,
    });
}

const start = async () => {

    while (true) {
              
    const opcao = await select({
        message: "Menu >",
        choices: [
            {
                name: "Cadastrar meta",
                value: "cadastrar"
            },
            {
                name: "Listar metas",
                name: "listar" 
            },
            {
                name: "Sair",
                value: "sair"
            }
        ]
    }) 

    switch (opcao) {
        case "cadastrar":
            await cadastrarMeta();
            console.log(metas)
        break;
        case "listar":
            console.log("Vamos listar");
            break;
        case "sair":
            console.log("Até a próxima");
            return;
    }
  }
};

start();
