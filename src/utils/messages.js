const generateMessage = (text) => {
    return {
        text,
        createdAt:new Date().getTime()
    }
}

const generatedLocationMessage = (url) => {
    return {
        url,
        createdAt:new Date().getTime()
    }
}
module.exports = {
    generateMessage,
    generatedLocationMessage
}