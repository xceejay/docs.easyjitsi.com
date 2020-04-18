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
- **DISABLE_VIDEO_BACKGROUND:**This Disables The Video's Interface Backgroundi when set to true(**BOOLEAN**)
- **INITIAL_TOOLBAR_TIMEOUT:**Initial Time Out for Bottom Toolbar(**INTEGER**)
- **TOOLBAR_TIMEOUT:**Time Out for Bottom Toolbar(**INTEGER**)
- **TOOLBAR_ALWAYS_VISIBLE:**This Disables the timeout for the toolbar when set to true(**BOOLEAN**)
- **DEFAULT_REMOTE_DISPLAY_NAME:**Default name to display when someone joins a conference(**STRING**)
- **DEFAULT_LOCAL_DISPLAY_NAME:**Default local Jitsi Name(**STRING**),
- **SHOW_JITSI_WATERMARK:**Shows Default Jitsi WaterMark when set to true(**BOOLEAN**)
- **JITSI_WATERMARK_LINK:**Sets the link of the water mark when it's clicked(**STRING**)
- **SHOW_WATERMARK_FOR_GUESTS:**Shows WaterMark to guests who join a call when set to true(**BOOLEAN**)
- **SHOW_BRAND_WATERMARK:**Shows custom watermark when set to true(**BOOLEAN**)
- **BRAND_WATERMARK_LINK:**Sets the link of the custom watermark when its clicked(**STRING**)
- **SHOW_POWERED_BY:**This shows powered by Jitsi text in the Jitsi Interface when set to true(**BOOLEAN**)
- **SHOW_DEEP_LINKING_IMAGE:** **BOOLEAN**
- **GENERATE_ROOMNAMES_ON_WELCOME_PAGE:** This auto generates room names on the Jitsi Interface when set to true(**BOOLEAN**)
- **DISPLAY_WELCOME_PAGE_CONTENT:**This displays welcome page content when set to true(**BOOLEAN**)
- **DISPLAY_WELCOME_PAGE_TOOLBAR_ADDITIONAL_CONTENT:**This displays additional content on the toolbar on the welcome page when set to true(**BOOLEAN**)
- **APP_NAME:** This sets the name of the application(**STRING**)
- **NATIVE_APP_NAME:** This sets the name of the application natively(**STRING**)
- **PROVIDER_NAME:**This sets name of the provider of the video conference(**STRING**)
- **LANG_DETECTION:**This allows system language detection when set to true(**BOOLEAN**)
- **INVITATION_POWERED_BY:**This shows the name of the service when an invitation is sent when set to true(**BOOLEAN**)
- **AUTHENTICATION_ENABLE:**This shows authenticaion block in the profile when set to true(**BOOLEAN**)
- **TOOLBAR BUTTONS(STRING_ARRAY)**:This enables buttons that can be shown in the toolbar <span />  
  **_The following are toolbar buttons that can be added:_**
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
- **VIDEO_LAYOUT_FIT:**: This Determines how The screen conference would fit the screen(It can take three kind of string values(but one at a time), they are as follows:)

  - height: It would fit the height of the screen.
  - width: It would fit the width of the screen.
  - both: It would fit the whole screen.

- **filmStripOnly:**: Whether to show the filmstrip and hide the toolbar(**BOOLEAN**)
- **VERTICAL_FILMSTRIP:**Whether to show thumbnails in filmstrip as a column instead of as a row.

- **CLOSE_PAGE_GUEST_HINT:** This shows an html text when guests close the page when set to true.(**BOOLEAN**)
- **SHOW_PROMOTIONAL_CLOSE_PAGE:** This shows a promotional message when guest closes the page when set to true(**BOOLEAN**)
- **RANDOM_AVATAR_URL_PREFIX:**This shows a random avatar url prefix when set to true(**BOOLEAN**)
- **RANDOM_AVATAR_URL_SUFFIX:**This shows a random avatar url suffix when set to true(**BOOLEAN**)
- **FILM_STRIP_MAX_HEIGHT:**This sets the height of the film strip(**INTEGER**)
- **ENABLE_FEEDBACK_ANIMATION:**This enables feedbak star animation when set to true(**BOOLEAN**)
- **DISABLE_FOCUS_INDICATOR:**This disables xmpp focus indicator when set to true
- **DISABLE_DOMINANT_SPEAKER_INDICATOR:**This disables an indicator showing the dominant speaker when set to true(**BOOLEAN**)
- **DISABLE_TRANSCRIPTION_SUBTITLES:**This disables transcription subtitles when set to true(**BOOLEAN**)
- **DISABLE_RINGING:**This disables ringing when set to true(**BOOLEAN**)
- **AUDIO_LEVEL_PRIMARY_COLOR:**This sets the primary color of the audio level(**RGBA_COLOR_VALUE**)
- **AUDIO_LEVEL_SECONDARY_COLOR:**This sets the secondary color of the audio level(**RGBA_COLOR_VALUE**)

- **POLICY_LOGO:**This shows the policy logo(**STRING**)
- **LOCAL_THUMBNAIL_RATIO:**This sets the size of the local thumbnail ratio(**ASPECT_RATIO**)
- **REMOTE_THUMBNAIL_RATIO:**This sets the size of the local thumbnail ratio(**ASPECT_RATIO**)
- **LIVE_STREAMING_HELP_LINK:**This sets an href to help(**STRING_URL**)
- **MOBILE_APP_PROMO:**Whether the mobile app Jitsi Meet is to be promoted to participants attempting to join a conference in a mobile Web browser. (**BOOLEAN**)
- **MAXIMUM_ZOOMING_COEFFICIENT:**Maximum coeficient of the ratio of the large video to the visible area after the large video is scaled to fit the window.(**DOUBLE**)
- **SUPPORT_URL:**If there are errors url set here will be point of support(**URL_STRING**)
- **CONNECTION_INDICATOR_AUTO_HIDE_ENABLED:**Whether the connection indicator should auto hide(**BOOLEAN**)
- **CONNECTION_INDICATOR_AUTO_HIDE_TIMEOUT:**Time out for the connection indicator when auto hiding(**INTEGER**)

- **CONNECTION_INDICATOR_DISABLED:**Whether connection indicator should disabled(**BOOLEAN**)
- **VIDEO_QUALITY_LABEL_DISABLED:**Whether video quality label should be shown(BOOLEAN)
- **RECENT_LIST_ENABLED:**Whether recent list should be shown(**BOOLEAN**)
- **OPTIMAL_BROWSERS(ARRAY):**This sets the obtimal browsers for jitsi(**STRING**)
- **UNSUPPORTED_BROWSERS(ARRAY):**This sets the unsupported browsers(**STRING**)
- **AUTO_PIN_LATEST_SCREEN_SHARE:**If latest shared screen should auto pinned(**BOOLEAN**)
- **DISABLE_PRESENCE_STATUS:**If presence of clients should be displayed(**BOOLEAN**)
- **DISABLE_JOIN_LEAVE_NOTIFICATIONS:**Whether notifications should be shown if a client leaves the conference(**BOOLEAN**)
- **SHOW_CHROME_EXTENSION_BANNER:**If chrome extension banner should be shown(**BOOLEAN**)
- **HIDE_KICK_BUTTON_FOR_GUESTS:**Disables kick button for guests when set to true(**BOOLEAN**)
- **TILE_VIEW_MAX_COLUMNS**:How many columns the tile view can expand to. The respected range is between 1 and 5.(**INTEGER**)

- **MOBILE_DOWNLOAD_LINK_ANDROID:**Sets the url for android mobile application download link(**URL_STRING**)
- **"https:**
- **MOBILE_DOWNLOAD_LINK_IOS:**Sets the url for android mobile application download link(**URL_STRING**)

- **APP_SCHEME:**Sets android mobile application scheme for opening the application from the browser(**STRING**)
- **ANDROID_APP_PACKAGE:**Specifies the name of the android app package
- **ENFORCE_NOTIFICATION_AUTO_DISMISS_TIMEOUT:**Whether auto dismiss timeout should be enforced(**BOOLEAN**)
- **INDICATOR_FONT_SIZES:**Sets the size of the font in the indicator(**INTEGER**)
- **MOBILE_DYNAMIC_LINK:**Sets the alternate links to mobile app download(**STRING**)
- **PHONE_NUMBER_REGEX**Regular expressions for phone numbers(REGEX)

**_If you encounted any errors or you found it difficult while following these steps, you can head [here](https://docs.easyjitsi.com/docs/help) to seek help from us._**
