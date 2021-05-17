document.getElementById('addItem').addEventListener('click', event => {
  event.preventDefault()

  const itemElem = document.createElement('li')
  itemElem.className = 'list-group-item d-flex justify-content-between align-items-start'
  itemElem.innerHTML = `
    <span>${document.getElementById('item').value}</span>
    <div>
      <button class="btn btn-secondary done">✓</button>
      <button class="btn btn-danger">X</button>
    </div>
  `
  document.getElementById('items').append(itemElem)

  document.getElementById('item').value = ''
})

document.addEventListener('click', event => {
  if (event.target.classList.contains('done')) {
    if (event.target.classList.contains('btn-secondary')) {
      event.target.classList.remove('btn-secondary')
      event.target.classList.add('btn-success')
      event.target.parentNode.parentNode.classList.add('list-group-item-success')
    } else {
      event.target.classList.add('btn-secondary')
      event.target.classList.remove('btn-success')
      event.target.parentNode.parentNode.classList.remove('list-group-item-success')
    }
  }
})
