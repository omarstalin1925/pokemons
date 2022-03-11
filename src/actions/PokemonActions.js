import HttpCliente from "../servicios/HttpCliente";

export const consultarPokemonPorAutor = (idAutor) =>{
    console.log("en el actions consulta");
    return new Promise((resolve, eject)=>{
        HttpCliente.get('https://pokemon-pichincha.herokuapp.com/pokemons?idAuthor=' + idAutor).then(response=>{
            console.log("el response actions:",response)
            resolve(response);
        })
    } )

}

export const insertarPokemon = (pokemon) =>{
    //debugger
    console.log("en el actions insercion",pokemon);
    return new Promise((resolve, eject)=>{
        HttpCliente.post('https://pokemon-pichincha.herokuapp.com/pokemons', pokemon ).then(response=>{
            console.log("el response actions:",response)
            resolve(response);
        })
    } )

}

export const consultarPokemonPorId = (idPokemon) =>{
    console.log("en el actions consulta por id");
    return new Promise((resolve, eject)=>{
        HttpCliente.get('https://pokemon-pichincha.herokuapp.com/pokemons?id=' + idPokemon).then(response=>{
            console.log("el response actions:",response)
            resolve(response);
        })
    } )

}

export const consultarPokemonNumReg = (idAutor) =>{
    console.log("en el actions num registros");
    return new Promise((resolve, eject)=>{
        HttpCliente.get('https://pokemon-pichincha.herokuapp.com/pokemons/count?idAuthor=' + idAutor).then(response=>{
            console.log("el response actions:",response)
            resolve(response);
        })
    } )

}

export const actualizarPokemon = (pokemon) =>{
    console.log("en el actions");
    return new Promise((resolve, eject)=>{
        HttpCliente.put('https://pokemon-pichincha.herokuapp.com/pokemons', pokemon).then(response=>{
            console.log("el response actions:",response)
            resolve(response);
        })
    } )

}

export const eliminarPokemon = (idPokemon) =>{
    console.log("en el actions");
    return new Promise((resolve, eject)=>{
        HttpCliente.delete('https://pokemon-pichincha.herokuapp.com/pokemons?id=' + idPokemon).then(response=>{
            console.log("el response actions:",response)
            resolve(response);
        })
    } )

}
