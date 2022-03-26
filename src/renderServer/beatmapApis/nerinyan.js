const { default: axios } = require("axios")

module.exports = async beatmapsetId => {
    try {
        let { data: nerinyanApiResponse } = await axios.get(`https://api.nerinyan.moe/search/beatmapset/${beatmapsetId}`, { timeout: 10000 })
        return {
            apiResponse: nerinyanApiResponse,
            downloadUrl: `https://api.nerinyan.moe/d/${beatmapsetId}`,
            filename: beatmapsetId,
            lastBeatmapUpdate: nerinyanApiResponse.last_updated.replace(" ", "T")
        }
    } catch (err) {
        console.log("[renderServer] Got some problems with the NeriNyan API: " + err)
        return "connect error"
    }
}
