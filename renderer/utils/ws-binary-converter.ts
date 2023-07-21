export const WSBinaryConverter = (message: BinaryData) => {
    const jsonString = new TextDecoder('utf-8').decode(message);
    const json = JSON.parse(jsonString);
    return json;
}

export const WSBinaryCompile = (message: Object) => {
    const jsonString = JSON.stringify(message);
    const buffer = Buffer.from(jsonString);

    return buffer;
}