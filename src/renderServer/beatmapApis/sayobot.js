const { default: axios } = require("axios")

module.exports = async beatmapsetId => {
    try {
        let { data: sayobotApiResponse } = await axios.get(
            `https://api.sayobot.cn/v2/beatmapinfo?K=${beatmapsetId}`,
            { timeout: 10000 }
        )
        return {
            apiResponse: sayobotApiResponse,
            downloadUrl: `https://dl.sayobot.cn/beatmaps/download/full/${beatmapsetId}`,
            filename: beatmapsetId,
            lastBeatmapUpdate: new Date(sayobotApiResponse.last_update).toISOString().slice(0, 13)
        }
    } catch (err) {
        console.log("[renderServer] Got some problems with the sayobot.cn API: " + err)
        return "connect error"
    }
}
