document.getElementById('addItem').addEventListener('click', event => {
  event.preventDefault()

  const itemElem = document.createElement('li')
  itemElem.className = 'list-group-item'
  itemElem.textContent = document.getElementById('item').value
  document.getElementById('items').append(itemElem)

  document.getElementById('item').value = ''
})
