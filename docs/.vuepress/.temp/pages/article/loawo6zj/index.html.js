import comp from "D:/project/my-blog/docs/.vuepress/.temp/pages/article/loawo6zj/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/loawo6zj/\",\"title\":\"自定义组件\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"自定义组件\",\"tags\":[\"预览\",\"组件\"],\"createTime\":\"2025/04/17 13:57:30\",\"permalink\":\"/article/loawo6zj/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":20},\"filePathRelative\":\"preview/custom-component.example.md\",\"categoryList\":[{\"id\":\"5ebeb6\",\"sort\":10000,\"name\":\"preview\"}]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
