const isRunningLocal = href => href.match(/localhost:1313/g) !== null
const isRunningElsewhere = href => href.match(/onhernandes\.github\.io/) === null

document.onload = () => {
  console.log('onload working')
  window.mylinks = []
  document
    .querySelectorAll('a')
    .forEach(link => {
      const href = link.getAttribute('href')
      const url = new URL(href)

      const isLocalhost = isRunningLocal(url.origin)
      const isElsewhere = isRunningElsewhere(url.origin)
      const hasTarget = link.hasAttribute('target')

      if (!isLocalhost && isElsewhere && !hasTarget) {
        link.setAttribute('target', '_blank')
        window.mylinks.push(link)
      }
    })
  console.log('done')
}
