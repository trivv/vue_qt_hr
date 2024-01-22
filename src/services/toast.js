export async function successToast(myThis, message){
  myThis.$toast.open({
    message: message,
    type: 'success',
    position: 'top-right'
  })
}

export async function notFoundToast(myThis){
  myThis.$toast.open({
    message: 'Data not found!!!',
    type: 'warning',
    position: 'top-right'
  })
}
