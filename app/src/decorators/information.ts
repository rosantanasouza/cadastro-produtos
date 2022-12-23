export function information(
    target: any,
    properyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`
            DECORATOR EXECUTADO: INFORMATION
            Nome da classe: ${target.constructor.name}
            Método executado: ${properyKey}
            Passagem de valor via método: ${JSON.stringify(args)}            
        `);

        const retorno = metodoOriginal.apply(this, args);
        return retorno;
    }

    return descriptor;

}