const isRunningLocal = href => href.match(/localhost/g) !== null
const isRunningElsewhere = href => href.match(/onhernandes\.github\.io/) === null

const onLoad = () => {
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
      }
    })
  console.log('done')
}

document.addEventListener('DOMContentLoaded', onLoad)

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-79551653-2');
