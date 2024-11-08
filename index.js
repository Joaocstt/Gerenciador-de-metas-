const { select, input, checkbox } = require('@inquirer/prompts');

let meta = {
    value: "Tomar 3L de água por dia",
    checked: false,
};

let metas = [ meta ]



const cadastrarMeta = async () => {
    const metaInput = await input({message: "Digite una meta: "});

    if(meta.length == 0) {
        console.log("A meta não pode ser vázia.");
        return;
    }
    
    metas.push({
      value: metaInput,
      checked: false,
    });
}

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, use o espaço para marcar ou desmarcar e o Enter para finalizar essa etapa\n",
        choices: [...metas] + "\n",
        instructions: false,
    });

    if(respostas.length == 0) {
        console.log("Nenhuma meta selecionada!");
        return; 
    }

    metas.forEach((m) => {
        m.checked = false
    });

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    });

    console.log("Meta(s) marcadas como concluída(s)");
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
                value: "listar" 
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
            await listarMetas();
            break;
        case "sair":
            console.log("Até a próxima");
            return;
    }
  }
};

start();
