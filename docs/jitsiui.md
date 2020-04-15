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

Short Descriptions on the parts of the UI:

- **DEFAULT_BACKGROUND:**Background Color Of the Jitsi Meet(HEX_COLOR)
- **DISABLE_VIDEO_BACKGROUND:**This Disables The Video's Interface Backgroundi when set to true(BOOLEAN)
- **INITIAL_TOOLBAR_TIMEOUT:**Initial Time Out for Bottom Toolbar(INTEGER)
- **TOOLBAR_TIMEOUT:**Time Out for Bottom Toolbar(INTEGER)
- **TOOLBAR_ALWAYS_VISIBLE:**This Disables the timeout for the toolbar when set to true(BOOLEAN)
- **DEFAULT_REMOTE_DISPLAY_NAME:**Default name to display when someone joins a conference(STRING)
- **DEFAULT_LOCAL_DISPLAY_NAME:**Default local Jitsi Name(STRING),
- **SHOW_JITSI_WATERMARK:**Shows Default Jitsi WaterMark when set to true(BOOLEAN)
- **JITSI_WATERMARK_LINK:**Sets the link of the water mark when it's clicked(STRING)
- **SHOW_WATERMARK_FOR_GUESTS:**Shows WaterMark to guests who join a call when set to true(BOOLEAN)
- **SHOW_BRAND_WATERMARK:**Shows custom watermark when set to true(BOOlEAN)
- **BRAND_WATERMARK_LINK:**Sets the link of the custom watermark when its clicked(STRING)
- **SHOW_POWERED_BY:**This shows powered by Jitsi text in the Jitsi Interface when set to true(BOOLEAN)
- **SHOW_DEEP_LINKING_IMAGE:** BOOLEAN
- **GENERATE_ROOMNAMES_ON_WELCOME_PAGE:** This auto generates room names on the Jitsi Interface when set to true(BOOLEAN)
- **DISPLAY_WELCOME_PAGE_CONTENT:**This displays welcome page content when set to true(BOOLEAN)
- **DISPLAY_WELCOME_PAGE_TOOLBAR_ADDITIONAL_CONTENT:**This displays additional content on the toolbar on the welcome page when set to true(BOOLEAN)
- **APP_NAME:** This sets the name of the application(STRING)
- **NATIVE_APP_NAME:** This sets the name of the application natively(STRING)
- **PROVIDER_NAME:**This sets name of the provider of the video conference(STRING)
- **LANG_DETECTION:**This allows system language detection when set to true(BOOLEAN)
- **INVITATION_POWERED_BY:**This shows the name of the service when an invitation is sent when set to true(BOOLEAN)
- **AUTHENTICATION_ENABLE:**This shows authenticaion block in the profile when set to true(BOOLEAN)
- **TOOLBAR BUTTONS(STRING_ARRAY)**:This enables buttons that can be shown in the toolbar
  - Some toolbar buttons that can be enabled are
  - microphone
  - camera
  - closedcaptions
  - desktop
  - fullscreen
  - fodeviceselection
  - hangup
  - profile
  - info
  - chat
  - recording
  - livestreaming
  - etherpad
  - sharedvideo
  - settings
  - raisehand
  - videoquality
  - filmstrip
  - invite
  - feedback
  - stats
  - shortcuts
  - tileview
  - videobackgroundblur
  - download
  - help
  - mute-everyone
- **SETTINGS_SECTIONS(STRING_ARRAY)**
  - devices
  - language
  - moderator
  - profile
  - calendar
- VIDEO_LAYOUT_FIT: "both",
- filmStripOnly: false,
- VERTICAL_FILMSTRIP: true,
- CLOSE_PAGE_GUEST_HINT: false,
- SHOW_PROMOTIONAL_CLOSE_PAGE: false,
- RANDOM_AVATAR_URL_PREFIX: false,
- RANDOM_AVATAR_URL_SUFFIX: false,
- FILM_STRIP_MAX_HEIGHT: 120,
- ENABLE_FEEDBACK_ANIMATION: false,
- DISABLE_FOCUS_INDICATOR: false,
- DISABLE_DOMINANT_SPEAKER_INDICATOR: false,
- DISABLE_TRANSCRIPTION_SUBTITLES: false,
- DISABLE_RINGING: false,
- AUDIO_LEVEL_PRIMARY_COLOR: "rgba(255,255,255,0.4)",
- AUDIO_LEVEL_SECONDARY_COLOR: "rgba(255,255,255,0.2)",
- POLICY_LOGO: null,
- LOCAL_THUMBNAIL_RATIO: 16 / 9, // 16:9
- REMOTE_THUMBNAIL_RATIO: 1, // 1:1
- LIVE_STREAMING_HELP_LINK: "https://jitsi.org/live",
- MOBILE_APP_PROMO: true,
- MAXIMUM_ZOOMING_COEFFICIENT: 1.3,
- SUPPORT_URL: "https://github.com/jitsi/jitsi-meet/issues/new",
- CONNECTION_INDICATOR_AUTO_HIDE_ENABLED: true,
- CONNECTION_INDICATOR_AUTO_HIDE_TIMEOUT: 5000,
- CONNECTION_INDICATOR_DISABLED: false,
- VIDEO_QUALITY_LABEL_DISABLED: false,
- RECENT_LIST_ENABLED: true,
- OPTIMAL_BROWSERS: ["chrome", "chromium", "firefox", "nwjs", "electron"],
- UNSUPPORTED_BROWSERS: [],
- AUTO_PIN_LATEST_SCREEN_SHARE: "remote-only",
- DISABLE_PRESENCE_STATUS: false,
- DISABLE_JOIN_LEAVE_NOTIFICATIONS: false,
- SHOW_CHROME_EXTENSION_BANNER: false,
- HIDE_KICK_BUTTON_FOR_GUESTS: false,
- TILE_VIEW_MAX_COLUMNS: 5,
- MOBILE_DOWNLOAD_LINK_ANDROID:
- "https://play.google.com/store/apps/details?id=org.jitsi.meet",
- MOBILE_DOWNLOAD_LINK_IOS:
- "https://itunes.apple.com/us/app/jitsi-meet/id1165103905",
- APP_SCHEME: "org.jitsi.meet",
- ANDROID_APP_PACKAGE: "org.jitsi.meet",
- ENFORCE_NOTIFICATION_AUTO_DISMISS_TIMEOUT: 15000,
- INDICATOR_FONT_SIZES
- MOBILE_DYNAMIC_LINK
- PHONE_NUMBER_REGEX

**_If you encounted any errors or you found it difficult while following these steps, you can head [here](https://docs.easyjitsi.com/docs/help) to seek help from us._**

