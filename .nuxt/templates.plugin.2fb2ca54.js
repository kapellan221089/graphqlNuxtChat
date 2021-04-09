import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

    import  { faCog as fortawesomefreesolidsvgicons_faCog } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faCog)

    import  { faEdit as fortawesomefreesolidsvgicons_faEdit } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faEdit)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
