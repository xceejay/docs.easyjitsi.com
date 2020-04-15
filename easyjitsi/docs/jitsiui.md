---
id: jitsiui
title: Customizing The Jitsi Meet UI
---

NB **This section assumes we have logged into our Ubuntu server with the FQDN jitsimeet.easyjitsi.com**

To Customize the interface of Jitsi Meet

## Edit the following file

We first open the file with our favourite editor

```bash
vim /usr/share/jitsi-meet/interface_config.js
```

Once we open the file we see the following variables:

```javascript
var interfaceConfig = {
DEFAULT_BACKGROUND: "#474747",
DISABLE_VIDEO_BACKGROUND: false,
INITIAL_TOOLBAR_TIMEOUT: 20000,
TOOLBAR_TIMEOUT: 4000,
TOOLBAR_ALWAYS_VISIBLE: false,
DEFAULT_REMOTE_DISPLAY_NAME: "Fellow Jitster",
DEFAULT_LOCAL_DISPLAY_NAME: "me",
SHOW_JITSI_WATERMARK: true,
JITSI_WATERMARK_LINK: "https://jitsi.org",
SHOW_WATERMARK_FOR_GUESTS: true,
SHOW_BRAND_WATERMARK: false,
BRAND_WATERMARK_LINK: "",
SHOW_POWERED_BY: false,
SHOW_DEEP_LINKING_IMAGE: false,
GENERATE_ROOMNAMES_ON_WELCOME_PAGE: true,
DISPLAY_WELCOME_PAGE_CONTENT: true,
DISPLAY_WELCOME_PAGE_TOOLBAR_ADDITIONAL_CONTENT: false,
APP_NAME: "Jitsi Meet",
NATIVE_APP_NAME: "Jitsi Meet",
PROVIDER_NAME: "Jitsi",
LANG_DETECTION: false, // Allow i18n to detect the system language
INVITATION_POWERED_BY: true,
AUTHENTICATION_ENABLE: true,
TOOLBAR_BUTTONS: [
  "microphone",
  "camera",
  "closedcaptions",
  "desktop",
  "fullscreen",
  "fodeviceselection",
  "hangup",
  "profile",
  "info",
  "chat",
  "recording",
  "livestreaming",
  "etherpad",
  "sharedvideo",
  "settings",
  "raisehand",
  "videoquality",
  "filmstrip",
  "invite",
  "feedback",
  "stats",
  "shortcuts",
  "tileview",
  "videobackgroundblur",
  "download",
  "help",
  "mute-everyone",
],

SETTINGS_SECTIONS: [
  "devices",
  "language",
  "moderator",
  "profile",
  "calendar",
],

VIDEO_LAYOUT_FIT: "both",
filmStripOnly: false,
VERTICAL_FILMSTRIP: true,
CLOSE_PAGE_GUEST_HINT: false,
SHOW_PROMOTIONAL_CLOSE_PAGE: false,
RANDOM_AVATAR_URL_PREFIX: false,
RANDOM_AVATAR_URL_SUFFIX: false,
FILM_STRIP_MAX_HEIGHT: 120,
ENABLE_FEEDBACK_ANIMATION: false,
DISABLE_FOCUS_INDICATOR: false,
DISABLE_DOMINANT_SPEAKER_INDICATOR: false,
DISABLE_TRANSCRIPTION_SUBTITLES: false,
DISABLE_RINGING: false,
AUDIO_LEVEL_PRIMARY_COLOR: "rgba(255,255,255,0.4)",
AUDIO_LEVEL_SECONDARY_COLOR: "rgba(255,255,255,0.2)",
POLICY_LOGO: null,
LOCAL_THUMBNAIL_RATIO: 16 / 9, // 16:9
REMOTE_THUMBNAIL_RATIO: 1, // 1:1
LIVE_STREAMING_HELP_LINK: "https://jitsi.org/live",
MOBILE_APP_PROMO: true,
MAXIMUM_ZOOMING_COEFFICIENT: 1.3,
SUPPORT_URL: "https://github.com/jitsi/jitsi-meet/issues/new",
CONNECTION_INDICATOR_AUTO_HIDE_ENABLED: true,
CONNECTION_INDICATOR_AUTO_HIDE_TIMEOUT: 5000,
CONNECTION_INDICATOR_DISABLED: false,
VIDEO_QUALITY_LABEL_DISABLED: false,
RECENT_LIST_ENABLED: true,
OPTIMAL_BROWSERS: ["chrome", "chromium", "firefox", "nwjs", "electron"],
UNSUPPORTED_BROWSERS: [],
AUTO_PIN_LATEST_SCREEN_SHARE: "remote-only",
DISABLE_PRESENCE_STATUS: false,
DISABLE_JOIN_LEAVE_NOTIFICATIONS: false,
SHOW_CHROME_EXTENSION_BANNER: false,
HIDE_KICK_BUTTON_FOR_GUESTS: false,
TILE_VIEW_MAX_COLUMNS: 5,
MOBILE_DOWNLOAD_LINK_ANDROID:
  "https://play.google.com/store/apps/details?id=org.jitsi.meet",
MOBILE_DOWNLOAD_LINK_IOS:
  "https://itunes.apple.com/us/app/jitsi-meet/id1165103905",
APP_SCHEME: "org.jitsi.meet",
ANDROID_APP_PACKAGE: "org.jitsi.meet",
ENFORCE_NOTIFICATION_AUTO_DISMISS_TIMEOUT: 15000,
INDICATOR_FONT_SIZES
MOBILE_DYNAMIC_LINK
PHONE_NUMBER_REGEX
```

Short Descriptions on the parts of the UI:

**_If you encounted any errors or you found it difficult while following these steps, you can head [here](https://docs.easyjitsi.com/docs/help) to seek help from us._**
