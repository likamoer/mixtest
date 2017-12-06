
import Vue from 'vue'
import {
  Menu,
  Submenu,
  MenuItem,
  Container,
  Header,
  Main,
  Aside,
  Footer,
  Row,
  Col,
  Carousel,
  CarouselItem,
  Message,
  MessageBox,
  Notification,
  Button,
  Input,
  InputNumber,
  DatePicker,
  Form,
  FormItem,
  Table,
  TableColumn
} from 'element-ui'

// 按需加载 Element UI 的组件
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Footer)
Vue.use(Row)
Vue.use(Col)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Button)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(DatePicker)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Table)
Vue.use(TableColumn)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt

Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
