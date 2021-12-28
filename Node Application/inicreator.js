exports.run = function(options){
	var currentini = "";
	// First defaults of general ini file
	currentini = currentini + "[general]\nuse_this_config = True\nyour_channel_id = Ask\nenable_logging = True\nlog_path = Default\nauto_check_update = True\nskip_confirm_video = True";
	
	// Moderator Mode
	if(!options.general || options.general.modmode == false){
		currentini = currentini + "\nmoderator_mode = False";
	}else if(options.general && options.general.modmode == true){
		currentini = currentini + "\nmoderator_mode = True";
	}
	
	// Scanning Options
	currentini = currentini + "\n\n[scanning]\nscan_mode = ";
	
	// Scanning Options: Scan mode
	if(options.scanning.scanmode){
		currentini = currentini + options.scanning.scanmode;
	}else{
		currentini = currentini + "RecentVideos";
	}
	
	// Scanning Options: Max comments
	currentini = currentini + "\nmax_comments = ";
	if(options.scanning.maxcomments){
		currentini = currentini + options.scanning.maxcomments;
	}else{
		currentini = currentini + "500000";
	}
	
	// Scanning Options: Video to Scan
	currentini = currentini + "\nvideo_to_scan = ";
	if(options.scanning.videotoscan){
		currentini = currentini + options.scanning.videotoscan;
	}else{
		currentini = currentini + "Ask";
	}
	
	// Scanning Options: Channel to Scan
	currentini = currentini + "\nchannel_to_scan = ";
	if(options.scanning.channeltoscan){
		currentini = currentini + options.scanning.channeltoscan;
	}else{
		currentini = currentini + "Mine";
	}
	
	// Scanning Options: Recent Videos Amount + Filtering Options: Itself
	currentini = currentini + "\nrecent_videos_amount = 5\n\n[filtering]\n";
	
	// Filtering Options
	if(options.filtering){
		currentini = currentini + options.filtering;
	}else{
		currentini = currentini + "filter_mode = AutoSmart\nfilter_submode = Ask\nchannel_ids_to_filter = Ask\nautoASCII_sensitivity = Ask\ncharacters_to_filter = Ask\nstrings_to_filter = Ask\nregex_to_filter = Ask";
	}
	
	// Removal Options
	currentini = currentini + "\n\n[removal]\nskip_deletion = False\ndelete_without_reviewing = True\nenable_ban = False\nremoval_type = ";
	// Removal Options: Removal Type
	currentini = currentini + options.removaltype;
	
	// Config version info
	currentini = currentini + "\n\n[info]\nconfig_version = 11";
	return currentini;
}
/*
Options json:
{
	general: {
		modmode: false // True or False
	},
	scanning: {
		scanmode: "RecentVideos", // Values: ChosenVideos | RecentVideos | EntireChannel
		maxcomments: "50000", // Number of max comments
		videotoscan: "VidIDExample", // Video ID
		channel_to_scan: "Mine", // Mine or ChannelID
	},
	filtering: "filtering_mode = AutoSmart\nfilter_subMode = Ask", // Filtering config string
	removaltype: "rejected" // Values: rejected | heldForReview | reportSpam
}
*/