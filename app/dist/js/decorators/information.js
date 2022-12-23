export function information(target, properyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`
            DECORATOR EXECUTADO: INFORMATION
            Nome da classe: ${target.constructor.name}
            Método executado: ${properyKey}
            Passagem de valor via método: ${JSON.stringify(args)}            
        `);
        const retorno = metodoOriginal.apply(this, args);
        return retorno;
    };
    return descriptor;
}
