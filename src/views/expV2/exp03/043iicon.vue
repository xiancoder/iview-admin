<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">iview 中的 Icon 全部列举</div>
            <div class="blogContent" v-highlight>
                <script type="text/html">
                    <Icon type="ios-loading"/> ios-loading // 点击以下icon可以自动复制到完整html
                </script>
                <p style="font-size:26px" @click="copyHtml($event)">
                    <Icon type="ios-add"/> ios-add
                    <Icon type="md-add"/> md-add
                    <br/>
                    <Icon type="ios-add-circle"/> ios-add-circle
                    <Icon type="ios-add-circle-outline"/> ios-add-circle-outline
                    <Icon type="md-add-circle"/> md-add-circle
                    <br/>
                    <Icon type="ios-alarm"/> ios-alarm
                    <Icon type="ios-alarm-outline"/> ios-alarm-outline
                    <Icon type="md-alarm"/> md-alarm
                    <br/>
                    <Icon type="ios-albums"/> ios-albums
                    <Icon type="ios-albums-outline"/> ios-albums-outline
                    <Icon type="md-albums"/> md-albums
                    <br/>
                    <Icon type="ios-alert"/> ios-alert
                    <Icon type="ios-alert-outline"/> ios-alert-outline
                    <Icon type="md-alert"/> md-alert
                    <br/>
                    <Icon type="ios-american-football"/> ios-american-football
                    <Icon type="ios-american-football-outline"/> ios-american-football-outline
                    <Icon type="md-american-football"/> md-american-football
                    <br/>
                    <Icon type="ios-analytics"/> ios-analytics
                    <Icon type="ios-analytics-outline"/> ios-analytics-outline
                    <Icon type="md-analytics"/> md-analytics
                    <br/>
                    <Icon type="ios-aperture"/> ios-aperture
                    <Icon type="ios-aperture-outline"/> ios-aperture-outline
                    <Icon type="md-aperture"/> md-aperture
                    <br/>
                    <Icon type="ios-apps"/> ios-apps
                    <Icon type="ios-apps-outline"/> ios-apps-outline
                    <Icon type="md-apps"/> md-apps
                    <br/>
                    <Icon type="ios-appstore"/> ios-appstore
                    <Icon type="ios-appstore-outline"/> ios-appstore-outline
                    <Icon type="md-appstore"/> md-appstore
                    <br/>
                    <Icon type="ios-archive"/> ios-archive
                    <Icon type="ios-archive-outline"/> ios-archive-outline
                    <Icon type="md-archive"/> md-archive
                    <br/>
                    <Icon type="ios-arrow-back"/> ios-arrow-back
                    <Icon type="md-arrow-back"/> md-arrow-back
                    <br/>
                    <Icon type="ios-arrow-down"/> ios-arrow-down
                    <Icon type="md-arrow-down"/> md-arrow-down
                    <br/>
                    <Icon type="ios-arrow-dropdown"/> ios-arrow-dropdown
                    <Icon type="md-arrow-dropdown"/> md-arrow-dropdown
                    <br/>
                    <Icon type="ios-arrow-dropdown-circle"/> ios-arrow-dropdown-circle
                    <Icon type="md-arrow-dropdown-circle"/> md-arrow-dropdown-circle
                    <br/>
                    <Icon type="ios-arrow-dropleft"/> ios-arrow-dropleft
                    <Icon type="md-arrow-dropleft"/> md-arrow-dropleft
                    <br/>
                    <Icon type="ios-arrow-dropleft-circle"/> ios-arrow-dropleft-circle
                    <Icon type="md-arrow-dropleft-circle"/> md-arrow-dropleft-circle
                    <br/>
                    <Icon type="ios-arrow-dropright"/> ios-arrow-dropright
                    <Icon type="md-arrow-dropright"/> md-arrow-dropright
                    <br/>
                    <Icon type="ios-arrow-dropright-circle"/> ios-arrow-dropright-circle
                    <Icon type="md-arrow-dropright-circle"/> md-arrow-dropright-circle
                    <br/>
                    <Icon type="ios-arrow-dropup"/> ios-arrow-dropup
                    <Icon type="md-arrow-dropup"/> md-arrow-dropup
                    <br/>
                    <Icon type="ios-arrow-dropup-circle"/> ios-arrow-dropup-circle
                    <Icon type="md-arrow-dropup-circle"/> md-arrow-dropup-circle
                    <br/>
                    <Icon type="ios-arrow-forward"/> ios-arrow-forward
                    <Icon type="md-arrow-forward"/> md-arrow-forward
                    <br/>
                    <Icon type="ios-arrow-round-back"/> ios-arrow-round-back
                    <Icon type="md-arrow-round-back"/> md-arrow-round-back
                    <br/>
                    <Icon type="ios-arrow-round-down"/> ios-arrow-round-down
                    <Icon type="md-arrow-round-down"/> md-arrow-round-down
                    <br/>
                    <Icon type="ios-arrow-round-forward"/> ios-arrow-round-forward
                    <Icon type="md-arrow-round-forward"/> md-arrow-round-forward
                    <br/>
                    <Icon type="ios-arrow-round-up"/> ios-arrow-round-up
                    <Icon type="md-arrow-round-up"/> md-arrow-round-up
                    <br/>
                    <Icon type="ios-arrow-up"/> ios-arrow-up
                    <Icon type="md-arrow-up"/> md-arrow-up
                    <br/>
                    <Icon type="ios-at"/> ios-at
                    <Icon type="ios-at-outline"/> ios-at-outline
                    <Icon type="md-at"/> md-at
                    <br/>
                    <Icon type="ios-attach"/> ios-attach
                    <Icon type="md-attach"/> md-attach
                    <br/>
                    <Icon type="ios-backspace"/> ios-backspace
                    <Icon type="ios-backspace-outline"/> ios-backspace-outline
                    <Icon type="md-backspace"/> md-backspace
                    <br/>
                    <Icon type="ios-barcode"/> ios-barcode
                    <Icon type="ios-barcode-outline"/> ios-barcode-outline
                    <Icon type="md-barcode"/> md-barcode
                    <br/>
                    <Icon type="ios-baseball"/> ios-baseball
                    <Icon type="ios-baseball-outline"/> ios-baseball-outline
                    <Icon type="md-baseball"/> md-baseball
                    <br/>
                    <Icon type="ios-basket"/> ios-basket
                    <Icon type="ios-basket-outline"/> ios-basket-outline
                    <Icon type="md-basket"/> md-basket
                    <br/>
                    <Icon type="ios-basketball"/> ios-basketball
                    <Icon type="ios-basketball-outline"/> ios-basketball-outline
                    <Icon type="md-basketball"/> md-basketball
                    <br/>
                    <Icon type="ios-battery-charging"/> ios-battery-charging
                    <Icon type="md-battery-charging"/> md-battery-charging
                    <br/>
                    <Icon type="ios-battery-dead"/> ios-battery-dead
                    <Icon type="md-battery-dead"/> md-battery-dead
                    <br/>
                    <Icon type="ios-battery-full"/> ios-battery-full
                    <Icon type="md-battery-full"/> md-battery-full
                    <br/>
                    <Icon type="ios-beaker"/> ios-beaker
                    <Icon type="ios-beaker-outline"/> ios-beaker-outline
                    <Icon type="md-beaker"/> md-beaker
                    <br/>
                    <Icon type="ios-beer"/> ios-beer
                    <Icon type="ios-beer-outline"/> ios-beer-outline
                    <Icon type="md-beer"/> md-beer
                    <br/>
                    <Icon type="ios-bicycle"/> ios-bicycle
                    <Icon type="md-bicycle"/> md-bicycle
                    <br/>
                    <Icon type="ios-bluetooth"/> ios-bluetooth
                    <Icon type="md-bluetooth"/> md-bluetooth
                    <br/>
                    <Icon type="ios-boat"/> ios-boat
                    <Icon type="ios-boat-outline"/> ios-boat-outline
                    <Icon type="md-boat"/> md-boat
                    <br/>
                    <Icon type="ios-body"/> ios-body
                    <Icon type="ios-body-outline"/> ios-body-outline
                    <Icon type="md-body"/> md-body
                    <br/>
                    <Icon type="ios-bonfire"/> ios-bonfire
                    <Icon type="ios-bonfire-outline"/> ios-bonfire-outline
                    <Icon type="md-bonfire"/> md-bonfire
                    <br/>
                    <Icon type="ios-book"/> ios-book
                    <Icon type="ios-book-outline"/> ios-book-outline
                    <Icon type="md-book"/> md-book
                    <br/>
                    <Icon type="ios-bookmark"/> ios-bookmark
                    <Icon type="ios-bookmark-outline"/> ios-bookmark-outline
                    <Icon type="md-bookmark"/> md-bookmark
                    <br/>
                    <Icon type="ios-bookmarks"/> ios-bookmarks
                    <Icon type="ios-bookmarks-outline"/> ios-bookmarks-outline
                    <Icon type="md-bookmarks"/> md-bookmarks
                    <br/>
                    <Icon type="ios-bowtie"/> ios-bowtie
                    <Icon type="ios-bowtie-outline"/> ios-bowtie-outline
                    <Icon type="md-bowtie"/> md-bowtie
                    <br/>
                    <Icon type="ios-briefcase"/> ios-briefcase
                    <Icon type="ios-briefcase-outline"/> ios-briefcase-outline
                    <Icon type="md-briefcase"/> md-briefcase
                    <br/>
                    <Icon type="ios-browsers"/> ios-browsers
                    <Icon type="ios-browsers-outline"/> ios-browsers-outline
                    <br/>
                    <Icon type="md-browsers"/> md-browsers
                    <Icon type="ios-brush"/> ios-brush
                    <Icon type="ios-brush-outline"/> ios-brush-outline
                    <Icon type="md-brush"/> md-brush
                    <br/>
                    <Icon type="ios-bug"/> ios-bug
                    <Icon type="ios-bug-outline"/> ios-bug-outline
                    <Icon type="md-bug"/> md-bug
                    <br/>
                    <Icon type="ios-build"/> ios-build
                    <Icon type="ios-build-outline"/> ios-build-outline
                    <Icon type="md-build"/> md-build
                    <br/>
                    <Icon type="ios-bulb"/> ios-bulb
                    <Icon type="ios-bulb-outline"/> ios-bulb-outline
                    <Icon type="md-bulb"/> md-bulb
                    <br/>
                    <Icon type="ios-bus"/> ios-bus
                    <Icon type="ios-bus-outline"/> ios-bus-outline
                    <Icon type="md-bus"/> md-bus
                    <br/>
                    <Icon type="ios-cafe"/> ios-cafe
                    <Icon type="ios-cafe-outline"/> ios-cafe-outline
                    <Icon type="md-cafe"/> md-cafe
                    <br/>
                    <Icon type="ios-calculator"/> ios-calculator
                    <Icon type="ios-calculator-outline"/> ios-calculator-outline
                    <Icon type="md-calculator"/> md-calculator
                    <br/>
                    <Icon type="ios-calendar"/> ios-calendar
                    <Icon type="ios-calendar-outline"/> ios-calendar-outline
                    <Icon type="md-calendar"/> md-calendar
                    <br/>
                    <Icon type="ios-call"/> ios-call
                    <Icon type="ios-call-outline"/> ios-call-outline
                    <Icon type="md-call"/> md-call
                    <br/>
                    <Icon type="ios-camera"/> ios-camera
                    <Icon type="ios-camera-outline"/> ios-camera-outline
                    <Icon type="md-camera"/> md-camera
                    <br/>
                    <Icon type="ios-car"/> ios-car
                    <Icon type="ios-car-outline"/> ios-car-outline
                    <Icon type="md-car"/> md-car
                    <br/>
                    <Icon type="ios-card"/> ios-card
                    <Icon type="ios-card-outline"/> ios-card-outline
                    <Icon type="md-card"/> md-card
                    <br/>
                    <Icon type="ios-cart"/> ios-cart
                    <Icon type="ios-cart-outline"/> ios-cart-outline
                    <Icon type="md-cart"/> md-cart
                    <br/>
                    <Icon type="ios-cash"/> ios-cash
                    <Icon type="ios-cash-outline"/> ios-cash-outline
                    <Icon type="md-cash"/> md-cash
                    <br/>
                    <Icon type="ios-chatboxes"/> ios-chatboxes
                    <Icon type="ios-chatboxes-outline"/> ios-chatboxes-outline
                    <Icon type="md-chatboxes"/> md-chatboxes
                    <br/>
                    <Icon type="ios-chatbubbles"/> ios-chatbubbles
                    <Icon type="ios-chatbubbles-outline"/> ios-chatbubbles-outline
                    <Icon type="md-chatbubbles"/> md-chatbubbles
                    <br/>
                    <Icon type="ios-checkbox"/> ios-checkbox
                    <Icon type="ios-checkbox-outline"/> ios-checkbox-outline
                    <Icon type="md-checkbox"/> md-checkbox
                    <Icon type="md-checkbox-outline"/> md-checkbox-outline
                    <br/>
                    <Icon type="ios-checkmark"/> ios-checkmark
                    <Icon type="md-checkmark"/> md-checkmark
                    <br/>
                    <Icon type="ios-checkmark-circle"/> ios-checkmark-circle
                    <Icon type="ios-checkmark-circle-outline"/> ios-checkmark-circle-outline
                    <Icon type="md-checkmark-circle"/> md-checkmark-circle
                    <Icon type="md-checkmark-circle-outline"/> md-checkmark-circle-outline
                    <br/>
                    <Icon type="ios-clipboard"/> ios-clipboard
                    <Icon type="ios-clipboard-outline"/> ios-clipboard-outline
                    <Icon type="md-clipboard"/> md-clipboard
                    <br/>
                    <Icon type="ios-clock"/> ios-clock
                    <Icon type="ios-clock-outline"/> ios-clock-outline
                    <Icon type="md-clock"/> md-clock
                    <br/>
                    <Icon type="ios-close"/> ios-close
                    <Icon type="md-close"/> md-close
                    <br/>
                    <Icon type="ios-close-circle"/> ios-close-circle
                    <Icon type="ios-close-circle-outline"/> ios-close-circle-outline
                    <Icon type="md-close-circle"/> md-close-circle
                    <br/>
                    <Icon type="ios-closed-captioning"/> ios-closed-captioning
                    <Icon type="ios-closed-captioning-outline"/> ios-closed-captioning-outline
                    <Icon type="md-closed-captioning"/> md-closed-captioning
                    <br/>
                    <Icon type="ios-cloud"/> ios-cloud
                    <Icon type="ios-cloud-outline"/> ios-cloud-outline
                    <Icon type="md-cloud"/> md-cloud
                    <br/>
                    <Icon type="ios-cloud-circle"/> ios-cloud-circle
                    <Icon type="ios-cloud-circle-outline"/> ios-cloud-circle-outline
                    <Icon type="md-cloud-circle"/> md-cloud-circle
                    <br/>
                    <Icon type="ios-cloud-done"/> ios-cloud-done
                    <Icon type="ios-cloud-done-outline"/> ios-cloud-done-outline
                    <Icon type="md-cloud-done"/> md-cloud-done
                    <br/>
                    <Icon type="ios-cloud-download"/> ios-cloud-download
                    <Icon type="ios-cloud-download-outline"/> ios-cloud-download-outline
                    <Icon type="md-cloud-download"/> md-cloud-download
                    <Icon type="md-cloud-outline"/> md-cloud-outline
                    <br/>
                    <Icon type="ios-cloud-upload"/> ios-cloud-upload
                    <Icon type="ios-cloud-upload-outline"/> ios-cloud-upload-outline
                    <Icon type="md-cloud-upload"/> md-cloud-upload
                    <br/>
                    <Icon type="ios-cloudy"/> ios-cloudy
                    <Icon type="ios-cloudy-outline"/> ios-cloudy-outline
                    <Icon type="md-cloudy"/> md-cloudy
                    <br/>
                    <Icon type="ios-cloudy-night"/> ios-cloudy-night
                    <Icon type="ios-cloudy-night-outline"/> ios-cloudy-night-outline
                    <Icon type="md-cloudy-night"/> md-cloudy-night
                    <br/>
                    <Icon type="ios-code"/> ios-code
                    <Icon type="md-code"/> md-code
                    <br/>
                    <Icon type="ios-code-download"/> ios-code-download
                    <Icon type="md-code-download"/> md-code-download
                    <br/>
                    <Icon type="ios-code-working"/> ios-code-working
                    <Icon type="md-code-working"/> md-code-working
                    <br/>
                    <Icon type="ios-cog"/> ios-cog
                    <Icon type="ios-cog-outline"/> ios-cog-outline
                    <Icon type="md-cog"/> md-cog
                    <br/>
                    <Icon type="ios-color-fill"/> ios-color-fill
                    <Icon type="ios-color-fill-outline"/> ios-color-fill-outline
                    <Icon type="md-color-fill"/> md-color-fill
                    <br/>
                    <Icon type="ios-color-filter"/> ios-color-filter
                    <Icon type="ios-color-filter-outline"/> ios-color-filter-outline
                    <Icon type="md-color-filter"/> md-color-filter
                    <br/>
                    <Icon type="ios-color-palette"/> ios-color-palette
                    <Icon type="ios-color-palette-outline"/> ios-color-palette-outline
                    <Icon type="md-color-palette"/> md-color-palette
                    <br/>
                    <Icon type="ios-color-wand"/> ios-color-wand
                    <Icon type="ios-color-wand-outline"/> ios-color-wand-outline
                    <Icon type="md-color-wand"/> md-color-wand
                    <br/>
                    <Icon type="ios-compass"/> ios-compass
                    <Icon type="ios-compass-outline"/> ios-compass-outline
                    <Icon type="md-compass"/> md-compass
                    <br/>
                    <Icon type="ios-construct"/> ios-construct
                    <Icon type="ios-construct-outline"/> ios-construct-outline
                    <Icon type="md-construct"/> md-construct
                    <br/>
                    <Icon type="ios-contact"/> ios-contact
                    <Icon type="ios-contact-outline"/> ios-contact-outline
                    <Icon type="md-contact"/> md-contact
                    <br/>
                    <Icon type="ios-contacts"/> ios-contacts
                    <Icon type="ios-contacts-outline"/> ios-contacts-outline
                    <Icon type="md-contacts"/> md-contacts
                    <br/>
                    <Icon type="ios-contract"/> ios-contract
                    <Icon type="md-contract"/> md-contract
                    <br/>
                    <Icon type="ios-contrast"/> ios-contrast
                    <Icon type="md-contrast"/> md-contrast
                    <br/>
                    <Icon type="ios-copy"/> ios-copy
                    <Icon type="ios-copy-outline"/> ios-copy-outline
                    <Icon type="md-copy"/> md-copy
                    <br/>
                    <Icon type="ios-create"/> ios-create
                    <Icon type="ios-create-outline"/> ios-create-outline
                    <Icon type="md-create"/> md-create
                    <br/>
                    <Icon type="ios-crop"/> ios-crop
                    <Icon type="ios-crop-outline"/> ios-crop-outline
                    <Icon type="md-crop"/> md-crop
                    <br/>
                    <Icon type="ios-cube"/> ios-cube
                    <Icon type="ios-cube-outline"/> ios-cube-outline
                    <Icon type="md-cube"/> md-cube
                    <br/>
                    <Icon type="ios-cut"/> ios-cut
                    <Icon type="ios-cut-outline"/> ios-cut-outline
                    <Icon type="md-cut"/> md-cut
                    <br/>
                    <Icon type="ios-desktop"/> ios-desktop
                    <Icon type="ios-desktop-outline"/> ios-desktop-outline
                    <Icon type="md-desktop"/> md-desktop
                    <br/>
                    <Icon type="ios-disc"/> ios-disc
                    <Icon type="ios-disc-outline"/> ios-disc-outline
                    <Icon type="md-disc"/> md-disc
                    <br/>
                    <Icon type="ios-document"/> ios-document
                    <Icon type="ios-document-outline"/> ios-document-outline
                    <Icon type="md-document"/> md-document
                    <br/>
                    <Icon type="ios-done-all"/> ios-done-all
                    <Icon type="md-done-all"/> md-done-all
                    <br/>
                    <Icon type="ios-download"/> ios-download
                    <Icon type="ios-download-outline"/> ios-download-outline
                    <Icon type="md-download"/> md-download
                    <br/>
                    <Icon type="ios-easel"/> ios-easel
                    <Icon type="ios-easel-outline"/> ios-easel-outline
                    <Icon type="md-easel"/> md-easel
                    <br/>
                    <Icon type="ios-egg"/> ios-egg
                    <Icon type="ios-egg-outline"/> ios-egg-outline
                    <Icon type="md-egg"/> md-egg
                    <br/>
                    <Icon type="ios-exit"/> ios-exit
                    <Icon type="ios-exit-outline"/> ios-exit-outline
                    <Icon type="md-exit"/> md-exit
                    <br/>
                    <Icon type="ios-expand"/> ios-expand
                    <Icon type="md-expand"/> md-expand
                    <br/>
                    <Icon type="ios-eye"/> ios-eye
                    <Icon type="ios-eye-outline"/> ios-eye-outline
                    <Icon type="md-eye"/> md-eye
                    <br/>
                    <Icon type="ios-eye-off"/> ios-eye-off
                    <Icon type="ios-eye-off-outline"/> ios-eye-off-outline
                    <Icon type="md-eye-off"/> md-eye-off
                    <br/>
                    <Icon type="ios-fastforward"/> ios-fastforward
                    <Icon type="ios-fastforward-outline"/> ios-fastforward-outline
                    <Icon type="md-fastforward"/> md-fastforward
                    <br/>
                    <Icon type="ios-female"/> ios-female
                    <Icon type="md-female"/> md-female
                    <br/>
                    <Icon type="ios-filing"/> ios-filing
                    <Icon type="ios-filing-outline"/> ios-filing-outline
                    <Icon type="md-filing"/> md-filing
                    <br/>
                    <Icon type="ios-film"/> ios-film
                    <Icon type="ios-film-outline"/> ios-film-outline
                    <Icon type="md-film"/> md-film
                    <br/>
                    <Icon type="ios-finger-print"/> ios-finger-print
                    <Icon type="md-finger-print"/> md-finger-print
                    <br/>
                    <Icon type="ios-flag"/> ios-flag
                    <Icon type="ios-flag-outline"/> ios-flag-outline
                    <Icon type="md-flag"/> md-flag
                    <br/>
                    <Icon type="ios-flame"/> ios-flame
                    <Icon type="ios-flame-outline"/> ios-flame-outline
                    <Icon type="md-flame"/> md-flame
                    <br/>
                    <Icon type="ios-flash"/> ios-flash
                    <Icon type="ios-flash-outline"/> ios-flash-outline
                    <Icon type="md-flash"/> md-flash
                    <br/>
                    <Icon type="ios-flask"/> ios-flask
                    <Icon type="ios-flask-outline"/> ios-flask-outline
                    <Icon type="md-flask"/> md-flask
                    <br/>
                    <Icon type="ios-flower"/> ios-flower
                    <Icon type="ios-flower-outline"/> ios-flower-outline
                    <Icon type="md-flower"/> md-flower
                    <br/>
                    <Icon type="ios-folder"/> ios-folder
                    <Icon type="ios-folder-outline"/> ios-folder-outline
                    <Icon type="md-folder"/> md-folder
                    <br/>
                    <Icon type="ios-folder-open"/> ios-folder-open
                    <Icon type="ios-folder-open-outline"/> ios-folder-open-outline
                    <Icon type="md-folder-open"/> md-folder-open
                    <br/>
                    <Icon type="ios-football"/> ios-football
                    <Icon type="ios-football-outline"/> ios-football-outline
                    <Icon type="md-football"/> md-football
                    <br/>
                    <Icon type="ios-funnel"/> ios-funnel
                    <Icon type="ios-funnel-outline"/> ios-funnel-outline
                    <Icon type="md-funnel"/> md-funnel
                    <br/>
                    <Icon type="ios-game-controller-a"/> ios-game-controller-a
                    <Icon type="ios-game-controller-a-outline"/> ios-game-controller-a-outline
                    <Icon type="md-game-controller-a"/> md-game-controller-a
                    <br/>
                    <Icon type="ios-game-controller-b"/> ios-game-controller-b
                    <Icon type="ios-game-controller-b-outline"/> ios-game-controller-b-outline
                    <Icon type="md-game-controller-b"/> md-game-controller-b
                    <br/>
                    <Icon type="ios-git-branch"/> ios-git-branch
                    <Icon type="md-git-branch"/> md-git-branch
                    <br/>
                    <Icon type="ios-git-commit"/> ios-git-commit
                    <Icon type="md-git-commit"/> md-git-commit
                    <br/>
                    <Icon type="ios-git-compare"/> ios-git-compare
                    <Icon type="md-git-compare"/> md-git-compare
                    <br/>
                    <Icon type="ios-git-merge"/> ios-git-merge
                    <Icon type="md-git-merge"/> md-git-merge
                    <br/>
                    <Icon type="ios-git-network"/> ios-git-network
                    <Icon type="md-git-network"/> md-git-network
                    <br/>
                    <Icon type="ios-git-pull-request"/> ios-git-pull-request
                    <Icon type="md-git-pull-request"/> md-git-pull-request
                    <br/>
                    <Icon type="ios-glasses"/> ios-glasses
                    <Icon type="ios-glasses-outline"/> ios-glasses-outline
                    <Icon type="md-glasses"/> md-glasses
                    <br/>
                    <Icon type="ios-globe"/> ios-globe
                    <Icon type="ios-globe-outline"/> ios-globe-outline
                    <Icon type="md-globe"/> md-globe
                    <br/>
                    <Icon type="ios-grid"/> ios-grid
                    <Icon type="ios-grid-outline"/> ios-grid-outline
                    <Icon type="md-grid"/> md-grid
                    <br/>
                    <Icon type="ios-hammer"/> ios-hammer
                    <Icon type="ios-hammer-outline"/> ios-hammer-outline
                    <Icon type="md-hammer"/> md-hammer
                    <br/>
                    <Icon type="ios-hand"/> ios-hand
                    <Icon type="ios-hand-outline"/> ios-hand-outline
                    <Icon type="md-hand"/> md-hand
                    <br/>
                    <Icon type="ios-happy"/> ios-happy
                    <Icon type="ios-happy-outline"/> ios-happy-outline
                    <Icon type="md-happy"/> md-happy
                    <br/>
                    <Icon type="ios-headset"/> ios-headset
                    <Icon type="ios-headset-outline"/> ios-headset-outline
                    <Icon type="md-headset"/> md-headset
                    <br/>
                    <Icon type="ios-heart"/> ios-heart
                    <Icon type="ios-heart-outline"/> ios-heart-outline
                    <Icon type="md-heart"/> md-heart
                    <Icon type="md-heart-outline"/> md-heart-outline
                    <br/>
                    <Icon type="ios-help"/> ios-help
                    <Icon type="md-help"/> md-help
                    <br/>
                    <Icon type="ios-help-buoy"/> ios-help-buoy
                    <Icon type="ios-help-buoy-outline"/> ios-help-buoy-outline
                    <Icon type="md-help-buoy"/> md-help-buoy
                    <br/>
                    <Icon type="ios-help-circle"/> ios-help-circle
                    <Icon type="ios-help-circle-outline"/> ios-help-circle-outline
                    <Icon type="md-help-circle"/> md-help-circle
                    <br/>
                    <Icon type="ios-home"/> ios-home
                    <Icon type="ios-home-outline"/> ios-home-outline
                    <Icon type="md-home"/> md-home
                    <br/>
                    <Icon type="ios-ice-cream"/> ios-ice-cream
                    <Icon type="ios-ice-cream-outline"/> ios-ice-cream-outline
                    <Icon type="md-ice-cream"/> md-ice-cream
                    <br/>
                    <Icon type="ios-image"/> ios-image
                    <Icon type="ios-image-outline"/> ios-image-outline
                    <Icon type="md-image"/> md-image
                    <br/>
                    <Icon type="ios-images"/> ios-images
                    <Icon type="ios-images-outline"/> ios-images-outline
                    <Icon type="md-images"/> md-images
                    <br/>
                    <Icon type="ios-infinite"/> ios-infinite
                    <Icon type="ios-infinite-outline"/> ios-infinite-outline
                    <Icon type="md-infinite"/> md-infinite
                    <br/>
                    <Icon type="ios-information"/> ios-information
                    <Icon type="md-information"/> md-information
                    <br/>
                    <Icon type="ios-information-circle"/> ios-information-circle
                    <Icon type="ios-information-circle-outline"/> ios-information-circle-outline
                    <Icon type="md-information-circle"/> md-information-circle
                    <br/>
                    <Icon type="ios-ionic"/> ios-ionic
                    <Icon type="ios-ionic-outline"/> ios-ionic-outline
                    <Icon type="md-ionic"/> md-ionic
                    <br/>
                    <Icon type="ios-ionitron"/> ios-ionitron
                    <Icon type="ios-ionitron-outline"/> ios-ionitron-outline
                    <Icon type="md-ionitron"/> md-ionitron
                    <br/>
                    <Icon type="ios-jet"/> ios-jet
                    <Icon type="ios-jet-outline"/> ios-jet-outline
                    <Icon type="md-jet"/> md-jet
                    <br/>
                    <Icon type="ios-key"/> ios-key
                    <Icon type="ios-key-outline"/> ios-key-outline
                    <Icon type="md-key"/> md-key
                    <br/>
                    <Icon type="ios-keypad"/> ios-keypad
                    <Icon type="ios-keypad-outline"/> ios-keypad-outline
                    <Icon type="md-keypad"/> md-keypad
                    <br/>
                    <Icon type="ios-laptop"/> ios-laptop
                    <Icon type="md-laptop"/> md-laptop
                    <br/>
                    <Icon type="ios-leaf"/> ios-leaf
                    <Icon type="ios-leaf-outline"/> ios-leaf-outline
                    <Icon type="md-leaf"/> md-leaf
                    <br/>
                    <Icon type="ios-link"/> ios-link
                    <Icon type="ios-link-outline"/> ios-link-outline
                    <Icon type="md-link"/> md-link
                    <br/>
                    <Icon type="ios-list"/> ios-list
                    <Icon type="md-list"/> md-list
                    <br/>
                    <Icon type="ios-list-box"/> ios-list-box
                    <Icon type="ios-list-box-outline"/> ios-list-box-outline
                    <Icon type="md-list-box"/> md-list-box
                    <br/>
                    <Icon type="ios-locate"/> ios-locate
                    <Icon type="ios-locate-outline"/> ios-locate-outline
                    <Icon type="md-locate"/> md-locate
                    <br/>
                    <Icon type="ios-lock"/> ios-lock
                    <Icon type="ios-lock-outline"/> ios-lock-outline
                    <Icon type="md-lock"/> md-lock
                    <br/>
                    <Icon type="ios-log-in"/> ios-log-in
                    <Icon type="md-log-in"/> md-log-in
                    <br/>
                    <Icon type="ios-log-out"/> ios-log-out
                    <Icon type="md-log-out"/> md-log-out
                    <br/>
                    <Icon type="ios-magnet"/> ios-magnet
                    <Icon type="ios-magnet-outline"/> ios-magnet-outline
                    <Icon type="md-magnet"/> md-magnet
                    <br/>
                    <Icon type="ios-mail"/> ios-mail
                    <Icon type="ios-mail-outline"/> ios-mail-outline
                    <Icon type="md-mail"/> md-mail
                    <br/>
                    <Icon type="ios-mail-open"/> ios-mail-open
                    <Icon type="ios-mail-open-outline"/> ios-mail-open-outline
                    <Icon type="md-mail-open"/> md-mail-open
                    <br/>
                    <Icon type="ios-male"/> ios-male
                    <Icon type="md-male"/> md-male
                    <br/>
                    <Icon type="ios-man"/> ios-man
                    <Icon type="ios-man-outline"/> ios-man-outline
                    <Icon type="md-man"/> md-man
                    <br/>
                    <Icon type="ios-map"/> ios-map
                    <Icon type="ios-map-outline"/> ios-map-outline
                    <Icon type="md-map"/> md-map
                    <br/>
                    <Icon type="ios-medal"/> ios-medal
                    <Icon type="ios-medal-outline"/> ios-medal-outline
                    <Icon type="md-medal"/> md-medal
                    <br/>
                    <Icon type="ios-medical"/> ios-medical
                    <Icon type="ios-medical-outline"/> ios-medical-outline
                    <Icon type="md-medical"/> md-medical
                    <br/>
                    <Icon type="ios-medkit"/> ios-medkit
                    <Icon type="ios-medkit-outline"/> ios-medkit-outline
                    <Icon type="md-medkit"/> md-medkit
                    <br/>
                    <Icon type="ios-megaphone"/> ios-megaphone
                    <Icon type="ios-megaphone-outline"/> ios-megaphone-outline
                    <Icon type="md-megaphone"/> md-megaphone
                    <br/>
                    <Icon type="ios-menu"/> ios-menu
                    <Icon type="ios-menu-outline"/> ios-menu-outline
                    <Icon type="md-menu"/> md-menu
                    <br/>
                    <Icon type="ios-mic"/> ios-mic
                    <Icon type="ios-mic-outline"/> ios-mic-outline
                    <Icon type="md-mic"/> md-mic
                    <br/>
                    <Icon type="ios-mic-off"/> ios-mic-off
                    <Icon type="ios-mic-off-outline"/> ios-mic-off-outline
                    <Icon type="md-mic-off"/> md-mic-off
                    <br/>
                    <Icon type="ios-microphone"/> ios-microphone
                    <Icon type="ios-microphone-outline"/> ios-microphone-outline
                    <Icon type="md-microphone"/> md-microphone
                    <br/>
                    <Icon type="ios-moon"/> ios-moon
                    <Icon type="ios-moon-outline"/> ios-moon-outline
                    <Icon type="md-moon"/> md-moon
                    <br/>
                    <Icon type="ios-more"/> ios-more
                    <Icon type="ios-more-outline"/> ios-more-outline
                    <Icon type="md-more"/> md-more
                    <br/>
                    <Icon type="ios-move"/> ios-move
                    <Icon type="md-move"/> md-move
                    <br/>
                    <Icon type="ios-musical-note"/> ios-musical-note
                    <Icon type="ios-musical-note-outline"/> ios-musical-note-outline
                    <Icon type="md-musical-note"/> md-musical-note
                    <br/>
                    <Icon type="ios-musical-notes"/> ios-musical-notes
                    <Icon type="ios-musical-notes-outline"/> ios-musical-notes-outline
                    <Icon type="md-musical-notes"/> md-musical-notes
                    <br/>
                    <Icon type="ios-navigate"/> ios-navigate
                    <Icon type="ios-navigate-outline"/> ios-navigate-outline
                    <Icon type="md-navigate"/> md-navigate
                    <br/>
                    <Icon type="ios-no-smoking"/> ios-no-smoking
                    <Icon type="ios-no-smoking-outline"/> ios-no-smoking-outline
                    <Icon type="md-no-smoking"/> md-no-smoking
                    <br/>
                    <Icon type="ios-notifications"/> ios-notifications
                    <Icon type="ios-notifications-outline"/> ios-notifications-outline
                    <Icon type="md-notifications"/> md-notifications
                    <br/>
                    <Icon type="ios-notifications-off"/> ios-notifications-off
                    <Icon type="ios-notifications-off-outline"/> ios-notifications-off-outline
                    <Icon type="md-notifications-off"/> md-notifications-off
                    <Icon type="md-notifications-outline"/> md-notifications-outline
                    <br/>
                    <Icon type="ios-nuclear"/> ios-nuclear
                    <Icon type="ios-nuclear-outline"/> ios-nuclear-outline
                    <Icon type="md-nuclear"/> md-nuclear
                    <br/>
                    <Icon type="ios-nutrition"/> ios-nutrition
                    <Icon type="ios-nutrition-outline"/> ios-nutrition-outline
                    <Icon type="md-nutrition"/> md-nutrition
                    <br/>
                    <Icon type="ios-open"/> ios-open
                    <Icon type="ios-open-outline"/> ios-open-outline
                    <Icon type="md-open"/> md-open
                    <br/>
                    <Icon type="ios-options"/> ios-options
                    <Icon type="ios-options-outline"/> ios-options-outline
                    <Icon type="md-options"/> md-options
                    <br/>
                    <Icon type="ios-outlet"/> ios-outlet
                    <Icon type="ios-outlet-outline"/> ios-outlet-outline
                    <Icon type="md-outlet"/> md-outlet
                    <br/>
                    <Icon type="ios-paper"/> ios-paper
                    <Icon type="ios-paper-outline"/> ios-paper-outline
                    <Icon type="md-paper"/> md-paper
                    <br/>
                    <Icon type="ios-paper-plane"/> ios-paper-plane
                    <Icon type="ios-paper-plane-outline"/> ios-paper-plane-outline
                    <Icon type="md-paper-plane"/> md-paper-plane
                    <br/>
                    <Icon type="ios-partly-sunny"/> ios-partly-sunny
                    <Icon type="ios-partly-sunny-outline"/> ios-partly-sunny-outline
                    <Icon type="md-partly-sunny"/> md-partly-sunny
                    <br/>
                    <Icon type="ios-pause"/> ios-pause
                    <Icon type="ios-pause-outline"/> ios-pause-outline
                    <Icon type="md-pause"/> md-pause
                    <br/>
                    <Icon type="ios-paw"/> ios-paw
                    <Icon type="ios-paw-outline"/> ios-paw-outline
                    <Icon type="md-paw"/> md-paw
                    <br/>
                    <Icon type="ios-people"/> ios-people
                    <Icon type="ios-people-outline"/> ios-people-outline
                    <Icon type="md-people"/> md-people
                    <br/>
                    <Icon type="ios-person"/> ios-person
                    <Icon type="ios-person-outline"/> ios-person-outline
                    <Icon type="md-person"/> md-person
                    <br/>
                    <Icon type="ios-person-add"/> ios-person-add
                    <Icon type="ios-person-add-outline"/> ios-person-add-outline
                    <Icon type="md-person-add"/> md-person-add
                    <br/>
                    <Icon type="ios-phone-landscape"/> ios-phone-landscape
                    <Icon type="md-phone-landscape"/> md-phone-landscape
                    <br/>
                    <Icon type="ios-phone-portrait"/> ios-phone-portrait
                    <Icon type="md-phone-portrait"/> md-phone-portrait
                    <br/>
                    <Icon type="ios-photos"/> ios-photos
                    <Icon type="ios-photos-outline"/> ios-photos-outline
                    <Icon type="md-photos"/> md-photos
                    <br/>
                    <Icon type="ios-pie"/> ios-pie
                    <Icon type="ios-pie-outline"/> ios-pie-outline
                    <Icon type="md-pie"/> md-pie
                    <br/>
                    <Icon type="ios-pin"/> ios-pin
                    <Icon type="ios-pin-outline"/> ios-pin-outline
                    <Icon type="md-pin"/> md-pin
                    <br/>
                    <Icon type="ios-pint"/> ios-pint
                    <Icon type="ios-pint-outline"/> ios-pint-outline
                    <Icon type="md-pint"/> md-pint
                    <br/>
                    <Icon type="ios-pizza"/> ios-pizza
                    <Icon type="ios-pizza-outline"/> ios-pizza-outline
                    <Icon type="md-pizza"/> md-pizza
                    <br/>
                    <Icon type="ios-plane"/> ios-plane
                    <Icon type="ios-plane-outline"/> ios-plane-outline
                    <Icon type="md-plane"/> md-plane
                    <br/>
                    <Icon type="ios-planet"/> ios-planet
                    <Icon type="ios-planet-outline"/> ios-planet-outline
                    <Icon type="md-planet"/> md-planet
                    <br/>
                    <Icon type="ios-play"/> ios-play
                    <Icon type="ios-play-outline"/> ios-play-outline
                    <Icon type="md-play"/> md-play
                    <br/>
                    <Icon type="ios-podium"/> ios-podium
                    <Icon type="ios-podium-outline"/> ios-podium-outline
                    <Icon type="md-podium"/> md-podium
                    <br/>
                    <Icon type="ios-power"/> ios-power
                    <Icon type="ios-power-outline"/> ios-power-outline
                    <Icon type="md-power"/> md-power
                    <br/>
                    <Icon type="ios-pricetag"/> ios-pricetag
                    <Icon type="ios-pricetag-outline"/> ios-pricetag-outline
                    <Icon type="md-pricetag"/> md-pricetag
                    <br/>
                    <Icon type="ios-pricetags"/> ios-pricetags
                    <Icon type="ios-pricetags-outline"/> ios-pricetags-outline
                    <Icon type="md-pricetags"/> md-pricetags
                    <br/>
                    <Icon type="ios-print"/> ios-print
                    <Icon type="ios-print-outline"/> ios-print-outline
                    <Icon type="md-print"/> md-print
                    <br/>
                    <Icon type="ios-pulse"/> ios-pulse
                    <Icon type="ios-pulse-outline"/> ios-pulse-outline
                    <Icon type="md-pulse"/> md-pulse
                    <br/>
                    <Icon type="ios-qr-scanner"/> ios-qr-scanner
                    <Icon type="md-qr-scanner"/> md-qr-scanner
                    <br/>
                    <Icon type="ios-quote"/> ios-quote
                    <Icon type="ios-quote-outline"/> ios-quote-outline
                    <Icon type="md-quote"/> md-quote
                    <br/>
                    <Icon type="ios-radio"/> ios-radio
                    <Icon type="ios-radio-outline"/> ios-radio-outline
                    <Icon type="md-radio"/> md-radio
                    <br/>
                    <Icon type="ios-radio-button-off"/> ios-radio-button-off
                    <Icon type="md-radio-button-off"/> md-radio-button-off
                    <br/>
                    <Icon type="ios-radio-button-on"/> ios-radio-button-on
                    <Icon type="md-radio-button-on"/> md-radio-button-on
                    <br/>
                    <Icon type="ios-rainy"/> ios-rainy
                    <Icon type="ios-rainy-outline"/> ios-rainy-outline
                    <Icon type="md-rainy"/> md-rainy
                    <br/>
                    <Icon type="ios-recording"/> ios-recording
                    <Icon type="ios-recording-outline"/> ios-recording-outline
                    <Icon type="md-recording"/> md-recording
                    <br/>
                    <Icon type="ios-redo"/> ios-redo
                    <Icon type="ios-redo-outline"/> ios-redo-outline
                    <Icon type="md-redo"/> md-redo
                    <br/>
                    <Icon type="ios-refresh"/> ios-refresh
                    <Icon type="md-refresh"/> md-refresh
                    <br/>
                    <Icon type="ios-refresh-circle"/> ios-refresh-circle
                    <Icon type="ios-refresh-circle-outline"/> ios-refresh-circle-outline
                    <Icon type="md-refresh-circle"/> md-refresh-circle
                    <br/>
                    <Icon type="ios-remove"/> ios-remove
                    <Icon type="md-remove"/> md-remove
                    <br/>
                    <Icon type="ios-remove-circle"/> ios-remove-circle
                    <Icon type="ios-remove-circle-outline"/> ios-remove-circle-outline
                    <Icon type="md-remove-circle"/> md-remove-circle
                    <br/>
                    <Icon type="ios-reorder"/> ios-reorder
                    <Icon type="md-reorder"/> md-reorder
                    <br/>
                    <Icon type="ios-repeat"/> ios-repeat
                    <Icon type="md-repeat"/> md-repeat
                    <br/>
                    <Icon type="ios-resize"/> ios-resize
                    <Icon type="md-resize"/> md-resize
                    <br/>
                    <Icon type="ios-restaurant"/> ios-restaurant
                    <Icon type="ios-restaurant-outline"/> ios-restaurant-outline
                    <Icon type="md-restaurant"/> md-restaurant
                    <br/>
                    <Icon type="ios-return-left"/> ios-return-left
                    <Icon type="md-return-left"/> md-return-left
                    <br/>
                    <Icon type="ios-return-right"/> ios-return-right
                    <Icon type="md-return-right"/> md-return-right
                    <br/>
                    <Icon type="ios-reverse-camera"/> ios-reverse-camera
                    <Icon type="ios-reverse-camera-outline"/> ios-reverse-camera-outline
                    <Icon type="md-reverse-camera"/> md-reverse-camera
                    <br/>
                    <Icon type="ios-rewind"/> ios-rewind
                    <Icon type="ios-rewind-outline"/> ios-rewind-outline
                    <Icon type="md-rewind"/> md-rewind
                    <br/>
                    <Icon type="ios-ribbon"/> ios-ribbon
                    <Icon type="ios-ribbon-outline"/> ios-ribbon-outline
                    <Icon type="md-ribbon"/> md-ribbon
                    <br/>
                    <Icon type="ios-rose"/> ios-rose
                    <Icon type="ios-rose-outline"/> ios-rose-outline
                    <Icon type="md-rose"/> md-rose
                    <br/>
                    <Icon type="ios-sad"/> ios-sad
                    <Icon type="ios-sad-outline"/> ios-sad-outline
                    <Icon type="md-sad"/> md-sad
                    <br/>
                    <Icon type="ios-school"/> ios-school
                    <Icon type="ios-school-outline"/> ios-school-outline
                    <Icon type="md-school"/> md-school
                    <br/>
                    <Icon type="ios-search"/> ios-search
                    <Icon type="ios-search-outline"/> ios-search-outline
                    <Icon type="md-search"/> md-search
                    <br/>
                    <Icon type="ios-send"/> ios-send
                    <Icon type="ios-send-outline"/> ios-send-outline
                    <Icon type="md-send"/> md-send
                    <br/>
                    <Icon type="ios-settings"/> ios-settings
                    <Icon type="ios-settings-outline"/> ios-settings-outline
                    <Icon type="md-settings"/> md-settings
                    <br/>
                    <Icon type="ios-share"/> ios-share
                    <Icon type="ios-share-outline"/> ios-share-outline
                    <Icon type="md-share"/> md-share
                    <br/>
                    <Icon type="ios-share-alt"/> ios-share-alt
                    <Icon type="ios-share-alt-outline"/> ios-share-alt-outline
                    <Icon type="md-share-alt"/> md-share-alt
                    <br/>
                    <Icon type="ios-shirt"/> ios-shirt
                    <Icon type="ios-shirt-outline"/> ios-shirt-outline
                    <Icon type="md-shirt"/> md-shirt
                    <br/>
                    <Icon type="ios-shuffle"/> ios-shuffle
                    <Icon type="md-shuffle"/> md-shuffle
                    <br/>
                    <Icon type="ios-skip-backward"/> ios-skip-backward
                    <Icon type="ios-skip-backward-outline"/> ios-skip-backward-outline
                    <Icon type="md-skip-backward"/> md-skip-backward
                    <br/>
                    <Icon type="ios-skip-forward"/> ios-skip-forward
                    <Icon type="ios-skip-forward-outline"/> ios-skip-forward-outline
                    <Icon type="md-skip-forward"/> md-skip-forward
                    <br/>
                    <Icon type="ios-snow"/> ios-snow
                    <Icon type="ios-snow-outline"/> ios-snow-outline
                    <Icon type="md-snow"/> md-snow
                    <br/>
                    <Icon type="ios-speedometer"/> ios-speedometer
                    <Icon type="ios-speedometer-outline"/> ios-speedometer-outline
                    <Icon type="md-speedometer"/> md-speedometer
                    <br/>
                    <Icon type="ios-square"/> ios-square
                    <Icon type="ios-square-outline"/> ios-square-outline
                    <Icon type="md-square"/> md-square
                    <Icon type="md-square-outline"/> md-square-outline
                    <br/>
                    <Icon type="ios-star"/> ios-star
                    <Icon type="ios-star-outline"/> ios-star-outline
                    <Icon type="md-star"/> md-star
                    <br/>
                    <Icon type="ios-star-half"/> ios-star-half
                    <Icon type="md-star-half"/> md-star-half
                    <Icon type="md-star-outline"/> md-star-outline
                    <br/>
                    <Icon type="ios-stats"/> ios-stats
                    <Icon type="ios-stats-outline"/> ios-stats-outline
                    <Icon type="md-stats"/> md-stats
                    <br/>
                    <Icon type="ios-stopwatch"/> ios-stopwatch
                    <Icon type="ios-stopwatch-outline"/> ios-stopwatch-outline
                    <Icon type="md-stopwatch"/> md-stopwatch
                    <br/>
                    <Icon type="ios-subway"/> ios-subway
                    <Icon type="ios-subway-outline"/> ios-subway-outline
                    <Icon type="md-subway"/> md-subway
                    <br/>
                    <Icon type="ios-sunny"/> ios-sunny
                    <Icon type="ios-sunny-outline"/> ios-sunny-outline
                    <Icon type="md-sunny"/> md-sunny
                    <br/>
                    <Icon type="ios-swap"/> ios-swap
                    <Icon type="md-swap"/> md-swap
                    <br/>
                    <Icon type="ios-switch"/> ios-switch
                    <Icon type="ios-switch-outline"/> ios-switch-outline
                    <Icon type="md-switch"/> md-switch
                    <br/>
                    <Icon type="ios-sync"/> ios-sync
                    <Icon type="md-sync"/> md-sync
                    <br/>
                    <Icon type="ios-tablet-landscape"/> ios-tablet-landscape
                    <Icon type="md-tablet-landscape"/> md-tablet-landscape
                    <br/>
                    <Icon type="ios-tablet-portrait"/> ios-tablet-portrait
                    <Icon type="md-tablet-portrait"/> md-tablet-portrait
                    <br/>
                    <Icon type="ios-tennisball"/> ios-tennisball
                    <Icon type="ios-tennisball-outline"/> ios-tennisball-outline
                    <Icon type="md-tennisball"/> md-tennisball
                    <br/>
                    <Icon type="ios-text"/> ios-text
                    <Icon type="ios-text-outline"/> ios-text-outline
                    <Icon type="md-text"/> md-text
                    <br/>
                    <Icon type="ios-thermometer"/> ios-thermometer
                    <Icon type="ios-thermometer-outline"/> ios-thermometer-outline
                    <Icon type="md-thermometer"/> md-thermometer
                    <br/>
                    <Icon type="ios-thumbs-down"/> ios-thumbs-down
                    <Icon type="ios-thumbs-down-outline"/> ios-thumbs-down-outline
                    <Icon type="md-thumbs-down"/> md-thumbs-down
                    <br/>
                    <Icon type="ios-thumbs-up"/> ios-thumbs-up
                    <Icon type="ios-thumbs-up-outline"/> ios-thumbs-up-outline
                    <Icon type="md-thumbs-up"/> md-thumbs-up
                    <br/>
                    <Icon type="ios-thunderstorm"/> ios-thunderstorm
                    <Icon type="ios-thunderstorm-outline"/> ios-thunderstorm-outline
                    <Icon type="md-thunderstorm"/> md-thunderstorm
                    <br/>
                    <Icon type="ios-time"/> ios-time
                    <Icon type="ios-time-outline"/> ios-time-outline
                    <Icon type="md-time"/> md-time
                    <br/>
                    <Icon type="ios-timer"/> ios-timer
                    <Icon type="ios-timer-outline"/> ios-timer-outline
                    <Icon type="md-timer"/> md-timer
                    <br/>
                    <Icon type="ios-train"/> ios-train
                    <Icon type="ios-train-outline"/> ios-train-outline
                    <Icon type="md-train"/> md-train
                    <br/>
                    <Icon type="ios-transgender"/> ios-transgender
                    <Icon type="md-transgender"/> md-transgender
                    <br/>
                    <Icon type="ios-trash"/> ios-trash
                    <Icon type="ios-trash-outline"/> ios-trash-outline
                    <Icon type="md-trash"/> md-trash
                    <br/>
                    <Icon type="ios-trending-down"/> ios-trending-down
                    <Icon type="md-trending-down"/> md-trending-down
                    <br/>
                    <Icon type="ios-trending-up"/> ios-trending-up
                    <Icon type="md-trending-up"/> md-trending-up
                    <br/>
                    <Icon type="ios-trophy"/> ios-trophy
                    <Icon type="ios-trophy-outline"/> ios-trophy-outline
                    <Icon type="md-trophy"/> md-trophy
                    <br/>
                    <Icon type="ios-umbrella"/> ios-umbrella
                    <Icon type="ios-umbrella-outline"/> ios-umbrella-outline
                    <Icon type="md-umbrella"/> md-umbrella
                    <br/>
                    <Icon type="ios-undo"/> ios-undo
                    <Icon type="ios-undo-outline"/> ios-undo-outline
                    <Icon type="md-undo"/> md-undo
                    <br/>
                    <Icon type="ios-unlock"/> ios-unlock
                    <Icon type="ios-unlock-outline"/> ios-unlock-outline
                    <Icon type="md-unlock"/> md-unlock
                    <br/>
                    <Icon type="ios-videocam"/> ios-videocam
                    <Icon type="ios-videocam-outline"/> ios-videocam-outline
                    <Icon type="md-videocam"/> md-videocam
                    <br/>
                    <Icon type="ios-volume-down"/> ios-volume-down
                    <Icon type="md-volume-down"/> md-volume-down
                    <br/>
                    <Icon type="ios-volume-mute"/> ios-volume-mute
                    <Icon type="md-volume-mute"/> md-volume-mute
                    <br/>
                    <Icon type="ios-volume-off"/> ios-volume-off
                    <Icon type="md-volume-off"/> md-volume-off
                    <br/>
                    <Icon type="ios-volume-up"/> ios-volume-up
                    <Icon type="md-volume-up"/> md-volume-up
                    <br/>
                    <Icon type="ios-walk"/> ios-walk
                    <Icon type="md-walk"/> md-walk
                    <br/>
                    <Icon type="ios-warning"/> ios-warning
                    <Icon type="ios-warning-outline"/> ios-warning-outline
                    <Icon type="md-warning"/> md-warning
                    <br/>
                    <Icon type="ios-watch"/> ios-watch
                    <Icon type="md-watch"/> md-watch
                    <br/>
                    <Icon type="ios-water"/> ios-water
                    <Icon type="ios-water-outline"/> ios-water-outline
                    <Icon type="md-water"/> md-water
                    <br/>
                    <Icon type="ios-wifi"/> ios-wifi
                    <Icon type="ios-wifi-outline"/> ios-wifi-outline
                    <Icon type="md-wifi"/> md-wifi
                    <br/>
                    <Icon type="ios-wine"/> ios-wine
                    <Icon type="ios-wine-outline"/> ios-wine-outline
                    <Icon type="md-wine"/> md-wine
                    <br/>
                    <Icon type="ios-woman"/> ios-woman
                    <Icon type="ios-woman-outline"/> ios-woman-outline
                    <Icon type="md-woman"/> md-woman
                    <br/>
                    <Icon type="ios-loading"/> ios-loading
                    <br/>
                    <Icon type="logo-android"/> logo-android
                    <Icon type="logo-angular"/> logo-angular
                    <Icon type="logo-apple"/> logo-apple
                    <Icon type="logo-bitcoin"/> logo-bitcoin
                    <Icon type="logo-buffer"/> logo-buffer
                    <Icon type="logo-chrome"/> logo-chrome
                    <Icon type="logo-codepen"/> logo-codepen
                    <Icon type="logo-css3"/> logo-css3
                    <Icon type="logo-designernews"/> logo-designernews
                    <Icon type="logo-dribbble"/> logo-dribbble
                    <Icon type="logo-dropbox"/> logo-dropbox
                    <Icon type="logo-euro"/> logo-euro
                    <Icon type="logo-facebook"/> logo-facebook
                    <Icon type="logo-foursquare"/> logo-foursquare
                    <Icon type="logo-freebsd-devil"/> logo-freebsd-devil
                    <Icon type="logo-github"/> logo-github
                    <Icon type="logo-google"/> logo-google
                    <Icon type="logo-googleplus"/> logo-googleplus
                    <Icon type="logo-hackernews"/> logo-hackernews
                    <Icon type="logo-html5"/> logo-html5
                    <Icon type="logo-instagram"/> logo-instagram
                    <Icon type="logo-javascript"/> logo-javascript
                    <Icon type="logo-linkedin"/> logo-linkedin
                    <Icon type="logo-markdown"/> logo-markdown
                    <Icon type="logo-nodejs"/> logo-nodejs
                    <Icon type="logo-octocat"/> logo-octocat
                    <Icon type="logo-pinterest"/> logo-pinterest
                    <Icon type="logo-playstation"/> logo-playstation
                    <Icon type="logo-reddit"/> logo-reddit
                    <Icon type="logo-rss"/> logo-rss
                    <Icon type="logo-sass"/> logo-sass
                    <Icon type="logo-skype"/> logo-skype
                    <Icon type="logo-snapchat"/> logo-snapchat
                    <Icon type="logo-steam"/> logo-steam
                    <Icon type="logo-tumblr"/> logo-tumblr
                    <Icon type="logo-tux"/> logo-tux
                    <Icon type="logo-twitch"/> logo-twitch
                    <Icon type="logo-twitter"/> logo-twitter
                    <Icon type="logo-usd"/> logo-usd
                    <Icon type="logo-whatsapp"/> logo-whatsapp
                    <Icon type="logo-windows"/> logo-windows
                    <Icon type="logo-wordpress"/> logo-wordpress
                    <Icon type="logo-xbox"/> logo-xbox
                    <Icon type="logo-yahoo"/> logo-yahoo
                    <Icon type="logo-yen"/> logo-yen
                    <Icon type="logo-youtube"/> logo-youtube
                </p>
                <hr />
                <Collapse simple>
                    <Panel name="1">
                        iView 的 Icon 支持使用第三方自定义图标，你可以引入任意的字体文件库来使用。
                        <div slot="content">
                            <p>待需要时候收录 https://www.iviewui.com/components/icon</p>
                        </div>
                    </Panel>
                    <Panel name="2">
                        Icon API
                        <div slot="content">
                            <p></p>
                            <p></p>
                            <div class="api"><div class="anchor"><h2 id="API">API</h2>  <a href="#API">#</a></div> <div class="anchor"><h3 id="Icon_props">Icon props</h3>  <a href="#Icon_props">#</a></div> <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>type</td> <td>图标的名称</td> <td>String</td> <td>-</td></tr> <tr><td>size</td> <td>图标的大小，单位是 px</td> <td>Number | String</td> <td>-</td></tr> <tr><td>color</td> <td>图标的颜色</td> <td>String</td> <td>-</td></tr> <tr><td>custom</td> <td>自定义图标</td> <td>String</td> <td>-</td></tr></tbody></table></div>
                            <p></p>
                        </div>
                    </Panel>
                </Collapse>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
    </div>
</template>
<script>
import { success } from '@/tools' // 自定义常用工具

export default {
    data () {
        return { xx: 0.5 }
    },
    methods: {
        copyHtml (e) {
            if (e.target.nodeName === 'I') {
                let className = e.target.className
                className = className.replace('ivu-icon ivu-icon-', '')
                console.log(`<Icon type="${className}"/>`)
                success('拼装成功, 查看console')
            }
        }
    },
    mounted () {
    }
}
</script>
