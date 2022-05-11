// namespace Home {  /* --------1 .命名空间方式------- */
import { Header, Content, Footer } from './components' /* import方式 */
export default class Page {
    constructor() {
        /* ------------命名空间写法------ */
        // new Components.Header()
        // new Components.Content()
        // new Components.Footer()

        /* -----2. import方式写法--- */
        new Header()
        new Content()
        new Footer()
    }
}

// }