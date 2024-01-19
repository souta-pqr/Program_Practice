type RestArgs<M> = M extends "string" ? [string, string] : [number, number, number];

function func<M extends "string | number">(
    mode: MIDIAccess,
    ...args: RestArgs<M>
) {
    console.log(mode, ...args)
}
