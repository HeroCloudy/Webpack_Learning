import sum from "./js/sum"
import getLength from "./js/str"
import './style/css/css-demo.css'
import './style/scss/scss-demo.scss'
import './style/scss/sass-demo.sass'
import './style/less/less-demo.less'
import './style/stylus/stylus-demo.styl'

const result = sum(1, 2, 3, 4, 5)
console.log(`sum result: ${result}`)

const len = getLength('Hello Webpack')
console.log(`len: ${len}`)
