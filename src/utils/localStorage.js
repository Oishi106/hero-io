// get items from local strorage
export const getlist = () =>{
  const data= localStorage.getItem('applist')
  return data ? JSON.parse(data) : []
}
// save items to local storage
export const updateList = (app) =>{
  const currentlist=getlist()
  const isexist=currentlist.find(e=>e.id===app.id)
  if (isexist) {
    // if exists
    alert('App already in the list')
  }else{
    currentlist.push(app)
    localStorage.setItem('applist',JSON.stringify(currentlist))
  }
}
// delete items from local storage
export const deletelist = (id) =>{
  const currentlist=getlist()
  const newlist=currentlist.filter(e=>e.id!==id)
  localStorage.setItem('applist',JSON.stringify(newlist))
}