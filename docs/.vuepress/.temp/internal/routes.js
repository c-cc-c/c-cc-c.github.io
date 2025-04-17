export const redirects = JSON.parse("{\"/preview/custom-component.example.html\":\"/article/loawo6zj/\",\"/preview/markdown.html\":\"/article/dyjm0u6l/\",\"/notes/demo/bar.html\":\"/demo/iuw395cc/\",\"/notes/demo/foo.html\":\"/demo/t45w6kc1/\",\"/notes/demo/\":\"/demo/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/project/my-blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/loawo6zj/", { loader: () => import(/* webpackChunkName: "article_loawo6zj_index.html" */"D:/project/my-blog/docs/.vuepress/.temp/pages/article/loawo6zj/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/article/dyjm0u6l/", { loader: () => import(/* webpackChunkName: "article_dyjm0u6l_index.html" */"D:/project/my-blog/docs/.vuepress/.temp/pages/article/dyjm0u6l/index.html.js"), meta: {"title":"Markdown"} }],
  ["/demo/iuw395cc/", { loader: () => import(/* webpackChunkName: "demo_iuw395cc_index.html" */"D:/project/my-blog/docs/.vuepress/.temp/pages/demo/iuw395cc/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/t45w6kc1/", { loader: () => import(/* webpackChunkName: "demo_t45w6kc1_index.html" */"D:/project/my-blog/docs/.vuepress/.temp/pages/demo/t45w6kc1/index.html.js"), meta: {"title":"foo"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"D:/project/my-blog/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/project/my-blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"D:/project/my-blog/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"D:/project/my-blog/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"D:/project/my-blog/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"D:/project/my-blog/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
