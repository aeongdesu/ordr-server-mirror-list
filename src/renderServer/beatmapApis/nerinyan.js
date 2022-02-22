const { default: axios } = require("axios")

module.exports = async beatmapsetId => {
    try {
        // currently NeriNyan didn't deployed search beatmapset id route to main server(api.nerina.pw), so I'll use sub server(xiiov.com) temporarily.
        let { data: nerinyanApiResponse } = await axios.get(`https://xiiov.com/search/beatmapset/${beatmapsetId}`, { timeout: 10000 })
        return {
            apiResponse: nerinyanApiResponse,
            downloadUrl: `https://nerina.pw/d/direct/${beatmapsetId}`,
            filename: beatmapsetId,
            lastBeatmapUpdate: nerinyanApiResponse.last_updated.replace(" ", "T")
        }
    } catch (err) {
        console.log("[renderServer] Got some problems with the NeriNyan API: " + err)
        return "connect error"
    }
}
