//타입단언이 꼭 필요한 경우

document.querySelector('myButton')?.addEventListener('click', (e) => {
  e.currentTarget // Type is EventTarget
  const button = e.currentTarget as HTMLButtonElement
  button // Type is HTMLButtonElement
})

export default {}
