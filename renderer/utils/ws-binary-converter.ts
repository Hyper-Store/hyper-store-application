export const WSBinaryConverter = (message: BinaryData) => {
    const jsonString = new TextDecoder('utf-8').decode(message);
    const json = JSON.parse(jsonString);
    return json;
}