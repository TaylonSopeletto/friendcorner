export const getUrl = () => {
    const env = process.env.NODE_ENV
    if (env == "development") {
        return "http://localhost:4000"
    }
    else if (env == "production") {
        return "https://friend-corner-back.herokuapp.com/"
    }
}