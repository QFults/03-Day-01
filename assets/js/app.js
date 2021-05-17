// let items = [
//   {
//     text: 'Take out trash',
//     isDone: false
//   },
//   {
//     text: 'Do laundry',
//     isDone: true
//   }
// ]

// localStorage.setItem('items', JSON.stringify(items))

const items = JSON.parse(localStorage.getItem('items')) || []

const renderItems = item => {
  const itemElem = document.createElement('li')
  itemElem.className = 'list-group-item d-flex justify-content-between align-items-start'
  if (item.isDone) {
    itemElem.classList.add('list-group-item-success')
  }
  itemElem.innerHTML = `
    <span>${item.text}</span>
    <div>
      <button 
        class="btn ${item.isDone ? 'btn-success' : 'btn-secondary'} done"
        data-text="${item.text}">
        ✓
        </button>
      <button class="btn btn-danger remove">X</button>
    </div>
  `
  document.getElementById('items').append(itemElem)
}

items.forEach(item => renderItems(item))

document.getElementById('addItem').addEventListener('click', event => {
  event.preventDefault()

  const item = {
    text: document.getElementById('item').value,
    isDone: false
  }
  items.push(item)
  localStorage.setItem('items', JSON.stringify(items))

  renderItems(item)

  document.getElementById('item').value = ''
})

document.addEventListener('click', event => {
  if (event.target.classList.contains('done')) {
    items.forEach(item => {
      if (item.text === event.target.dataset.text) {
        item.isDone = !item.isDone
      }
    })
    localStorage.setItem('items', JSON.stringify(items))

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

document.addEventListener('click', event => {
  if (event.target.classList.contains('remove')) {
    event.target.parentNode.parentNode.remove()
  }
})
