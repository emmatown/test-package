let count = 0

function doTheThing() {
  if (count === 60) {
    return console.log('done!')
  }
  setTimeout(() => {
    console.log(`${count} seconds`)
    count++
    doTheThing()
  }, 1000)
}

doTheThing()
