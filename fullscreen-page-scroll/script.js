document.addEventListener('wheel', (event) => {

    offset = -1
    if (event.deltaY > 0) {
      offset = 1
    }
  
    var items = document.getElementsByClassName('item')
    
    for (let i = 0; i < items.length; i++) {
      
      if (items[i].checked) {

        newChecked = i + offset;
        newChecked = newChecked < 0 ? 0 : newChecked;
        newChecked = newChecked > items.length-1 ? items.length-1 : newChecked;
        
        items[i].checked = false
        items[newChecked].checked = true
        
        return;
      }
    }
    
})