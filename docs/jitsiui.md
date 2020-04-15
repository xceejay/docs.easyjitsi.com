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
- VIDEO_LAYOUT_FIT:
- filmStripOnly:
- VERTICAL_FILMSTRIP:
- CLOSE_PAGE_GUEST_HINT:
- SHOW_PROMOTIONAL_CLOSE_PAGE:
- RANDOM_AVATAR_URL_PREFIX:
- RANDOM_AVATAR_URL_SUFFIX:
- FILM_STRIP_MAX_HEIGHT:
- ENABLE_FEEDBACK_ANIMATION:
- DISABLE_FOCUS_INDICATOR:
- DISABLE_DOMINANT_SPEAKER_INDICATOR:
- DISABLE_TRANSCRIPTION_SUBTITLES:
- DISABLE_RINGING:
- AUDIO_LEVEL_PRIMARY_COLOR:
- AUDIO_LEVEL_SECONDARY_COLOR:
- POLICY_LOGO:
- LOCAL_THUMBNAIL_RATIO:
- REMOTE_THUMBNAIL_RATIO:
- LIVE_STREAMING_HELP_LINK:
- MOBILE_APP_PROMO:
- MAXIMUM_ZOOMING_COEFFICIENT:
- SUPPORT_URL:
- CONNECTION_INDICATOR_AUTO_HIDE_ENABLED:
- CONNECTION_INDICATOR_AUTO_HIDE_TIMEOUT:
- CONNECTION_INDICATOR_DISABLED:
- VIDEO_QUALITY_LABEL_DISABLED:
- RECENT_LIST_ENABLED:
- OPTIMAL_BROWSERS:
- UNSUPPORTED_BROWSERS:
- AUTO_PIN_LATEST_SCREEN_SHARE:
- DISABLE_PRESENCE_STATUS:
- DISABLE_JOIN_LEAVE_NOTIFICATIONS:
- SHOW_CHROME_EXTENSION_BANNER:
- HIDE_KICK_BUTTON_FOR_GUESTS:
- TILE_VIEW_MAX_COLUMNS:
- MOBILE_DOWNLOAD_LINK_ANDROID:
- "https:
- MOBILE_DOWNLOAD_LINK_IOS:
- "https:
- APP_SCHEME:
- ANDROID_APP_PACKAGE:
- ENFORCE_NOTIFICATION_AUTO_DISMISS_TIMEOUT:
- INDICATOR_FONT_SIZES
- MOBILE_DYNAMIC_LINK
- PHONE_NUMBER_REGEX

**_If you encounted any errors or you found it difficult while following these steps, you can head [here](https://docs.easyjitsi.com/docs/help) to seek help from us._**

