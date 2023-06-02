import { PORT } from "./config.js";
import app from "./app.js";
import { modifyManifest } from "./utils/isManifestRelative.js";

app.listen(PORT);
console.log(`Server on port http://localhost/:${PORT}`);
console.log(modifyManifest("https://livesim.dashif.org/livesim/scte35_2/testpic_2s/Manifest.mpd",`<?xml version="1.0" encoding="utf-8"?>
<MPD xmlns="urn:mpeg:dash:schema:mpd:2011" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" availabilityStartTime="1970-01-01T00:00:00Z" id="Config part of url maybe?" maxSegmentDuration="PT2S" minBufferTime="PT2S" minimumUpdatePeriod="P100Y" profiles="urn:mpeg:dash:profile:isoff-live:2011,http://dashif.org/guidelines/dash-if-simple,http://dashif.org/guidelines/adin/app" publishTime="2023-06-02T16:06:42Z" timeShiftBufferDepth="PT5M" type="dynamic" xsi:schemaLocation="urn:mpeg:dash:schema:mpd:2011 DASH-MPD.xsd">
   <ProgramInformation>
      <Title>Media Presentation Description from DASH-IF live simulator</Title>
   </ProgramInformation>
   <BaseURL>https://livesim.dashif.org/livesim/sts_1685722002/sid_1e1af23f/scte35_2/testpic_2s/</BaseURL>
<Period id="p0" start="PT0S">
      <AdaptationSet contentType="audio" lang="en" mimeType="audio/mp4" segmentAlignment="true" startWithSAP="1">
         <Role schemeIdUri="urn:mpeg:dash:role:2011" value="main" />
         <SegmentTemplate duration="2" initialization="$RepresentationID$/init.mp4" media="$RepresentationID$/$Number$.m4s" startNumber="0" />
         <Representation audioSamplingRate="48000" bandwidth="48000" codecs="mp4a.40.2" id="A48">
            <AudioChannelConfiguration schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011" value="2" />
         </Representation>
      </AdaptationSet>
      <AdaptationSet contentType="video" maxFrameRate="60/2" maxHeight="360" maxWidth="640" mimeType="video/mp4" minHeight="360" minWidth="640" par="16:9" segmentAlignment="true" startWithSAP="1">
         <InbandEventStream schemeIdUri="urn:scte:scte35:2013:xml" value="999" />
<Role schemeIdUri="urn:mpeg:dash:role:2011" value="main" />
         <SegmentTemplate duration="2" initialization="$RepresentationID$/init.mp4" media="$RepresentationID$/$Number$.m4s" startNumber="0" />
         <Representation bandwidth="300000" codecs="avc1.64001e" frameRate="60/2" height="360" id="V300" sar="1:1" width="640" />
      </AdaptationSet>
   </Period>
</MPD>`, "http://localhost:3000/video/1/"))