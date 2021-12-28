const filter = "filtering_mode = AutoSmart\nfilter_subMode = Ask\nchannel_ids_to_filter = Ask\nautoASCII_sensitivity = Ask\ncharacters_to_filter = Ask\nstrings_to_filter = Ask\nregex_to_filter = Ask"

iniout = require("../inicreator.js").run({
	general: {
		modmode: false // True or False
	},
	scanning: {
		scanmode: "RecentVideos", // Values: ChosenVideos | RecentVideos | EntireChannel
		maxcomments: "50000", // Number of max comments
		videotoscan: "VidIDExample", // Video ID
		channel_to_scan: "Mine", // Mine or ChannelID
	},
	filtering: filter, // Filtering config string
	removaltype: "rejected" // Values: rejected | heldForReview | reportSpam
});

require("fs").writeFile("./configout.ini", iniout, console.log)